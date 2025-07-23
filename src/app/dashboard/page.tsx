// src/app/dashboard/page.tsx
"use client";

import { useState } from "react";
import { Card } from "@/components/Card";
import Calendar from "@/components/Dashboard/Calendar";
import { MeetingList } from "@/components/Dashboard/MeetingList";
import { format, parseISO } from "date-fns";

type Meeting = {
  id: string;
  title: string;
  date: string; // format: YYYY-MM-DD
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
  {
    id: "4",
    title: "Product Planning",
    date: "2025-07-27",
    summary: "Reviewed upcoming features and discussed Q4 goals.",
  },
];

export default function DashboardPage() {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  // Sort and get 3 most recent
  const mostRecent = [...dummyMeetings]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 3);

  // Filter by selected date
  const meetingsForDate = selectedDate
    ? dummyMeetings.filter((m) => m.date === selectedDate)
    : [];

  return (
    <div className="h-full w-full overflow-hidden flex flex-col">
      <h1 className="text-2xl font-bold mb-4">Your Meetings</h1>
      <div className="grid grid-cols-[7fr_3fr] gap-10 flex-1 overflow-hidden">
        <div className="grid grid-rows-2 gap-5">
          <Card>
            <MeetingList meetings={mostRecent} />
          </Card>

          <Card className="h-[400px]" innerClassName="h-[400px]">
            <div className="grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 gap-4 h-full">
              <div className="w-full h-full">
                <Calendar
                  selectedDate={selectedDate}
                  onSelect={setSelectedDate}
                  meetingDates={dummyMeetings.map((m) => m.date)}
                />
              </div>
              {meetingsForDate.length > 0 ? (
                <MeetingList meetings={meetingsForDate} className="w-full" />
              ) : selectedDate ? (
                <div className="flex items-center justify-center text-sm text-muted-foreground px-4">
                  No recorded meetings for{" "}
                  {format(parseISO(selectedDate), "PP")}.
                </div>
              ) : (
                <div className="flex items-center justify-center text-sm text-muted-foreground px-4">
                  Select a date to view meetings.
                </div>
              )}
            </div>
          </Card>
        </div>

        <Card className="h-full" innerClassName="h-full">
          {/* Other content */}
        </Card>
      </div>
    </div>
  );
}
