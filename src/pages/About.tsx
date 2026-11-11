import { Link } from "react-router-dom";
import { CoffeeRing, Label, Redact } from "../components/Bits";
import { beliefs, practices, refusals, studio } from "../data";

export function About() {
  return (
    <article className="page">
      <header className="page-head about-head">
        <CoffeeRing />
        <Label index="04">About Us</Label>
        <h1 className="display display-sm">
          Email should be the channel you <em>own.</em>
        </h1>
        <p className="lede">
          Dobrevo Emails works with ecommerce brands, mostly the ones already doing six to
          nine figures. Clothing, beauty, perfume, supplements, and the stores that do not
          fit a category. We do not specialise our way out of a brand. If it sells online
          and the ads are doing too much of the selling, that is the{" "}
          <Redact>work</Redact>.
        </p>
        <p className="fine">The black bar is a button. Click it.</p>
      </header>

      <section className="manifesto">
        <p>
          Buying a customer for every purchase is a habit, not a plan. The list is the
          traffic you get to keep. Welcome, abandon, and the emails that move someone from
          cold to ready are how the same person gets cheaper the second time.
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
        <h2>The work, not a wall of headshots.</h2>
        <p className="lede narrow">
          Six jobs on an account. No photograph of anyone pointing at a laptop. If you want
          to know what we actually touch, read the card.
        </p>
        <div className="team">
          {practices.map((practice) => (
            <article key={practice.name} className="sig">
              <span className={`mono-seal ink-${practice.ink}`} aria-hidden="true">
                {practice.initials}
              </span>
              <h3>{practice.name}</h3>
              <p className="sig-role">{practice.role}</p>
              <p>{practice.bio}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mailing-label">
        <p className="label">Mailing label</p>
        <p className="brand label-brand">
          Dobrevo<span>.</span>
        </p>
        {studio.who.map((line) => (
          <p key={line}>{line}</p>
        ))}
        <p>{studio.email}</p>
        <p className="fine">{studio.hours}</p>
        <Link className="btn" to="/contact">
          Write the account
        </Link>
      </section>
    </article>
  );
}
