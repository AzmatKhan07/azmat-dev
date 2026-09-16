import { profile } from "@/lib/site";
import { ContactForm } from "@/components/contact-form";
import { CopyValue } from "@/components/copy-value";

export const metadata = {
  title: "Contact",
  description:
    "Get in touch with Azmat Ullah Khan about frontend roles and freelance projects.",
};

export default function ContactPage() {
  const socials = [
    { label: "GitHub", href: profile.social.github },
    { label: "LinkedIn", href: profile.social.linkedin },
  ].filter((s) => s.href);

  return (
    <section className="page pt-10 sm:pt-16">
      <h1 className="display display-lg">Contact</h1>
      <p className="lede measure mt-5 text-muted">
        {profile.availableLabel}. Email is fastest, and I reply within a day.
        A sentence about the role or project is enough to start.
      </p>

      <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <h2 className="display display-sm rule-top pt-5">Direct</h2>

          <dl className="mt-4">
            <div className="border-b border-rule py-4">
              <dt className="text-xs text-muted">Email</dt>
              <dd className="mt-1">
                <a href={`mailto:${profile.email}`} className="link text-sm">
                  {profile.email}
                </a>
                <div className="mt-1.5">
                  <CopyValue value={profile.email} label="address" />
                </div>
              </dd>
            </div>

            <div className="border-b border-rule py-4">
              <dt className="text-xs text-muted">Phone and WhatsApp</dt>
              <dd className="mt-1">
                <a href={`tel:${profile.phoneHref}`} className="link tnum text-sm">
                  {profile.phone}
                </a>
                <div className="mt-1.5">
                  <CopyValue value={profile.phoneHref} label="number" />
                </div>
              </dd>
            </div>

            <div className="border-b border-rule py-4">
              <dt className="text-xs text-muted">Where I am</dt>
              <dd className="mt-1 text-sm">
                {profile.location}
                <span className="tnum block text-muted">{profile.timezone}</span>
              </dd>
            </div>

            {socials.length > 0 && (
              <div className="border-b border-rule py-4">
                <dt className="text-xs text-muted">Elsewhere</dt>
                <dd className="mt-1 flex flex-wrap gap-x-5 text-sm">
                  {socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="link"
                    >
                      {social.label}
                    </a>
                  ))}
                </dd>
              </div>
            )}
          </dl>

          <p className="measure mt-8 text-sm text-muted">
            If you are hiring, it helps to know the team size, the stack and
            whether the role is remote. If it is project work, a rough scope and
            timeline is plenty.
          </p>
        </div>

        <div className="lg:col-span-7">
          <h2 className="display display-sm rule-top pt-5">Write a message</h2>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
