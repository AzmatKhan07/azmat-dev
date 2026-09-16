"use client";

import { useState } from "react";
import { profile } from "@/lib/site";

const field =
  "w-full border border-rule bg-surface px-3 py-2.5 text-sm text-foreground placeholder:text-muted focus:border-accent focus:outline-none";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [values, setValues] = useState({
    name: "",
    email: "",
    organisation: "",
    message: "",
  });

  const update = (key) => (event) =>
    setValues((prev) => ({ ...prev, [key]: event.target.value }));

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = values.organisation
      ? `Enquiry from ${values.name}, ${values.organisation}`
      : `Enquiry from ${values.name}`;

    const lines = [
      `Name: ${values.name}`,
      `Email: ${values.email}`,
      values.organisation ? `Organisation: ${values.organisation}` : null,
      "",
      values.message,
    ].filter((line) => line !== null);

    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(lines.join("\n"))}`;

    setSent(true);
  };

  if (sent) {
    return (
      <div className="border border-rule bg-surface p-6">
        <h3 className="display display-sm">Your email client should be open</h3>
        <p className="measure mt-2 text-sm text-muted">
          The message is drafted but not sent yet, so press send there. If nothing
          opened, write to{" "}
          <a href={`mailto:${profile.email}`} className="link">
            {profile.email}
          </a>{" "}
          directly.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-4 text-sm text-muted hover:text-foreground"
        >
          <span className="border-b border-rule-strong pb-0.5">Edit the message</span>
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm text-muted">
            Your name
          </label>
          <input
            id="name"
            name="name"
            required
            autoComplete="name"
            value={values.name}
            onChange={update("name")}
            className={`mt-1.5 ${field}`}
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm text-muted">
            Your email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            value={values.email}
            onChange={update("email")}
            className={`mt-1.5 ${field}`}
          />
        </div>
      </div>

      <div>
        <label htmlFor="organisation" className="block text-sm text-muted">
          Company or team{" "}
          <span className="text-xs">optional</span>
        </label>
        <input
          id="organisation"
          name="organisation"
          autoComplete="organization"
          value={values.organisation}
          onChange={update("organisation")}
          className={`mt-1.5 ${field}`}
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm text-muted">
          What do you need built
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={values.message}
          onChange={update("message")}
          placeholder="A sentence on the role or project, the stack, and your timeline is plenty to start."
          className={`mt-1.5 resize-y ${field}`}
        />
      </div>

      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-1">
        <button
          type="submit"
          className="bg-foreground px-5 py-2.5 text-sm text-background transition-colors hover:bg-accent hover:text-accent-contrast"
        >
          Draft this email
        </button>
        <p className="text-xs text-muted">
          Opens your mail app with the message filled in. Nothing is sent from
          this page.
        </p>
      </div>
    </form>
  );
}
