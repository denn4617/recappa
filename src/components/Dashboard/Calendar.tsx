"use client";

import { DayPicker, getDefaultClassNames } from "react-day-picker";
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

  const defaultClassNames = getDefaultClassNames();
  return (
    <div className={styles.root}>
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
        className="p-4 bg-[#120a35] text-white rounded-xl shadow-md"
        classNames={{
          selected: "bg-violet-500 rounded-xl text-white font-semibold",
          today: "text-pink-400 font-bold",
        }}
      />
    </div>
  );
}
