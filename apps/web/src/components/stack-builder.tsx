"use client";

import * as React from "react";
import { BUILDER_CATEGORIES } from "@/data/builder-data";
import { PRESET_STACKS, type PresetStack } from "@/data/presets";
import { CategorySection } from "./category-section";
import { BottomBar } from "./bottom-bar";
import { CodePreviewModal } from "./code-preview-modal";
import { PresetsModal } from "./presets-modal";
import Header from "./header";
import { Search, Sparkles, Boxes } from "lucide-react";
import { toast } from "sonner";

export function StackBuilder() {
  // Initialize selections with default values from categories
  const [selections, setSelections] = React.useState<Record<string, string | string[]>>(() => {
    const initial: Record<string, string | string[]> = {};
    BUILDER_CATEGORIES.forEach((cat) => {
      initial[cat.id] = cat.defaultSelected;
    });
    return initial;
  });

  const [packageManager, setPackageManager] = React.useState<string>("bun");
  const [projectName, setProjectName] = React.useState<string>("my-aws-app");
  const [searchQuery, setSearchQuery] = React.useState<string>("");
  const [activeCategoryFilter, setActiveCategoryFilter] = React.useState<string>("all");
  const [isPreviewOpen, setIsPreviewOpen] = React.useState<boolean>(false);
  const [isPresetsOpen, setIsPresetsOpen] = React.useState<boolean>(false);
  const [activePresetId, setActivePresetId] = React.useState<string | null>("ai-agent");

  // Handle selecting an option
  const handleSelectOption = (categoryId: string, optionId: string) => {
    setSelections((prev) => {
      const category = BUILDER_CATEGORIES.find((c) => c.id === categoryId);
      if (!category) return prev;

      const next = { ...prev };

      if (category.type === "multiple") {
        const currentList = Array.isArray(prev[categoryId]) ? (prev[categoryId] as string[]) : [];
        if (currentList.includes(optionId)) {
          next[categoryId] = currentList.filter((id) => id !== optionId);
        } else {
          next[categoryId] = [...currentList, optionId];
        }
      } else {
        next[categoryId] = optionId;

        // Smart database & ORM compatibility auto-adjust
        if (categoryId === "database") {
          if (optionId === "dynamodb") {
            next.orm = "blocks-sdk";
          } else if (
            optionId === "aurora-postgres" ||
            optionId === "neon" ||
            optionId === "supabase"
          ) {
            if (prev.orm === "blocks-sdk") {
              next.orm = "drizzle";
            }
          }
        }
      }

      return next;
    });

    setActivePresetId(null);
  };

  // Reset to defaults
  const handleReset = () => {
    const initial: Record<string, string | string[]> = {};
    BUILDER_CATEGORIES.forEach((cat) => {
      initial[cat.id] = cat.defaultSelected;
    });
    setSelections(initial);
    setActivePresetId(null);
    toast.info("Stack reset to default configuration");
  };

  // Load a preset
  const handleSelectPreset = (preset: PresetStack) => {
    setSelections(preset.selections);
    if (preset.selections.packageManager && typeof preset.selections.packageManager === "string") {
      setPackageManager(preset.selections.packageManager);
    }
    setActivePresetId(preset.id);
  };

  // Filter categories based on search and category tab
  const filteredCategories = BUILDER_CATEGORIES.filter((category) => {
    // Tab filter
    if (activeCategoryFilter !== "all" && category.id !== activeCategoryFilter) {
      return false;
    }

    // Search query
    if (!searchQuery.trim()) return true;

    const query = searchQuery.toLowerCase();
    const titleMatch = category.title.toLowerCase().includes(query);
    const optionsMatch = category.options.some(
      (opt) =>
        opt.name.toLowerCase().includes(query) ||
        opt.description.toLowerCase().includes(query) ||
        opt.id.toLowerCase().includes(query),
    );

    return titleMatch || optionsMatch;
  });

  const activePreset = PRESET_STACKS.find((p) => p.id === activePresetId);

  return (
    <div className="flex min-h-screen flex-col bg-black text-zinc-100 selection:bg-zinc-800 selection:text-zinc-100">
      {/* Top Header */}
      <Header
        onOpenPresets={() => setIsPresetsOpen(true)}
        selectedPresetName={activePreset?.name}
      />

      {/* Top Configuration & Filter Bar */}
      <section className="border-b border-zinc-800/80 bg-zinc-950/40 py-6 px-4 sm:px-6">
        <div className="mx-auto max-w-6xl space-y-5">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-xl font-bold tracking-tight text-zinc-100 font-mono flex items-center gap-2">
                <span>Configure Project Stack</span>
              </h1>
              <p className="mt-1 text-xs text-zinc-400 max-w-2xl leading-relaxed">
                Compose modular AWS Blocks with end-to-end type safety, local mock emulation, and
                automated CDK synthesis.
              </p>
            </div>

            {/* Project Name & Presets */}
            <div className="flex items-center gap-2">
              <div className="flex items-center rounded-md border border-zinc-800 bg-zinc-900 px-2.5 py-1 text-xs font-mono text-zinc-400">
                <span className="text-zinc-500 mr-1.5">$</span>
                <input
                  type="text"
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                  className="w-28 bg-transparent text-zinc-200 focus:outline-none focus:text-white"
                  placeholder="project-name"
                />
              </div>

              <button
                onClick={() => setIsPresetsOpen(true)}
                className="flex items-center gap-1.5 rounded-md border border-zinc-700 bg-zinc-900 px-3 py-1.5 text-xs font-medium text-zinc-200 hover:border-zinc-500 hover:bg-zinc-800 transition-colors"
              >
                <Sparkles size={13} className="text-[#FF9900]" />
                <span>Presets</span>
              </button>
            </div>
          </div>

          {/* Quick Presets Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider shrink-0 mr-1">
              Presets:
            </span>
            {PRESET_STACKS.map((preset) => (
              <button
                key={preset.id}
                onClick={() => handleSelectPreset(preset)}
                className={`flex items-center gap-1.5 rounded border px-2.5 py-1 text-xs font-mono whitespace-nowrap transition-all ${
                  activePresetId === preset.id
                    ? "border-[#FF9900] bg-[#FF9900]/10 text-[#FF9900] font-semibold"
                    : "border-zinc-800 bg-zinc-900/60 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200"
                }`}
              >
                <span>{preset.name}</span>
              </button>
            ))}
          </div>

          {/* Search & Category Filter Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 pt-3 border-t border-zinc-800/60">
            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search
                size={14}
                className="absolute left-2.5 top-1/2 -translate-y-1/2 text-zinc-500"
              />
              <input
                type="text"
                placeholder="Filter blocks..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-md border border-zinc-800 bg-zinc-900/70 py-1.5 pl-8 pr-3 text-xs text-zinc-200 placeholder:text-zinc-500 focus:border-zinc-600 focus:outline-none"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] text-zinc-500 hover:text-zinc-300"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Quick Category Jump Tabs */}
            <div className="flex w-full md:w-auto items-center gap-1 overflow-x-auto pb-1 text-xs font-mono scrollbar-none">
              <button
                onClick={() => setActiveCategoryFilter("all")}
                className={`px-2.5 py-1 rounded text-xs whitespace-nowrap transition-all ${
                  activeCategoryFilter === "all"
                    ? "bg-zinc-800 text-zinc-100 font-semibold"
                    : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900"
                }`}
              >
                All
              </button>
              {BUILDER_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategoryFilter(cat.id)}
                  className={`px-2.5 py-1 rounded text-xs whitespace-nowrap transition-all ${
                    activeCategoryFilter === cat.id
                      ? "bg-zinc-800 text-zinc-100 font-semibold"
                      : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900"
                  }`}
                >
                  {cat.title
                    .replace("& RUNTIME", "")
                    .replace("& PERSISTENCE", "")
                    .replace("& ASSETS", "")
                    .replace("& EVENTS", "")}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Grid Sections */}
      <main className="mx-auto max-w-6xl w-full px-4 sm:px-6 py-8 space-y-8 pb-28">
        {filteredCategories.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-center border rounded-lg border-dashed border-zinc-800 p-8 bg-zinc-950/40">
            <Boxes size={32} className="text-zinc-600 mb-2" />
            <h3 className="text-xs font-semibold text-zinc-300">No blocks found</h3>
            <p className="text-xs text-zinc-500 mt-1">
              No categories or options matched &ldquo;{searchQuery}&rdquo;
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveCategoryFilter("all");
              }}
              className="mt-3 rounded border border-zinc-700 bg-zinc-900 px-3 py-1 text-xs text-zinc-200 hover:bg-zinc-800"
            >
              Reset Search
            </button>
          </div>
        ) : (
          filteredCategories.map((category) => (
            <CategorySection
              key={category.id}
              category={category}
              selectedValues={selections[category.id] || []}
              allSelections={selections}
              onSelectOption={handleSelectOption}
            />
          ))
        )}
      </main>

      {/* Bottom Floating Command Bar */}
      <BottomBar
        selections={selections}
        packageManager={packageManager}
        setPackageManager={setPackageManager}
        projectName={projectName}
        onOpenPreview={() => setIsPreviewOpen(true)}
        onReset={handleReset}
      />

      {/* Code & Architecture Modal */}
      <CodePreviewModal
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
        selections={selections}
        packageManager={packageManager}
        projectName={projectName}
      />

      {/* Presets Modal */}
      <PresetsModal
        isOpen={isPresetsOpen}
        onClose={() => setIsPresetsOpen(false)}
        onSelectPreset={handleSelectPreset}
        activePresetId={activePresetId}
      />
    </div>
  );
}
