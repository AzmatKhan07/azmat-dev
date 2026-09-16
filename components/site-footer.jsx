import Link from "next/link";
import { nav, profile } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();
  const socials = [
    { label: "GitHub", href: profile.social.github },
    { label: "LinkedIn", href: profile.social.linkedin },
  ].filter((s) => s.href);

  return (
    <footer className="mt-24 border-t border-rule">
      <div className="page grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <p className="display display-sm">{profile.name}</p>
          <p className="mt-1 text-sm text-muted">{profile.role}</p>
          <p className="mt-4 max-w-sm text-sm text-muted">
            {profile.availableLabel}. The quickest way to reach me is email.
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="text-sm text-muted">Pages</h2>
          <ul className="mt-3 space-y-1.5">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm hover:text-accent">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm text-muted">Contact</h2>
          <ul className="mt-3 space-y-1.5">
            <li>
              <a href={`mailto:${profile.email}`} className="text-sm hover:text-accent">
                {profile.email}
              </a>
            </li>
            <li>
              <a href={`tel:${profile.phoneHref}`} className="tnum text-sm hover:text-accent">
                {profile.phone}
              </a>
            </li>
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm hover:text-accent"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="page flex flex-col gap-2 border-t border-rule py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
        <p className="tnum">
          {year} {profile.name}. {profile.location}, {profile.timezone}.
        </p>
        <p>Built with Next.js and Tailwind CSS.</p>
      </div>
    </footer>
  );
}
