"use client";

import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import Image from "next/image";
import { FileUp, Trash2 } from "lucide-react";
import MediaPreview from "./MediaPreview";

export default function DragAndDrop({
  selectedMeetingType,
}: {
  selectedMeetingType: string;
}) {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      setUploadedFile(acceptedFiles[0]);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "audio/mpeg": [".mp3"],
      "video/mp4": [".mp4"],
    },
    multiple: false,
  });

  function formatFileSize(bytes: number): string {
    const mb = bytes / (1024 * 1024);
    return `${mb.toFixed(2)} MB`;
  }

  function getFileIcon(fileType: string): string {
    if (fileType === "video/mp4") return "/mp4-file.png";
    if (fileType === "audio/mpeg") return "/mp3-file.png";
    return "/file.svg";
  }

  return (
    <div className="w-full max-w-xl">
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-xl p-16 cursor-pointer transition ${
          isDragActive
            ? "border-blue-500 bg-[var(--active-drag)]"
            : "border-[var(--meeting-border)] bg-[var(--background)]"
        }`}
      >
        <input {...getInputProps()} />
        <div className="flex flex-col gap-2 items-center text-center">
          <FileUp
            className={`w-10 h-10 ${
              isDragActive ? "text-blue-600" : "text-[var(--foreground)]"
            }`}
          />
          {isDragActive ? (
            <p className="text-blue-600 font-medium">Drop the file here ...</p>
          ) : (
            <p className="text-[var(--foreground)]">
              Drag & drop an .mp3 or .mp4 file here, or click to select one
            </p>
          )}
        </div>
      </div>

      {uploadedFile && (
        <div className="flex justify-between items-center gap-4 mt-4 p-4 border border-[var(--meeting-border)] rounded-lg shadow-sm bg-[var(--background)]">
          <div className="flex flex-row items-center gap-4">
            <Image
              src={getFileIcon(uploadedFile.type)}
              alt="Uploaded File Icon"
              width={50}
              height={50}
            />

            <div className="flex flex-col">
              <p className="text-sm text-[var(--foreground)]">
                {uploadedFile.name}
              </p>
              <p className="font-semibold">
                {formatFileSize(uploadedFile.size)}
              </p>
              <p className="text-xs text-gray-500">
                Type: {selectedMeetingType}
              </p>
            </div>
          </div>

          <button
            onClick={() =>
              console.log(`Processing ${selectedMeetingType} meeting...`)
            }
            className="px-2 py-1 shadow rounded-xl border border-[var(--color-primary)] bg-[var(--color-primary)] text-white text-sm"
          >
            Process
          </button>

          <button
            onClick={() => setUploadedFile(null)}
            className="text-gray-400 hover:text-red-500 hover:cursor-pointer transition"
            title="Remove file"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
      )}
      {uploadedFile && <MediaPreview file={uploadedFile} />}
    </div>
  );
}
