"use client";

import * as React from "react";
import { Copy, Check, Terminal, Code2, RotateCcw } from "lucide-react";
import { generateCliCommand, type Selections } from "@/lib/generators";
import { toast } from "sonner";

interface BottomBarProps {
  selections: Selections;
  packageManager: string;
  setPackageManager: (pm: string) => void;
  projectName: string;
  onOpenPreview: () => void;
  onReset: () => void;
}

export function BottomBar({
  selections,
  packageManager,
  setPackageManager,
  projectName,
  onOpenPreview,
  onReset,
}: BottomBarProps) {
  const [copied, setCopied] = React.useState(false);
  const command = generateCliCommand(selections, packageManager, projectName);

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    toast.success("Command copied to clipboard");
    setTimeout(() => setCopied(false), 2000);
  };

  // Count active capabilities
  const countBlocks = () => {
    let count = 0;
    if (selections.webFrontend !== "none") count++;
    if (selections.nativeFrontend !== "none") count++;
    if (selections.backendRuntime !== "none") count++;
    if (selections.apiLayer !== "none") count++;
    if (selections.database !== "none") count++;
    if (selections.orm !== "none") count++;
    if (selections.auth !== "none") count++;
    if (selections.storage !== "none") count++;
    if (selections.aiBedrock !== "none") count++;
    if (Array.isArray(selections.asyncAndEvents)) count += selections.asyncAndEvents.length;
    if (Array.isArray(selections.addons)) count += selections.addons.length;
    return count;
  };

  const totalBlocks = countBlocks();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-zinc-800 bg-zinc-950/95 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-4 py-2.5 flex flex-col md:flex-row items-center justify-between gap-2.5">
        {/* Left: Terminal Prompt & Command */}
        <div className="flex w-full md:w-auto flex-1 items-center gap-2 rounded border border-zinc-800 bg-black px-3 py-1.5 font-mono text-xs overflow-hidden">
          <Terminal size={14} className="shrink-0 text-[#FF9900]" />
          <div className="truncate flex-1 text-zinc-300 select-all font-mono">{command}</div>
          <button
            onClick={handleCopy}
            className="shrink-0 flex items-center gap-1 text-[11px] font-mono text-zinc-300 hover:text-white px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-colors"
          >
            {copied ? (
              <>
                <Check size={12} className="text-emerald-400" />
                <span className="text-emerald-400">Copied</span>
              </>
            ) : (
              <>
                <Copy size={12} />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>

        {/* Right: Actions */}
        <div className="flex w-full md:w-auto items-center justify-between md:justify-end gap-2 shrink-0">
          {/* Package Manager Toggle */}
          <div className="flex items-center rounded border border-zinc-800 bg-zinc-900 p-0.5 text-xs font-mono">
            {["bun", "pnpm", "npm"].map((pm) => (
              <button
                key={pm}
                onClick={() => setPackageManager(pm)}
                className={`px-2 py-0.5 rounded text-[11px] transition-all ${
                  packageManager === pm
                    ? "bg-zinc-800 text-zinc-100 font-semibold shadow-xs"
                    : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                {pm}
              </button>
            ))}
          </div>

          <button
            onClick={onReset}
            title="Reset stack to defaults"
            className="flex items-center gap-1 rounded border border-zinc-800 bg-zinc-900 px-2 py-1 text-xs font-mono text-zinc-400 hover:text-zinc-200 hover:border-zinc-700 transition-colors"
          >
            <RotateCcw size={12} />
            <span className="hidden sm:inline">Reset</span>
          </button>

          {/* Inspect Code Button */}
          <button
            onClick={onOpenPreview}
            className="flex items-center gap-2 rounded bg-[#FF9900] px-3 py-1.5 text-xs font-mono font-semibold text-black hover:bg-[#FF9900]/90 transition-all shadow-xs"
          >
            <Code2 size={14} strokeWidth={2.5} />
            <span>Inspect Scaffold & Architecture</span>
            <span className="rounded bg-black/20 px-1 py-0.2 text-[10px] font-mono font-bold">
              {totalBlocks}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
