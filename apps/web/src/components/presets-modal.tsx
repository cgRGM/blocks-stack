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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-3 sm:p-6 animate-in fade-in duration-150">
      <div className="relative flex h-[82vh] w-full max-w-4xl flex-col rounded-lg border border-zinc-800 bg-zinc-950 shadow-2xl overflow-hidden text-zinc-100">
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-zinc-800 px-5 py-3.5 bg-zinc-900/50">
          <div className="flex items-center gap-2.5">
            <div className="flex h-7 w-7 items-center justify-center rounded bg-zinc-800 border border-zinc-700 text-[#FF9900]">
              <Sparkles size={16} />
            </div>
            <div>
              <h3 className="text-sm font-semibold tracking-tight text-zinc-100 font-mono">
                AWS Architecture Presets
              </h3>
              <p className="text-xs text-zinc-400">
                Pre-configured fullstack templates for common AWS workloads
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="rounded p-1 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100 transition-colors"
          >
            <X size={16} />
          </button>
        </div>

        {/* Preset Cards Grid */}
        <div className="flex-1 overflow-y-auto p-5 grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {PRESET_STACKS.map((preset) => {
            const isCurrent = activePresetId === preset.id;

            return (
              <div
                key={preset.id}
                className={`relative flex flex-col justify-between rounded-lg border p-4 transition-all ${
                  isCurrent
                    ? "border-[#FF9900]/70 bg-[#FF9900]/[0.03]"
                    : "border-zinc-800/80 bg-zinc-900/30 hover:border-zinc-700 hover:bg-zinc-900/60"
                }`}
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-8 w-8 items-center justify-center rounded border border-zinc-800 bg-zinc-900 text-[#FF9900] p-1">
                        <RenderIcon name={preset.icon} size={20} />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-zinc-200">{preset.name}</h4>
                        <span className="text-[11px] text-[#FF9900] font-mono">
                          {preset.tagline}
                        </span>
                      </div>
                    </div>

                    <span className="text-[10px] font-mono font-medium px-2 py-0.2 rounded uppercase bg-zinc-800 text-zinc-400 border border-zinc-700 shrink-0">
                      {preset.badge}
                    </span>
                  </div>

                  <p className="text-xs text-zinc-400 leading-relaxed mt-2">{preset.description}</p>

                  {/* Summary of key features */}
                  <div className="mt-3 flex flex-wrap gap-1.5 pt-2.5 border-t border-zinc-800/60">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800/80 text-zinc-300 border border-zinc-700/60">
                      {String(preset.selections.webFrontend)}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800/80 text-zinc-300 border border-zinc-700/60">
                      {String(preset.selections.database)}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800/80 text-zinc-300 border border-zinc-700/60">
                      {String(preset.selections.auth)}
                    </span>
                    {preset.selections.aiBedrock !== "none" && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-teal-950/40 text-teal-300 border border-teal-800/40">
                        Bedrock AI
                      </span>
                    )}
                  </div>
                </div>

                <div className="mt-4 pt-2.5 flex items-center justify-end">
                  <button
                    type="button"
                    onClick={() => {
                      onSelectPreset(preset);
                      toast.success(`Loaded preset: ${preset.name}`);
                      onClose();
                    }}
                    className={`flex items-center gap-1.5 rounded px-3 py-1.5 text-xs font-mono font-semibold transition-all ${
                      isCurrent
                        ? "bg-[#FF9900] text-black hover:bg-[#FF9900]/90"
                        : "border border-zinc-700 bg-zinc-800 text-zinc-200 hover:bg-zinc-700 hover:text-white"
                    }`}
                  >
                    {isCurrent ? (
                      <>
                        <Check size={13} strokeWidth={3} />
                        <span>Active</span>
                      </>
                    ) : (
                      <>
                        <span>Select Preset</span>
                        <ArrowRight size={12} />
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
