"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav, profile } from "@/lib/site";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader() {
  const pathname = usePathname();

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-background">
      <div className="page flex h-14 items-center justify-between gap-4 sm:h-16">
        <Link
          href="/"
          className="display display-sm shrink-0 hover:text-accent"
          aria-label={`${profile.name}, home`}
        >
          {profile.name}
        </Link>

        <div className="flex items-center gap-1 sm:gap-2">
          <nav aria-label="Main">
            <ul className="flex items-center">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={`block px-2 py-2 text-[0.8125rem] sm:px-3 sm:text-sm ${
                      isActive(item.href)
                        ? "text-foreground"
                        : "text-muted hover:text-foreground"
                    }`}
                  >
                    <span
                      className={
                        isActive(item.href)
                          ? "border-b border-foreground pb-0.5"
                          : undefined
                      }
                    >
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <span aria-hidden="true" className="h-5 w-px bg-rule" />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
