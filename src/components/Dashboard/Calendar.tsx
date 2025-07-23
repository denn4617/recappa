"use client";

import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import styles from "./Calendar.module.css";
import { isValid, parseISO } from "date-fns";

type CalendarProps = {
  selectedDate: string | null;
  onSelect: (date: string | null) => void;
};

const meetingDates = [
  new Date(2025, 6, 15),
  new Date(2025, 6, 10),
  new Date(2025, 6, 7),
  new Date(2025, 6, 27),
];

export default function Calendar({ selectedDate, onSelect }: CalendarProps) {
  return (
    <DayPicker
      selected={
        selectedDate && isValid(parseISO(selectedDate))
          ? parseISO(selectedDate)
          : undefined
      }
      onSelect={(date: Date | undefined) => {
        if (date) {
          const iso = date.toISOString().split("T")[0];
          onSelect(iso);
        } else {
          onSelect(null);
        }
      }}
      modifiers={{ hasMeeting: meetingDates }}
      modifiersClassNames={{ hasMeeting: styles.hasMeeting }}
      className="bg-[var(--card-bg)] text-[var(--foreground)] p-4 rounded-xl shadow"
    />
  );
}
