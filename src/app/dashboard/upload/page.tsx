"use client";

import { useState } from "react";
import DragAndDrop from "@/components/DragAndDrop";
import MeetingTypeSelector from "@/components/MeetingTypeSelector";
import { Card } from "@/components/Card";
import Calendar from "@/components/Dashboard/Calendar"; // ✅ Import calendar

export default function UploadsPage() {
  const [selectedMeetingType, setSelectedMeetingType] = useState("standup");
  const [selectedDate, setSelectedDate] = useState<string | null>(null); // ✅ New state

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Upload a Meeting</h1>
      <Card>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex flex-row gap-4 flex-1">
            <DragAndDrop
              selectedMeetingType={selectedMeetingType}
              // You’ll later pass selectedDate to the backend request here
            />
            <MeetingTypeSelector
              selectedType={selectedMeetingType}
              setSelectedType={setSelectedMeetingType}
            />
          </div>

          <div className="flex-1">
            <h2 className="text-md font-semibold mb-2">Select Meeting Date</h2>
            <Calendar
              selectedDate={selectedDate}
              onSelect={setSelectedDate}
              meetingDates={[]} // No past meetings on upload
            />
            {selectedDate && (
              <p className="text-sm text-muted-foreground mt-2">
                Selected: {selectedDate}
              </p>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
}
