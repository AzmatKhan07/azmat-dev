import Image from "next/image";
import Link from "next/link";
import {
  capabilities,
  experience,
  facts,
  featuredProjects,
  intro,
  profile,
  projects,
} from "@/lib/site";
import { WorkIndex } from "@/components/work-index";
import { CopyValue } from "@/components/copy-value";

export default function HomePage() {
  return (
    <>
      {/* ---------------------------------------------------------------
          Hero. The display type is the one loud element on the site, so
          it gets the full measure and the single page-load motion.
      --------------------------------------------------------------- */}
      <section className="page pb-16 pt-10 sm:pt-16">
        {profile.available && (
          <p className="fade-in flex items-center gap-2 text-sm text-muted">
            <span
              aria-hidden="true"
              className="size-1.5 rounded-full bg-success"
            />
            {profile.availableLabel}
          </p>
        )}

        <h1 className="display display-hero mt-5 sm:mt-7">
          {intro.headline.map((line, i) => (
            <span key={line} className="rise-mask">
              <span className="rise" style={{ animationDelay: `${i * 110}ms` }}>
                {line}
              </span>
            </span>
          ))}
        </h1>

        <div className="mt-10 grid gap-10 sm:mt-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <p className="lede measure text-muted">{intro.lede}</p>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              <Link
                href="/work"
                className="bg-foreground px-5 py-2.5 text-sm text-background transition-colors hover:bg-accent hover:text-accent-contrast"
              >
                See the work
              </Link>
              <div>
                <a href={`mailto:${profile.email}`} className="link text-sm">
                  {profile.email}
                </a>
                <div className="mt-1">
                  <CopyValue value={profile.email} label="address" />
                </div>
              </div>
            </div>

            <dl className="mt-12 grid gap-x-10 gap-y-0 sm:grid-cols-2">
              {facts.map((fact) => (
                <div
                  key={fact.label}
                  className="flex items-baseline justify-between gap-4 border-t border-rule py-3"
                >
                  <dt className="text-sm text-muted">{fact.label}</dt>
                  <dd className="tnum text-sm">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <figure className="lg:col-span-4 lg:col-start-9">
            <div className="relative aspect-[4/5] w-full max-w-xs overflow-hidden rounded-xs border border-rule bg-sunk">
              <Image
                src={profile.portrait}
                alt={profile.name}
                fill
                sizes="(max-width: 1024px) 60vw, 320px"
                priority
                className="object-cover object-center"
              />
            </div>
            <figcaption className="mt-3 max-w-xs text-xs text-muted">
              {profile.name}, working from {profile.location}
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ---------------------------------------------------------------
          Selected work, as an index a hiring manager can scan.
      --------------------------------------------------------------- */}
      <section className="page py-12 sm:py-16">
        <div className="rule-top flex flex-wrap items-baseline justify-between gap-4 pt-6">
          <h2 className="display display-md">Selected work</h2>
          <Link href="/work" className="text-sm text-muted hover:text-foreground">
            <span className="border-b border-rule-strong pb-0.5">
              All {projects.length} projects
            </span>
          </Link>
        </div>

        <WorkIndex items={featuredProjects} className="mt-8" />
      </section>

      {/* ---------------------------------------------------------------
          Capabilities. Prose in columns rather than three identical cards.
      --------------------------------------------------------------- */}
      <section className="page py-12 sm:py-16">
        <h2 className="display display-md rule-top pt-6">What I do</h2>

        <div className="mt-8 grid gap-10 md:grid-cols-3 md:gap-8">
          {capabilities.map((capability) => (
            <div key={capability.title} className="border-t border-rule pt-5">
              <h3 className="display display-sm">{capability.title}</h3>
              <p className="mt-3 text-sm text-muted">{capability.body}</p>
              <ul className="mt-5 space-y-1.5">
                {capability.items.map((item) => (
                  <li key={item} className="text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------------------
          Experience, condensed. The detail lives on /about.
      --------------------------------------------------------------- */}
      <section className="page py-12 sm:py-16">
        <div className="rule-top flex flex-wrap items-baseline justify-between gap-4 pt-6">
          <h2 className="display display-md">Where I have worked</h2>
          <Link href="/about" className="text-sm text-muted hover:text-foreground">
            <span className="border-b border-rule-strong pb-0.5">
              Full background
            </span>
          </Link>
        </div>

        <ul className="mt-8 border-t border-rule">
          {experience.map((job) => (
            <li
              key={`${job.role}-${job.company}`}
              className="flex flex-col gap-1 border-b border-rule py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
            >
              <div className="min-w-0">
                <p className="text-base">{job.role}</p>
                <p className="text-sm text-muted">{job.company}</p>
              </div>
              <p className="tnum shrink-0 text-sm text-muted">{job.period}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* ---------------------------------------------------------------
          Close.
      --------------------------------------------------------------- */}
      <section className="page py-12 sm:py-20">
        <div className="rule-top pt-10">
          <h2 className="display display-lg measure">
            Looking for someone to own the frontend?
          </h2>
          <p className="measure mt-5 text-muted">
            I am open to frontend roles and to freelance projects. Tell me what
            you are building and I will tell you honestly whether I am the right
            person for it.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            <Link
              href="/contact"
              className="bg-foreground px-5 py-2.5 text-sm text-background transition-colors hover:bg-accent hover:text-accent-contrast"
            >
              Start a conversation
            </Link>
            <a href={`mailto:${profile.email}`} className="link text-sm">
              {profile.email}
            </a>
            <a href={`tel:${profile.phoneHref}`} className="link tnum text-sm">
              {profile.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
