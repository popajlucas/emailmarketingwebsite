import { useEffect, useState, type FormEvent } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Label } from "../components/Bits";
import { hireSteps, jobs, mailHref, perks, studio } from "../data";

type Status = "idle" | "error" | "sent";

export function Careers() {
  const [params] = useSearchParams();
  const requested = params.get("role") ?? "copywriter";
  const startingRole = jobs.some((job) => job.id === requested) ? requested : "copywriter";
  const [role, setRole] = useState(startingRole);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<string[]>([]);
  const [receipt, setReceipt] = useState({ name: "", line: "", href: "" });

  useEffect(() => {
    if (jobs.some((job) => job.id === requested)) setRole(requested);
  }, [requested]);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const line = String(data.get("line") ?? "").trim();
    const note = String(data.get("note") ?? "").trim();
    const link = String(data.get("link") ?? "").trim();
    const nextErrors: string[] = [];
    if (name.length < 2) nextErrors.push("A name, even a studio nickname, helps us answer.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.push("That email would bounce. Give us one a person can reply to.");
    }
    if (line.length < 8) {
      nextErrors.push("The subject line is the audition. Give it at least a few words.");
    }
    if (note.length < 20) {
      nextErrors.push("Two more sentences in the note. Taste takes a little room.");
    }
    if (link && !/^https?:\/\/\S+\.\S+/.test(link)) {
      nextErrors.push("The work link should start with http. We will actually open it.");
    }
    if (nextErrors.length) {
      setErrors(nextErrors);
      setStatus("error");
      return;
    }
    const chosen = jobs.find((job) => job.id === role)?.title ?? role;
    setErrors([]);
    const href = mailHref(
      `Application: ${chosen}`,
      `${name} (${email})\nRole: ${chosen}\nSubject line: ${line}\n${link ? `Work: ${link}\n` : ""}\n${note}`,
    );
    setReceipt({ name, line, href });
    setStatus("sent");
    window.location.href = href;
  }

  return (
    <article className="page">
      <header className="page-head">
        <Label index="05">Careers</Label>
        <h1 className="display display-sm">
          People who have run ecommerce email <em>at volume.</em>
        </h1>
        <p className="lede">
          Welcome flows, abandon flows, and a Black Friday that was a sequence. If you
          have rewritten a store’s automations because the template was costing them the
          second order, this is the desk.
        </p>
      </header>

      <section className="section tight">
        <Label>How it goes</Label>
        <div className="split-3">
          {hireSteps.map((step, index) => (
            <article key={step.title}>
              <p className="label">0{index + 1}</p>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section rule-top">
        <Label>Open roles</Label>
        <div className="roles">
          {jobs.map((job) => (
            <article key={job.id} className="role" id={job.id}>
              <header>
                <h2>{job.title}</h2>
                <p>{job.band}</p>
              </header>
              <p className="sig-role">{job.place}</p>
              <p className="role-lede">{job.lede}</p>
              <p>{job.text}</p>
              <Link className="text-link" to={`/careers?role=${job.id}#apply`}>
                Apply for this seat
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section rule-top">
        <Label>How we work</Label>
        <div className="perk-grid">
          {perks.map((perk) => (
            <article key={perk.title}>
              <h3>{perk.title}</h3>
              <p>{perk.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="apply" id="apply">
        <div>
          <Label>Application</Label>
          <h2>Write to the account.</h2>
          <p>
            The form checks the note, then opens a draft to {studio.email}. Send it from
            your mail app. Pay is a conversation, not a number printed before we have
            spoken.
          </p>
        </div>
        {status === "sent" ? (
          <div className="receipt" role="status">
            <p className="label">Draft opened</p>
            <h3>{receipt.name}, the line is in the draft.</h3>
            <p className="subject-pill">{receipt.line}</p>
            <p>
              If your mail app stayed closed, open the draft from here. We reply to what
              arrives.
            </p>
            <p>
              <a className="btn" href={receipt.href}>
                Open the draft
              </a>
            </p>
            <button type="button" className="btn" onClick={() => setStatus("idle")}>
              Write another
            </button>
          </div>
        ) : (
          <form className="stack-form" onSubmit={onSubmit} noValidate>
            {status === "error" ? (
              <div className="form-errors" role="alert">
                {errors.map((error) => (
                  <p key={error}>{error}</p>
                ))}
              </div>
            ) : null}
            <label>
              Name
              <input name="name" autoComplete="name" placeholder="Your name" />
            </label>
            <label>
              Email
              <input name="email" type="email" autoComplete="email" placeholder="you@email.com" />
            </label>
            <label>
              Role
              <select name="role" value={role} onChange={(event) => setRole(event.target.value)}>
                {jobs.map((job) => (
                  <option key={job.id} value={job.id}>
                    {job.title}
                  </option>
                ))}
              </select>
            </label>
            <label>
              A subject line you would ship
              <input name="line" placeholder="the second order should not need an ad" />
            </label>
            <label>
              A link to work <span>optional</span>
              <input name="link" placeholder="https://" />
            </label>
            <label>
              The note
              <textarea name="note" rows={5} placeholder="What you would retire, and why." />
            </label>
            <button className="btn" type="submit">
              Send the application
            </button>
          </form>
        )}
      </section>
    </article>
  );
}
