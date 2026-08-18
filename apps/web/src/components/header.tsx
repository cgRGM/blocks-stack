"use client";

import * as React from "react";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { AwsBlocksIcon, GithubIcon } from "./icons";
import { Sparkles, Box } from "lucide-react";

interface HeaderProps {
  onOpenPresets?: () => void;
  selectedPresetName?: string;
}

export default function Header({ onOpenPresets, selectedPresetName }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2.5">
        {/* Left: Branding */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FF9900]/10 border border-[#FF9900]/30 text-[#FF9900] shadow-xs group-hover:scale-105 transition-transform">
              <AwsBlocksIcon size={20} />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-sm font-black tracking-tight text-foreground font-mono">
                  AWS BLOCKS
                </span>
                <span className="rounded bg-[#FF9900]/15 text-[#FF9900] px-1.5 py-0.2 text-[10px] font-mono font-bold uppercase tracking-wider border border-[#FF9900]/30">
                  BUILDER
                </span>
              </div>
              <span className="text-[10px] text-muted-foreground -mt-0.5">
                Infrastructure from Code Stack Generator
              </span>
            </div>
          </Link>

          {selectedPresetName && (
            <div className="hidden lg:flex items-center gap-1.5 ml-4 rounded-full border border-[#FF9900]/40 bg-amber-500/[0.06] px-2.5 py-1 text-xs text-foreground font-medium">
              <Sparkles size={13} className="text-[#FF9900]" />
              <span className="text-muted-foreground text-[11px]">Preset:</span>
              <span className="font-semibold text-[#FF9900]">{selectedPresetName}</span>
            </div>
          )}
        </div>

        {/* Right: Quick Links & Actions */}
        <div className="flex items-center gap-2">
          {onOpenPresets && (
            <button
              onClick={onOpenPresets}
              className="flex items-center gap-1.5 rounded-lg border border-[#FF9900]/50 bg-[#FF9900]/10 px-3 py-1.5 text-xs font-semibold text-[#FF9900] hover:bg-[#FF9900]/20 transition-colors shadow-xs"
            >
              <Sparkles size={14} />
              <span>Presets</span>
            </button>
          )}

          <a
            href="https://github.com/aws-devtools-labs/aws-blocks"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
          >
            <GithubIcon size={14} />
            <span className="hidden sm:inline">GitHub</span>
          </a>

          <a
            href="https://aws-icons.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
          >
            <Box size={14} />
            <span>AWS Icons</span>
          </a>

          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
