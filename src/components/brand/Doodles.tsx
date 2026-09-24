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
 * Blends gently into corners (low opacity) to infuse warm, friendly life.
 */
export function DoodleBotanicalWatermark({
  className = 'w-72 h-72 text-brand-navy opacity-[0.04]',
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
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Leaf 1 */}
      <path
        d="M60 128C42 110 40 92 56 86C72 80 82 98 60 128Z"
        strokeWidth="2"
        fill="currentColor"
        fillOpacity="0.08"
      />
      {/* Leaf 2 */}
      <path
        d="M80 108C98 90 114 88 116 104C118 120 98 126 80 108Z"
        strokeWidth="2"
        fill="currentColor"
        fillOpacity="0.08"
      />
      {/* Leaf 3 */}
      <path
        d="M96 74C82 54 84 36 98 32C114 28 122 46 96 74Z"
        strokeWidth="2"
        fill="currentColor"
        fillOpacity="0.08"
      />
      {/* Leaf 4 */}
      <path
        d="M120 30C136 20 152 24 150 40C148 54 132 50 120 30Z"
        strokeWidth="2"
        fill="currentColor"
        fillOpacity="0.08"
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
        fillOpacity="0.12"
      />
    </svg>
  );
}
