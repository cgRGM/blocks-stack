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
    toast.success("CLI command copied to clipboard!");
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
    <div className="sticky bottom-0 z-40 border-t border-border/80 bg-background/90 backdrop-blur-xl shadow-2xl">
      <div className="mx-auto max-w-7xl px-4 py-3 flex flex-col md:flex-row items-center justify-between gap-3">
        {/* Left: Command Box */}
        <div className="flex w-full md:w-auto flex-1 items-center gap-2 rounded-lg border border-border/80 bg-muted/40 px-3 py-2 font-mono text-xs overflow-hidden">
          <Terminal size={15} className="shrink-0 text-[#FF9900]" />
          <div className="truncate flex-1 text-foreground/90 font-medium select-all">{command}</div>
          <button
            onClick={handleCopy}
            className="shrink-0 flex items-center gap-1 text-[11px] font-semibold text-[#FF9900] hover:text-amber-400 px-2 py-0.5 rounded hover:bg-[#FF9900]/10 transition-colors"
          >
            {copied ? (
              <>
                <Check size={13} className="text-emerald-500" />
                <span className="text-emerald-500">Copied</span>
              </>
            ) : (
              <>
                <Copy size={13} />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>

        {/* Right: Controls & Actions */}
        <div className="flex w-full md:w-auto items-center justify-between md:justify-end gap-2.5">
          {/* Package Manager Selector */}
          <div className="flex items-center rounded-lg border border-border/70 bg-muted/50 p-0.5 text-xs font-mono">
            {["bun", "pnpm", "npm"].map((pm) => (
              <button
                key={pm}
                onClick={() => setPackageManager(pm)}
                className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-all ${
                  packageManager === pm
                    ? "bg-background text-foreground shadow-xs font-bold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {pm}
              </button>
            ))}
          </div>

          <button
            onClick={onReset}
            title="Reset stack to defaults"
            className="flex items-center gap-1.5 rounded-lg border border-border px-2.5 py-2 text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
          >
            <RotateCcw size={14} />
            <span className="hidden sm:inline">Reset</span>
          </button>

          {/* Inspect Code / Architecture Button */}
          <button
            onClick={onOpenPreview}
            className="flex items-center gap-2 rounded-lg bg-[#FF9900] px-4 py-2 text-xs font-semibold text-black hover:bg-[#FF9900]/90 transition-all shadow-md active:scale-98"
          >
            <Code2 size={15} strokeWidth={2.5} />
            <span>Inspect Architecture & Code</span>
            <span className="rounded-full bg-black/15 px-1.5 py-0.2 text-[10px] font-mono font-bold">
              {totalBlocks}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
