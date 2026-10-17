"use client";

import { useId } from "react";

const CSS = `
.eevee-svg * { transform-box: view-box; }
.eevee-svg { transform-origin: center; }
.eevee-svg .eevee-tail { transform-origin: 58px 119px; }
.eevee-svg .eevee-eyes { transform-origin: 174px 72px; }
.eevee-svg .eevee-head { transform-origin: 165px 97px; }
.eevee-svg .eevee-shadow { transform-origin: 120px 183px; }

.eevee-svg[data-state="idle"] .eevee-body {
  transform-origin: 120px 153px;
  animation: eevee-breathe 2.5s ease-in-out infinite;
}
.eevee-svg[data-state="idle"] .eevee-eyes { animation: eevee-blink 4.6s infinite; }
.eevee-svg[data-state="idle"] .eevee-tail { animation: eevee-tail-wag 2s ease-in-out infinite; }

.eevee-svg[data-state="dragging"] .eevee-body {
  transform-origin: 120px 130px;
  animation: eevee-stretch 0.22s ease-in-out infinite alternate;
}
.eevee-svg[data-state="dragging"] .eevee-leg-front-near { animation: eevee-dangle 0.24s ease-in-out infinite alternate; }
.eevee-svg[data-state="dragging"] .eevee-leg-front-far { animation: eevee-dangle 0.24s ease-in-out infinite alternate-reverse; }
.eevee-svg[data-state="dragging"] .eevee-leg-back-near { animation: eevee-dangle 0.24s ease-in-out infinite alternate-reverse; }
.eevee-svg[data-state="dragging"] .eevee-leg-back-far { animation: eevee-dangle 0.24s ease-in-out infinite alternate; }
.eevee-svg[data-state="dragging"] .eevee-ear-near { transform: rotate(-18deg); }
.eevee-svg[data-state="dragging"] .eevee-ear-far { transform: rotate(-14deg); }
.eevee-svg[data-state="dragging"] .eevee-eyes { animation: none; transform: scale(1.2); }

.eevee-svg[data-state="airborne"] .eevee-leg-front-near,
.eevee-svg[data-state="airborne"] .eevee-leg-front-far { transform: rotate(-48deg); }
.eevee-svg[data-state="airborne"] .eevee-leg-back-near,
.eevee-svg[data-state="airborne"] .eevee-leg-back-far { transform: rotate(42deg); }
.eevee-svg[data-state="airborne"] .eevee-leg { transition: transform 140ms ease-out; }
.eevee-svg[data-state="airborne"] .eevee-ear-near { transform: rotate(-24deg); }
.eevee-svg[data-state="airborne"] .eevee-ear-far { transform: rotate(-20deg); }
.eevee-svg[data-state="airborne"] .eevee-tail { transform: rotate(-18deg); }
.eevee-svg[data-state="airborne"] .eevee-eyes { animation: none; transform: scale(1.12); }

.eevee-svg[data-state="landed"] .eevee-body {
  transform-origin: 120px 153px;
  animation: eevee-land 350ms ease-out 1 both;
}
.eevee-svg[data-state="landed"] .eevee-eyes { animation: none; transform: scaleY(0.08); }

.eevee-svg[data-state="walking"] .eevee-body {
  transform-origin: 120px 153px;
  animation: eevee-walk-bob 620ms ease-in-out infinite;
}
.eevee-svg[data-state="walking"] .eevee-head { animation: eevee-head-nod 620ms ease-in-out infinite; }
.eevee-svg[data-state="walking"] .eevee-leg-diagonal-a { animation: eevee-leg-swing 620ms ease-in-out infinite; }
.eevee-svg[data-state="walking"] .eevee-leg-diagonal-b { animation: eevee-leg-swing 620ms ease-in-out infinite -310ms; }
.eevee-svg[data-state="walking"] .eevee-tail { animation: eevee-tail-wag 620ms ease-in-out infinite; }
.eevee-svg[data-state="walking"] .eevee-shadow { animation: eevee-shadow-pulse 620ms ease-in-out infinite; }

@keyframes eevee-blink { 0%, 93%, 100% { transform: scaleY(1); } 96% { transform: scaleY(0.08); } }
@keyframes eevee-tail-wag { 0%, 100% { transform: rotate(-8deg); } 50% { transform: rotate(10deg); } }
@keyframes eevee-breathe { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.015, 1.035); } }
@keyframes eevee-stretch { from { transform: scale(1.08, 0.94) rotate(-2deg); } to { transform: scale(0.97, 1.04) rotate(2deg); } }
@keyframes eevee-dangle { from { transform: rotate(-16deg); } to { transform: rotate(16deg); } }
@keyframes eevee-land {
  0% { transform: scale(1.1, 0.78); }
  54% { transform: scale(0.96, 1.06); }
  78% { transform: scale(1.015, 0.99); }
  100% { transform: scale(1); }
}
@keyframes eevee-walk-bob { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-3px); } }
@keyframes eevee-head-nod { 0%, 100% { transform: rotate(-1.5deg); } 50% { transform: rotate(2deg); } }
@keyframes eevee-leg-swing { 0%, 100% { transform: rotate(-24deg); } 50% { transform: rotate(24deg); } }
@keyframes eevee-shadow-pulse { 0%, 100% { transform: scaleX(1); } 50% { transform: scaleX(0.92); } }

@media (prefers-reduced-motion: reduce) {
  .eevee-svg *, .eevee-svg { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; transition-duration: 0.01ms !important; }
}
`;

