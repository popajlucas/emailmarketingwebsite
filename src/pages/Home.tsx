import { Link } from "react-router-dom";
import { BannedWall, Label } from "../components/Bits";
import { EmailMock } from "../components/EmailMock";
import { Marquee } from "../components/Marquee";
import { complaints, marquee, services, studies, studio } from "../data";

const quotes = [studies[1], studies[2], studies[6]];

export function Home() {
  const feature = studies[0];

  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <Label index="01">Ecommerce email</Label>
          <h1 className="display">
            The second purchase should be <em>cheaper.</em>
          </h1>
          <p className="lede">
            {studio.legal} works with ecommerce brands, most of them already doing six to
            nine figures. We lower acquisition cost by selling to a list you own, get more
            from the traffic you already paid for, and turn one-time buyers into repeat
            customers. The ads stay on. They stop having to do every order.
          </p>
          <div className="hero-actions">
            <Link className="btn" to="/work">
              See the programs
            </Link>
            <Link className="btn btn-ghost" to="/contact">
              Tell us about the store
            </Link>
          </div>
          <p className="taking">{studio.taking}</p>
          <p className="niches">{studio.niches.join("  /  ")}</p>
        </div>
        <EmailMock />
      </section>

      <Marquee items={marquee} />

      <section className="section">
        <Label index="02">The diagnosis</Label>
        <h2>Three reasons acquisition cost stays high.</h2>
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
        <h2>What we put to work.</h2>
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
          <Label>The point</Label>
          <p className="feature-stat">{feature.stat}</p>
          <p className="feature-label">{feature.statLabel}</p>
          <h2>
            {feature.client}
            <em> {feature.campaign}</em>
          </h2>
          <p>{feature.summary}</p>
          <p className="subject-pill">{feature.excerpt.subject}</p>
          <Link className="btn" to={`/work/${feature.slug}`}>
            Open this program
          </Link>
        </div>
        <div className="feature-side">
          <span className="stamp">Opened</span>
          <ul className="mini-stats">
            {studies.slice(1, 4).map((study) => (
              <li key={study.slug}>
                <strong>{study.stat}</strong>
                <span>{study.client}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <Label index="04">In the inbox</Label>
        <h2>Notes we would actually send.</h2>
        <div className="quotes">
          {quotes.map((study) => (
            <figure key={study.slug} className="quote-card">
              <header>
                <p>
                  <span>From</span> Dobrevo
                </p>
                <p>
                  <span>Re</span> {study.client}
                </p>
              </header>
              <blockquote>{study.excerpt.body.split("\n\n")[0]}</blockquote>
              <figcaption>
                <Link to={`/work/${study.slug}`}>Open {study.client}</Link>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="section rule-top">
        <Label index="05">House rules</Label>
        <h2>A short list of lines we will not send.</h2>
        <p className="lede narrow">
          Click any line. The note is what we would write in the margin of a flow that is
          still a template.
        </p>
        <BannedWall />
      </section>

      <section className="closer">
        <h2>
          Bring us the flow that is still a <em>template.</em>
        </h2>
        <p>
          Tell us the store, what a customer costs to acquire, and which email is doing
          the least with the traffic you already bought.
        </p>
        <Link className="btn" to="/contact">
          Compose a note
        </Link>
      </section>
    </>
  );
}
