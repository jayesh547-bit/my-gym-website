function Logo({ size = 42, className = "" }) {
  return (
    <div className={`relative flex items-center justify-center shrink-0 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transform-gpu transition-transform duration-300 group-hover:scale-105"
        aria-hidden="true"
      >
        <defs>
          {/* Lime Neon Energy Gradient */}
          <linearGradient id="afoLimeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#d9f99d" />
            <stop offset="50%" stopColor="#bef264" />
            <stop offset="100%" stopColor="#84cc16" />
          </linearGradient>

          {/* Core Steel Metallic Gradient */}
          <linearGradient id="afoSteelGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#94a3b8" />
          </linearGradient>

          {/* Drop Glow Filter */}
          <filter id="afoGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#bef264" floodOpacity="0.55" />
          </filter>
        </defs>

        {/* Outer Hexagonal Athletic Shield */}
        <path
          d="M50 6L88 24V60L50 94L12 60V24L50 6Z"
          fill="#07090c"
          stroke="url(#afoLimeGrad)"
          strokeWidth="3.5"
          strokeLinejoin="round"
          filter="url(#afoGlow)"
        />

        {/* Inner Power Angle - The 'A' (All) & '1' (One) Monogram */}
        {/* Left Wing */}
        <path
          d="M50 20L28 62H40L50 40L60 62H72L50 20Z"
          fill="url(#afoLimeGrad)"
        />

        {/* Center Vertical Power Pillar - Representing 'ONE' */}
        <path
          d="M47 36H53V74H47V36Z"
          fill="url(#afoSteelGrad)"
        />

        {/* Barbell Weight Notches */}
        <rect x="22" y="44" width="7" height="14" rx="2" fill="#bef264" />
        <rect x="71" y="44" width="7" height="14" rx="2" fill="#bef264" />

        {/* Diamond Core Accent */}
        <polygon points="50,28 54,34 50,40 46,34" fill="#ffffff" />
      </svg>
    </div>
  );
}

export default Logo;