export default function Eevee({
  state = "idle",
  facing = 1,
  size = 96,
  className = "",
  style,
}) {
  const gradientId = useId().replaceAll(":", "");
  const fur = `eevee-fur-${gradientId}`;
  const furShade = `eevee-fur-shade-${gradientId}`;
  const cream = `eevee-cream-${gradientId}`;
  const ear = `eevee-ear-${gradientId}`;

  return (
    <svg
      className={`eevee-svg pointer-events-none block h-full w-full overflow-visible ${className}`}
      data-state={state}
      viewBox="0 0 240 190"
      width={size}
      height={size * 0.8}
      style={{
        width: size,
        height: size * 0.8,
        transform: `scaleX(${facing})`,
        ...style,
      }}
      role="img"
      aria-label={`Eevee, ${state}`}
    >
      <style>{CSS}</style>
      <defs>
        <radialGradient id={fur} cx="42%" cy="28%" r="78%">
          <stop offset="0%" stopColor="#e7b879" />
          <stop offset="56%" stopColor="#c58a4e" />
          <stop offset="100%" stopColor="#8c572f" />
        </radialGradient>
        <radialGradient id={furShade} cx="42%" cy="30%" r="78%">
          <stop offset="0%" stopColor="#bb8047" />
          <stop offset="100%" stopColor="#704326" />
        </radialGradient>
        <radialGradient id={cream} cx="40%" cy="25%" r="85%">
          <stop offset="0%" stopColor="#fff9e8" />
          <stop offset="100%" stopColor="#e9d4a6" />
        </radialGradient>
        <radialGradient id={ear} cx="50%" cy="70%" r="75%">
          <stop offset="0%" stopColor="#55352b" />
          <stop offset="100%" stopColor="#2f211e" />
        </radialGradient>
      </defs>

      <ellipse className="eevee-shadow" cx="120" cy="183" rx="61" ry="6" fill="#21170f" opacity="0.28" />

      <g className="eevee-body">
        <g className="eevee-tail">
          <path
            d="M80 119 C55 119 28 106 24 82 C19 59 34 44 49 51 C61 34 82 43 78 61 C93 77 99 100 91 118 Z"
            fill={`url(#${fur})`}
          />
          <path
            d="M24 82 C19 59 34 44 49 51 C61 34 82 43 78 61 C63 52 43 57 34 72 C30 77 27 80 24 82 Z"
            fill={`url(#${cream})`}
          />
          <path d="M39 59 C44 53 52 52 58 54" fill="none" stroke="#fff5dc" strokeWidth="2.5" strokeLinecap="round" opacity="0.7" />
        </g>

        <g
          className="eevee-leg eevee-leg-back-far eevee-leg-diagonal-a"
          style={{ transformOrigin: "91px 135px" }}
        >
          <path d="M82 124 Q79 143 84 166 Q85 172 92 172 L99 170 Q102 168 99 162 L102 133 Z" fill={`url(#${furShade})`} />
          <ellipse cx="92" cy="170" rx="12" ry="6" fill={`url(#${cream})`} />
          <path d="M84 169 Q92 166 100 170" fill="none" stroke="#d4bd91" strokeWidth="1.3" />
        </g>
        <g
          className="eevee-leg eevee-leg-front-far eevee-leg-diagonal-b"
          style={{ transformOrigin: "139px 133px" }}
        >
          <path d="M132 121 Q128 143 133 165 Q135 172 142 171 L149 168 Q151 166 148 161 L151 130 Z" fill={`url(#${furShade})`} />
          <ellipse cx="141" cy="169" rx="12" ry="6" fill={`url(#${cream})`} />
          <path d="M133 168 Q141 165 149 169" fill="none" stroke="#d4bd91" strokeWidth="1.3" />
        </g>

        <path
          d="M65 105 C68 85 90 77 119 80 C148 80 169 99 168 122 C167 145 148 159 115 158 C84 158 64 143 65 105 Z"
          fill={`url(#${fur})`}
        />
        <path d="M86 135 C101 143 129 145 150 134" fill="none" stroke="#f2d2a1" strokeWidth="3" opacity="0.45" strokeLinecap="round" />
        <ellipse cx="110" cy="142" rx="25" ry="9" fill="#fff2d6" opacity="0.12" />

        <g
          className="eevee-leg eevee-leg-back-near eevee-leg-diagonal-b"
          style={{ transformOrigin: "96px 137px" }}
        >
          <path d="M86 126 Q84 145 89 166 Q91 173 98 172 L106 169 Q108 167 105 161 L108 134 Z" fill={`url(#${fur})`} />
          <ellipse cx="98" cy="170" rx="12" ry="6" fill={`url(#${cream})`} />
          <path d="M90 169 Q98 166 106 170" fill="none" stroke="#d4bd91" strokeWidth="1.3" />
        </g>
        <g
          className="eevee-leg eevee-leg-front-near eevee-leg-diagonal-a"
          style={{ transformOrigin: "145px 135px" }}
        >
          <path d="M136 122 Q133 144 138 166 Q140 173 148 172 L156 169 Q158 166 154 160 L158 131 Z" fill={`url(#${fur})`} />
          <ellipse cx="147" cy="170" rx="13" ry="6.5" fill={`url(#${cream})`} />
          <path d="M138 169 Q147 166 156 170" fill="none" stroke="#d4bd91" strokeWidth="1.3" />
        </g>

        <path
          d="M116 83 C122 68 131 69 139 82 C146 64 155 68 160 85 C171 72 180 79 182 94 C194 83 201 91 197 108 C194 121 184 130 166 133 C146 129 128 119 116 103 Z"
          fill={`url(#${cream})`}
          stroke="#d7bf91"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path d="M139 91 L144 108 M157 88 L161 108 M176 92 L177 108" fill="none" stroke="#d9c293" strokeWidth="2" strokeLinecap="round" opacity="0.65" />

        <g className="eevee-head">
          <g
            className="eevee-ear eevee-ear-far"
            style={{ transformOrigin: "151px 57px" }}
          >
            <path d="M137 69 C131 47 132 22 144 7 C161 18 169 43 165 72 Z" fill={`url(#${furShade})`} />
            <path d="M143 59 C139 42 140 26 145 16 C156 28 161 44 160 62 Z" fill={`url(#${ear})`} />
            <path d="M141 14 Q145 8 149 10 Q145 17 143 22 Z" fill={`url(#${cream})`} />
          </g>

          <g
            className="eevee-ear eevee-ear-near"
            style={{ transformOrigin: "184px 56px" }}
          >
            <path d="M170 72 C170 48 180 20 198 6 C211 27 213 52 204 76 Z" fill={`url(#${fur})`} />
            <path d="M179 64 C181 44 188 26 198 16 C205 34 206 51 201 68 Z" fill={`url(#${ear})`} />
            <path d="M194 10 Q200 5 204 13 Q200 17 197 23 Z" fill={`url(#${cream})`} />
            <path d="M187 23 Q196 34 199 49" fill="none" stroke="#d9a66d" strokeWidth="2" opacity="0.5" />
          </g>

          <path d="M137 79 C137 52 153 39 176 39 C198 39 215 56 216 78 C216 99 199 114 175 114 C151 114 137 101 137 79 Z" fill={`url(#${fur})`} />
          <path d="M145 53 C152 43 163 39 175 40" fill="none" stroke="#f0cb98" strokeWidth="3" strokeLinecap="round" opacity="0.45" />
          <ellipse cx="205" cy="88" rx="17" ry="12" fill={`url(#${cream})`} />
          <ellipse cx="191" cy="97" rx="7" ry="4.5" fill="#ed8a78" opacity="0.42" />

          <g className="eevee-eyes">
            <ellipse cx="166" cy="70" rx="6.2" ry="8.2" fill="#302019" />
            <ellipse cx="187" cy="69" rx="6.4" ry="8.6" fill="#302019" />
            <ellipse cx="168" cy="67" rx="2.5" ry="3" fill="#fff" />
            <ellipse cx="189" cy="66" rx="2.7" ry="3.2" fill="#fff" />
            <circle cx="163.5" cy="73" r="1.2" fill="#fff" opacity="0.8" />
            <circle cx="184.5" cy="73" r="1.2" fill="#fff" opacity="0.8" />
          </g>

          <path d="M207 79 Q213 75 218 80 Q217 85 211 86 Q207 84 207 79 Z" fill="#38231c" />
          <path d="M204 94 Q209 100 215 94" fill="none" stroke="#604132" strokeWidth="2" strokeLinecap="round" />
          <path d="M177 52 Q183 49 188 52" fill="none" stroke="#8b5b38" strokeWidth="1.6" strokeLinecap="round" opacity="0.5" />
        </g>
      </g>
    </svg>
  );
}
