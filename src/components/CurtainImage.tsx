"use client";
import React, { useState } from "react";

interface CurtainImageProps {
  src: string;
  alt: string;
  aspectClass?: string;
  className?: string;
  curtainBgClass?: string; // e.g., 'bg-[#050505]' or 'bg-[#F9F8F6]'
  overlay?: React.ReactNode;
}

export const CurtainImage: React.FC<CurtainImageProps> = ({
  src,
  alt,
  aspectClass = "aspect-[16/9]",
  className = "",
  curtainBgClass = "bg-[#050505]",
  overlay,
}) => {
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className={`curtain-wrapper ${aspectClass} ${className} relative w-full bg-neutral-900 overflow-hidden`}
    >
      {/* Curtain reveal veil */}
      <div className={`curtain-reveal ${curtainBgClass}`} />

      {/* Actual image */}
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          className="scale-out w-full h-full object-cover"
          onError={() => setHasError(true)}
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-zinc-900 text-zinc-400 p-6 text-center text-xs tracking-widest uppercase font-display">
          <span>{alt}</span>
        </div>
      )}

      {overlay}
    </div>
  );
};
