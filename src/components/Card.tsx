import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
};

export function Card({ children, className, innerClassName }: CardProps) {
  return (
    <div
      className={`rounded-2xl p-[2px] bg-gradient-to-br from-violet-500 to-pink-500 ${
        className ?? ""
      }`}
    >
      <div
        className={`rounded-[calc(1rem-2px)] bg-[#120a35] p-6 shadow-lg ${
          innerClassName ?? ""
        }`}
      >
        {children}
      </div>
    </div>
  );
}
