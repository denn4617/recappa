// src/components/MediaPreview.tsx
"use client";

import { useEffect, useState } from "react";

interface MediaPreviewProps {
  file: File;
}

export default function MediaPreview({ file }: MediaPreviewProps) {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  useEffect(() => {
    const objectUrl = URL.createObjectURL(file);
    setPreviewUrl(objectUrl);

    return () => {
      URL.revokeObjectURL(objectUrl);
    };
  }, [file]);

  if (!previewUrl) return null;

  return (
    <div className="mt-4">
      {file.type === "video/mp4" ? (
        <video controls src={previewUrl} className="w-full rounded-lg" />
      ) : file.type === "audio/mpeg" ? (
        <audio controls src={previewUrl} className="w-full" />
      ) : null}
    </div>
  );
}
