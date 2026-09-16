import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { kinds } from "@/lib/site";
import { ProjectThumb } from "@/components/project-thumb";

/**
 * Work presented as an index rather than a card grid: year, project, kind and
 * stack in fixed columns, so the whole body of work can be read in one pass.
 */
export function WorkIndex({ items, className = "" }) {
  if (!items.length) {
    return (
      <p className="border-t border-rule py-10 text-sm text-muted">
        Nothing in this category yet. Try another filter.
      </p>
    );
  }

  return (
    <ul className={`border-t border-rule ${className}`}>
      {items.map((project) => (
        <li key={project.slug} className="border-b border-rule">
          <Link
            href={`/work/${project.slug}`}
            className="group -mx-3 flex flex-col gap-3 px-3 py-5 transition-colors hover:bg-surface sm:flex-row sm:items-center sm:gap-6 sm:py-6"
          >
            <ProjectThumb
              project={project}
              sizes="160px"
              padding="p-2"
              className="aspect-[3/2] w-24 shrink-0 sm:w-28"
            />

            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 text-xs text-muted">
                <span className="tnum">{project.year}</span>
                <span>{kinds[project.kind]}</span>
                <span>{project.context}</span>
              </div>
              <h3 className="display display-sm mt-1.5 group-hover:text-accent">
                {project.title}
              </h3>
              <p className="mt-1 text-sm text-muted">{project.subtitle}</p>
            </div>

            <p className="hidden w-52 shrink-0 text-sm text-muted lg:block">
              {project.stack.join(", ")}
            </p>

            <ArrowUpRight
              aria-hidden="true"
              strokeWidth={1.5}
              className="hidden size-4 shrink-0 text-muted transition-colors group-hover:text-accent sm:block"
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}
