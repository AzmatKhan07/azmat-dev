import Link from "next/link";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <section className="page flex min-h-[60vh] flex-col justify-center py-20">
      <p className="tnum text-sm text-muted">404</p>
      <h1 className="display display-lg mt-3">This page does not exist</h1>
      <p className="measure mt-4 text-muted">
        The link may be out of date. The work index is the best place to pick up
        from.
      </p>
      <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
        <Link
          href="/work"
          className="bg-foreground px-5 py-2.5 text-sm text-background transition-colors hover:bg-accent hover:text-accent-contrast"
        >
          See the work
        </Link>
        <Link href="/" className="link self-center text-sm">
          Back to the homepage
        </Link>
      </div>
    </section>
  );
}
