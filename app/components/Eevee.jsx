"use client";

import { useId } from "react";

/**
 * Cartoon Eevee drawn in SVG. Faces right by default.
 * Animations are pure CSS, driven by the `state` prop.
 */
export default function Eevee({
  state = "idle",
  facing = 1,
  size = 96,
  className,
  style,
}) {
  const uid = useId().replace(/[^a-zA-Z0-9]/g, "");
  const fur = `fur${uid}`;
  const furDark = `furd${uid}`;
  const cream = `cream${uid}`;

  return (
    <div
      className={`pointer-events-none transition-transform duration-150 ease-out ${className ?? ""}`}
      style={{
        width: size,
        height: size * 0.8,
        transform: `scaleX(${facing})`,
        ...style,
      }}
    >
      <style>{CSS}</style>
      <svg
        className="ev block h-full w-full overflow-visible"
        data-state={state}
        viewBox="0 0 200 160"
        aria-label="Eevee"
        role="img"
      >
        <defs>
          <radialGradient id={fur} cx="45%" cy="30%" r="75%">
            <stop offset="0%" stopColor="#d9a066" />
            <stop offset="60%" stopColor="#bf8450" />
            <stop offset="100%" stopColor="#92602f" />
          </radialGradient>
          <radialGradient id={furDark} cx="45%" cy="30%" r="75%">
            <stop offset="0%" stopColor="#a8703d" />
            <stop offset="100%" stopColor="#7a4d25" />
          </radialGradient>
          <radialGradient id={cream} cx="40%" cy="30%" r="80%">
            <stop offset="0%" stopColor="#fff6dc" />
            <stop offset="100%" stopColor="#ecd5a2" />
          </radialGradient>
        </defs>

        {/* ground shadow */}
        <ellipse className="ev-shadow" cx="100" cy="146" rx="58" ry="7" fill="#000" opacity="0.28" />

        <g className="ev-body-bob">
          {/* tail */}
          <g className="ev-tail">
            <path
              d="M70 88 C40 92 10 78 10 48 C10 28 30 22 40 34 C46 24 62 30 58 46 C66 56 72 70 70 88 Z"
              fill={`url(#${fur})`}
            />
            <path
              d="M10 48 C10 28 30 22 40 34 C46 24 62 30 58 46 C44 40 24 40 10 48 Z"
              fill={`url(#${cream})`}
            />
          </g>

          {/* far legs (darker) */}
          <g className="ev-leg ev-leg-b" style={{ transformOrigin: "128px 104px" }}>
            <rect x="120" y="100" width="14" height="38" rx="7" fill={`url(#${furDark})`} />
            <ellipse cx="128" cy="139" rx="10" ry="6" fill={`url(#${cream})`} />
          </g>
          <g className="ev-leg ev-leg-a ev-back" style={{ transformOrigin: "78px 104px" }}>
            <rect x="70" y="100" width="14" height="38" rx="7" fill={`url(#${furDark})`} />
            <ellipse cx="78" cy="139" rx="10" ry="6" fill={`url(#${cream})`} />
          </g>

          {/* torso */}
          <ellipse cx="100" cy="90" rx="48" ry="31" fill={`url(#${fur})`} />
          {/* belly highlight */}
          <ellipse cx="100" cy="108" rx="30" ry="9" fill="#fff" opacity="0.12" />

          {/* near legs */}
          <g className="ev-leg ev-leg-a ev-front" style={{ transformOrigin: "122px 104px" }}>
            <rect x="113" y="98" width="16" height="40" rx="8" fill={`url(#${fur})`} />
            <ellipse cx="121" cy="139" rx="11" ry="6.5" fill={`url(#${cream})`} />
          </g>
          <g
  className="eevee-leg eevee-leg-back-far eevee-leg-diagonal-a"
  style={{ transformOrigin: "91px 135px" }}
>
            <rect x="75" y="98" width="16" height="40" rx="8" fill={`url(#${fur})`} />
            <ellipse cx="83" cy="139" rx="11" ry="6.5" fill={`url(#${cream})`} />
          </g>

          {/* neck ruff */}
          <path
            d="M118 62 L124 80 L130 66 L136 86 L144 70 L152 90 L160 72 L168 84 L168 60 Z"
            fill={`url(#${cream})`}
          />

          {/* head group */}
          <g className="ev-head">
            {/* far ear */}
            <g className="ev-ear ev-ear-far" style={{ transformOrigin: "136px 42px" }}>
              <path d="M126 44 C124 24 128 10 134 2 C146 12 152 28 152 42 Z" fill={`url(#${furDark})`} />
              <path d="M132 40 C131 26 133 16 135 11 C142 18 145 28 146 38 Z" fill="#6d3f22" />
            </g>

            <ellipse cx="152" cy="62" rx="32" ry="27" fill={`url(#${fur})`} />

            {/* near ear */}
            <g className="ev-ear ev-ear-near" style={{ transformOrigin: "166px 42px" }}>
              <path d="M158 40 C162 24 172 10 184 2 C192 18 192 34 186 50 Z" fill={`url(#${fur})`} />
              <path d="M165 40 C168 28 174 18 181 12 C185 24 185 34 182 44 Z" fill="#6d3f22" />
              <path d="M182 4 C188 14 190 24 189 34 C186 22 183 12 178 7 Z" fill={`url(#${cream})`} opacity="0.9" />
            </g>

            {/* muzzle */}
            <ellipse cx="172" cy="72" rx="14" ry="10" fill={`url(#${cream})`} />
            {/* cheek blush */}
            <ellipse cx="146" cy="74" rx="6" ry="4" fill="#f08a7a" opacity="0.45" />

            {/* eyes */}
            <g className="ev-eyes">
              <ellipse cx="146" cy="58" rx="6" ry="7.5" fill="#3a2418" />
              <ellipse cx="166" cy="58" rx="6.5" ry="8" fill="#3a2418" />
              <circle cx="148" cy="55" r="2.4" fill="#fff" />
              <circle cx="168.5" cy="55" r="2.6" fill="#fff" />
              <circle cx="144.5" cy="61" r="1.1" fill="#fff" opacity="0.8" />
              <circle cx="164.5" cy="61" r="1.2" fill="#fff" opacity="0.8" />
            </g>

            {/* nose + mouth */}
            <ellipse cx="182" cy="67" rx="3.6" ry="2.6" fill="#2b1810" />
            <path
              className="ev-mouth"
              d="M176 74 Q180 79 184 74"
              fill="none"
              stroke="#2b1810"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

const CSS = `
.ev * { transform-box: view-box; }
.ev-eyes { transform-origin: 156px 58px; animation: ev-blink 4.5s infinite; }
.ev-tail { transform-origin: 68px 84px; animation: ev-wag 1.8s ease-in-out infinite; }
.ev-ear-near { animation: ev-flick 5s ease-in-out infinite; }
.ev-body-bob { transform-origin: 100px 140px; }
.ev-head { transform-origin: 140px 80px; }

/* ---------- idle: gentle breathing ---------- */
.ev[data-state="idle"] .ev-body-bob { animation: ev-breathe 2.4s ease-in-out infinite; }

/* ---------- walking ---------- */
.ev[data-state="walking"] .ev-body-bob { animation: ev-walk-bob 0.7s ease-in-out infinite; }
.ev[data-state="walking"] .ev-leg-a { animation: ev-swing 0.7s ease-in-out infinite; }
.ev[data-state="walking"] .ev-leg-b { animation: ev-swing 0.7s ease-in-out infinite; animation-delay: -0.35s; }
.ev[data-state="walking"] .ev-tail { animation-duration: 0.7s; }
.ev[data-state="walking"] .ev-head { animation: ev-head-nod 0.7s ease-in-out infinite; }
.ev[data-state="walking"] .ev-shadow { animation: ev-shadow-walk 0.7s ease-in-out infinite; transform-origin: 100px 146px; }

/* ---------- dragging: stretched, legs dangling, wide eyes ---------- */
.ev[data-state="dragging"] .ev-body-bob { animation: ev-struggle 0.18s ease-in-out infinite; }
.ev[data-state="dragging"] .ev-leg-a { animation: ev-dangle 0.22s ease-in-out infinite alternate; }
.ev[data-state="dragging"] .ev-leg-b { animation: ev-dangle 0.22s ease-in-out infinite alternate-reverse; }
.ev[data-state="dragging"] .ev-ear { transform: rotate(-12deg); }
.ev[data-state="dragging"] .ev-eyes { animation: none; transform: scale(1.12); }

/* ---------- airborne: tucked legs, ears back, tail up ---------- */
.ev[data-state="airborne"] .ev-front { transform: rotate(-55deg); }
.ev[data-state="airborne"] .ev-back { transform: rotate(50deg); }
.ev[data-state="airborne"] .ev-leg { transition: transform 0.12s ease-out; }
.ev[data-state="airborne"] .ev-ear { transform: rotate(-22deg); }
.ev[data-state="airborne"] .ev-tail { animation: none; transform: rotate(14deg); }
.ev[data-state="airborne"] .ev-eyes { animation: none; transform: scale(1.1); }
.ev[data-state="airborne"] .ev-mouth { d: path("M176 73 Q180 82 184 73"); }

/* ---------- landed: squash and recover ---------- */
.ev[data-state="landed"] .ev-body-bob { animation: ev-squash 0.35s ease-out 1 both; }
.ev[data-state="landed"] .ev-eyes { animation: none; transform: scaleY(0.2); }

@keyframes ev-blink { 0%,94%,100% { transform: scaleY(1); } 97% { transform: scaleY(0.1); } }
@keyframes ev-wag { 0%,100% { transform: rotate(-6deg); } 50% { transform: rotate(8deg); } }
@keyframes ev-flick { 0%,88%,100% { transform: rotate(0); } 92% { transform: rotate(-9deg); } 96% { transform: rotate(3deg); } }
@keyframes ev-breathe { 0%,100% { transform: scale(1,1); } 50% { transform: scale(1.015,1.03); } }
@keyframes ev-walk-bob { 0%,100% { transform: translateY(0); } 25%,75% { transform: translateY(-3px); } 50% { transform: translateY(0); } }
@keyframes ev-swing { 0%,100% { transform: rotate(-26deg); } 50% { transform: rotate(26deg); } }
@keyframes ev-head-nod { 0%,100% { transform: rotate(-1.5deg); } 50% { transform: rotate(2deg); } }
@keyframes ev-shadow-walk { 0%,100% { transform: scaleX(1); } 50% { transform: scaleX(0.94); } }
@keyframes ev-struggle { 0%,100% { transform: rotate(-2deg); } 50% { transform: rotate(2deg); } }
@keyframes ev-dangle { from { transform: rotate(-14deg); } to { transform: rotate(14deg); } }
@keyframes ev-squash {
  0% { transform: scale(1.12, 0.82); }
  55% { transform: scale(0.96, 1.06); }
  100% { transform: scale(1, 1); }
}

@media (prefers-reduced-motion: reduce) {
  .ev *, .ev { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; }
}
`;