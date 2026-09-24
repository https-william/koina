'use client';

import React, { useEffect, useRef, useState } from 'react';

/**
 * Custom React hook that implements the requested self-drawing SVG animation system.
 * Dynamically computes getTotalLength() for all geometry paths, applies stroke-dasharray
 * and stroke-dashoffset, and sequences layer-based progressive CSS animation delays.
 * Uses IntersectionObserver so the self-drawing kicks off smoothly when scrolled into view.
 */
export function useSelfDrawingSVG() {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [hasDrawn, setHasDrawn] = useState(false);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    // Check if IntersectionObserver is available
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasDrawn) {
            setHasDrawn(true);
            const pathElements = svg.querySelectorAll<SVGGeometryElement>(
              'path, circle, line, polyline, ellipse, rect'
            );

            let bgIndex = 0;
            let mainIndex = 0;
            let detailIndex = 0;

            pathElements.forEach((el) => {
              try {
                // Ensure stroke styling
                el.style.strokeLinecap = 'round';
                el.style.strokeLinejoin = 'round';

                if (typeof el.getTotalLength === 'function') {
                  const length = el.getTotalLength();
                  if (length > 0) {
                    el.style.setProperty('--path-length', `${length}`);
                    el.style.strokeDasharray = `${length} ${length}`;
                    el.style.strokeDashoffset = `${length}`;

                    // Progressive layer sequencing
                    const layer = el.getAttribute('data-layer') || 'main';
                    let delay = 0.1;

                    if (layer === 'bg') {
                      delay = bgIndex * 0.08;
                      bgIndex++;
                    } else if (layer === 'main') {
                      delay = 0.35 + mainIndex * 0.09;
                      mainIndex++;
                    } else if (layer === 'detail') {
                      delay = 1.1 + detailIndex * 0.12;
                      detailIndex++;
                    }

                    // Apply continuous looping drawing transition
                    el.style.animation = `continuousDoodleLoop 9s cubic-bezier(0.4, 0, 0.2, 1) ${delay.toFixed(
                      2
                    )}s infinite`;
                  }
                }
              } catch (e) {
                // Graceful fallback for non-renderable geometry
              }
            });
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(svg);

    return () => {
      observer.disconnect();
    };
  }, [hasDrawn]);

  return svgRef;
}

/**
 * 1. OpenDoodleCareHero: Primary Hero Open-Doodles monoline character art.
 * Depicts a warm, supportive clinician walking alongside and holding hands with
 * a participant/client taking confident steps. Single-color monoline strokes (#113C5E)
 * with sky-blue (#5591B7) highlights.
 */
