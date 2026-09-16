import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { getProject, kinds, profile, projects } from "@/lib/site";
import { ProjectThumb } from "@/components/project-thumb";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) return { title: "Project not found" };

  return {
    title: project.title,
    description: project.summary,
    openGraph: { title: project.title, description: project.summary },
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === project.slug);
  const previous = index > 0 ? projects[index - 1] : null;
  const next = index < projects.length - 1 ? projects[index + 1] : null;

  const spec = [
    { label: "Year", value: project.year, numeric: true },
    { label: "Type", value: kinds[project.kind] },
    { label: "Context", value: project.context },
    { label: "My role", value: project.myRole },
    { label: "Stack", value: project.stack.join(", ") },
  ];

  return (
    <article className="page pt-10 sm:pt-14">
      <Link
        href="/work"
        className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-foreground"
      >
        <ArrowLeft aria-hidden="true" strokeWidth={1.5} className="size-3.5" />
        All work
      </Link>

      <header className="mt-8">
        <p className="flex flex-wrap items-baseline gap-x-4 gap-y-1 text-sm text-muted">
          <span className="tnum">{project.year}</span>
          <span>{kinds[project.kind]}</span>
          <span>{project.context}</span>
        </p>
        <h1 className="display display-lg mt-3">{project.title}</h1>
        <p className="lede measure mt-4 text-muted">{project.summary}</p>
      </header>

      <ProjectThumb
        project={project}
        priority
        sizes="(max-width: 1024px) 100vw, 1100px"
        padding="p-6 sm:p-12"
        className="mt-10 aspect-[16/9] w-full sm:aspect-[2/1]"
      />

      <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-7">
          <section>
            <h2 className="display display-sm rule-top pt-5">The problem</h2>
            <p className="measure mt-3 text-muted">{project.problem}</p>
          </section>

          <section className="mt-10">
            <h2 className="display display-sm rule-top pt-5">What I did</h2>
            <p className="measure mt-3 text-muted">{project.approach}</p>
          </section>

          <section className="mt-10">
            <h2 className="display display-sm rule-top pt-5">What it does</h2>
            <ul className="mt-4 border-t border-rule">
              {project.features.map((feature) => (
                <li
                  key={feature}
                  className="border-b border-rule py-3 text-sm"
                >
                  {feature}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <aside className="lg:col-span-4 lg:col-start-9">
          <h2 className="display display-sm rule-top pt-5">Details</h2>
          <dl className="mt-4">
            {spec.map((row) => (
              <div key={row.label} className="border-b border-rule py-3">
                <dt className="text-xs text-muted">{row.label}</dt>
                <dd className={`mt-0.5 text-sm ${row.numeric ? "tnum" : ""}`}>
                  {row.value}
                </dd>
              </div>
            ))}
            <div className="border-b border-rule py-3">
              <dt className="text-xs text-muted">Links</dt>
              <dd className="mt-1 space-y-1 text-sm">
                {project.live ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 hover:text-accent"
                  >
                    Live site
                    <ExternalLink
                      aria-hidden="true"
                      strokeWidth={1.5}
                      className="size-3.5"
                    />
                  </a>
                ) : null}
                {project.repo ? (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 hover:text-accent"
                  >
                    Source code
                    <ExternalLink
                      aria-hidden="true"
                      strokeWidth={1.5}
                      className="size-3.5"
                    />
                  </a>
                ) : (
                  <span className="text-muted">{project.repoNote}</span>
                )}
              </dd>
            </div>
          </dl>

          <p className="mt-6 text-sm text-muted">
            Want the detail behind this one?{" "}
            <a href={`mailto:${profile.email}`} className="link">
              Ask me about it
            </a>
            .
          </p>
        </aside>
      </div>

      <nav
        aria-label="Other projects"
        className="mt-20 grid gap-px border-t border-rule sm:grid-cols-2"
      >
        {previous ? (
          <Link
            href={`/work/${previous.slug}`}
            className="group border-b border-rule py-6 sm:border-r sm:pr-6"
          >
            <span className="flex items-center gap-1.5 text-xs text-muted">
              <ArrowLeft aria-hidden="true" strokeWidth={1.5} className="size-3.5" />
              Previous
            </span>
            <span className="display display-sm mt-1.5 block group-hover:text-accent">
              {previous.title}
            </span>
          </Link>
        ) : (
          <span className="hidden sm:block" />
        )}

        {next ? (
          <Link
            href={`/work/${next.slug}`}
            className="group border-b border-rule py-6 sm:pl-6 sm:text-right"
          >
            <span className="flex items-center gap-1.5 text-xs text-muted sm:justify-end">
              Next
              <ArrowRight aria-hidden="true" strokeWidth={1.5} className="size-3.5" />
            </span>
            <span className="display display-sm mt-1.5 block group-hover:text-accent">
              {next.title}
            </span>
          </Link>
        ) : null}
      </nav>
    </article>
  );
}
