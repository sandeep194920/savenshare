import React from "react";

interface HeadingProps {
  children: React.ReactNode;
  className?: string;
}

export function H1({ children, className = "" }: HeadingProps) {
  return (
    <h1
      className={`font-bold text-4xl md:text-5xl leading-tight text-text-primary ${className}`}
    >
      {children}
    </h1>
  );
}

export function H2({ children, className = "" }: HeadingProps) {
  return (
    <div className="text-center mb-10">
      <h2
        className={`font-bold text-2xl md:text-3xl text-text-primary tracking-wide ${className}`}
      >
        {children}
      </h2>
      <div className="w-16 h-0.5 bg-primary mx-auto mt-3" />
    </div>
  );
}

export function H3({ children, className = "" }: HeadingProps) {
  return (
    <h3
      className={`font-semibold text-xl text-text-primary leading-snug ${className}`}
    >
      {children}
    </h3>
  );
}
