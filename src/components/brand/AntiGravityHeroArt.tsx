'use client';

import React from 'react';
import KoinaLogo from '@/components/brand/KoinaLogo';

interface AntiGravityHeroArtProps {
  className?: string;
}

export default function AntiGravityHeroArt({ className = '' }: AntiGravityHeroArtProps) {
  return (
    <div className={`relative w-full max-w-[460px] lg:max-w-[480px] mx-auto select-none ${className}`}>
      {/* 
        Aesthetic Depth of Field: Soft Ambient Aura Wash (Image 3)
      */}
      <div className="absolute inset-0 rounded-[36px] bg-gradient-to-tr from-sky-50/70 via-blue-50/40 to-indigo-50/30 blur-2xl -z-10 pointer-events-none transform -rotate-1" />

      {/* Main Vector Canvas Card with Clean Ambient Border */}
      <div className="rounded-[28px] sm:rounded-[32px] bg-white border border-slate-200/90 shadow-ambient p-4 sm:p-5 md:p-5 relative flex flex-col items-center">
        {/* Soft Watercolor Backdrop Ellipse */}
        <div className="absolute -top-10 -right-10 w-64 h-64 rounded-full bg-sky-100/40 blur-3xl pointer-events-none -z-0" />
        <div className="absolute -bottom-10 -left-10 w-56 h-56 rounded-full bg-blue-100/30 blur-3xl pointer-events-none -z-0" />

        {/* Top Card Header matching Image 3 */}
        <div className="w-full flex items-center justify-between pb-3 border-b border-slate-100/90 relative z-10">
          <div className="flex items-center gap-2">
            <KoinaLogo variant="light" size="sm" />
          </div>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-800 text-[11px] font-bold shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-navy" />
            Statewide QLD
          </span>
        </div>

        <svg
          viewBox="0 85 680 395"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto drop-shadow-xs overflow-visible relative z-10"
        >
          <defs>
            {/* Soft Graphite / Fineliner Gradient for Continuous Path */}
            <linearGradient id="traceGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#113C5E" />
              <stop offset="50%" stopColor="#2563EB" />
              <stop offset="100%" stopColor="#38BDF8" />
            </linearGradient>

            {/* Depth of Field Gradients */}
            <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#60A5FA" />
              <stop offset="100%" stopColor="#38BDF8" />
            </linearGradient>

            {/* Soft Radial Shade for Atmosphere */}
            <radialGradient id="celestialGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#E0F2FE" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#E0F2FE" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* ========================================================= */}
          {/* LAYER 0: DEPTH OF FIELD - BACKGROUND WIREFRAME & AURA      */}
          {/* Opacity: 0.20 - 0.35 | Soft Sky Lines                     */}
          {/* ========================================================= */}
          <g className="text-sky-400 opacity-25">
            {/* Background Floating Aura Rings */}
            <ellipse cx="440" cy="270" rx="140" ry="110" stroke="#93C5FD" strokeWidth="1.8" strokeDasharray="6 6" className="animate-celestial-orbit" />
            <ellipse cx="250" cy="220" rx="100" ry="70" stroke="#93C5FD" strokeWidth="1.6" strokeDasharray="4 6" className="animate-low-gravity" />

            {/* Floating Care Companion (Astronaut / Guardian in zero gravity) */}
            <g className="animate-low-gravity-alt">
              <path
                d="M 140 310 C 130 290, 160 250, 180 260 C 200 270, 215 250, 220 275 C 225 300, 200 320, 180 325 C 160 330, 145 320, 140 310 Z"
                stroke="#60A5FA"
                strokeWidth="2"
                strokeLinecap="round"
              />
              {/* Flying trailing legs & arms */}
              <path d="M 145 320 C 130 335, 120 350, 115 365" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round" />
              <path d="M 155 325 C 145 345, 140 360, 138 375" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round" />
              <circle cx="210" cy="265" r="14" stroke="#60A5FA" strokeWidth="2" />
            </g>
          </g>

          {/* ========================================================= */}
          {/* LAYER 1: THE BASE - CONTINUOUS INFINITE TRACE PATH        */}
          {/* Loops continuously tracing the figures & connecting loops */}
          {/* ========================================================= */}
          <g className="animate-infinite-trace" style={{ opacity: 0.65 }}>
            <path
              d="
                M 340 370 
                C 330 350, 310 320, 310 270 
                C 310 210, 260 200, 260 240 
                C 260 280, 290 320, 310 350
                C 320 365, 340 375, 355 375
                C 370 375, 390 365, 400 350
                C 420 320, 450 280, 450 240
                C 450 200, 400 210, 400 270
                C 400 320, 380 350, 370 370
                C 355 385, 345 385, 340 370
                Z
              "
              stroke="url(#traceGrad)"
              strokeWidth="2.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </g>

          {/* ========================================================= */}
          {/* LAYER 2: MIDGROUND CELESTIAL & SYMBOLIC DRIFT PARTICLES   */}
          {/* Opacity: 0.60 - 0.85 | Sky Blue (#38BDF8 / #60A5FA)       */}
          {/* ========================================================= */}
          {/* 1. Floating Celestial Sun (Top Right) */}
          <g className="animate-low-gravity" style={{ transformOrigin: '530px 140px' }}>
            <circle cx="530" cy="140" r="30" stroke="#38BDF8" strokeWidth="3" fill="none" />
            <g className="animate-celestial-orbit" style={{ transformOrigin: '530px 140px' }}>
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                <line
                  key={i}
                  x1={530 + 36 * Math.cos((angle * Math.PI) / 180)}
                  y1={140 + 36 * Math.sin((angle * Math.PI) / 180)}
                  x2={530 + 46 * Math.cos((angle * Math.PI) / 180)}
                  y2={140 + 46 * Math.sin((angle * Math.PI) / 180)}
                  stroke="#38BDF8"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                />
              ))}
            </g>
          </g>

          {/* 2. Floating 4-Point Sparkle Stars */}
          {/* Left Upper Star */}
          <path
            d="M 160 210 Q 160 225 145 225 Q 160 225 160 240 Q 160 225 175 225 Q 160 225 160 210 Z"
            stroke="#60A5FA"
            strokeWidth="2.4"
            fill="#EFF6FF"
            className="animate-low-gravity-alt"
          />
          {/* Right Lower Star */}
          <path
            d="M 535 340 Q 535 350 525 350 Q 535 350 535 360 Q 535 350 545 350 Q 535 350 535 340 Z"
            stroke="#60A5FA"
            strokeWidth="2.2"
            fill="#EFF6FF"
            className="animate-low-gravity"
          />

          {/* 3. Floating Healthcare Plus Cross (Right Mid) */}
          <g className="animate-low-gravity-alt">
            <path
              d="M 570 270 H 580 V 260 H 590 V 270 H 600 V 280 H 590 V 290 H 580 V 280 H 570 Z"
              stroke="#60A5FA"
              strokeWidth="2.4"
              strokeLinejoin="round"
              fill="#EFF6FF"
            />
          </g>

          {/* 4. Floating Band-Aid Bandage (Left Upper) */}
          <g className="animate-low-gravity">
            <rect
              x="170"
              y="120"
              width="44"
              height="20"
              rx="10"
              transform="rotate(35 170 120)"
              stroke="#60A5FA"
              strokeWidth="2.4"
              fill="#EFF6FF"
            />
            {/* Bandage Micro Dots */}
            <circle cx="186" cy="138" r="1.5" fill="#3B82F6" />
            <circle cx="192" cy="142" r="1.5" fill="#3B82F6" />
            <circle cx="198" cy="146" r="1.5" fill="#3B82F6" />
          </g>

          {/* 5. Ocean Wave Ripples (Lower Floating Left & Right) */}
          <path
            d="M 130 405 C 136 395, 144 395, 150 405 C 156 415, 164 415, 170 405"
            stroke="#60A5FA"
            strokeWidth="2.5"
            strokeLinecap="round"
            className="animate-low-gravity"
          />
          <path
            d="M 545 390 C 551 382, 557 382, 563 390 C 569 398, 575 398, 581 390"
            stroke="#60A5FA"
            strokeWidth="2.5"
            strokeLinecap="round"
            className="animate-low-gravity-alt"
          />

          {/* 6. Growing Botanical Sprout (Bottom Right Ground) */}
          <path
            d="M 555 450 C 560 435, 575 425, 585 435 C 570 440, 565 448, 565 455 C 575 445, 590 450, 585 460 C 570 460, 560 455, 555 450"
            stroke="#10B981"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            className="animate-low-gravity"
          />

          {/* 7. MORPHING OVERHEAD CARE SYMBOL: Heart to Interlocking Hands (Image 3) */}
          {/* Symbol State A: The Looped Care Heart */}
          <g className="animate-morph-a">
            <path
              d="M 370 120 C 370 100, 395 95, 405 110 C 415 95, 440 100, 440 120 C 440 145, 405 165, 405 165 C 405 165, 370 145, 370 120 Z"
              stroke="#38BDF8"
              strokeWidth="2.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="#EFF6FF"
            />
          </g>

          {/* Symbol State B: The Interlocking Hands Care Symbol */}
          <g className="animate-morph-b">
            <path
              d="M 380 135 C 385 125, 400 120, 410 130 C 420 120, 435 125, 438 135 C 430 145, 420 145, 410 155 C 400 145, 390 145, 380 135 Z"
              stroke="#2563EB"
              strokeWidth="2.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="#EFF6FF"
            />
            {/* Clasping fingers */}
            <path d="M 395 132 C 405 136, 415 136, 425 132" stroke="#2563EB" strokeWidth="2.4" strokeLinecap="round" />
          </g>

          {/* Lower Center Hands Clasp Motif (Directly below joined hands) */}
          <g className="animate-low-gravity" style={{ transformOrigin: '370px 425px' }}>
            <path
              d="M 355 425 C 362 418, 372 418, 378 425 C 385 418, 395 418, 400 425 C 392 435, 385 435, 378 442 C 370 435, 362 435, 355 425 Z"
              stroke="#60A5FA"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="#F8FAFC"
            />
          </g>

          {/* Overhead Fluid Connecting Loop Wire (From Heart down to couple) */}
          <path
            d="M 290 235 C 290 170, 350 140, 390 145 C 435 150, 480 170, 470 235"
            stroke="#93C5FD"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="6 4"
            className="animate-low-gravity-alt"
          />

          {/* ========================================================= */}
          {/* LAYER 3: FOREGROUND - THE COUPLE (PRECISION VECTOR ART)   */}
          {/* Deep Navy (#113C5E) | Monoline Stroke (3.4 - 3.8px)       */}
          {/* ========================================================= */}

          {/* Groundline */}
          <line
            x1="120"
            y1="455"
            x2="590"
            y2="455"
            stroke="#113C5E"
            strokeWidth="3.4"
            strokeLinecap="round"
          />

          {/* --------------------------------------------------------- */}
          {/* MAN (LEFT FIGURE)                                         */}
          {/* Features: Spectacles, Warm Smile, Walking Cane on Left    */}
          {/* --------------------------------------------------------- */}
          <g className="text-brand-navy">
            {/* Head (Circle) */}
            <circle
              cx="305"
              cy="235"
              r="38"
              stroke="#113C5E"
              strokeWidth="3.6"
              fill="#FFFFFF"
            />

            {/* Spectacles / Glasses (Classic Round Frames with Bridge) */}
            <circle cx="295" cy="235" r="10" stroke="#113C5E" strokeWidth="2.6" fill="none" />
            <circle cx="320" cy="235" r="10" stroke="#113C5E" strokeWidth="2.6" fill="none" />
            {/* Nose Bridge */}
            <path d="M 305 235 Q 308 232 310 235" stroke="#113C5E" strokeWidth="2.6" strokeLinecap="round" />
            {/* Eye Dots */}
            <circle cx="295" cy="235" r="2.2" fill="#113C5E" />
            <circle cx="320" cy="235" r="2.2" fill="#113C5E" />
            {/* Frame Ear Stem */}
            <path d="M 285 235 L 275 233" stroke="#113C5E" strokeWidth="2.4" strokeLinecap="round" />

            {/* Warm Friendly Smile */}
            <path
              d="M 302 254 Q 312 262 322 254"
              stroke="#113C5E"
              strokeWidth="2.8"
              strokeLinecap="round"
            />

            {/* Neck Collar */}
            <path d="M 298 273 L 305 285 L 312 273" stroke="#113C5E" strokeWidth="3" strokeLinecap="round" />

            {/* Torso / Jacket */}
            <path
              d="M 270 300 C 270 285, 290 282, 305 282 C 320 282, 340 285, 340 300 L 335 380 C 335 385, 275 385, 275 380 Z"
              stroke="#113C5E"
              strokeWidth="3.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="#FFFFFF"
            />

            {/* Man's Left Arm - Holding Walking Cane */}
            <path
              d="M 272 295 C 248 310, 235 340, 248 380"
              stroke="#113C5E"
              strokeWidth="3.4"
              strokeLinecap="round"
              fill="none"
            />

            {/* Walking Cane (With Independent Low-Gravity Drift!) */}
            <g className="animate-low-gravity-cane">
              {/* Cane Handle (Hook) */}
              <path
                d="M 252 380 C 252 370, 240 370, 240 380 L 240 455"
                stroke="#113C5E"
                strokeWidth="4"
                strokeLinecap="round"
                fill="none"
              />
              {/* Cane Tip Rubber Foot */}
              <path d="M 237 455 H 243" stroke="#113C5E" strokeWidth="4.5" strokeLinecap="round" />
            </g>

            {/* Man's Right Arm - Reaching across to hold woman's hand */}
            <path
              d="M 338 300 C 352 325, 360 360, 368 376"
              stroke="#113C5E"
              strokeWidth="3.4"
              strokeLinecap="round"
              fill="none"
            />

            {/* Man's Legs (Trousers & Shoes) */}
            <line x1="290" y1="382" x2="288" y2="446" stroke="#113C5E" strokeWidth="3.6" strokeLinecap="round" />
            <line x1="318" y1="382" x2="315" y2="446" stroke="#113C5E" strokeWidth="3.6" strokeLinecap="round" />
            {/* Shoes */}
            <path d="M 288 446 C 284 452, 274 453, 270 455 H 292" stroke="#113C5E" strokeWidth="3.4" strokeLinecap="round" />
            <path d="M 315 446 C 319 452, 329 453, 335 455 H 312" stroke="#113C5E" strokeWidth="3.4" strokeLinecap="round" />
          </g>

          {/* --------------------------------------------------------- */}
          {/* WOMAN (RIGHT FIGURE)                                      */}
          {/* Features: Hair Bun with Drift, Necklace, Joyful Step       */}
          {/* --------------------------------------------------------- */}
          <g className="text-brand-navy">
            {/* Top Hair Bun (With Independent Anti-Gravity Micro-Drift!) */}
            <g className="animate-low-gravity-bun">
              <circle
                cx="428"
                cy="195"
                r="16"
                stroke="#113C5E"
                strokeWidth="3.4"
                fill="#FFFFFF"
              />
              <path d="M 420 195 C 424 189, 432 189, 436 195" stroke="#113C5E" strokeWidth="2.4" strokeLinecap="round" />
            </g>

            {/* Head (Circle) */}
            <circle
              cx="425"
              cy="235"
              r="37"
              stroke="#113C5E"
              strokeWidth="3.6"
              fill="#FFFFFF"
            />

            {/* Gentle Eyes */}
            <circle cx="414" cy="235" r="2.4" fill="#113C5E" />
            <circle cx="438" cy="235" r="2.4" fill="#113C5E" />

            {/* Warm Friendly Smile */}
            <path
              d="M 418 252 Q 426 260, 434 252"
              stroke="#113C5E"
              strokeWidth="2.8"
              strokeLinecap="round"
            />

            {/* Neck & Delicate Pendant Necklace */}
            <line x1="425" y1="272" x2="425" y2="284" stroke="#113C5E" strokeWidth="3.4" strokeLinecap="round" />
            <path d="M 418 284 Q 425 296, 432 284" stroke="#113C5E" strokeWidth="2" strokeLinecap="round" />
            <circle cx="425" cy="296" r="3.2" stroke="#113C5E" strokeWidth="2" fill="#5591B7" />

            {/* Woman's Torso & Flowing Dress */}
            <path
              d="M 398 296 C 398 284, 415 282, 425 282 C 435 282, 452 284, 452 296 L 465 385 C 465 390, 390 390, 390 385 Z"
              stroke="#113C5E"
              strokeWidth="3.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="#FFFFFF"
            />

            {/* Woman's Left Arm - Reaching out to hold man's hand */}
            <path
              d="M 400 300 C 388 325, 380 360, 372 376"
              stroke="#113C5E"
              strokeWidth="3.4"
              strokeLinecap="round"
              fill="none"
            />

            {/* Woman's Right Arm - Flowing gently to side */}
            <path
              d="M 452 300 C 466 320, 474 348, 470 370"
              stroke="#113C5E"
              strokeWidth="3.4"
              strokeLinecap="round"
              fill="none"
            />

            {/* Woman's Legs with Joyful Upward Step */}
            {/* Standing Leg */}
            <line x1="416" y1="390" x2="416" y2="446" stroke="#113C5E" strokeWidth="3.6" strokeLinecap="round" />
            <path d="M 416 446 C 418 452, 426 453, 432 455 H 410" stroke="#113C5E" strokeWidth="3.4" strokeLinecap="round" />

            {/* Joyful Back-Kicked Leg (Delicate Step in Air) */}
            <g className="animate-low-gravity" style={{ transformOrigin: '438px 390px' }}>
              <path
                d="M 436 390 C 440 415, 454 430, 465 440"
                stroke="#113C5E"
                strokeWidth="3.6"
                strokeLinecap="round"
                fill="none"
              />
              <path d="M 465 440 C 469 444, 478 444, 482 442" stroke="#113C5E" strokeWidth="3.4" strokeLinecap="round" />
            </g>
          </g>

          {/* --------------------------------------------------------- */}
          {/* THE HAND CLASP & HEART CONNECTION LOOP                    */}
          {/* Man & Woman inner hands meet at (370, 376)                */}
          {/* --------------------------------------------------------- */}
          <g>
            {/* Clasping Hands Pin */}
            <circle
              cx="370"
              cy="376"
              r="6.5"
              stroke="#113C5E"
              strokeWidth="3"
              fill="#FFFFFF"
            />

            {/* Floating Heart Rising from Joined Hands (Zero Gravity Pulse) */}
            <g className="animate-low-gravity" style={{ transformOrigin: '370px 320px' }}>
              <path
                d="M 370 320 C 370 305, 386 300, 393 312 C 400 300, 416 305, 416 320 C 416 338, 393 352, 393 352 C 393 352, 370 338, 370 320 Z"
                stroke="#2563EB"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="#EFF6FF"
              />
              {/* Inner Heart Loop Trace */}
              <path
                d="M 370 348 C 362 336, 355 352, 370 376"
                stroke="#60A5FA"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeDasharray="4 3"
              />
            </g>
          </g>
        </svg>

        {/* 
          Technical Blueprint Capsule Badge (Image 3)
        */}
        <div className="mt-2.5 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white border border-slate-200/90 shadow-xs relative z-10">
          <span className="font-mono text-brand-navy font-bold text-xs">&lt;/&gt;</span>
          <div className="text-left font-mono">
            <p className="text-[10.5px] sm:text-[11px] font-semibold text-slate-800 leading-tight">
              Technical Blueprint: Continuous SVG Path Morph
            </p>
            <p className="text-[9.5px] sm:text-[10px] text-slate-500 leading-tight">
              (Low-Gravity Physics, Looped, Layered Opt.)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
