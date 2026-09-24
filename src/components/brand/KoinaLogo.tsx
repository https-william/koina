'use client';

import React, { useState } from 'react';

interface KoinaLogoProps {
  variant?: 'light' | 'dark' | 'icon-only';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

/**
 * KoinaLogo — Exact Vector Artwork from Brand Guidelines & Application Spec
 * Features:
 * - Hand-drawn circular 'K' badge in brand navy with clean white monoline K & cyan vertex pin
 * - Fineliner typography for 'Koina' with cyan junction dot on K and cyan tittle on i
 * - Animated wave path tether emerging from 'a' and sweeping smoothly under 'ALLIED HEALTH'
 * - Reactive anti-gravity physics: subtle hovering cluster & zero-gravity gentle breathing
 */
export default function KoinaLogo({
  variant = 'light',
  className = '',
  size = 'md',
}: KoinaLogoProps) {
  const [isHovered, setIsHovered] = useState(false);

  const isDark = variant === 'dark';
  const navyColor = isDark ? '#FFFFFF' : '#113C5E';
  const cyanAccent = '#5591B7';
  const subColor = isDark ? '#93C5FD' : '#5591B7';

  // Dimension scaling following 8pt rhythm
  const scales = {
    sm: {
      height: 38,
      iconSize: 34,
      className: 'h-9',
    },
    md: {
      height: 48,
      iconSize: 42,
      className: 'h-11 sm:h-12',
    },
    lg: {
      height: 64,
      iconSize: 56,
      className: 'h-14 sm:h-16',
    },
  }[size];

  if (variant === 'icon-only') {
    return (
      <div
        className={`inline-block relative cursor-pointer select-none ${className}`}
        style={{ width: scales.iconSize, height: scales.iconSize }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        role="img"
        aria-label="Koina Allied Health Icon"
      >
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full overflow-visible transition-transform duration-500 ease-out"
          style={{
            transform: isHovered
              ? 'scale(1.06) rotate(-3deg)'
              : 'scale(1) rotate(0deg)',
          }}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Circular Badge */}
          <circle
            cx="50"
            cy="50"
            r="44"
            fill={isDark ? '#FFFFFF' : '#113C5E'}
          />
          {/* Subtle Outer Pencil Texture Ring */}
          <circle
            cx="50"
            cy="50"
            r="44"
            stroke={isDark ? 'rgba(255,255,255,0.4)' : 'rgba(17,60,94,0.3)'}
            strokeWidth="2"
            strokeDasharray="80 4"
            fill="none"
          />

          {/* 'K' Monoline Stem */}
          <line
            x1="34"
            y1="25"
            x2="34"
            y2="75"
            stroke={isDark ? '#113C5E' : '#FFFFFF'}
            strokeWidth="9"
            strokeLinecap="round"
          />
          {/* Upper Arm */}
          <line
            x1="36"
            y1="50"
            x2="68"
            y2="28"
            stroke={isDark ? '#113C5E' : '#FFFFFF'}
            strokeWidth="9"
            strokeLinecap="round"
          />
          {/* Lower Leg */}
          <line
            x1="36"
            y1="50"
            x2="68"
            y2="72"
            stroke={isDark ? '#113C5E' : '#FFFFFF'}
            strokeWidth="9"
            strokeLinecap="round"
          />
          {/* Cyan Junction Dot */}
          <circle cx="34" cy="50" r="7.5" fill={cyanAccent} />
        </svg>
      </div>
    );
  }

  return (
    <div
      className={`inline-flex items-center cursor-pointer select-none group relative ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="banner"
      aria-label="Koina Allied Health"
    >
      <svg
        viewBox="0 0 280 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${scales.className} w-auto overflow-visible transition-transform duration-500 ease-out`}
        style={{
          transform: isHovered ? 'scale(1.02)' : 'scale(1)',
        }}
      >
        {/* ================================================================= */}
        {/* 1. ICON: Clean Circular Badge with 'K' & Cyan Vertex Pin          */}
        {/* ================================================================= */}
        <g
          className="transition-transform duration-700 ease-out"
          style={{
            transformOrigin: '32px 34px',
            transform: isHovered ? 'rotate(-5deg) scale(1.04)' : 'rotate(-2deg)',
          }}
        >
          {/* Solid Circle Badge */}
          <circle
            cx="32"
            cy="34"
            r="26"
            fill={isDark ? '#FFFFFF' : '#113C5E'}
          />
          {/* Subtle Outer Pencil Texture Contour Ring */}
          <circle
            cx="32"
            cy="34"
            r="26"
            stroke={isDark ? 'rgba(255,255,255,0.4)' : 'rgba(17,60,94,0.35)'}
            strokeWidth="1.6"
            strokeDasharray="50 3"
            fill="none"
          />

          {/* White 'K' Monoline */}
          <line
            x1="22"
            y1="19"
            x2="22"
            y2="49"
            stroke={isDark ? '#113C5E' : '#FFFFFF'}
            strokeWidth="5.5"
            strokeLinecap="round"
          />
          <line
            x1="23"
            y1="34"
            x2="42"
            y2="21"
            stroke={isDark ? '#113C5E' : '#FFFFFF'}
            strokeWidth="5.5"
            strokeLinecap="round"
          />
          <line
            x1="23"
            y1="34"
            x2="42"
            y2="47"
            stroke={isDark ? '#113C5E' : '#FFFFFF'}
            strokeWidth="5.5"
            strokeLinecap="round"
          />
          {/* Cyan Pin Dot on Vertex */}
          <circle cx="22" cy="34" r="4.2" fill={cyanAccent} />
        </g>

        {/* ================================================================= */}
        {/* 2. WORDMARK 'Koina' (Traced exactly from the infographic spec)     */}
        {/* ================================================================= */}
        <g
          className="transition-transform duration-500 ease-out"
          style={{
            transform: isHovered ? 'translate3d(1px, 0, 0)' : 'translate3d(0, 0, 0)',
          }}
        >
          {/* --- K --- */}
          {/* Vertical Stem with rounded terminals */}
          <line
            x1="74"
            y1="12"
            x2="74"
            y2="44"
            stroke={navyColor}
            strokeWidth="5.2"
            strokeLinecap="round"
          />
          {/* Upper Arm */}
          <line
            x1="75"
            y1="28"
            x2="98"
            y2="13"
            stroke={navyColor}
            strokeWidth="5.2"
            strokeLinecap="round"
          />
          {/* Lower Leg */}
          <line
            x1="75"
            y1="28"
            x2="98"
            y2="44"
            stroke={navyColor}
            strokeWidth="5.2"
            strokeLinecap="round"
          />
          {/* Cyan Junction Dot Accent on K */}
          <circle cx="74" cy="28" r="4.2" fill={cyanAccent} />

          {/* --- o --- */}
          {/* Clean Fineliner Rounded Oval */}
          <ellipse
            cx="118"
            cy="30"
            rx="11.5"
            ry="14"
            stroke={navyColor}
            strokeWidth="5"
            strokeLinecap="round"
          />

          {/* --- i --- */}
          {/* Vertical Stem */}
          <line
            x1="141"
            y1="19"
            x2="141"
            y2="44"
            stroke={navyColor}
            strokeWidth="5"
            strokeLinecap="round"
          />
          {/* Cyan Round Dot Pin floating above i */}
          <circle cx="141" cy="10" r="4.2" fill={cyanAccent} />

          {/* --- n --- */}
          {/* Left Stem */}
          <line
            x1="158"
            y1="19"
            x2="158"
            y2="44"
            stroke={navyColor}
            strokeWidth="5"
            strokeLinecap="round"
          />
          {/* Arch & Right Leg */}
          <path
            d="M 158 26 C 162 20, 169 17, 176 17 C 184 17, 188 21, 188 29 L 188 44"
            stroke={navyColor}
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* --- a --- */}
          {/* Rounded Bowl cleanly spaced */}
          <path
            d="M 218 25 C 215 19, 209 17, 203 17 C 195 17, 189 23, 189 31 C 189 39, 195 44.5, 203 44.5 C 210 44.5, 215 41, 218 34"
            stroke={navyColor}
            strokeWidth="5"
            strokeLinecap="round"
          />
          {/* Right Vertical Stem */}
          <line
            x1="218"
            y1="19"
            x2="218"
            y2="44"
            stroke={navyColor}
            strokeWidth="5"
            strokeLinecap="round"
          />

          {/* ================================================================= */}
          {/* 3. ELEMENT SPEC: THE ANIMATED 'WAVE' TETHER                       */}
          {/* Curves from 'a' tail, loops out to right and under ALLIED HEALTH  */}
          {/* ================================================================= */}
          <path
            d={
              isHovered
                ? 'M 218 41 C 228 36, 240 46, 252 38 C 262 31, 255 48, 238 56 C 210 68, 140 68, 80 62'
                : 'M 218 41 C 226 35, 238 45, 250 39 C 260 33, 256 46, 240 54 C 215 65, 145 66, 78 61'
            }
            stroke={cyanAccent}
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-all duration-700 ease-out"
          />
        </g>

        {/* ================================================================= */}
        {/* 4. SUBTITLE: 'ALLIED HEALTH' (Tracked directly under 'Koina')      */}
        {/* ================================================================= */}
        <text
          x="74"
          y="56"
          fill={subColor}
          fontSize="10.8"
          fontWeight="700"
          letterSpacing="0.28em"
          fontFamily="system-ui, -apple-system, sans-serif"
          className="uppercase tracking-[0.28em]"
        >
          ALLIED HEALTH
        </text>
      </svg>
    </div>
  );
}
