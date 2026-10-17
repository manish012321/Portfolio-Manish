"use client";

import { createRoot } from "react-dom/client";
import { useEffect, useRef, useState } from "react";
import Eevee from "./Eevee";

const GRAVITY = 0.4;
const BOUNCE = 0.45;
const FRICTION = 0.88;
// Walking speed is measured in pixels per animation frame.
const WALK_SPEED = 1.1;
// Require several consecutive quiet floor frames before entering the landed state.
const REST_FRAMES = 6;
// Keep the one-shot landing squash visible before beginning the walk.
const LAND_MS = 350;

function setCreatureState(creature, state) {
  if (creature.state === state) return;
  creature.state = state;
  creature.root.render(<Eevee state={state} size={creature.w} />);
}

function updateCreatureTransform(creature) {
  creature.inner.style.transform = `rotate(${creature.facing * creature.tilt}deg) scaleX(${creature.facing})`;
}

function positionCreature(creature) {
  creature.element.style.left = `${Math.round(creature.x)}px`;
  creature.element.style.top = `${Math.round(creature.y)}px`;
  updateCreatureTransform(creature);
}

function startDrag(creature, x, y, draggingRef, dragStartRef) {
  draggingRef.current = creature;
  dragStartRef.current = { x, y };
  creature.restFrames = 0;
  creature.tilt = 0;
  creature.element.classList.replace("cursor-grab", "cursor-grabbing");
  creature.element.classList.add("ring-2", "ring-blue-400/60");
  setCreatureState(creature, "dragging");
  positionCreature(creature);
}

