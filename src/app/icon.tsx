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
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Bold White 'K' Monoline */}
          <line
            x1="14"
            y1="8"
            x2="14"
            y2="40"
            stroke="#FFFFFF"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <line
            x1="15"
            y1="24"
            x2="36"
            y2="10"
            stroke="#FFFFFF"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <line
            x1="15"
            y1="24"
            x2="36"
            y2="38"
            stroke="#FFFFFF"
            strokeWidth="6"
            strokeLinecap="round"
          />
          {/* Cyan Vertex Dot */}
          <circle cx="14" cy="24" r="4.5" fill="#5591B7" />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
