'use client';

import React from 'react';

interface KoinaLogoProps {
  variant?: 'light' | 'dark' | 'icon-only';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

/**
 * KoinaLogo — Clean, Calm, Professional Brand Identity
 * Uses standard typography (Plus Jakarta Sans) with the brand circular 'K' badge
 * and a calm, subtle flow underline.
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
      iconSize: 28,
      titleSize: 'text-[18px]',
      subSize: 'text-[8.5px]',
      tracking: 'tracking-[0.22em]',
      gap: 'gap-2.5',
      waveWidth: 96,
      waveHeight: 7,
    },
    md: {
      iconSize: 36,
      titleSize: 'text-[22px]',
      subSize: 'text-[10px]',
      tracking: 'tracking-[0.24em]',
      gap: 'gap-3',
      waveWidth: 114,
      waveHeight: 8,
    },
    lg: {
      iconSize: 48,
      titleSize: 'text-[28px]',
      subSize: 'text-[12px]',
      tracking: 'tracking-[0.25em]',
      gap: 'gap-3.5',
      waveWidth: 140,
      waveHeight: 10,
    },
  }[size];

  // 1. Standalone Icon
  if (variant === 'icon-only') {
    return (
      <div
        className={`inline-block relative select-none shrink-0 ${className}`}
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
          {/* White 'K' Monoline */}
          <line
            x1="36"
            y1="24"
            x2="36"
            y2="76"
            stroke={isDark ? '#113C5E' : '#FFFFFF'}
            strokeWidth="8"
            strokeLinecap="round"
          />
          <line
            x1="36"
            y1="50"
            x2="68"
            y2="28"
            stroke={isDark ? '#113C5E' : '#FFFFFF'}
            strokeWidth="8"
            strokeLinecap="round"
          />
          <line
            x1="36"
            y1="50"
            x2="68"
            y2="72"
            stroke={isDark ? '#113C5E' : '#FFFFFF'}
            strokeWidth="8"
            strokeLinecap="round"
          />
          {/* Cyan Junction Dot */}
          <circle cx="36" cy="50" r="6.5" fill={cyanAccent} />
        </svg>
      </div>
    );
  }

  // 2. Full Brand Logo with Clean, Calm Typography
  return (
    <div
      className={`inline-flex items-center ${scales.gap} select-none group ${className}`}
      role="banner"
      aria-label="Koina Allied Health"
    >
      {/* Brand Icon Badge */}
      <div
        className="relative shrink-0 transition-transform duration-300 group-hover:scale-105"
        style={{ width: scales.iconSize, height: scales.iconSize }}
      >
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full overflow-visible"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="50"
            cy="50"
            r="46"
            fill={isDark ? '#FFFFFF' : '#113C5E'}
          />
          <line
            x1="36"
            y1="24"
            x2="36"
            y2="76"
            stroke={isDark ? '#113C5E' : '#FFFFFF'}
            strokeWidth="8"
            strokeLinecap="round"
          />
          <line
            x1="36"
            y1="50"
            x2="68"
            y2="28"
            stroke={isDark ? '#113C5E' : '#FFFFFF'}
            strokeWidth="8"
            strokeLinecap="round"
          />
          <line
            x1="36"
            y1="50"
            x2="68"
            y2="72"
            stroke={isDark ? '#113C5E' : '#FFFFFF'}
            strokeWidth="8"
            strokeLinecap="round"
          />
          <circle cx="36" cy="50" r="6.5" fill={cyanAccent} />
        </svg>
      </div>

      {/* Calm, Clean Typography */}
      <div className="flex flex-col justify-center leading-none">
        <span
          className={`font-bold font-sans ${scales.titleSize} tracking-[-0.025em] transition-colors`}
          style={{ color: navyColor }}
        >
          Koina
        </span>
        <span
          className={`font-semibold font-sans uppercase ${scales.subSize} ${scales.tracking} mt-1 transition-colors`}
          style={{ color: subColor }}
        >
          ALLIED HEALTH
        </span>
        {/* Subtle, Calm Flow Underline */}
        <svg
          width={scales.waveWidth}
          height={scales.waveHeight}
          viewBox="0 0 120 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mt-0.5 overflow-visible transition-transform duration-300 group-hover:translate-x-0.5"
        >
          <path
            d="M 1 4 Q 60 7 98 4 C 105 3, 110 1.5, 113 2 C 117 2.5, 119 5, 115 6.5 C 111 8, 104 6, 98 4"
            stroke={cyanAccent}
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}
