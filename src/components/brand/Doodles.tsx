import React from 'react';

/**
 * Hand-drawn doodle squiggle underline for highlighting key words and phrases.
 * Evokes the handcrafted, organic character of the Koina brand mark.
 */
export function DoodleUnderline({ className = 'text-brand-sky w-full h-3 -bottom-2.5 left-0' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      preserveAspectRatio="none"
      className={`absolute pointer-events-none stroke-current stroke-doodle ${className}`}
    >
      <path
        d="M2.5 11.2C48.2 4.1 98.7 3.5 145.4 7.8C172.9 10.3 205.8 13.7 237.5 5.5"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      <path
        d="M18.3 13.8C65.1 8.2 122.4 7.9 178.6 11.4C198.2 12.6 220.1 12.1 231.4 8.7"
        strokeWidth="1.8"
        strokeLinecap="round"
        opacity="0.65"
      />
    </svg>
  );
}

/**
 * Organic hand-drawn sketch circle / oval loop surrounding a badge or key phrase.
 */
export function DoodleCircle({ className = 'text-brand-sky -inset-2' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 160 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      preserveAspectRatio="none"
      className={`absolute pointer-events-none stroke-current stroke-doodle ${className}`}
    >
      <path
        d="M24 16C50 6 125 5 148 18C162 26 158 45 138 52C108 61 45 62 20 53C3 47 4 28 26 17C46 7 110 9 144 14"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

/**
 * Friendly 4-point hand-sketched twinkle star.
 */
export function DoodleSparkle({ className = 'w-5 h-5 text-brand-sky' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={`inline-block shrink-0 stroke-current stroke-doodle ${className}`}
    >
      <path
        d="M12 2.5C12.3 7 14.5 9.8 19.5 10.5C14.5 11.2 12.3 14 12 18.5C11.7 14 9.5 11.2 4.5 10.5C9.5 9.8 11.7 7 12 2.5Z"
        strokeWidth="2"
        strokeLinejoin="round"
        fill="currentColor"
        fillOpacity="0.15"
      />
      <circle cx="19.5" cy="5" r="1.2" fill="currentColor" />
    </svg>
  );
}

/**
 * Playful hand-drawn curved pointer arrow guiding user attention to a CTA or form.
 */
export function DoodleArrow({ className = 'w-16 h-12 text-brand-sky' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 72 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={`inline-block stroke-current stroke-doodle ${className}`}
    >
      <path
        d="M6 38C18 36 34 26 44 14C49 8 52 7 57 10"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M48 6C54 8 59 10 63 12C60 17 56 22 53 27"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Prominent organic wave divider separating page sections.
 * Completely eliminates rigid straight horizontal 1px lines with sweeping,
 * handcrafted organic curves that make section boundaries unmistakably friendly.
 */
export function DoodleWaveDivider({
  flip = false,
  fillColor = '#FFFFFF',
  accentColor,
  className = '',
  heightClassName = 'h-12 sm:h-16 md:h-20 lg:h-24',
}: {
  flip?: boolean;
  fillColor?: string;
  accentColor?: string;
  className?: string;
  heightClassName?: string;
}) {
  return (
    <div
      className={`w-full overflow-hidden leading-none pointer-events-none select-none relative z-10 ${
        flip ? 'rotate-180 -scale-x-100' : ''
      } ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 96"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className={`w-full ${heightClassName} block`}
      >
        {/* Optional soft organic accent ridge layer underneath */}
        {accentColor && (
          <path
            d="M0 40C220 82 460 88 720 44C980 0 1220 18 1440 50V96H0V40Z"
            fill={accentColor}
            opacity="0.3"
          />
        )}
        {/* Main Sweeping Organic Wave */}
        <path
          d="M0 32C180 72 360 84 540 58C720 32 900 12 1080 38C1220 58 1340 64 1440 42V96H0V32Z"
          fill={fillColor}
        />
        {/* Organic hand-drawn crest stroke */}
        <path
          d="M0 32C180 72 360 84 540 58C720 32 900 12 1080 38C1220 58 1340 64 1440 42"
          stroke={fillColor === '#FFFFFF' ? '#5591B7' : '#113C5E'}
          strokeWidth="1.5"
          opacity="0.18"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

/**
 * Gentle organic arch/crest divider for high-contrast transitions into dark sections (e.g. Closing CTA, Footer).
 */
export function DoodleArchDivider({
  fillColor = '#0B1D2D',
  className = '',
}: {
  fillColor?: string;
  className?: string;
}) {
  return (
    <div
      className={`w-full overflow-hidden leading-none pointer-events-none select-none relative z-10 ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="w-full h-10 sm:h-14 md:h-18 lg:h-20 block"
      >
        <path
          d="M0 80C360 12 1080 12 1440 80V80H0Z"
          fill={fillColor}
        />
      </svg>
    </div>
  );
}

/**
 * Subtle Queensland botanical line art watermark for section backgrounds.
 * Blends gently into corners with calibrated 15-20% opacity so it is clearly visible
 * yet never distracts from typography.
 */
export function DoodleBotanicalWatermark({
  className = 'w-72 h-72 text-brand-navy opacity-20',
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={`absolute pointer-events-none stroke-current stroke-doodle ${className}`}
    >
      {/* Organic eucalyptus leaf stem */}
      <path
        d="M20 180C40 140 70 80 120 30"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      {/* Leaf 1 */}
      <path
        d="M60 128C42 110 40 92 56 86C72 80 82 98 60 128Z"
        strokeWidth="2"
        fill="currentColor"
        fillOpacity="0.12"
      />
      {/* Leaf 2 */}
      <path
        d="M80 108C98 90 114 88 116 104C118 120 98 126 80 108Z"
        strokeWidth="2"
        fill="currentColor"
        fillOpacity="0.12"
      />
      {/* Leaf 3 */}
      <path
        d="M96 74C82 54 84 36 98 32C114 28 122 46 96 74Z"
        strokeWidth="2"
        fill="currentColor"
        fillOpacity="0.12"
      />
      {/* Leaf 4 */}
      <path
        d="M120 30C136 20 152 24 150 40C148 54 132 50 120 30Z"
        strokeWidth="2"
        fill="currentColor"
        fillOpacity="0.12"
      />
      {/* Friendly sun arc */}
      <circle cx="160" cy="40" r="16" strokeWidth="1.8" strokeDasharray="3 4" />
    </svg>
  );
}

/**
 * Hand-drawn soft heart sketch for care and empathy callouts.
 */
export function DoodleHeart({ className = 'w-6 h-6 text-brand-sky' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={`inline-block stroke-current stroke-doodle ${className}`}
    >
      <path
        d="M16 27C12 23 4 17 4 10.5C4 6.5 7 3.5 11 3.5C13.5 3.5 15.5 5 16 6.5C16.5 5 18.5 3.5 21 3.5C25 3.5 28 6.5 28 10.5C28 17 20 23 16 27Z"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="currentColor"
        fillOpacity="0.15"
      />
    </svg>
  );
}

/**
 * HeroBackgroundLineArt — Creative, subtle monoline background art for Hero sections.
 * Features:
 * - Gentle Queensland sunshine arc with rays
 * - Sweeping continuous care wave ribbon connecting elements
 * - Native Queensland eucalyptus botanical fronds
 * - Subtle sparkle doodles
 * Perfectly calibrated 14-22% opacity for noticeable artistic charm without reading interference.
 */
export function HeroBackgroundLineArt({ className = '' }: { className?: string }) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none select-none overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 680"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-cover"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Top-Left Gentle Queensland Sunshine Arc */}
        <g stroke="#5591B7" strokeOpacity="0.22" strokeWidth="2" strokeLinecap="round">
          <circle cx="70" cy="85" r="42" strokeDasharray="5 7" />
          <path d="M 70 30 L 70 18" />
          <path d="M 70 140 L 70 152" />
          <path d="M 15 85 L 3 85" />
          <path d="M 125 85 L 137 85" />
          <path d="M 31 46 L 22 37" />
          <path d="M 109 124 L 118 133" />
          <path d="M 31 124 L 22 133" />
          <path d="M 109 46 L 118 37" />
        </g>

        {/* Sweeping Continuous Care Wave Ribbon across background */}
        <path
          d="M -40 210 C 180 150, 340 310, 540 230 C 740 150, 880 290, 1120 200 C 1270 140, 1390 220, 1500 170"
          stroke="#5591B7"
          strokeOpacity="0.18"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Gentle secondary ambient ripple */}
        <path
          d="M 40 460 C 240 400, 460 520, 760 450 C 1020 390, 1240 500, 1480 420"
          stroke="#113C5E"
          strokeOpacity="0.12"
          strokeWidth="1.8"
          strokeLinecap="round"
        />

        {/* Left Side: Native Eucalyptus Line-Art Botanical Branch */}
        <g stroke="#113C5E" strokeOpacity="0.20" strokeWidth="2.2" strokeLinecap="round" fill="none">
          <path d="M 15 600 C 55 520, 115 430, 175 340 C 205 295, 235 265, 280 225" />
          <path d="M 78 505 C 50 475, 45 448, 70 438 C 94 428, 108 456, 78 505 Z" fill="#5591B7" fillOpacity="0.10" />
          <path d="M 125 438 C 152 410, 175 410, 175 432 C 175 455, 148 460, 125 438 Z" fill="#5591B7" fillOpacity="0.10" />
          <path d="M 168 358 C 145 325, 150 300, 168 296 C 192 292, 202 320, 168 358 Z" fill="#5591B7" fillOpacity="0.10" />
          <path d="M 222 288 C 250 260, 272 264, 268 288 C 264 306, 240 306, 222 288 Z" fill="#5591B7" fillOpacity="0.10" />
        </g>

        {/* Floating Sparkles & Gentle Twinkles */}
        <g stroke="#5591B7" strokeOpacity="0.18" strokeWidth="2" strokeLinecap="round" fill="none">
          <path d="M 640 85 Q 640 96 630 96 Q 640 96 640 107 Q 640 96 650 96 Q 640 96 640 85 Z" fill="#5591B7" fillOpacity="0.18" />
          <path d="M 1320 115 Q 1320 128 1308 128 Q 1320 128 1320 141 Q 1320 128 1332 128 Q 1320 128 1320 115 Z" fill="#5591B7" fillOpacity="0.18" />
          <path d="M 580 380 Q 580 390 570 390 Q 580 390 580 400 Q 580 390 590 390 Q 580 390 580 380 Z" fill="#5591B7" fillOpacity="0.15" />
        </g>

        {/* Right Corner: Native Eucalyptus Frond */}
        <g stroke="#113C5E" strokeOpacity="0.18" strokeWidth="2" strokeLinecap="round" fill="none">
          <path d="M 1420 170 C 1370 230, 1315 295, 1265 390" />
          <path d="M 1372 232 C 1392 208, 1415 208, 1410 228 C 1405 246, 1382 246, 1372 232 Z" fill="#5591B7" fillOpacity="0.10" />
          <path d="M 1324 300 C 1300 278, 1304 254, 1324 254 C 1342 254, 1346 278, 1324 300 Z" fill="#5591B7" fillOpacity="0.10" />
        </g>
      </svg>
    </div>
  );
}

/**
 * CareConnectionLineArt — Subtle background line art symbolizing empathy & human touch.
 * Used on About, Services, Funding, and Contact pages.
 */
export function CareConnectionLineArt({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute pointer-events-none select-none overflow-hidden ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 400 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Soft Care Heart with Wave Underline */}
        <path
          d="M 200 130 C 180 80, 120 70, 95 105 C 65 145, 95 200, 200 250 C 305 200, 335 145, 305 105 C 280 70, 220 80, 200 130 Z"
          stroke="#5591B7"
          strokeOpacity="0.18"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="#5591B7"
          fillOpacity="0.04"
        />
        {/* Single-line continuous loop */}
        <path
          d="M 40 230 C 120 210, 160 250, 240 220 C 300 200, 340 240, 370 210"
          stroke="#113C5E"
          strokeOpacity="0.14"
          strokeWidth="2"
          strokeLinecap="round"
        />
        {/* Twinkle Star Accent */}
        <path
          d="M 310 75 Q 310 85 300 85 Q 310 85 310 95 Q 310 85 320 85 Q 310 85 310 75 Z"
          fill="#5591B7"
          fillOpacity="0.22"
        />
      </svg>
    </div>
  );
}

