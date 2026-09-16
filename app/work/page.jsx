import { projects } from "@/lib/site";
import { WorkBrowser } from "@/components/work-browser";

export const metadata = {
  title: "Work",
  description:
    "Web applications, dashboards, design systems and brand work by Azmat Ullah Khan.",
};

export default function WorkPage() {
  return (
    <section className="page pb-8 pt-10 sm:pt-16">
      <h1 className="display display-lg">Work</h1>
      <p className="lede measure mt-5 text-muted">
        {projects.length} projects, from multi-role logistics platforms to design
        systems and brand identity. Most were built for clients, so several are
        behind a login; I am happy to walk through any of them on a call.
      </p>

      <div className="mt-12">
        <WorkBrowser projects={projects} />
      </div>
    </section>
  );
}