export function OpenDoodleCareHero({ className = 'w-full max-w-lg h-auto' }: { className?: string }) {
  const svgRef = useSelfDrawingSVG();

  return (
    <div className={`relative doodle-interactive select-none ${className}`}>
      <svg
        ref={svgRef}
        viewBox="0 0 520 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto overflow-visible animate-doodle-float"
        aria-label="Illustration of clinician supporting client with care and connection"
      >
        <defs>
          <linearGradient id="careGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#5591B7" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#113C5E" stopOpacity="0.02" />
          </linearGradient>
        </defs>

        {/* Ambient Organic Background Aura */}
        <path
          data-layer="bg"
          d="M60 220C40 140 120 70 230 65C340 60 460 110 470 210C480 300 380 350 250 355C130 360 75 285 60 220Z"
          fill="url(#careGlow)"
        />

        {/* Ground Rolling Horizon Line */}
        <path
          data-layer="bg"
          d="M20 360C120 352 240 366 360 358C430 352 485 362 505 360"
          stroke="#113C5E"
          strokeWidth="2.5"
          opacity="0.35"
        />

        {/* Background Accents: Sun Arc & Twinkles */}
        <circle
          data-layer="bg"
          cx="440"
          cy="90"
          r="28"
          stroke="#5591B7"
          strokeWidth="2.2"
          strokeDasharray="4 6"
        />
        {/* Sparkle 1 */}
        <path
          data-layer="detail"
          d="M75 110C75 122 70 128 58 128C70 128 75 134 75 146C75 134 80 128 92 128C80 128 75 122 75 110Z"
          stroke="#5591B7"
          strokeWidth="2"
          fill="#5591B7"
          fillOpacity="0.15"
        />
        {/* Sparkle 2 */}
        <path
          data-layer="detail"
          d="M450 210C450 218 446 222 438 222C446 222 450 226 450 234C450 226 454 222 462 222C454 222 450 218 450 210Z"
          stroke="#5591B7"
          strokeWidth="1.8"
        />

        {/* ----------------- FIGURE 1: CLIENT / PARTICIPANT (LEFT) ----------------- */}
        {/* Head & Hair */}
        <path
          data-layer="main"
          d="M170 145C170 122 188 105 210 105C232 105 250 122 250 145C250 168 232 185 210 185C188 185 170 168 170 145Z"
          stroke="#113C5E"
          strokeWidth="2.8"
        />
        {/* Hair Doodly Tuft */}
        <path
          data-layer="main"
          d="M182 118C188 98 208 92 226 96C242 100 248 112 248 118"
          stroke="#113C5E"
          strokeWidth="2.6"
        />
        {/* Friendly Face Profile Details */}
        <circle data-layer="detail" cx="225" cy="140" r="2.8" fill="#113C5E" />
        <path
          data-layer="detail"
          d="M218 155C224 162 232 160 235 154"
          stroke="#113C5E"
          strokeWidth="2.2"
        />
        {/* Glasses monoline rim */}
        <circle
          data-layer="detail"
          cx="225"
          cy="140"
          r="10"
          stroke="#5591B7"
          strokeWidth="2"
        />
        <path data-layer="detail" d="M215 140L202 138" stroke="#5591B7" strokeWidth="2" />

        {/* Client Neck & Torso */}
        <path data-layer="main" d="M205 185L205 198" stroke="#113C5E" strokeWidth="2.8" />
        <path data-layer="main" d="M215 185L215 198" stroke="#113C5E" strokeWidth="2.8" />
        {/* Jacket / Shirt Outline */}
        <path
          data-layer="main"
          d="M165 240C170 205 190 198 210 198C230 198 245 205 252 235L248 300C232 305 180 305 168 300L165 240Z"
          stroke="#113C5E"
          strokeWidth="2.8"
        />
        {/* Collar Line */}
        <path data-layer="detail" d="M198 198L210 216L222 198" stroke="#113C5E" strokeWidth="2.4" />

        {/* Client Left Leg & Shoe (Taking forward step) */}
        <path
          data-layer="main"
          d="M185 304L178 350C178 358 162 360 152 360C144 360 144 352 152 350L168 346L172 304"
          stroke="#113C5E"
          strokeWidth="2.8"
        />
        {/* Client Right Leg (Supporting) */}
        <path
          data-layer="main"
          d="M232 304L238 348C238 356 248 358 260 358C268 358 268 352 260 350L248 346L244 304"
          stroke="#113C5E"
          strokeWidth="2.8"
        />

        {/* ----------------- FIGURE 2: CLINICIAN (RIGHT) ----------------- */}
        {/* Clinician Head & Updo Hair */}
        <path
          data-layer="main"
          d="M320 135C320 115 336 98 356 98C376 98 392 115 392 135C392 155 376 172 356 172C336 172 320 155 320 135Z"
          stroke="#113C5E"
          strokeWidth="2.8"
        />
        {/* Friendly Topknot Bun */}
        <circle
          data-layer="main"
          cx="375"
          cy="92"
          r="16"
          stroke="#113C5E"
          strokeWidth="2.6"
        />
        {/* Clinician Profile Eyes & Warm Smile */}
        <circle data-layer="detail" cx="338" cy="132" r="2.8" fill="#113C5E" />
        <path
          data-layer="detail"
          d="M334 146C340 154 348 152 352 146"
          stroke="#113C5E"
          strokeWidth="2.2"
        />

        {/* Clinician Neck & Scrubs / Uniform */}
        <path data-layer="main" d="M350 172L350 186" stroke="#113C5E" strokeWidth="2.8" />
        <path data-layer="main" d="M362 172L362 186" stroke="#113C5E" strokeWidth="2.8" />
        <path
          data-layer="main"
          d="M312 225C320 192 340 186 358 186C378 186 398 194 405 225L400 305C385 308 335 308 318 305L312 225Z"
          stroke="#113C5E"
          strokeWidth="2.8"
        />
        {/* Clinician ID Lanyard / Koina Pin */}
        <path data-layer="detail" d="M352 186L358 220L364 186" stroke="#5591B7" strokeWidth="2" />
        <circle data-layer="detail" cx="358" cy="225" r="4.5" fill="#5591B7" />

        {/* Clinician Legs & Shoes */}
        <path
          data-layer="main"
          d="M335 306L332 352C332 358 322 360 312 360C305 360 305 354 314 350L324 348L326 306"
          stroke="#113C5E"
          strokeWidth="2.8"
        />
        <path
          data-layer="main"
          d="M380 306L384 352C384 358 394 360 404 360C412 360 412 354 402 350L392 348L388 306"
          stroke="#113C5E"
          strokeWidth="2.8"
        />

        {/* ----------------- INTERLOCKING HANDS & ARMS (CENTER) ----------------- */}
        {/* Clinician's Welcoming Left Arm reaching across */}
        <path
          data-layer="main"
          d="M315 220C295 235 278 245 264 248"
          stroke="#113C5E"
          strokeWidth="3.2"
        />
        {/* Client's Right Arm meeting clinician */}
        <path
          data-layer="main"
          d="M246 228C254 238 260 244 266 248"
          stroke="#113C5E"
          strokeWidth="3.2"
        />
        {/* Caring Interlocking Hands */}
        <path
          data-layer="detail"
          d="M262 245C268 242 274 246 272 254C270 260 260 262 258 255C256 248 260 244 262 245Z"
          stroke="#5591B7"
          strokeWidth="2.6"
          fill="#5591B7"
          fillOpacity="0.25"
        />

        {/* Floating Heart Loop Between Them */}
        <path
          data-layer="detail"
          d="M285 158C280 148 268 145 262 153C256 145 244 148 239 158C232 170 248 184 262 195C276 184 292 170 285 158Z"
          stroke="#5591B7"
          strokeWidth="2.4"
          fill="#5591B7"
          fillOpacity="0.12"
        />

        {/* Client's Walking Support Cane */}
        <path
          data-layer="main"
          d="M152 250C148 246 140 248 140 255L140 360"
          stroke="#113C5E"
          strokeWidth="2.8"
        />
        <path
          data-layer="main"
          d="M165 240L145 252"
          stroke="#113C5E"
          strokeWidth="2.8"
        />

        {/* Botanical sprig at base */}
        <path
          data-layer="detail"
          d="M455 360C458 342 470 330 485 325"
          stroke="#5591B7"
          strokeWidth="2"
        />
        <path
          data-layer="detail"
          d="M465 342C474 340 478 332 476 328C472 328 468 334 465 342Z"
          stroke="#5591B7"
          strokeWidth="1.8"
          fill="#5591B7"
          fillOpacity="0.2"
        />
        <path
          data-layer="detail"
          d="M475 332C484 330 488 322 486 318C482 318 478 324 475 332Z"
          stroke="#5591B7"
          strokeWidth="1.8"
          fill="#5591B7"
          fillOpacity="0.2"
        />
      </svg>
    </div>
  );
}

