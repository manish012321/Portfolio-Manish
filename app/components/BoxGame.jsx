"use client";

// Put this at app/eevee-demo/page.jsx (and Eevee.jsx at components/Eevee.jsx)
import { useEffect, useState } from "react";
import Eevee from "../../components/Eevee";

const STATES = ["idle", "dragging", "airborne", "landed", "walking"];

export default function EeveeDemo() {
  const [state, setState] = useState("walking");
  const [x, setX] = useState(40);
  const [dir, setDir] = useState(1);

  // walk back and forth only while in the walking state
  useEffect(() => {
    if (state !== "walking") return;
    const id = setInterval(() => {
      setX((px) => {
        const next = px + dir * 2;
        if (next > 420) setDir(-1);
        if (next < 0) setDir(1);
        return next;
      });
    }, 16);
    return () => clearInterval(id);
  }, [state, dir]);

  return (
    <main className="min-h-screen bg-zinc-900 p-6 text-zinc-300">
      <div className="mb-6 flex flex-wrap gap-2">
        {STATES.map((s) => (
          <button
            key={s}
            onClick={() => setState(s)}
            className={`cursor-pointer rounded-lg border border-zinc-600 px-3.5 py-2 text-white transition ${
              s === state ? "bg-blue-600" : "bg-zinc-800 hover:bg-zinc-700"
            }`}
          >
            {s}
          </button>
        ))}
      </div>

      <div className="relative h-56 max-w-xl border-b-2 border-zinc-700">
        <div className="absolute bottom-1.5" style={{ left: x }}>
          <Eevee state={state} facing={dir} size={140} />
        </div>
      </div>
    </main>
  );
}