"use client";

import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import styles from "./Calendar.module.css";
import { isValid, parseISO, format } from "date-fns";

type CalendarProps = {
  selectedDate: string | null;
  onSelect: (date: string | null) => void;
  meetingDates: string[]; // e.g. ["2025-07-15"]
};

export default function Calendar({
  selectedDate,
  onSelect,
  meetingDates,
}: CalendarProps) {
  const parsedMeetingDates = meetingDates
    .map((dateStr) => parseISO(dateStr))
    .filter((d) => isValid(d));

  return (
    <DayPicker
      mode="single"
      selected={
        selectedDate && isValid(parseISO(selectedDate))
          ? parseISO(selectedDate)
          : undefined
      }
      onSelect={(date: Date | undefined) => {
        if (date) {
          const localDate = format(date, "yyyy-MM-dd"); // ✅ Local time-safe format
          onSelect(localDate);
        } else {
          onSelect(null);
        }
      }}
      modifiers={{ hasMeeting: parsedMeetingDates }}
      modifiersClassNames={{ hasMeeting: styles.hasMeeting }}
      className="p-1"
      classNames={{
        selected: "text-[var(--color-primary)] font-bold",
        today: "text-[var(--color-accent)] font-bold",
      }}
    />
  );
}
