"use client";

import Link from "next/link";
import AnimatedGradientBackground from "@/components/landing/AnimatedGradientBackground";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden text-white">
      <AnimatedGradientBackground />

      <div className="relative z-10 max-w-3xl text-center space-y-6">
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
          Turn your meetings into actionable insights
        </h1>

        <p className="text-lg text-gray-300">
          Recappa transcribes and summarizes recorded meetings with AI —
          generating clear summaries, tasks, and decisions automatically.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/login"
            className="px-6 py-3 rounded-xl text-white text-sm font-medium bg-violet-600 hover:bg-violet-700 transition"
          >
            Get Started
          </Link>

          <Link
            href="#features"
            className="px-6 py-3 rounded-xl border border-violet-500 text-violet-400 text-sm font-medium hover:bg-violet-600 hover:text-white transition"
          >
            See Features
          </Link>
        </div>
      </div>
    </section>
  );
}
