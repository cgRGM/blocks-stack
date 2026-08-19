"use client";

import * as React from "react";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { AwsBlocksIcon, GithubIcon } from "./icons";
import { Sparkles, ExternalLink } from "lucide-react";

interface HeaderProps {
  onOpenPresets?: () => void;
  selectedPresetName?: string;
}

export default function Header({ onOpenPresets, selectedPresetName }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2.5">
        {/* Left: Branding */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-zinc-900 border border-zinc-800 text-[#FF9900]">
              <AwsBlocksIcon size={18} />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold tracking-tight text-zinc-100 font-mono">
                AWS BLOCKS
              </span>
              <span className="text-zinc-600 font-mono text-xs">/</span>
              <span className="text-xs font-mono text-zinc-400">STACK BUILDER</span>
            </div>
          </Link>

          {selectedPresetName && (
            <div className="hidden lg:flex items-center gap-1.5 ml-3 rounded border border-zinc-800 bg-zinc-900 px-2 py-0.5 text-xs text-zinc-300 font-mono">
              <span className="text-zinc-500">preset:</span>
              <span className="font-medium text-[#FF9900]">{selectedPresetName}</span>
            </div>
          )}
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2">
          {onOpenPresets && (
            <button
              onClick={onOpenPresets}
              className="flex items-center gap-1.5 rounded-md border border-zinc-700 bg-zinc-900 px-2.5 py-1 text-xs font-medium text-zinc-200 hover:border-zinc-500 hover:bg-zinc-800 transition-colors"
            >
              <Sparkles size={13} className="text-[#FF9900]" />
              <span>Presets</span>
            </button>
          )}

          <a
            href="https://github.com/aws-devtools-labs/aws-blocks"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-md border border-zinc-800 px-2.5 py-1 text-xs font-medium text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900 transition-colors"
          >
            <GithubIcon size={14} />
            <span className="hidden sm:inline">GitHub</span>
          </a>

          <a
            href="https://aws-icons.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-1.5 rounded-md border border-zinc-800 px-2.5 py-1 text-xs font-medium text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900 transition-colors"
          >
            <span>AWS Icons</span>
            <ExternalLink size={11} className="text-zinc-500" />
          </a>

          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
