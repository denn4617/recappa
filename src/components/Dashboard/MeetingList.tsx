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
};

export function MeetingList({ meetings }: MeetingListProps) {
  return (
    <div className="space-y-4">
      {meetings.map((meeting) => (
        <Link
          key={meeting.id}
          href={`/dashboard/meeting/${meeting.id}`}
          className="block rounded-lg border border-[var(--meeting-border)] bg-[var(--background)] hover:bg-[var(--color-primary)]/5 p-4 transition-colors shadow-sm"
        >
          <h3 className="text-lg font-semibold">{meeting.title}</h3>
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
            {meeting.date}
          </p>
          <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-2">
            {meeting.summary}
          </p>
        </Link>
      ))}
    </div>
  );
}