/**
 * 2. OpenDoodleConnectingHands: Continuous monoline representation of two human hands
 * clasping in trust and mutual care. Ideal for "Who We Support", "Our Story", or values.
 */
export function OpenDoodleConnectingHands({ className = 'w-full max-w-xs h-auto' }: { className?: string }) {
  const svgRef = useSelfDrawingSVG();

  return (
    <div className={`relative doodle-interactive select-none ${className}`}>
      <svg
        ref={svgRef}
        viewBox="0 0 260 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto overflow-visible"
        aria-label="Illustration of caring hands clasping"
      >
        {/* Left Wrist & Hand */}
        <path
          data-layer="main"
          d="M20 95C50 95 65 92 85 80C100 70 115 65 130 75C140 82 145 92 135 102C125 112 110 110 95 102"
          stroke="#113C5E"
          strokeWidth="2.8"
        />
        {/* Right Wrist & Hand interlocking */}
        <path
          data-layer="main"
          d="M240 75C210 75 195 78 175 90C160 100 145 105 130 95C120 88 115 78 125 68C135 58 150 60 165 68"
          stroke="#113C5E"
          strokeWidth="2.8"
        />

        {/* Continuous caring pulse loop linking wrists */}
        <path
          data-layer="bg"
          d="M30 120C80 145 180 145 230 120"
          stroke="#5591B7"
          strokeWidth="2.2"
          strokeDasharray="4 5"
        />

        {/* Heart icon floating above junction */}
        <path
          data-layer="detail"
          d="M130 38C126 30 116 28 110 35C104 28 94 30 90 38C85 48 98 60 110 68C122 60 135 48 130 38Z"
          stroke="#5591B7"
          strokeWidth="2.2"
          fill="#5591B7"
          fillOpacity="0.15"
          transform="translate(20, -5)"
        />

        {/* Twinkle Sparkles */}
        <circle data-layer="detail" cx="70" cy="40" r="2.5" fill="#5591B7" />
        <circle data-layer="detail" cx="190" cy="45" r="2" fill="#5591B7" />
      </svg>
    </div>
  );
}

