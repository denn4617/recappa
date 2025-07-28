"use client";

import Link from "next/link";

type Meeting = {
  id: string;
  title: string;
  date: string; // YYYY-MM-DD
  summary: string;
};

type MeetingListProps = {
  meetings: Meeting[];
  className?: string;
};

export function MeetingList({ meetings, className }: MeetingListProps) {
  return (
    <div className={`space-y-4 ${className ?? ""}`}>
      {meetings.map((meeting) => (
        <Link
          key={meeting.id}
          href={`/dashboard/meeting/${meeting.id}`}
          className="block rounded-xl border border-[#2d1f5f] bg-gray-900 hover:bg-violet-500/10 p-4 transition-colors shadow-md"
        >
          <h3 className="text-lg font-semibold text-white">{meeting.title}</h3>
          <p className="text-xs text-gray-400 mb-2">{meeting.date}</p>
          <p className="text-sm text-gray-300 line-clamp-2">
            {meeting.summary}
          </p>
        </Link>
      ))}
    </div>
  );
}
