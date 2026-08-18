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
  const [projectName] = React.useState<string>("my-aws-app");
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
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      {/* Header */}
      <Header
        onOpenPresets={() => setIsPresetsOpen(true)}
        selectedPresetName={activePreset?.name}
      />

      {/* Top Banner / Hero */}
      <section className="border-b border-border/80 bg-gradient-to-b from-muted/30 via-background to-background py-8 px-4 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#FF9900]/40 bg-amber-500/[0.08] px-3 py-1 text-xs font-semibold text-[#FF9900] mb-3 shadow-xs">
                <Sparkles size={13} />
                <span>Next-Gen Infrastructure from Code</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground font-mono">
                AWS BLOCKS <span className="text-[#FF9900]">STACK BUILDER</span>
              </h1>
              <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground max-w-2xl leading-relaxed">
                Compose fullstack AWS applications in seconds with modular type-safe blocks, local
                mock emulation, and automated CDK synthesis.
              </p>
            </div>

            {/* Quick Presets Pills */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono text-muted-foreground font-bold uppercase tracking-wider">
                  Quick Architecture Presets
                </span>
                <button
                  onClick={() => setIsPresetsOpen(true)}
                  className="text-[11px] font-semibold text-[#FF9900] hover:underline"
                >
                  View All ({PRESET_STACKS.length})
                </button>
              </div>
              <div className="flex flex-wrap gap-1.5 max-w-md">
                {PRESET_STACKS.slice(0, 4).map((preset) => (
                  <button
                    key={preset.id}
                    onClick={() => handleSelectPreset(preset)}
                    className={`flex items-center gap-1.5 rounded-lg border px-2.5 py-1 text-xs font-medium transition-all ${
                      activePresetId === preset.id
                        ? "border-[#FF9900] bg-[#FF9900]/15 text-[#FF9900] shadow-xs font-bold"
                        : "border-border/80 bg-muted/40 text-foreground/80 hover:bg-muted hover:text-foreground"
                    }`}
                  >
                    <span>{preset.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Search & Category Filter Bar */}
          <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-3 pt-4 border-t border-border/60">
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search
                size={15}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              />
              <input
                type="text"
                placeholder="Search blocks, frameworks, databases..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-lg border border-border/80 bg-card py-2 pl-9 pr-3 text-xs placeholder:text-muted-foreground/60 focus:border-[#FF9900] focus:outline-none focus:ring-1 focus:ring-[#FF9900]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] text-muted-foreground hover:text-foreground"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Quick Category Jump Tabs */}
            <div className="flex w-full md:w-auto items-center gap-1 overflow-x-auto pb-1 text-xs font-medium scrollbar-none">
              <button
                onClick={() => setActiveCategoryFilter("all")}
                className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-all ${
                  activeCategoryFilter === "all"
                    ? "bg-[#FF9900] text-black font-bold shadow-xs"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                }`}
              >
                All Sections
              </button>
              {BUILDER_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategoryFilter(cat.id)}
                  className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-all font-mono text-[11px] ${
                    activeCategoryFilter === cat.id
                      ? "bg-[#FF9900] text-black font-bold shadow-xs"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
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
      <main className="mx-auto max-w-7xl w-full px-4 sm:px-6 py-8 space-y-10">
        {filteredCategories.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-center border rounded-xl border-dashed border-border p-8 bg-muted/20">
            <Boxes size={36} className="text-muted-foreground/50 mb-3" />
            <h3 className="text-sm font-semibold text-foreground">No blocks found</h3>
            <p className="text-xs text-muted-foreground mt-1">
              No categories or options matched &ldquo;{searchQuery}&rdquo;
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveCategoryFilter("all");
              }}
              className="mt-4 rounded-lg bg-[#FF9900] px-3.5 py-1.5 text-xs font-semibold text-black hover:bg-[#FF9900]/90"
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

      {/* Bottom Floating Command & Action Bar */}
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
