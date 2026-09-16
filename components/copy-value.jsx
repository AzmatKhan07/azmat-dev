"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Copy } from "lucide-react";

export function CopyValue({ value, label }) {
  const [copied, setCopied] = useState(false);
  const timer = useRef(null);

  useEffect(() => () => clearTimeout(timer.current), []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard blocked by the browser; the value stays selectable on screen.
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      className="flex items-center gap-1.5 text-xs text-muted hover:text-foreground"
    >
      {copied ? (
        <>
          <Check aria-hidden="true" className="size-3.5 text-success" strokeWidth={2} />
          <span className="text-success">Copied</span>
        </>
      ) : (
        <>
          <Copy aria-hidden="true" className="size-3.5" strokeWidth={1.75} />
          <span>Copy {label}</span>
        </>
      )}
    </button>
  );
}
