"use client";

import { useMemo, useState } from "react";
import { kinds } from "@/lib/site";
import { WorkIndex } from "@/components/work-index";

export function WorkBrowser({ projects }) {
  const [kind, setKind] = useState("all");

  const filters = useMemo(() => {
    const present = [];
    for (const project of projects) {
      if (!present.includes(project.kind)) present.push(project.kind);
    }
    return [
      { id: "all", label: "Everything", count: projects.length },
      ...present.map((id) => ({
        id,
        label: kinds[id],
        count: projects.filter((p) => p.kind === id).length,
      })),
    ];
  }, [projects]);

  const items = kind === "all" ? projects : projects.filter((p) => p.kind === kind);

  return (
    <>
      <div className="flex flex-wrap items-baseline gap-x-6 gap-y-2 pb-6">
        {filters.map((filter) => {
          const active = filter.id === kind;
          return (
            <button
              key={filter.id}
              type="button"
              onClick={() => setKind(filter.id)}
              aria-pressed={active}
              className={`text-sm transition-colors ${
                active ? "text-foreground" : "text-muted hover:text-foreground"
              }`}
            >
              <span className={active ? "border-b border-foreground pb-0.5" : undefined}>
                {filter.label}
              </span>
              <span className="tnum ml-1.5 align-super text-[0.625rem] text-muted">
                {filter.count}
              </span>
            </button>
          );
        })}
      </div>

      <WorkIndex items={items} />
    </>
  );
}
