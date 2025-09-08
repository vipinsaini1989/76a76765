"use client";

import { Download } from "lucide-react";

export function ResumeDownloadButton({
  compact = false,
}: {
  compact?: boolean;
}) {
  const base =
    "inline-flex items-center cursor-pointer rounded bg-sky-600 text-white hover:opacity-90 disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 dark:focus:ring-offset-background";
  const full = "gap-2 px-3 py-2 text-xs font-medium";
  const mini = "p-2";

  return (
    <button
      type="button"
      onClick={window.print}
      className={`${base} ${compact ? mini : full}`}
      aria-label="Download Resume"
    >
      <Download className="size-4" aria-hidden />
      {compact ? (
        <span className="sr-only">Download Resume</span>
      ) : (
        "Download Resume"
      )}
    </button>
  );
}
