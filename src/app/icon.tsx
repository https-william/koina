import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = {
  width: 64,
  height: 64,
};
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#113C5E',
          borderRadius: '50%',
        }}
      >
        <svg
          width="48"
          height="48"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Bold White 'K' Monoline */}
          <line
            x1="36"
            y1="24"
            x2="36"
            y2="76"
            stroke="#FFFFFF"
            strokeWidth="8.5"
            strokeLinecap="round"
          />
          <line
            x1="36"
            y1="50"
            x2="68"
            y2="28"
            stroke="#FFFFFF"
            strokeWidth="8.5"
            strokeLinecap="round"
          />
          <line
            x1="36"
            y1="50"
            x2="68"
            y2="72"
            stroke="#FFFFFF"
            strokeWidth="8.5"
            strokeLinecap="round"
          />
          {/* Cyan Vertex Dot */}
          <circle cx="36" cy="50" r="7" fill="#5591B7" />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
