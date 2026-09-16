import Image from "next/image";

/**
 * Shows a real screenshot when `project.image` is set, and otherwise draws a
 * wireframe standing in for the shape of the thing. Deliberately abstract:
 * a placeholder that admits it is one reads better than stock photography.
 */
export function ProjectThumb({
  project,
  className = "",
  padding = "p-3",
  sizes,
  priority = false,
}) {
  if (project.image) {
    return (
      <div
        className={`relative overflow-hidden rounded-xs border border-rule bg-sunk ${className}`}
      >
        <Image
          src={project.image}
          alt={`${project.title}, ${project.subtitle}`}
          fill
          sizes={sizes ?? "(max-width: 768px) 100vw, 640px"}
          priority={priority}
          className="object-cover object-top"
        />
      </div>
    );
  }

  return (
    <div
      aria-hidden="true"
      className={`overflow-hidden rounded-xs border border-rule bg-sunk text-rule-strong ${padding} ${className}`}
    >
      <Wireframe kind={project.kind} />
    </div>
  );
}

function Wireframe({ kind }) {
  const bar = "rounded-[1px] bg-current";

  if (kind === "dashboard") {
    return (
      <div className="flex h-full w-full flex-col gap-2 opacity-70">
        <div className="flex items-center gap-1.5">
          <div className={`h-1.5 w-10 ${bar}`} />
          <div className={`ml-auto h-1.5 w-5 ${bar} opacity-60`} />
        </div>
        <div className="grid grid-cols-3 gap-1.5">
          {[0, 1, 2].map((i) => (
            <div key={i} className="h-5 rounded-[1px] border border-current opacity-50" />
          ))}
        </div>
        <div className="flex flex-1 items-end gap-1">
          {[40, 68, 30, 84, 52, 74, 44, 92, 60].map((h, i) => (
            <div
              key={i}
              className={`flex-1 ${bar} opacity-45`}
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>
    );
  }

  if (kind === "system") {
    return (
      <div className="flex h-full w-full flex-col gap-2 opacity-70">
        <div className={`h-1.5 w-12 ${bar}`} />
        <div className="grid flex-1 grid-cols-6 gap-1.5">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="rounded-[1px] border border-current"
              style={{ opacity: 0.25 + ((i % 6) * 0.1) }}
            />
          ))}
        </div>
        <div className="space-y-1">
          <div className={`h-1 w-full ${bar} opacity-40`} />
          <div className={`h-1 w-3/5 ${bar} opacity-40`} />
        </div>
      </div>
    );
  }

  if (kind === "brand") {
    return (
      <div className="flex h-full w-full items-center justify-center gap-3 opacity-70">
        <div className="size-8 rounded-full border-2 border-current opacity-60" />
        <div className="space-y-1.5">
          <div className={`h-2 w-14 ${bar}`} />
          <div className={`h-1 w-10 ${bar} opacity-50`} />
        </div>
      </div>
    );
  }

  if (kind === "product") {
    return (
      <div className="flex h-full w-full items-stretch justify-center gap-2 opacity-70">
        <div className="flex w-1/3 flex-col gap-1.5 rounded-[2px] border border-current p-1.5 opacity-60">
          <div className={`h-1 w-2/3 ${bar}`} />
          <div className="flex-1 rounded-[1px] border border-current" />
          <div className={`h-2 w-full ${bar} opacity-70`} />
        </div>
        <div className="flex w-1/3 flex-col justify-end gap-1.5 rounded-[2px] border border-current p-1.5 opacity-60">
          <div className="flex-1 rounded-[1px] border border-current" />
          <div className={`h-1 w-3/4 ${bar}`} />
          <div className={`h-1 w-1/2 ${bar} opacity-60`} />
        </div>
      </div>
    );
  }

  // Default: a web application shell.
  return (
    <div className="flex h-full w-full gap-2 opacity-70">
      <div className="flex w-1/5 flex-col gap-1.5">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className={`h-1 w-full ${bar}`} style={{ opacity: i === 0 ? 0.8 : 0.35 }} />
        ))}
      </div>
      <div className="flex flex-1 flex-col gap-2">
        <div className="flex items-center gap-1.5">
          <div className={`h-1.5 w-8 ${bar}`} />
          <div className={`ml-auto h-1.5 w-4 ${bar} opacity-50`} />
        </div>
        <div className="flex-1 rounded-[1px] border border-current opacity-50" />
        <div className="grid grid-cols-2 gap-1.5">
          <div className="h-4 rounded-[1px] border border-current opacity-40" />
          <div className="h-4 rounded-[1px] border border-current opacity-40" />
        </div>
      </div>
    </div>
  );
}
