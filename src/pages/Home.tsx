import { Link } from "react-router-dom";
import { BannedWall, Label } from "../components/Bits";
import { EmailMock } from "../components/EmailMock";
import { Marquee } from "../components/Marquee";
import { complaints, marquee, services, studies, studio } from "../data";

const quotes = [studies[1], studies[0], studies[2]];

export function Home() {
  const feature = studies[0];

  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <Label index="01">The studio</Label>
          <h1 className="display">
            We write the emails people <em>finish.</em>
          </h1>
          <p className="lede">
            {studio.legal} builds lifecycle programs, campaigns, and newsletters for brands
            whose customers have a delete reflex and a working brain. We are polite. We are
            also precise.
          </p>
          <div className="hero-actions">
            <Link className="btn" to="/work">
              Read the case files
            </Link>
            <Link className="btn btn-ghost" to="/contact">
              Start a thread
            </Link>
          </div>
          <p className="taking">{studio.taking}</p>
        </div>
        <EmailMock />
      </section>

      <Marquee items={marquee} />

      <section className="section">
        <Label index="02">The diagnosis</Label>
        <h2>Three reasons the email is being ignored.</h2>
        <div className="split-3">
          {complaints.map((item) => (
            <article key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section rule-top">
        <Label index="03">The practice</Label>
        <h2>What we actually do.</h2>
        <div className="service-list">
          {services.map((service) => (
            <article key={service.index} className="service-row">
              <span>{service.index}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="feature">
        <div className="feature-copy">
          <Label>From the files</Label>
          <p className="feature-stat">{feature.stat}</p>
          <p className="feature-label">{feature.statLabel}</p>
          <h2>
            {feature.client}
            <em> {feature.campaign}</em>
          </h2>
          <p>{feature.summary}</p>
          <p className="subject-pill">{feature.excerpt.subject}</p>
          <Link className="btn" to={`/work/${feature.slug}`}>
            Open this file
          </Link>
        </div>
        <div className="feature-side">
          <span className="stamp">Opened</span>
          <ul className="mini-stats">
            <li>
              <strong>41%</strong>
              <span>Northline directors who wrote back</span>
            </li>
            <li>
              <strong>12%</strong>
              <span>Kettle buyers who returned, unbribed</span>
            </li>
            <li>
              <strong>0</strong>
              <span>uses of “hope this finds you well”</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="section">
        <Label index="04">Replies</Label>
        <h2>Letters from the other side of the send.</h2>
        <div className="quotes">
          {quotes.map((study) => (
            <figure key={study.slug} className="quote-card">
              <header>
                <p>
                  <span>From</span> {study.quoteBy}
                </p>
                <p>
                  <span>Re</span> {study.campaign}
                </p>
              </header>
              <blockquote>{study.quote}</blockquote>
              <figcaption>
                <Link to={`/work/${study.slug}`}>Read {study.client}</Link>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="section rule-top">
        <Label index="05">House rules</Label>
        <h2>A short list of phrases we will not type.</h2>
        <p className="lede narrow">
          Click any line. The reason is the editing note we would leave in your draft,
          minus the meeting.
        </p>
        <BannedWall />
      </section>

      <section className="closer">
        <h2>
          Bring us the email you are <em>embarrassed by.</em>
        </h2>
        <p>We will read it. We will tell you the truth. The truth usually fits on one page.</p>
        <Link className="btn" to="/contact">
          Compose a note
        </Link>
      </section>
    </>
  );
}
