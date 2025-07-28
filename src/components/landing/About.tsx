"use client";

import { Bot, User } from "lucide-react";

const chat = [
  {
    role: "user",
    message: "What were the key decisions?",
  },
  {
    role: "ai",
    message: "Shift launch to Aug 5. Approve Q3 roadmap.",
  },
  {
    role: "user",
    message: "Can I export this?",
  },
  {
    role: "ai",
    message: "Sure! PDF, Markdown, or public link.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="w-full py-28 px-4 sm:px-6 lg:px-8 bg-[#0e062b] text-white"
    >
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <h2 className="text-3xl sm:text-4xl font-bold">Meet Recappa</h2>
        <p className="text-gray-400 text-base">
          Recappa acts like your smart assistant — capturing what matters from
          every meeting.
        </p>
      </div>

      <div className="mt-12 bg-gray-900 border border-gray-700 rounded-xl max-w-3xl mx-auto p-6 space-y-4 text-left shadow-md">
        {chat.map((line, i) => (
          <div
            key={i}
            className={`flex items-start gap-3 ${
              line.role === "user" ? "justify-end" : ""
            }`}
          >
            {line.role === "ai" && (
              <div className="flex items-center justify-center bg-violet-600 text-white rounded-full w-8 h-8 shrink-0">
                <Bot className="w-4 h-4" />
              </div>
            )}
            <div
              className={`rounded-lg px-4 py-2 text-sm ${
                line.role === "user"
                  ? "bg-violet-700 text-white"
                  : "bg-gray-800 text-gray-200"
              }`}
            >
              {line.message}
            </div>
            {line.role === "user" && (
              <div className="flex items-center justify-center bg-white text-gray-900 rounded-full w-8 h-8 shrink-0">
                <User className="w-4 h-4" />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
