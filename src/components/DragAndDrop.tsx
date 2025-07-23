"use client"; // Only for app directory in Next.js 13/14

import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import Image from "next/image";
import { Trash2 } from "lucide-react";

export default function DragAndDrop() {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      setUploadedFile(acceptedFiles[0]); // Only handle one file for now
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
    return "/file.svg"; // fallback
  }

  return (
    <div className="w-full max-w-xl mx-auto mt-10 p-6">
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-xl p-10 text-center cursor-pointer transition bg-[var(--background)] ${
          isDragActive
            ? "border-blue-500 bg-blue-50"
            : "border-[var(--meeting-border)]"
        }`}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p className="text-blue-600 font-medium">Drop the file here ...</p>
        ) : (
          <p className="text-gray-600">
            Drag & drop an .mp3 or .mp4 file here, or click to select one
          </p>
        )}
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
              <p className="text-sm text-gray-700">{uploadedFile.name}</p>
              <p className="font-semibold">
                {formatFileSize(uploadedFile.size)}
              </p>
            </div>
          </div>

          <button
            onClick={() => setUploadedFile(null)}
            className="text-gray-400 hover:text-red-500 hover:cursor-pointer transition"
            title="Remove file"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
}
