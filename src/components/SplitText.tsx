"use client";
import React from "react";

interface SplitTextProps {
  text: string;
  className?: string;
  startDelay?: number;
  wordClassName?: string;
}

export const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = "",
  startDelay = 0.1,
  wordClassName = "split-word mr-2 sm:mr-3",
}) => {
  const words = text.split(" ");
  let runningIndex = 0;

  return (
    <span className={`split-text inline ${className}`} aria-label={text}>
      {words.map((word, wIdx) => {
        const chars = word.split("");
        const wordEl = (
          <span key={wIdx} className={wordClassName}>
            {chars.map((char, cIdx) => {
              const delay = (startDelay + runningIndex * 0.025).toFixed(3);
              runningIndex++;
              return (
                <span
                  key={cIdx}
                  className="split-char"
                  style={{ transitionDelay: `${delay}s` }}
                >
                  {char}
                </span>
              );
            })}
          </span>
        );
        runningIndex++;
        return (
          <React.Fragment key={wIdx}>
            {wordEl}
            {wIdx < words.length - 1 && <span className="inline-block">&nbsp;</span>}
          </React.Fragment>
        );
      })}
    </span>
  );
};
