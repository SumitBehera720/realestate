"use client";
import React from "react";

interface IconProps {
  icon: string;
  className?: string;
  width?: number | string;
  height?: number | string;
  style?: React.CSSProperties;
}

export const Icon: React.FC<IconProps> = ({
  icon,
  className = "",
  width = 20,
  height = 20,
  style,
}) => {
  return React.createElement("iconify-icon", {
    icon,
    class: className,
    width,
    height,
    style: { display: "inline-block", verticalAlign: "middle", ...style },
  });
};
