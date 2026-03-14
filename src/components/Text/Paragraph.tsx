import React from "react";

interface ParagraphProps {
  children: React.ReactNode;
  className?: string;
}

export default function Paragraph({ children, className = "" }: ParagraphProps) {
  return (
    <p className={`text-text-secondary leading-7 ${className}`}>{children}</p>
  );
}
