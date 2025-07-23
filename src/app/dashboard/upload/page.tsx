import { Card } from "@/components/Card";
import DragAndDrop from "@/components/DragAndDrop";

export default function UploadsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Your Uploads</h1>
      <Card>
        <DragAndDrop />
      </Card>
    </div>
  );
}
