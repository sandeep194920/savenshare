"use client";
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "outline";
  className?: string;
}

export default function Button({
  children,
  onClick,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const base =
    "px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-200 cursor-pointer w-fit";
  const styles =
    variant === "primary"
      ? "bg-primary text-bg-default hover:bg-primary-light"
      : "border border-primary text-primary hover:bg-primary hover:text-bg-default";

  return (
    <button onClick={onClick} className={`${base} ${styles} ${className}`}>
      {children}
    </button>
  );
}