/**
 * 3. OpenDoodleMobility: Monoline figure active, taking confident steps, regaining mobility.
 * Tailored for Physiotherapy & Exercise Physiology.
 */
export function OpenDoodleMobility({ className = 'w-full max-w-sm h-auto' }: { className?: string }) {
  const svgRef = useSelfDrawingSVG();

  return (
    <div className={`relative doodle-interactive select-none ${className}`}>
      <svg
        ref={svgRef}
        viewBox="0 0 280 260"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto overflow-visible"
        aria-label="Illustration of character active and mobile"
      >
        {/* Soft Background Arc */}
        <path
          data-layer="bg"
          d="M30 220C50 160 110 110 190 120C230 125 255 155 260 220"
          stroke="#5591B7"
          strokeWidth="2"
          strokeDasharray="3 5"
          opacity="0.6"
        />

        {/* Head with Joyful Expression */}
        <circle
          data-layer="main"
          cx="140"
          cy="52"
          r="24"
          stroke="#113C5E"
          strokeWidth="2.8"
        />
        {/* Hair Swirl */}
        <path
          data-layer="main"
          d="M125 40C132 30 148 28 158 35"
          stroke="#113C5E"
          strokeWidth="2.5"
        />
        {/* Eye & Smile */}
        <circle data-layer="detail" cx="148" cy="50" r="2.5" fill="#113C5E" />
        <path
          data-layer="detail"
          d="M144 60C148 64 154 63 156 59"
          stroke="#113C5E"
          strokeWidth="2"
        />

        {/* Torso & Dynamic Posture */}
        <path
          data-layer="main"
          d="M138 76L130 145C130 145 145 152 165 145L160 76"
          stroke="#113C5E"
          strokeWidth="2.8"
        />

        {/* Left Arm raised with vigor */}
        <path
          data-layer="main"
          d="M135 90C110 80 90 65 85 45"
          stroke="#113C5E"
          strokeWidth="2.8"
        />
        <circle data-layer="detail" cx="85" cy="45" r="5" fill="#5591B7" />

        {/* Right Arm balancing gracefully */}
        <path
          data-layer="main"
          d="M158 92C180 102 205 105 220 95"
          stroke="#113C5E"
          strokeWidth="2.8"
        />

        {/* Forward Stepping Leg */}
        <path
          data-layer="main"
          d="M136 148L115 185L85 220C82 225 74 225 68 222C64 220 66 215 72 214L98 185L120 148"
          stroke="#113C5E"
          strokeWidth="2.8"
        />

        {/* Supporting Leg */}
        <path
          data-layer="main"
          d="M158 148L175 190L190 225C192 230 200 230 208 228C214 226 212 220 205 218L190 188L168 148"
          stroke="#113C5E"
          strokeWidth="2.8"
        />

        {/* Movement energy speed rings */}
        <path
          data-layer="detail"
          d="M55 205C50 210 50 218 55 225"
          stroke="#5591B7"
          strokeWidth="2.2"
        />
        <path
          data-layer="detail"
          d="M45 200C38 208 38 220 45 230"
          stroke="#5591B7"
          strokeWidth="2"
          opacity="0.6"
        />
      </svg>
    </div>
  );
}

