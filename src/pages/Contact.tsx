import { useState, type FormEvent } from "react";
import { Label } from "../components/Bits";
import { mailHref, studio } from "../data";

type Status = "idle" | "error" | "sent";

const starters = [
  "our acquisition cost is the whole problem",
  "the welcome flow is still a template",
  "black friday cannot be a blast",
  "we are paying twice for the same buyer",
];

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<string[]>([]);
  const [sent, setSent] = useState({ name: "", email: "", subject: "", href: "" });
  const [subjectHint, setSubjectHint] = useState("");

  function onSubject(value: string) {
    const length = value.trim().length;
    if (!length) {
      setSubjectHint("");
      return;
    }
    if (length < 18) setSubjectHint("A little short. The preview pane can hold more of your point.");
    else if (length > 62) setSubjectHint("Phones will cut this off. So will the point, if it arrives late.");
    else setSubjectHint(`${length} characters. Most of this survives a phone. Dignity intact.`);
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const subject = String(data.get("subject") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const nextErrors: string[] = [];
    if (name.length < 2) nextErrors.push("Sign it. Anonymous audits are how brands get here.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.push("That is not an address we can answer. Try one with an @ and a dot.");
    }
    if (subject.length < 6) nextErrors.push("Subject lines under a handful of words make us nervous.");
    if (message.length < 16) nextErrors.push("Tell us what the email is failing to do. One sentence more.");
    if (nextErrors.length) {
      setErrors(nextErrors);
      setStatus("error");
      return;
    }
    setErrors([]);
    const href = mailHref(subject, `${name} (${email})\n\n${message}`);
    setSent({ name, email, subject, href });
    setStatus("sent");
    window.location.href = href;
  }

  return (
    <article className="page">
      <header className="page-head">
        <Label index="06">Contact Us</Label>
        <h1 className="display display-sm">
          Write to us like a <em>person.</em>
        </h1>
        <p className="lede">
          {studio.taking} Tell us the store, what a customer costs to acquire, and which
          flow is still a template. {studio.hours} The form opens a draft in your mail
          app. You send it.
        </p>
      </header>

      <div className="contact-layout">
        <aside className="contact-aside">
          <p className="label">The thread</p>
          <ol className="aside-steps">
            <li>You write. The store, the acquisition cost, the flow that is still a template.</li>
            <li>We read the live emails, not the deck about the emails.</li>
            <li>You get a point of view, including a no, if a no is the honest reply.</li>
          </ol>
          <div className="label-card">
            <p className="label">Account</p>
            <p className="brand label-brand">
              Dobrevo<span>.</span>
            </p>
            {studio.who.map((line) => (
              <p key={line}>{line}</p>
            ))}
            <p>
              <a href={`mailto:${studio.email}`}>{studio.email}</a>
            </p>
            <p className="fine">{studio.hours}</p>
          </div>
        </aside>

        {status === "sent" ? (
          <div className="composer sent-state" role="status">
            <header className="composer-bar">
              <p>Draft ready</p>
              <span className="stamp stamp-sm">Open</span>
            </header>
            <div className="composer-body">
              <p>
                <span>To</span> {studio.email}
              </p>
              <p>
                <span>From</span> {sent.name} · {sent.email}
              </p>
              <p>
                <span>Subject</span> {sent.subject}
              </p>
              <h2>The brief is in your mail app.</h2>
              <p>
                If the draft did not open, use the link. We read what arrives at{" "}
                {studio.email}. {studio.hours}
              </p>
              <p>
                <a className="btn" href={sent.href}>
                  Open the draft
                </a>
              </p>
              <button
                type="button"
                className="btn"
                onClick={() => {
                  setStatus("idle");
                  setSubjectHint("");
                }}
              >
                Write another
              </button>
            </div>
          </div>
        ) : (
          <form className="composer" onSubmit={onSubmit} noValidate>
            <header className="composer-bar">
              <p>New message</p>
              <span>Opens your mail app</span>
            </header>
            {status === "error" ? (
              <div className="form-errors" role="alert">
                {errors.map((error) => (
                  <p key={error}>{error}</p>
                ))}
              </div>
            ) : null}
            <div className="composer-line">
              <span>To</span>
              <p>{studio.email}</p>
            </div>
            <label className="composer-line">
              <span>Name</span>
              <input name="name" autoComplete="name" placeholder="Your name" />
            </label>
            <label className="composer-line">
              <span>From</span>
              <input name="email" type="email" autoComplete="email" placeholder="you@company.com" />
            </label>
            <label className="composer-line">
              <span>Subject</span>
              <input
                name="subject"
                placeholder={starters[0]}
                onChange={(event) => onSubject(event.target.value)}
              />
            </label>
            <div className="starter-row">
              {starters.map((starter) => (
                <button
                  key={starter}
                  type="button"
                  onClick={(event) => {
                    const form = event.currentTarget.form;
                    const field = form?.elements.namedItem("subject");
                    if (field instanceof HTMLInputElement) {
                      field.value = starter;
                      onSubject(starter);
                      field.focus();
                    }
                  }}
                >
                  {starter}
                </button>
              ))}
            </div>
            {subjectHint ? <p className="hint">{subjectHint}</p> : null}
            <label className="composer-note">
              <span className="sr">Message</span>
              <textarea
                name="message"
                rows={8}
                placeholder="The store, what a customer costs, and the flow that is still a template."
              />
            </label>
            <footer className="composer-actions">
              <button className="btn" type="submit">
                Send, don’t overthink it
              </button>
              <p>Opens a draft to {studio.email}. You send it from there.</p>
            </footer>
          </form>
        )}
      </div>
    </article>
  );
}
