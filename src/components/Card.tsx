import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={`rounded-2xl p-[2px] h-fit ${className ?? ""}`}
      style={{
        background: `linear-gradient(200deg, var(--color-primary) 0%, var(--color-accent) 50%, var(--color-primary) 100%)`,
      }}
    >
      <div
        className={`rounded-[calc(1rem-2px)] bg-[var(--card-bg)] p-6 shadow-lg ${
          className ?? ""
        }`}
      >
        {children}
      </div>
    </div>
  );
}
