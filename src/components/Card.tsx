import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
};

export function Card({ children }: CardProps) {
  return (
    <div className="rounded-xl border bg-[var(--card-bg)] border-[var(--card-border)] p-6 shadow">
      {children}
    </div>
  );
}
