import { MeetingList } from "@/components/MeetingList";

export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Your Meetings</h1>
      <MeetingList />
    </div>
  );
}
