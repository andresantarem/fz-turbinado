export default function TurboIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={`${className} turbo-spin`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer circle */}
      <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="2" opacity="0.3" />
      
      {/* Turbo blades */}
      <g>
        {/* Blade 1 */}
        <path
          d="M 50 50 L 50 20 Q 65 35 70 50 Q 65 65 50 80 Z"
          fill="currentColor"
          opacity="0.9"
        />
        {/* Blade 2 */}
        <path
          d="M 50 50 L 80 50 Q 65 65 50 70 Q 35 65 30 50 Z"
          fill="currentColor"
          opacity="0.7"
        />
        {/* Blade 3 */}
        <path
          d="M 50 50 L 50 80 Q 35 65 30 50 Q 35 35 50 20 Z"
          fill="currentColor"
          opacity="0.5"
        />
        {/* Blade 4 */}
        <path
          d="M 50 50 L 20 50 Q 35 35 50 30 Q 65 35 70 50 Z"
          fill="currentColor"
          opacity="0.3"
        />
      </g>

      {/* Center circle */}
      <circle cx="50" cy="50" r="12" fill="currentColor" />
      
      {/* Inner highlight */}
      <circle cx="50" cy="50" r="8" fill="white" opacity="0.4" />
    </svg>
  );
}
