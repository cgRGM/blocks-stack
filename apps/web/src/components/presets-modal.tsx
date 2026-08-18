"use client";

import * as React from "react";
import { PRESET_STACKS, type PresetStack } from "@/data/presets";
import { X, Sparkles, Check, ArrowRight } from "lucide-react";
import { RenderIcon } from "./option-card";
import { toast } from "sonner";

interface PresetsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectPreset: (preset: PresetStack) => void;
  activePresetId?: string | null;
}

export function PresetsModal({
  isOpen,
  onClose,
  onSelectPreset,
  activePresetId,
}: PresetsModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative flex h-[85vh] w-full max-w-4xl flex-col rounded-xl border border-border bg-background shadow-2xl overflow-hidden">
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-border/80 px-5 py-4 bg-muted/30">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#FF9900]/10 border border-[#FF9900]/30 text-[#FF9900]">
              <Sparkles size={20} />
            </div>
            <div>
              <h3 className="text-base font-semibold tracking-tight text-foreground">
                AWS Blocks Architecture Presets
              </h3>
              <p className="text-xs text-muted-foreground">
                One-click fullstack architectures designed for modern AWS best practices
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="rounded-md p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Preset Cards Grid */}
        <div className="flex-1 overflow-y-auto p-5 grid grid-cols-1 md:grid-cols-2 gap-4">
          {PRESET_STACKS.map((preset) => {
            const isCurrent = activePresetId === preset.id;

            return (
              <div
                key={preset.id}
                className={`relative flex flex-col justify-between rounded-xl border p-4.5 transition-all ${
                  isCurrent
                    ? "border-[#FF9900] bg-amber-500/[0.05] ring-1 ring-[#FF9900]/40 shadow-sm"
                    : "border-border/80 bg-card hover:border-border hover:bg-accent/30"
                }`}
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-2.5">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/80 bg-muted/60 text-[#FF9900] p-1.5">
                        <RenderIcon name={preset.icon} size={20} />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-foreground">{preset.name}</h4>
                        <span className="text-[11px] font-medium text-[#FF9900]">
                          {preset.tagline}
                        </span>
                      </div>
                    </div>

                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider bg-[#FF9900]/10 text-[#FF9900] border border-[#FF9900]/30 shrink-0">
                      {preset.badge}
                    </span>
                  </div>

                  <p className="text-xs text-muted-foreground leading-relaxed mt-2">
                    {preset.description}
                  </p>

                  {/* Summary of key features */}
                  <div className="mt-3.5 flex flex-wrap gap-1.5 pt-3 border-t border-border/60">
                    <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-muted text-foreground/80 border border-border/60">
                      {String(preset.selections.webFrontend)}
                    </span>
                    <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-muted text-foreground/80 border border-border/60">
                      {String(preset.selections.database)}
                    </span>
                    <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-muted text-foreground/80 border border-border/60">
                      {String(preset.selections.auth)}
                    </span>
                    {preset.selections.aiBedrock !== "none" && (
                      <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-purple-500/10 text-purple-400 border border-purple-500/30">
                        Bedrock AI
                      </span>
                    )}
                  </div>
                </div>

                <div className="mt-4 pt-3 flex items-center justify-end">
                  <button
                    type="button"
                    onClick={() => {
                      onSelectPreset(preset);
                      toast.success(`Loaded preset: ${preset.name}`);
                      onClose();
                    }}
                    className={`flex items-center gap-1.5 rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-all ${
                      isCurrent
                        ? "bg-[#FF9900] text-black hover:bg-[#FF9900]/90"
                        : "border border-border bg-background text-foreground hover:bg-muted"
                    }`}
                  >
                    {isCurrent ? (
                      <>
                        <Check size={14} strokeWidth={3} />
                        <span>Active Stack</span>
                      </>
                    ) : (
                      <>
                        <span>Load Preset</span>
                        <ArrowRight size={13} />
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
