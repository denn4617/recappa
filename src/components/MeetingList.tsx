"use client";

import Link from "next/link";
import { Card } from "./Card";

type Meeting = {
  id: string;
  title: string;
  date: string;
  summary: string;
};

const dummyMeetings: Meeting[] = [
  {
    id: "1",
    title: "Weekly Sync - Engineering",
    date: "2025-07-15",
    summary: "Discussed roadmap updates, blockers, and action items for Q3.",
  },
  {
    id: "2",
    title: "Client Review - Acme Corp",
    date: "2025-07-10",
    summary:
      "Walked through deliverables. Key decision: shift launch to Aug 5.",
  },
  {
    id: "3",
    title: "Sales Demo - Prospect XYZ",
    date: "2025-07-07",
    summary: "Presentation of Recappa features. Next step: pricing proposal.",
  },
];

export function MeetingList() {
  return (
    <Card>
      <div className="space-y-4">
        {dummyMeetings.map((meeting) => (
          <Link
            key={meeting.id}
            href={`/dashboard/meeting/${meeting.id}`}
            className="block rounded-lg border border-gray-200 dark:border-gray-700 bg-[var(--background)] hover:bg-[var(--color-primary)]/5 p-4 transition-colors shadow-sm"
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
    </Card>
  );
}
