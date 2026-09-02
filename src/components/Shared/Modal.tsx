"use client";

import { useEffect } from "react";
import { FiX } from "react-icons/fi";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  widthClass?: string;
}

export default function Modal({
  open,
  onClose,
  title,
  children,
  widthClass = "max-w-lg",
}: ModalProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start sm:items-center justify-center px-4 py-10 overflow-y-auto"
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        className={`relative w-full ${widthClass} bg-[#f8f7f4] shadow-xl px-8 py-10 sm:px-10`}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-5 right-5 text-neutral-500 hover:text-neutral-900 transition-colors text-[18px]"
        >
          <FiX />
        </button>

        {title && (
          <h2 className="font-heading italic font-light text-[28px] text-neutral-900 mb-5 pr-6">
            {title}
          </h2>
        )}

        <div className="text-[14px] leading-[1.7] text-neutral-700">
          {children}
        </div>
      </div>
    </div>
  );
}
