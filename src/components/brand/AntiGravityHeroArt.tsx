'use client';

import React from 'react';
import KoinaLogo from '@/components/brand/KoinaLogo';

interface AntiGravityHeroArtProps {
  className?: string;
}

/**
 * AntiGravityHeroArt — Pure Minimalist Line Art
 * Represents community and in-home allied health care for older Australians & couples.
 * Clean, warm, uncluttered monoline vector art with subtle zero-gravity movement.
 */
export default function AntiGravityHeroArt({ className = '' }: AntiGravityHeroArtProps) {
  return (
    <div className={`relative w-full max-w-[420px] lg:max-w-[440px] mx-auto select-none ${className}`}>
      {/* Soft Ambient Backdrop Glow */}
      <div className="absolute inset-0 rounded-[32px] bg-gradient-to-tr from-sky-100/40 via-blue-50/20 to-transparent blur-2xl -z-10 pointer-events-none" />

      {/* Main Vector Canvas Card */}
      <div className="rounded-[28px] sm:rounded-[32px] bg-white border border-slate-200/90 shadow-ambient p-4 sm:p-5 relative flex flex-col items-center">
        {/* Top Card Header */}
        <div className="w-full flex items-center justify-between pb-3 border-b border-slate-100 relative z-10">
          <div className="flex items-center gap-2">
            <KoinaLogo variant="light" size="sm" />
          </div>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-800 text-[11px] font-semibold shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-navy" />
            Statewide QLD
          </span>
        </div>

        {/* Minimalist Line Art Canvas */}
        <svg
          viewBox="170 150 380 330"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto drop-shadow-xs overflow-visible relative z-10 my-1"
        >
          {/* Groundline */}
          <line
            x1="190"
            y1="455"
            x2="530"
            y2="455"
            stroke="#113C5E"
            strokeWidth="3.2"
            strokeLinecap="round"
          />

          {/* ========================================================= */}
          {/* THE GRANDFATHER (LEFT FIGURE)                             */}
          {/* Features: Classic round glasses, warm smile, cane on left */}
          {/* ========================================================= */}
          <g className="text-brand-navy">
            {/* Head */}
            <circle
              cx="305"
              cy="235"
              r="38"
              stroke="#113C5E"
              strokeWidth="3.5"
              fill="#FFFFFF"
            />

            {/* Spectacles / Round Glasses */}
            <circle cx="295" cy="235" r="10" stroke="#113C5E" strokeWidth="2.5" fill="none" />
            <circle cx="320" cy="235" r="10" stroke="#113C5E" strokeWidth="2.5" fill="none" />
            {/* Bridge */}
            <path d="M 305 235 Q 308 232 310 235" stroke="#113C5E" strokeWidth="2.5" strokeLinecap="round" />
            {/* Eye Dots */}
            <circle cx="295" cy="235" r="2.2" fill="#113C5E" />
            <circle cx="320" cy="235" r="2.2" fill="#113C5E" />
            {/* Frame Ear Stem */}
            <path d="M 285 235 L 275 233" stroke="#113C5E" strokeWidth="2.4" strokeLinecap="round" />

            {/* Warm Friendly Smile */}
            <path
              d="M 302 254 Q 312 262 322 254"
              stroke="#113C5E"
              strokeWidth="2.6"
              strokeLinecap="round"
            />

            {/* Collar */}
            <path d="M 298 273 L 305 285 L 312 273" stroke="#113C5E" strokeWidth="2.8" strokeLinecap="round" />

            {/* Torso & Jacket */}
            <path
              d="M 270 300 C 270 285, 290 282, 305 282 C 320 282, 340 285, 340 300 L 335 380 C 335 385, 275 385, 275 380 Z"
              stroke="#113C5E"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="#FFFFFF"
            />

            {/* Left Arm holding cane */}
            <path
              d="M 272 295 C 248 310, 235 340, 248 380"
              stroke="#113C5E"
              strokeWidth="3.4"
              strokeLinecap="round"
              fill="none"
            />

            {/* Walking Cane with subtle gentle drift */}
            <g className="animate-low-gravity-cane">
              <path
                d="M 252 380 C 252 370, 240 370, 240 380 L 240 455"
                stroke="#113C5E"
                strokeWidth="3.8"
                strokeLinecap="round"
                fill="none"
              />
              <path d="M 237 455 H 243" stroke="#113C5E" strokeWidth="4.2" strokeLinecap="round" />
            </g>

            {/* Right Arm reaching across to hold hands */}
            <path
              d="M 338 300 C 352 325, 360 360, 368 376"
              stroke="#113C5E"
              strokeWidth="3.4"
              strokeLinecap="round"
              fill="none"
            />

            {/* Legs & Shoes */}
            <line x1="290" y1="382" x2="288" y2="446" stroke="#113C5E" strokeWidth="3.5" strokeLinecap="round" />
            <line x1="318" y1="382" x2="315" y2="446" stroke="#113C5E" strokeWidth="3.5" strokeLinecap="round" />
            <path d="M 288 446 C 284 452, 274 453, 270 455 H 292" stroke="#113C5E" strokeWidth="3.4" strokeLinecap="round" />
            <path d="M 315 446 C 319 452, 329 453, 335 455 H 312" stroke="#113C5E" strokeWidth="3.4" strokeLinecap="round" />
          </g>

          {/* ========================================================= */}
          {/* THE GRANDMOTHER (RIGHT FIGURE)                            */}
          {/* Features: Elegant hair bun, gentle smile, joyful step     */}
          {/* ========================================================= */}
          <g className="text-brand-navy">
            {/* Top Hair Bun with subtle drift */}
            <g className="animate-low-gravity-bun">
              <circle
                cx="428"
                cy="195"
                r="16"
                stroke="#113C5E"
                strokeWidth="3.2"
                fill="#FFFFFF"
              />
              <path d="M 420 195 C 424 189, 432 189, 436 195" stroke="#113C5E" strokeWidth="2.2" strokeLinecap="round" />
            </g>

            {/* Head */}
            <circle
              cx="425"
              cy="235"
              r="37"
              stroke="#113C5E"
              strokeWidth="3.5"
              fill="#FFFFFF"
            />

            {/* Gentle Eyes */}
            <circle cx="414" cy="235" r="2.4" fill="#113C5E" />
            <circle cx="438" cy="235" r="2.4" fill="#113C5E" />

            {/* Warm Friendly Smile */}
            <path
              d="M 418 252 Q 426 260, 434 252"
              stroke="#113C5E"
              strokeWidth="2.6"
              strokeLinecap="round"
            />

            {/* Neck & Delicate Pendant */}
            <line x1="425" y1="272" x2="425" y2="284" stroke="#113C5E" strokeWidth="3.2" strokeLinecap="round" />
            <path d="M 418 284 Q 425 296, 432 284" stroke="#113C5E" strokeWidth="2" strokeLinecap="round" />
            <circle cx="425" cy="296" r="3.2" stroke="#113C5E" strokeWidth="1.8" fill="#5591B7" />

            {/* Torso & Flowing Dress */}
            <path
              d="M 398 296 C 398 284, 415 282, 425 282 C 435 282, 452 284, 452 296 L 465 385 C 465 390, 390 390, 390 385 Z"
              stroke="#113C5E"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="#FFFFFF"
            />

            {/* Left Arm extending to hold hands */}
            <path
              d="M 400 300 C 388 325, 380 360, 372 376"
              stroke="#113C5E"
              strokeWidth="3.4"
              strokeLinecap="round"
              fill="none"
            />

            {/* Right Arm flowing gently to side */}
            <path
              d="M 452 300 C 466 320, 474 348, 470 370"
              stroke="#113C5E"
              strokeWidth="3.4"
              strokeLinecap="round"
              fill="none"
            />

            {/* Standing Leg & Shoe */}
            <line x1="416" y1="390" x2="416" y2="446" stroke="#113C5E" strokeWidth="3.5" strokeLinecap="round" />
            <path d="M 416 446 C 418 452, 426 453, 432 455 H 410" stroke="#113C5E" strokeWidth="3.4" strokeLinecap="round" />

            {/* Joyful Back-Kicked Leg in Air */}
            <g className="animate-low-gravity" style={{ transformOrigin: '438px 390px' }}>
              <path
                d="M 436 390 C 440 415, 454 430, 465 440"
                stroke="#113C5E"
                strokeWidth="3.4"
                strokeLinecap="round"
                fill="none"
              />
              <path d="M 465 440 C 469 444, 478 444, 482 442" stroke="#113C5E" strokeWidth="3.2" strokeLinecap="round" />
            </g>
          </g>

          {/* ========================================================= */}
          {/* THE CLASPED HANDS & FLOATING CARE HEART                   */}
          {/* Warm, minimal, touching human connection                   */}
          {/* ========================================================= */}
          <g>
            {/* Clasping Hands Pin */}
            <circle
              cx="370"
              cy="376"
              r="6"
              stroke="#113C5E"
              strokeWidth="3"
              fill="#FFFFFF"
            />

            {/* Gentle Floating Care Heart drifting in zero gravity */}
            <g className="animate-low-gravity" style={{ transformOrigin: '370px 320px' }}>
              <path
                d="M 370 320 C 370 305, 386 300, 393 312 C 400 300, 416 305, 416 320 C 416 338, 393 352, 393 352 C 393 352, 370 338, 370 320 Z"
                stroke="#2563EB"
                strokeWidth="2.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="#EFF6FF"
              />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}
