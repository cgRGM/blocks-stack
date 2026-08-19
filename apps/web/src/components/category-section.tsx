"use client";

import * as React from "react";
import type { CategoryGroup } from "@/data/builder-data";
import { OptionCard } from "./option-card";

interface CategorySectionProps {
  category: CategoryGroup;
  selectedValues: string | string[];
  allSelections: Record<string, string | string[]>;
  onSelectOption: (categoryId: string, optionId: string) => void;
}

export function CategorySection({
  category,
  selectedValues,
  allSelections,
  onSelectOption,
}: CategorySectionProps) {
  const isMulti = category.type === "multiple";
  const selectedArray = Array.isArray(selectedValues) ? selectedValues : [selectedValues];

  return (
    <section id={category.id} className="scroll-mt-20 space-y-2.5">
      {/* Category Header */}
      <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs text-[#FF9900] font-bold">&gt;_</span>
          <h2 className="text-xs font-bold tracking-wider uppercase text-zinc-200 font-mono">
            {category.title}
          </h2>
        </div>
        <div className="flex items-center gap-2">
          {category.description && (
            <span className="hidden md:inline-block text-[11px] text-zinc-500 font-normal">
              {category.description}
            </span>
          )}
          <span className="text-[11px] font-mono text-zinc-400 bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800">
            {isMulti
              ? `${selectedArray.length} selected`
              : selectedArray[0]
                ? "1 selected"
                : "None"}
          </span>
        </div>
      </div>

      {/* Grid of Options */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
        {category.options.map((option) => {
          const isSelected = selectedArray.includes(option.id);

          // Check if option is disabled due to requirements
          let disabled = false;
          let disabledReason: string | undefined;

          if (option.requires && option.requires.length > 0) {
            const missingReq = option.requires.find((reqId) => {
              const isFound = Object.values(allSelections).some((val) =>
                Array.isArray(val) ? val.includes(reqId) : val === reqId,
              );
              return !isFound;
            });

            if (missingReq) {
              disabled = true;
              disabledReason = option.requirementMessage || `Requires ${missingReq}`;
            }
          }

          if (option.incompatibleWith && option.incompatibleWith.length > 0) {
            const hasConflict = option.incompatibleWith.some((conflictId) => {
              return Object.values(allSelections).some((val) =>
                Array.isArray(val) ? val.includes(conflictId) : val === conflictId,
              );
            });

            if (hasConflict) {
              disabled = true;
              disabledReason = option.requirementMessage || "Incompatible with current selection";
            }
          }

          return (
            <OptionCard
              key={option.id}
              option={option}
              isSelected={isSelected}
              isMulti={isMulti}
              onSelect={() => onSelectOption(category.id, option.id)}
              disabled={disabled}
              disabledReason={disabledReason}
            />
          );
        })}
      </div>
    </section>
  );
}