/**
 * 4. OpenDoodleConversation: Monoline figures communicating with empathy and speech waves.
 * Tailored for Speech Pathology, Psychology, and Support Coordination.
 */
export function OpenDoodleConversation({ className = 'w-full max-w-sm h-auto' }: { className?: string }) {
  const svgRef = useSelfDrawingSVG();

  return (
    <div className={`relative doodle-interactive select-none ${className}`}>
      <svg
        ref={svgRef}
        viewBox="0 0 280 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto overflow-visible"
        aria-label="Illustration of supportive conversation"
      >
        {/* Left Head */}
        <circle
          data-layer="main"
          cx="70"
          cy="75"
          r="26"
          stroke="#113C5E"
          strokeWidth="2.8"
        />
        <path data-layer="main" d="M52 65C58 50 78 48 88 56" stroke="#113C5E" strokeWidth="2.4" />
        <circle data-layer="detail" cx="80" cy="74" r="2.5" fill="#113C5E" />
        <path data-layer="detail" d="M78 84C82 87 86 86 88 83" stroke="#113C5E" strokeWidth="2" />
        {/* Left Shoulders */}
        <path
          data-layer="main"
          d="M45 145C45 110 55 101 70 101C85 101 95 110 95 145"
          stroke="#113C5E"
          strokeWidth="2.8"
        />

        {/* Right Head */}
        <circle
          data-layer="main"
          cx="210"
          cy="75"
          r="26"
          stroke="#113C5E"
          strokeWidth="2.8"
        />
        <path data-layer="main" d="M192 65C198 50 218 48 228 56" stroke="#113C5E" strokeWidth="2.4" />
        <circle data-layer="detail" cx="200" cy="74" r="2.5" fill="#113C5E" />
        <path data-layer="detail" d="M198 84C194 87 190 86 188 83" stroke="#113C5E" strokeWidth="2" />
        {/* Right Shoulders */}
        <path
          data-layer="main"
          d="M185 145C185 110 195 101 210 101C225 101 235 110 235 145"
          stroke="#113C5E"
          strokeWidth="2.8"
        />

        {/* Expressive Speech & Listening Waves Between them */}
        <path
          data-layer="detail"
          d="M110 70C125 60 135 60 140 70C145 80 155 80 170 70"
          stroke="#5591B7"
          strokeWidth="2.4"
        />
        <path
          data-layer="detail"
          d="M115 85C125 80 135 80 140 85C145 90 155 90 165 85"
          stroke="#5591B7"
          strokeWidth="2"
          strokeDasharray="3 4"
        />

        {/* Thought / Understanding Bubble above */}
        <path
          data-layer="bg"
          d="M132 42C128 36 132 30 140 30C148 30 152 36 148 42C144 48 136 48 132 42Z"
          stroke="#5591B7"
          strokeWidth="2"
          fill="#5591B7"
          fillOpacity="0.12"
        />
        <circle data-layer="detail" cx="140" cy="50" r="2" fill="#5591B7" />
        <circle data-layer="detail" cx="140" cy="56" r="1.2" fill="#5591B7" />
      </svg>
    </div>
  );
}

