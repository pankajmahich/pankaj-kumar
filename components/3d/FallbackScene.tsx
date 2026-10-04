import * as React from "react";

export function FallbackScene() {
  return (
    <div className="relative w-full max-w-[480px] h-[340px] sm:h-[420px] md:h-[480px] flex items-center justify-center">
      {/* Ambient Radial Glow */}
      <div className="absolute w-72 h-72 rounded-full bg-gradient-to-tr from-indigo-600/30 via-cyan-500/20 to-purple-600/30 blur-3xl animate-pulse" />

      {/* Futuristic Geometric Ring & Core */}
      <div className="relative flex items-center justify-center">
        {/* Outer Ring */}
        <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-full border border-indigo-500/30 border-dashed animate-[spin_24s_linear_infinite]" />

        {/* Counter-rotating Ring */}
        <div className="absolute w-44 h-44 sm:w-52 sm:h-52 rounded-full border border-cyan-400/40 animate-[spin_16s_linear_infinite_reverse]" />

        {/* Crystalline Core Card */}
        <div className="absolute w-28 h-28 sm:w-32 sm:h-32 rounded-2xl glass-panel border border-white/20 shadow-2xl flex flex-col items-center justify-center rotate-45 transform hover:rotate-12 transition-transform duration-700">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-500 to-cyan-400 -rotate-45 shadow-lg shadow-indigo-500/50" />
        </div>

        {/* Orbiting Satellite Dots */}
        <div className="absolute w-64 h-64 sm:w-72 sm:h-72 rounded-full animate-[spin_12s_linear_infinite]">
          <span className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-cyan-400 shadow-md shadow-cyan-400/80" />
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-indigo-500 shadow-md shadow-indigo-500/80" />
        </div>
      </div>
    </div>
  );
}
