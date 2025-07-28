// src/components/landing/LiveDemo.tsx
"use client";

import { useState } from "react";
import {
  FileText,
  Sparkles,
  Folder,
  File,
  Dock,
  FileImage,
  Music,
  FolderDown,
  FileVideo,
} from "lucide-react";

const fakeFiles = ["sales-call.mp4", "client-brief.mp3", "team-sync.mp4"];

const summaries: Record<
  string,
  { title: string; summary: string; actionItems: string[] }
> = {
  "sales-call.mp4": {
    title: "Sales Strategy Sync - June 2025",
    summary:
      "Discussed quarterly goals, lead pipeline status, and next steps for outreach.",
    actionItems: [
      "Follow up with Q2 high-intent leads",
      "Finalize new pricing sheet before Friday",
      "Schedule 1:1s with top reps for strategy alignment",
    ],
  },
  "client-brief.mp3": {
    title: "Client Briefing - Q3 Launch Plan",
    summary:
      "Covered expectations for the Q3 campaign, discussed milestones and reviewed creative timelines.",
    actionItems: [
      "Send finalized timeline to client",
      "Share brand asset folder with design team",
      "Confirm client approval on visual direction",
    ],
  },
  "team-sync.mp4": {
    title: "Team Standup - Internal Weekly Sync",
    summary:
      "Reviewed last week's progress and blockers, and aligned on sprint goals.",
    actionItems: [
      "Assign PR reviews for backend integration",
      "Schedule UI polish pass on dashboard",
      "Post update in #product-sync channel",
    ],
  },
};

export default function LiveDemo() {
  const [uploaded, setUploaded] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [draggedOver, setDraggedOver] = useState(false);
  const [fileDropped, setFileDropped] = useState<string | null>(null);

  const handleAnalyze = () => {
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      setUploaded(true);
    }, 1500);
  };

  const resetDemo = () => {
    setUploaded(false);
    setProcessing(false);
    setFileDropped(null);
  };

  return (
    <section className="w-full py-24 text-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center space-y-6">
        <h2 className="text-3xl sm:text-4xl font-bold">
          Try Recappa Instantly
        </h2>
        <p className="text-gray-400 text-base">
          Drag and drop a mock meeting file and click "Analyze" to preview how
          Recappa works.
        </p>

        <div className="mt-12 flex flex-col lg:flex-row justify-center gap-8 items-start">
          {/* Fake file explorer */}
          <div className="bg-gray-800 border border-gray-700 rounded-md w-full max-w-sm text-left shadow-md overflow-hidden">
            <div className="bg-gray-700 px-4 py-2 text-xs font-medium text-gray-300 border-b border-gray-600">
              <div className="flex flex-row gap-2">
                <div className="h-2 w-2 rounded-full bg-red-600" />
                <div className="h-2 w-2 rounded-full bg-yellow-600" />
                <div className="h-2 w-2 rounded-full bg-green-600" />
              </div>
            </div>
            <div className="flex flex-row space-y-2">
              <div className="border-r border-gray-700">
                <div className="space-y-2 text-gray-300 p-1 mt-1">
                  <div className="flex flex-row gap-1 items-center p-1">
                    <Dock className="w-4 h-4" />
                    <p className="text-sm">Desktop</p>
                  </div>
                  <div className="flex flex-row gap-1 items-center bg-gray-700 rounded p-1">
                    <File className="w-4 h-4" />
                    <p className="text-sm">Documents</p>
                  </div>
                  <div className="flex flex-row gap-1 items-center p-1">
                    <FolderDown className="w-4 h-4" />
                    <p className="text-sm">Downloads</p>
                  </div>
                  <div className="flex flex-row gap-1 items-center p-1">
                    <FileImage className="w-4 h-4" />
                    <p className="text-sm">Pictures</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-1 mt-2 mb-8">
                {fakeFiles.map((file) =>
                  !fileDropped || fileDropped !== file ? (
                    <div
                      key={file}
                      draggable
                      onDragStart={(e) =>
                        e.dataTransfer.setData("text/plain", file)
                      }
                      className="flex flex-col items-center gap-2 cursor-move select-none hover:bg-gray-700 p-1 rounded"
                    >
                      <FileVideo className="w-8 h-8 text-violet-400" />
                      <p className="text-sm text-gray-200">{file}</p>
                    </div>
                  ) : null
                )}
              </div>
            </div>
          </div>

          {/* Upload / Summary container */}
          <div className="w-full max-w-xl">
            {!uploaded ? (
              <div
                onDragOver={(e) => {
                  e.preventDefault();
                  setDraggedOver(true);
                }}
                onDragLeave={() => setDraggedOver(false)}
                onDrop={(e) => {
                  e.preventDefault();
                  const file = e.dataTransfer.getData("text/plain");
                  setDraggedOver(false);
                  if (file) setFileDropped(file);
                }}
                className={`border-2 border-dashed rounded-xl p-8 transition ${
                  draggedOver
                    ? "border-violet-300 bg-gray-700"
                    : "border-violet-500 bg-gray-800"
                }`}
              >
                <p className="text-sm text-gray-400 mb-4">
                  {fileDropped
                    ? `File ready to analyze: ${fileDropped}`
                    : "Drop a file here"}
                </p>

                {fileDropped && (
                  <div className="flex flex-col items-center justify-center gap-2">
                    <FileVideo className="w-8 h-8 text-violet-400" />
                    <p className="text-sm">{fileDropped}</p>
                  </div>
                )}

                <button
                  onClick={handleAnalyze}
                  disabled={!fileDropped || processing}
                  className="mt-6 px-5 py-2 rounded-xl bg-violet-600 hover:bg-violet-700 transition text-sm font-medium disabled:opacity-50 disabled:hover:bg-violet-600"
                >
                  {processing ? "Analyzing..." : "Analyze"}
                </button>
              </div>
            ) : (
              <div className="text-left space-y-4 bg-gray-800 rounded-xl p-6">
                <div className="flex items-center gap-2 text-violet-400 font-semibold">
                  <Sparkles className="w-4 h-4" />
                  <span>AI Summary</span>
                </div>
                <h3 className="text-lg font-bold">
                  {summaries[fileDropped!].title}
                </h3>
                <p className="text-sm text-gray-300">
                  {summaries[fileDropped!].summary}
                </p>

                <div>
                  <h4 className="mt-4 font-semibold text-sm text-violet-300">
                    Action Items
                  </h4>
                  <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
                    {summaries[fileDropped!].actionItems.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={resetDemo}
                  className="mt-6 px-4 py-2 rounded-md text-sm bg-gray-700 hover:bg-gray-600 text-white"
                >
                  Try Again
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
