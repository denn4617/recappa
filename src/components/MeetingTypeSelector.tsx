"use client";

import { useState } from "react";

const meetingTypes = [
  { label: "Standup", value: "standup" },
  { label: "Sales Call", value: "sales" },
  { label: "Client Review", value: "client" },
  { label: "Interview", value: "interview" },
];

export default function MeetingTypeSelector({
  selectedType,
  setSelectedType,
}: {
  selectedType: string;
  setSelectedType: (type: string) => void;
}) {
  return (
    <div className="flex flex-col gap-2 w-full max-w-xs">
      <p className="text-sm font-medium text-gray-700">Select meeting type</p>
      <div className="flex flex-col gap-2">
        {meetingTypes.map((type) => (
          <button
            key={type.value}
            onClick={() => setSelectedType(type.value)}
            className={`px-4 py-2 rounded-lg border text-sm transition
              ${
                selectedType === type.value
                  ? "bg-blue-100 border-blue-500 text-blue-700"
                  : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
              }`}
          >
            {type.label}
          </button>
        ))}
      </div>
    </div>
  );
}