/**
 * 5. OpenDoodleDailyLiving: Character sitting comfortably with tea at home with assistive reach.
 * Tailored for Occupational Therapy & In-Home Independence.
 */
export function OpenDoodleDailyLiving({ className = 'w-full max-w-sm h-auto' }: { className?: string }) {
  const svgRef = useSelfDrawingSVG();

  return (
    <div className={`relative doodle-interactive select-none ${className}`}>
      <svg
        ref={svgRef}
        viewBox="0 0 280 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto overflow-visible"
        aria-label="Illustration of independent living at home"
      >
        {/* Cozy Armchair back curve */}
        <path
          data-layer="bg"
          d="M50 200L50 120C50 90 70 75 100 75L120 75"
          stroke="#113C5E"
          strokeWidth="2.8"
        />
        {/* Armchair cushion */}
        <path
          data-layer="bg"
          d="M45 160C70 165 140 165 165 160L165 200L45 200Z"
          stroke="#113C5E"
          strokeWidth="2.6"
        />

        {/* Relaxed Character Head */}
        <circle
          data-layer="main"
          cx="125"
          cy="70"
          r="22"
          stroke="#113C5E"
          strokeWidth="2.8"
        />
        {/* Eyes closed in content relaxation */}
        <path data-layer="detail" d="M130 68C134 71 138 71 142 68" stroke="#113C5E" strokeWidth="2" />
        <path data-layer="detail" d="M132 78C136 81 140 80 143 77" stroke="#113C5E" strokeWidth="1.8" />

        {/* Torso resting back */}
        <path
          data-layer="main"
          d="M110 92L95 155C110 158 140 158 150 155L140 92"
          stroke="#113C5E"
          strokeWidth="2.8"
        />

        {/* Arms holding warm mug */}
        <path
          data-layer="main"
          d="M102 115C115 130 135 130 145 118"
          stroke="#113C5E"
          strokeWidth="2.8"
        />
        {/* Mug */}
        <path
          data-layer="detail"
          d="M120 125L122 142C122 145 130 145 130 142L132 125Z"
          stroke="#5591B7"
          strokeWidth="2.2"
          fill="#5591B7"
          fillOpacity="0.2"
        />
        {/* Warm steam rising in continuous loops */}
        <path
          data-layer="detail"
          d="M124 120C122 114 126 110 124 104"
          stroke="#5591B7"
          strokeWidth="1.8"
        />
        <path
          data-layer="detail"
          d="M129 120C127 112 131 108 129 100"
          stroke="#5591B7"
          strokeWidth="1.8"
        />

        {/* Plant on side table */}
        <path data-layer="bg" d="M210 150L250 150L245 200L215 200Z" stroke="#113C5E" strokeWidth="2.4" />
        <path
          data-layer="detail"
          d="M230 150C225 130 220 120 215 115C225 115 230 125 230 150Z"
          stroke="#5591B7"
          strokeWidth="2"
          fill="#5591B7"
          fillOpacity="0.15"
        />
        <path
          data-layer="detail"
          d="M230 150C235 130 240 120 245 115C235 115 230 125 230 150Z"
          stroke="#5591B7"
          strokeWidth="2"
          fill="#5591B7"
          fillOpacity="0.15"
        />
      </svg>
    </div>
  );
}
