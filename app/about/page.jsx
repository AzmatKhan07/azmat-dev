import Image from "next/image";
import Link from "next/link";
import {
  education,
  experience,
  languages,
  profile,
  stack,
} from "@/lib/site";

export const metadata = {
  title: "About",
  description:
    "Azmat Ullah Khan is a frontend developer and interface designer in Swat, Pakistan, with a background in graphic design.",
};

export default function AboutPage() {
  return (
    <>
      <section className="page pt-10 sm:pt-16">
        <h1 className="display display-lg">About</h1>

        <div className="mt-10 grid gap-12 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <div className="measure space-y-5 text-[1.0625rem] leading-relaxed">
              <p>
                I came to code through design. From 2017 I worked as a graphic
                designer, building logo systems, brand guidelines and marketing
                material for brands, publishers and agencies. That work taught me
                the habits I still rely on: hold the whole composition in view,
                respect a grid, and treat type as a decision rather than a
                default.
              </p>
              <p>
                Around 2020 I started building the things I had been drawing. Since
                then I have worked as a React developer at Payprime, as a frontend
                developer at Wazar Tech Studio, and directly with clients in the
                US, UK and UAE. The projects have ranged from a multi-role parcel
                logistics platform to a live construction camera viewer, a retail
                point-of-sale system and analytics dashboards.
              </p>
              <p>
                What I am useful for is the seam between design and engineering.
                Teams usually lose time there: a file gets handed over, the build
                approximates it, and nobody is quite sure who owns the difference.
                Because I work on both sides of that seam, there is nothing to
                hand over. I can take a rough product idea, resolve it in Figma,
                and ship it as a maintainable React codebase.
              </p>
              <p>
                I am based in Khwazakhela, Swat, in northern Pakistan, and I work
                remotely. My hours overlap comfortably with Europe and the US East
                Coast. I am currently open to frontend roles and to freelance
                projects, and you can reach me on{" "}
                <a href={`mailto:${profile.email}`} className="link">
                  {profile.email}
                </a>
                .
              </p>
            </div>
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
              {profile.location}, {profile.timezone}
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="page py-12 sm:py-16">
        <h2 className="display display-md rule-top pt-6">Experience</h2>

        <ul className="mt-8 border-t border-rule">
          {experience.map((job) => (
            <li key={`${job.role}-${job.company}`} className="border-b border-rule py-7">
              <div className="grid gap-4 lg:grid-cols-12 lg:gap-8">
                <div className="lg:col-span-4">
                  <h3 className="display display-sm">{job.role}</h3>
                  <p className="mt-1 text-sm text-muted">{job.company}</p>
                  <p className="tnum mt-3 text-sm text-muted">{job.period}</p>
                  <p className="text-sm text-muted">{job.location}</p>
                </div>
                <div className="lg:col-span-7 lg:col-start-6">
                  <ul className="space-y-2">
                    {job.points.map((point) => (
                      <li key={point} className="measure text-sm">
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="page py-12 sm:py-16">
        <h2 className="display display-md rule-top pt-6">Stack</h2>

        <div className="mt-8 grid gap-10 md:grid-cols-3 md:gap-8">
          {stack.map((group) => (
            <div key={group.group} className="border-t border-rule pt-5">
              <h3 className="display display-sm">{group.group}</h3>
              <dl className="mt-4">
                {group.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-baseline justify-between gap-4 border-b border-rule py-2.5"
                  >
                    <dt className="text-sm">{item.name}</dt>
                    <dd className="text-xs text-muted">{item.note}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </section>

      <section className="page py-12 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <h2 className="display display-md rule-top pt-6">Education</h2>
            <ul className="mt-8 border-t border-rule">
              {education.map((item) => (
                <li key={item.qualification} className="border-b border-rule py-5">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                    <h3 className="display display-sm">{item.qualification}</h3>
                    <p className="tnum text-sm text-muted">{item.period}</p>
                  </div>
                  <p className="mt-1 text-sm text-muted">{item.institution}</p>
                  <p className="measure mt-2 text-sm">{item.detail}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4 lg:col-start-9">
            <h2 className="display display-md rule-top pt-6">Languages</h2>
            <dl className="mt-8 border-t border-rule">
              {languages.map((language) => (
                <div
                  key={language.name}
                  className="flex items-baseline justify-between gap-4 border-b border-rule py-3"
                >
                  <dt className="text-sm">{language.name}</dt>
                  <dd className="text-sm text-muted">{language.level}</dd>
                </div>
              ))}
            </dl>

            <p className="mt-8 text-sm text-muted">
              Curious about a specific project?{" "}
              <Link href="/work" className="link">
                The work index
              </Link>{" "}
              has the detail.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
