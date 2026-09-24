'use client';

import React from 'react';

interface KoinaLogoProps {
  variant?: 'light' | 'dark' | 'icon-only';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

/**
 * KoinaLogo — Traced exactly from Developer Spec (Icon Optimization & Word Mark Optimization)
 * Reference: media_1790291162041.png & media_1790291142242.png
 *
 * (1) ICON OPTIMIZATION:
 *     - Deep navy circle (128x128 50% radius)
 *     - Monoline white 'K'
 *     - Cyan vertex dot pin
 * (2) WORD MARK OPTIMIZATION:
 *     - 'Koina' letterforms with cyan dot at K junction & cyan tittle on i
 *     - 'ALLIED HEALTH' uppercase tracked lettering
 * (3) ELEMENT ISOLATION:
 *     - Organic flow wave element cleanly positioned under ALLIED HEALTH
 */
export default function KoinaLogo({
  variant = 'light',
  className = '',
  size = 'md',
}: KoinaLogoProps) {
  const isDark = variant === 'dark';
  const navyColor = isDark ? '#FFFFFF' : '#113C5E';
  const cyanAccent = '#5591B7';
  const subColor = isDark ? '#93C5FD' : '#5591B7';

  // Dimension scaling following 8pt rhythm
  const scales = {
    sm: {
      height: 36,
      iconSize: 32,
      className: 'h-8 sm:h-9',
    },
    md: {
      height: 48,
      iconSize: 42,
      className: 'h-10 sm:h-11',
    },
    lg: {
      height: 64,
      iconSize: 56,
      className: 'h-14 sm:h-16',
    },
  }[size];

  // 1. Standalone Icon (Icon Optimization from Spec)
  if (variant === 'icon-only') {
    return (
      <div
        className={`inline-block relative select-none ${className}`}
        style={{ width: scales.iconSize, height: scales.iconSize }}
        role="img"
        aria-label="Koina Allied Health Icon"
      >
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full overflow-visible transition-transform duration-300 ease-out hover:scale-105"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Deep Navy Circle Badge */}
          <circle
            cx="50"
            cy="50"
            r="46"
            fill={isDark ? '#FFFFFF' : '#113C5E'}
          />

          {/* White 'K' Monoline Stem */}
          <line
            x1="36"
            y1="24"
            x2="36"
            y2="76"
            stroke={isDark ? '#113C5E' : '#FFFFFF'}
            strokeWidth="8"
            strokeLinecap="round"
          />
          {/* Upper Arm */}
          <line
            x1="36"
            y1="50"
            x2="68"
            y2="28"
            stroke={isDark ? '#113C5E' : '#FFFFFF'}
            strokeWidth="8"
            strokeLinecap="round"
          />
          {/* Lower Leg */}
          <line
            x1="36"
            y1="50"
            x2="68"
            y2="72"
            stroke={isDark ? '#113C5E' : '#FFFFFF'}
            strokeWidth="8"
            strokeLinecap="round"
          />
          {/* Cyan Junction Dot on K vertex */}
          <circle cx="36" cy="50" r="6.5" fill={cyanAccent} />
        </svg>
      </div>
    );
  }

  // 2. Full Brand Logo (Icon + Wordmark + Organic Flow Element)
  return (
    <div
      className={`inline-flex items-center select-none group relative ${className}`}
      role="banner"
      aria-label="Koina Allied Health"
    >
      <svg
        viewBox="0 0 260 70"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${scales.className} w-auto overflow-visible transition-transform duration-300 ease-out`}
      >
        {/* ================================================================= */}
        {/* 1. ICON OPTIMIZATION: Circular K Badge with Cyan Vertex Dot       */}
        {/* ================================================================= */}
        <g className="transition-transform duration-300 group-hover:scale-105" style={{ transformOrigin: '30px 32px' }}>
          <circle
            cx="30"
            cy="32"
            r="25"
            fill={isDark ? '#FFFFFF' : '#113C5E'}
          />

          {/* White 'K' Monoline */}
          <line
            x1="22"
            y1="18"
            x2="22"
            y2="46"
            stroke={isDark ? '#113C5E' : '#FFFFFF'}
            strokeWidth="4.6"
            strokeLinecap="round"
          />
          <line
            x1="22"
            y1="32"
            x2="40"
            y2="20"
            stroke={isDark ? '#113C5E' : '#FFFFFF'}
            strokeWidth="4.6"
            strokeLinecap="round"
          />
          <line
            x1="22"
            y1="32"
            x2="40"
            y2="44"
            stroke={isDark ? '#113C5E' : '#FFFFFF'}
            strokeWidth="4.6"
            strokeLinecap="round"
          />
          {/* Cyan Vertex Dot */}
          <circle cx="22" cy="32" r="3.8" fill={cyanAccent} />
        </g>

        {/* ================================================================= */}
        {/* 2. WORD MARK OPTIMIZATION: 'Koina' from Brand Spec                */}
        {/* ================================================================= */}
        <g>
          {/* --- K --- */}
          <line
            x1="68"
            y1="12"
            x2="68"
            y2="42"
            stroke={navyColor}
            strokeWidth="4.8"
            strokeLinecap="round"
          />
          <line
            x1="68"
            y1="27"
            x2="90"
            y2="13"
            stroke={navyColor}
            strokeWidth="4.8"
            strokeLinecap="round"
          />
          <line
            x1="68"
            y1="27"
            x2="90"
            y2="42"
            stroke={navyColor}
            strokeWidth="4.8"
            strokeLinecap="round"
          />
          {/* Cyan Junction Dot Accent on K */}
          <circle cx="68" cy="27" r="4" fill={cyanAccent} />

          {/* --- o --- */}
          <ellipse
            cx="108"
            cy="29"
            rx="11"
            ry="13"
            stroke={navyColor}
            strokeWidth="4.6"
            strokeLinecap="round"
            fill="none"
          />

          {/* --- i --- */}
          <line
            x1="130"
            y1="19"
            x2="130"
            y2="42"
            stroke={navyColor}
            strokeWidth="4.6"
            strokeLinecap="round"
          />
          {/* Cyan Round Dot Pin floating cleanly above i */}
          <circle cx="130" cy="10" r="4" fill={cyanAccent} />

          {/* --- n --- */}
          <line
            x1="147"
            y1="19"
            x2="147"
            y2="42"
            stroke={navyColor}
            strokeWidth="4.6"
            strokeLinecap="round"
          />
          <path
            d="M 147 26 C 151 19, 159 17, 166 17 C 174 17, 178 22, 178 29 L 178 42"
            stroke={navyColor}
            strokeWidth="4.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* --- a --- */}
          <path
            d="M 207 25 C 204 19, 198 17, 192 17 C 184 17, 178 23, 178 30 C 178 38, 184 43.5, 192 43.5 C 199 43.5, 204 40, 207 34"
            stroke={navyColor}
            strokeWidth="4.6"
            strokeLinecap="round"
          />
          <line
            x1="207"
            y1="19"
            x2="207"
            y2="42"
            stroke={navyColor}
            strokeWidth="4.6"
            strokeLinecap="round"
          />
        </g>

        {/* ================================================================= */}
        {/* 3. SUBTITLE: 'ALLIED HEALTH'                                       */}
        {/* ================================================================= */}
        <text
          x="68"
          y="53"
          fill={subColor}
          fontSize="9.8"
          fontWeight="600"
          letterSpacing="0.22em"
          fontFamily="system-ui, -apple-system, sans-serif"
          className="uppercase tracking-[0.22em]"
        >
          ALLIED HEALTH
        </text>

        {/* ================================================================= */}
        {/* 4. ELEMENT ISOLATION: The Organic Flow Element                    */}
        {/* Sweeps smoothly under ALLIED HEALTH and rises into wave crest     */}
        {/* ================================================================= */}
        <path
          d="M 68 60 Q 138 62 203 58 C 213 56, 217 48, 223 47 C 228 46, 232 49, 229 53 C 226 57, 214 58, 203 58"
          stroke={cyanAccent}
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-all duration-300 group-hover:translate-x-1"
        />
      </svg>
    </div>
  );
}