export default function EeveeGame() {
  const containerRef = useRef(null);
  const targetRef = useRef(null);
  const aimRef = useRef(null);
  const creaturesRef = useRef([]);
  const draggingRef = useRef(null);
  const dragStartRef = useRef({ x: 0, y: 0 });
  const popupElementsRef = useRef(new Set());
  const popupTimersRef = useRef(new Set());
  const animationRef = useRef(null);

  const [score, setScore] = useState(0);
  const [thrown, setThrown] = useState(0);
  const [inTarget, setInTarget] = useState(0);
  const [showMessage, setShowMessage] = useState(true);

  function getTargetRect() {
    const container = containerRef.current;
    const target = targetRef.current;
    if (!container || !target) return { x: 0, y: 0, w: 0, h: 0 };
    const containerRect = container.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();
    return {
      x: targetRect.left - containerRect.left,
      y: targetRect.top - containerRect.top,
      w: targetRect.width,
      h: targetRect.height,
    };
  }

  function spawnCreature(x, y) {
    setShowMessage(false);
    const w = 44 + Math.floor(Math.random() * 20);
    const h = w * 0.8;
    const element = document.createElement("div");
    element.className = "absolute left-0 top-0 z-10 cursor-grab select-none";
    element.style.width = `${w}px`;
    element.style.height = `${h}px`;
    element.style.left = `${x - w / 2}px`;
    element.style.top = `${y - h / 2}px`;

    const inner = document.createElement("div");
    inner.className = "absolute inset-0 origin-center";
    element.appendChild(inner);
    containerRef.current.appendChild(element);

    const root = createRoot(inner);
    const creature = {
      element,
      inner,
      root,
      x: x - w / 2,
      y: y - h / 2,
      vx: 0,
      vy: 0,
      w,
      h,
      facing: 1,
      tilt: 0,
      state: "idle",
      restFrames: 0,
      landedAt: 0,
      scored: false,
      nextRandomTurn: 0,
    };
    root.render(<Eevee state="idle" size={w} />);
    creaturesRef.current.push(creature);
    return creature;
  }

  function drawAim(startX, startY, currentX, currentY) {
    const dx = startX - currentX;
    const dy = startY - currentY;
    const points = [];
    for (let step = 0; step <= 10; step += 1) {
      const t = step / 10;
      points.push(`${currentX + dx * t * 0.6},${currentY + dy * t * 0.6 + 80 * t * t}`);
    }
    aimRef.current.innerHTML = `<polyline points="${points.join(" ")}" fill="none" stroke="#378ADD" stroke-width="1.5" stroke-dasharray="4 4" opacity="0.6" />`;
  }

  function clearAim() {
    if (aimRef.current) aimRef.current.innerHTML = "";
  }

  function clearPopups() {
    popupTimersRef.current.forEach((timer) => window.clearTimeout(timer));
    popupTimersRef.current.clear();
    popupElementsRef.current.forEach((element) => element.remove());
    popupElementsRef.current.clear();
  }

  function showPopup(x, y) {
    const popup = document.createElement("div");
    popup.className = "absolute z-20 pointer-events-none translate-y-0 text-sm font-semibold text-green-700 opacity-100 transition-all duration-700 ease-out";
    popup.textContent = "+10";
    popup.style.left = `${x}px`;
    popup.style.top = `${y}px`;
    containerRef.current.appendChild(popup);
    popupElementsRef.current.add(popup);

    let fadeTimer;
    fadeTimer = window.setTimeout(() => {
      popup.className = "absolute z-20 pointer-events-none -translate-y-10 text-sm font-semibold text-green-700 opacity-0 transition-all duration-700 ease-out";
      popupTimersRef.current.delete(fadeTimer);
    }, 50);
    let removeTimer;
    removeTimer = window.setTimeout(() => {
      popup.remove();
      popupElementsRef.current.delete(popup);
      popupTimersRef.current.delete(removeTimer);
    }, 750);
    popupTimersRef.current.add(fadeTimer);
    popupTimersRef.current.add(removeTimer);
  }

  function destroyCreatures() {
    const creatures = creaturesRef.current;
    creaturesRef.current = [];
    creatures.forEach((creature) => {
      window.setTimeout(() => {
        creature.root.unmount();
        creature.element.remove();
      }, 0);
    });
  }

  useEffect(() => {
    const container = containerRef.current;
    let active = true;

    function physics() {
      if (!container || !active) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      const target = getTargetRect();
      const now = performance.now();

      creaturesRef.current.forEach((creature) => {
        if (draggingRef.current === creature) return;

        if (creature.state === "walking") {
          if (creature.nextRandomTurn === 0) creature.nextRandomTurn = now + 2500 + Math.random() * 6500;
          if (now >= creature.nextRandomTurn && Math.random() < 0.03) {
            creature.facing *= -1;
            creature.nextRandomTurn = now + 2500 + Math.random() * 6500;
          }

          creature.x += creature.facing * WALK_SPEED;
          if (creature.x <= 0) {
            creature.x = 0;
            creature.facing = 1;
          } else if (creature.x + creature.w >= width) {
            creature.x = Math.max(0, width - creature.w);
            creature.facing = -1;
          }
          creature.y = Math.max(0, height - creature.h);
          creature.tilt = 0;
          positionCreature(creature);
          return;
        }

        if (creature.state === "landed") {
          if (now - creature.landedAt >= LAND_MS) {
            creature.nextRandomTurn = 0;
            setCreatureState(creature, "walking");
          }
          creature.y = Math.max(0, height - creature.h);
          positionCreature(creature);
          return;
        }

        if (creature.state !== "airborne") return;

        creature.vy += GRAVITY;
        creature.x += creature.vx;
        creature.y += creature.vy;

        if (creature.x < 0) {
          creature.x = 0;
          creature.vx *= -BOUNCE;
        } else if (creature.x + creature.w > width) {
          creature.x = Math.max(0, width - creature.w);
          creature.vx *= -BOUNCE;
        }

        const onFloor = creature.y + creature.h >= height;
        if (onFloor) {
          creature.y = Math.max(0, height - creature.h);
          creature.vy *= -BOUNCE;
          creature.vx *= FRICTION;
          if (Math.abs(creature.vy) < 1) creature.vy = 0;
          if (Math.abs(creature.vx) < 0.05) creature.vx = 0;
        }

        if (Math.abs(creature.vx) > 0.1) creature.facing = creature.vx > 0 ? 1 : -1;
        creature.tilt = (creature.tilt + creature.vx * 2.4) % 360;
        positionCreature(creature);

        if (onFloor && Math.abs(creature.vx) < 0.4 && Math.abs(creature.vy) < 1) {
          creature.restFrames += 1;
          if (creature.restFrames >= REST_FRAMES) {
            creature.vx = 0;
            creature.vy = 0;
            creature.tilt = 0;
            creature.landedAt = now;
            setCreatureState(creature, "landed");
          }
        } else {
          creature.restFrames = 0;
        }

        if (!creature.scored) {
          const centerX = creature.x + creature.w / 2;
          const centerY = creature.y + creature.h / 2;
          if (
            centerX > target.x &&
            centerX < target.x + target.w &&
            centerY > target.y &&
            centerY < target.y + target.h
          ) {
            creature.scored = true;
            creature.inner.classList.add("drop-shadow-[0_0_8px_#3B6D11]");
            showPopup(creature.x + creature.w / 2, creature.y);
            setScore((current) => current + 10);
            setInTarget((current) => current + 1);
          }
        }
      });

      animationRef.current = requestAnimationFrame(physics);
    }

    function onMouseDown(event) {
      const rect = container.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const hit = creaturesRef.current.find(
        (creature) =>
          x >= creature.x &&
          x <= creature.x + creature.w &&
          y >= creature.y &&
          y <= creature.y + creature.h,
      );

      if (hit) {
        startDrag(hit, x, y, draggingRef, dragStartRef);
        return;
      }

      const target = getTargetRect();
      if (x >= target.x && x <= target.x + target.w && y >= target.y && y <= target.y + target.h) return;
      startDrag(spawnCreature(x, y), x, y, draggingRef, dragStartRef);
    }

    function onMouseMove(event) {
      const creature = draggingRef.current;
      if (!creature) return;
      const rect = container.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      creature.x = x - creature.w / 2;
      creature.y = y - creature.h / 2;
      positionCreature(creature);
      drawAim(dragStartRef.current.x, dragStartRef.current.y, x, y);
    }

    function onMouseUp(event) {
      const creature = draggingRef.current;
      if (!creature) return;
      const rect = container.getBoundingClientRect();
      const releaseX = event.clientX - rect.left;
      const releaseY = event.clientY - rect.top;
      creature.vx = (dragStartRef.current.x - releaseX) * 0.18;
      creature.vy = (dragStartRef.current.y - releaseY) * 0.18;
      if (Math.abs(creature.vx) > 0.1) creature.facing = creature.vx > 0 ? 1 : -1;
      creature.element.classList.replace("cursor-grabbing", "cursor-grab");
      creature.element.classList.remove("ring-2", "ring-blue-400/60");
      draggingRef.current = null;
      setCreatureState(creature, "airborne");
      positionCreature(creature);
      clearAim();
      setThrown((current) => current + 1);
    }

    container.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    animationRef.current = requestAnimationFrame(physics);

    return () => {
      active = false;
      container.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      cancelAnimationFrame(animationRef.current);
      draggingRef.current = null;
      clearPopups();
      destroyCreatures();
    };
  }, []);

  function reset() {
    draggingRef.current = null;
    clearAim();
    clearPopups();
    destroyCreatures();
    setScore(0);
    setThrown(0);
    setInTarget(0);
    setShowMessage(true);
  }

  return (
    <div className="w-full overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-700">
      <div className="flex items-center justify-between border-b border-zinc-200 bg-white px-4 py-2 dark:border-zinc-700 dark:bg-zinc-900">
        <div className="flex gap-6">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Score <span className="ml-1 text-base font-medium text-gray-900 dark:text-white">{score}</span>
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Thrown <span className="ml-1 text-base font-medium text-gray-900 dark:text-white">{thrown}</span>
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            In Target <span className="ml-1 text-base font-medium text-gray-900 dark:text-white">{inTarget}</span>
          </p>
        </div>
        <button
          onClick={reset}
          className="cursor-pointer rounded-lg border border-zinc-300 px-3 py-1.5 text-xs transition hover:bg-zinc-100 dark:border-zinc-600 dark:hover:bg-zinc-800"
        >
          Reset
        </button>
      </div>

      <div
        ref={containerRef}
        className="relative h-[480px] w-full cursor-crosshair overflow-hidden bg-gradient-to-b from-sky-300 via-sky-200 to-emerald-100 dark:from-indigo-950 dark:via-indigo-900 dark:to-slate-800"
      >
        <div className="pointer-events-none absolute right-10 top-8 h-16 w-16 rounded-full bg-amber-200 shadow-[0_0_45px_18px_rgba(253,224,71,0.45)] dark:hidden" />
        <div className="pointer-events-none absolute right-10 top-8 hidden h-14 w-14 rounded-full bg-slate-100 shadow-[0_0_40px_14px_rgba(226,232,240,0.3)] dark:block" />
        <div className="pointer-events-none absolute left-[12%] top-16 h-9 w-28 rounded-full bg-white/45 blur-md" />
        <div className="pointer-events-none absolute left-[58%] top-28 h-8 w-24 rounded-full bg-white/40 blur-md" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-7 bg-gradient-to-t from-emerald-700/70 to-emerald-500/50 dark:from-emerald-950/90 dark:to-emerald-800/75" />
        {showMessage && (
          <p className="pointer-events-none absolute inset-0 flex items-center justify-center px-4 text-center text-sm text-gray-400">
            Click to spawn an Eevee · Drag back and release to throw
          </p>
        )}
        <div
          ref={targetRef}
          className="pointer-events-none absolute bottom-9 left-1/2 flex h-24 w-24 -translate-x-1/2 items-center justify-center rounded-xl border-2 border-dashed border-white/90 bg-white/45 text-xs text-sky-800 shadow-sm backdrop-blur-sm dark:border-white/70 dark:bg-white/15 dark:text-white"
        >
          Drop here
        </div>
        <svg ref={aimRef} className="pointer-events-none absolute inset-0 h-full w-full" />
      </div>
    </div>
  );
}
