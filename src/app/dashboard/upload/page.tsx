// src/app/dashboard/upload/page.tsx
"use client";

import { useState } from "react";
import DragAndDrop from "@/components/DragAndDrop";
import MeetingTypeSelector from "@/components/MeetingTypeSelector";
import { Card } from "@/components/Card";

export default function UploadsPage() {
  const [selectedMeetingType, setSelectedMeetingType] = useState("standup");

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Upload a Meeting</h1>
      <Card>
        <div className="flex flex-col md:flex-row gap-8">
          <DragAndDrop selectedMeetingType={selectedMeetingType} />
          <MeetingTypeSelector
            selectedType={selectedMeetingType}
            setSelectedType={setSelectedMeetingType}
          />
        </div>
      </Card>
    </div>
  );
}
