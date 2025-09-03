"use client";

import type React from "react";

import { useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { Download } from "lucide-react";

export function ResumeDownloadButton({
  targetRef,
  compact = false,
}: {
  targetRef: React.RefObject<HTMLElement | null>;
  compact?: boolean;
}) {
  const [loading, setLoading] = useState(false);

  async function handleDownload() {
    const el = targetRef.current;
    if (!el) return;
    setLoading(true);
    try {
      // Render at 2x for quality
      const canvas = await html2canvas(el as HTMLElement, {
        scale: 2,
        backgroundColor:
          getComputedStyle(document.body).backgroundColor || "#ffffff",
        useCORS: true,
        // ensure images loaded
        ignoreElements: (node) =>
          (node as HTMLElement).dataset?.noexport === "true",
      });
      // const imgData = canvas.toDataURL("image/png");

      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "px",
        format: "a4",
        compress: true,
      });
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();

      const imgWidth = pageWidth;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      // If taller than 2 pages, compute scale to fit within 2 pages
      const maxHeight = pageHeight * 2 - 24; // small margin
      const scale = imgHeight > maxHeight ? maxHeight / imgHeight : 1;

      const targetHeight = imgHeight * scale;
      const scaledCanvas = document.createElement("canvas");
      scaledCanvas.width = imgWidth;
      scaledCanvas.height = targetHeight;
      const ctx = scaledCanvas.getContext("2d")!;
      // draw scaled content
      ctx.drawImage(
        canvas,
        0,
        0,
        canvas.width,
        canvas.height,
        0,
        0,
        imgWidth,
        targetHeight
      );

      if (targetHeight <= pageHeight) {
        pdf.addImage(
          scaledCanvas.toDataURL("image/png"),
          "PNG",
          0,
          0,
          pageWidth,
          targetHeight
        );
      } else {
        // slice into two parts
        const firstHeight = pageHeight;
        const secondHeight = targetHeight - firstHeight;

        // create first slice
        const slice1 = document.createElement("canvas");
        slice1.width = imgWidth;
        slice1.height = firstHeight;
        slice1
          .getContext("2d")!
          .drawImage(
            scaledCanvas,
            0,
            0,
            imgWidth,
            firstHeight,
            0,
            0,
            imgWidth,
            firstHeight
          );

        // create second slice
        const slice2 = document.createElement("canvas");
        slice2.width = imgWidth;
        slice2.height = secondHeight;
        slice2
          .getContext("2d")!
          .drawImage(
            scaledCanvas,
            0,
            firstHeight,
            imgWidth,
            secondHeight,
            0,
            0,
            imgWidth,
            secondHeight
          );

        pdf.addImage(
          slice1.toDataURL("image/png"),
          "PNG",
          0,
          0,
          pageWidth,
          firstHeight
        );
        pdf.addPage();
        pdf.addImage(
          slice2.toDataURL("image/png"),
          "PNG",
          0,
          0,
          pageWidth,
          secondHeight
        );
      }

      pdf.save("resume.pdf");
    } finally {
      setLoading(false);
    }
  }

  const base =
    "inline-flex items-center rounded bg-sky-600 text-white hover:opacity-90 disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 dark:focus:ring-offset-background";
  const full = "gap-2 px-3 py-2 text-xs font-medium";
  const mini = "p-2";

  return (
    <button
      type="button"
      onClick={handleDownload}
      className={`${base} ${compact ? mini : full}`}
      disabled={loading}
      aria-label="Download Resume"
    >
      <Download className="size-4" aria-hidden />
      {compact ? (
        <span className="sr-only">Download Resume</span>
      ) : loading ? (
        "Preparing..."
      ) : (
        "Download Resume"
      )}
    </button>
  );
}
