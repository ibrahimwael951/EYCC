"use client";
import { useState } from "react";

type Props = {
  ambassadorCode: string;
};

function CopyToClipboard(text: string) {
  if (navigator.clipboard && window.isSecureContext) {
    return navigator.clipboard.writeText(text);
  } else {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.position = "fixed";
    textarea.style.left = "-9999px";
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(textarea);
    return ok ? Promise.resolve() : Promise.reject();
  }
}

export default function CopyInviteLink({ ambassadorCode }: Props) {
  const link = `https://eycc.stemeghackclub.org/register?code=${ambassadorCode}`;
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await CopyToClipboard(link);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      alert("Couldn't copy. Please copy manually.");
    }
  };

  return (
    <div className="space-y-3">
      <h1 className="text-2xl font-semibold">
        Share this link to win a prize!
      </h1>

      <button
        onClick={handleCopy}
        onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && handleCopy()}
        className="w-full text-left p-3 rounded-2xl border border-green-600   flex items-center justify-between  "
        aria-label="Copy invite link"
      >
        <code className="break-all">{link}</code>
      <button
        onClick={handleCopy}
        className="px-4 py-2 rounded-xl border border-green-600 hover:bg-green-600/10"
      >
        {copied ? "Copied!" : "Copy Link"}
      </button>
      </button>

    </div>
  );
}
