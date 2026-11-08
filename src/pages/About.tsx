import { Link } from "react-router-dom";
import { CoffeeRing, Label, Redact } from "../components/Bits";
import { beliefs, refusals, studio, team } from "../data";

export function About() {
  return (
    <article className="page">
      <header className="page-head about-head">
        <CoffeeRing />
        <Label index="04">About Us</Label>
        <h1 className="display display-sm">
          Founded out of spite. Refined into a <em>practice.</em>
        </h1>
        <p className="lede">
          PS. started because most email sounds like it was written by a{" "}
          <Redact>committee that does not read</Redact>. We built a studio that reads
          first, cuts second, and sends only when the sentence could have come from no one
          else.
        </p>
        <p className="fine">The black bar is a button. Click it.</p>
      </header>

      <section className="manifesto">
        <p>
          Open rate is a handshake. Reply rate is a conversation. Revenue is why you
          called. We will not pretend those are the same number, and we will not decorate
          the wrong one.
        </p>
      </section>

      <section className="section">
        <div className="two">
          <div>
            <Label>We will</Label>
            <ul className="plain-list">
              {beliefs.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <Label>We will not</Label>
            <ul className="plain-list refused">
              {refusals.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section rule-top">
        <Label index="05">The desk</Label>
        <h2>Signatures, not headshots.</h2>
        <p className="lede narrow">
          Six people. No photograph of anyone pointing at a laptop. If you want to know how
          someone thinks, read the sentence under their name.
        </p>
        <div className="team">
          {team.map((person) => (
            <article key={person.email} className="sig">
              <span className={`mono-seal ink-${person.ink}`} aria-hidden="true">
                {person.initials}
              </span>
              <h3>{person.name}</h3>
              <p className="sig-role">{person.role}</p>
              <p className="sig-mail">{person.email}</p>
              <p>{person.bio}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mailing-label">
        <p className="label">Mailing label</p>
        <p className="brand label-brand">
          PS<span>.</span>
        </p>
        {studio.address.map((line) => (
          <p key={line}>{line}</p>
        ))}
        <p>{studio.email}</p>
        <p className="fine">{studio.hours}</p>
        <Link className="btn" to="/contact">
          Write the studio
        </Link>
      </section>
    </article>
  );
}
