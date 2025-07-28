"use client";

import { Mic, Sparkles, Users, Share } from "lucide-react";

const features = [
  {
    icon: <Mic className="w-6 h-6 text-violet-400" />,
    title: "AI-Powered Transcription",
    description:
      "Automatically convert recorded meetings into accurate, searchable transcripts in seconds.",
  },
  {
    icon: <Sparkles className="w-6 h-6 text-violet-400" />,
    title: "Smart Summarization",
    description:
      "Get concise summaries, action items, and decisions — no manual notes required.",
  },
  {
    icon: <Users className="w-6 h-6 text-violet-400" />,
    title: "Speaker Detection",
    description:
      "Identify and label who said what, for better context and accountability.",
  },
  {
    icon: <Share className="w-6 h-6 text-violet-400" />,
    title: "Export & Share",
    description:
      "Download results as PDF or Markdown, or share via public links with your team.",
  },
];

export default function Features() {
  return (
    <section className="w-full py-24 px-4 sm:px-6 lg:px-8 text-white bg-[#0e062b]">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Features that make Recappa powerful
        </h2>
        <p className="text-gray-400 text-base max-w-2xl mx-auto">
          Everything you need to turn your meetings into structured, shareable
          insights.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-gray-900 border border-gray-700 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition"
          >
            <div className="flex justify-center mb-4">{feature.icon}</div>
            <h3 className="text-lg font-semibold mb-2 text-white">
              {feature.title}
            </h3>
            <p className="text-sm text-gray-300">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