/**
 * QueenslandJourneyLineArt — Subtle background line art for Locations & Coverage.
 * Depicts journey paths, distance markers, and sun aura across regional QLD.
 */
export function QueenslandJourneyLineArt({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute pointer-events-none select-none overflow-hidden ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 500 350"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Winding Regional Route Line */}
        <path
          d="M 30 290 C 90 260, 140 310, 210 240 C 270 180, 320 220, 380 150 C 420 100, 450 120, 480 70"
          stroke="#5591B7"
          strokeOpacity="0.20"
          strokeWidth="2.2"
          strokeDasharray="6 8"
          strokeLinecap="round"
        />
        {/* Location Pin Nodes */}
        <circle cx="210" cy="240" r="5" stroke="#113C5E" strokeOpacity="0.25" strokeWidth="2" fill="#FFFFFF" />
        <circle cx="380" cy="150" r="5" stroke="#113C5E" strokeOpacity="0.25" strokeWidth="2" fill="#FFFFFF" />
        <circle cx="480" cy="70" r="6" stroke="#5591B7" strokeOpacity="0.30" strokeWidth="2" fill="#5591B7" fillOpacity="0.2" />

        {/* Queensland Sun Arc in corner */}
        <circle cx="460" cy="60" r="32" stroke="#5591B7" strokeOpacity="0.20" strokeWidth="1.8" strokeDasharray="4 6" />
      </svg>
    </div>
  );
}
