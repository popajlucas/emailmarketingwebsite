import { Link, useParams } from "react-router-dom";
import { Label } from "../components/Bits";
import { studies } from "../data";
import { NotFound } from "./NotFound";

export function WorkDetail() {
  const { slug } = useParams();
  const index = studies.findIndex((study) => study.slug === slug);
  if (index < 0) return <NotFound />;

  const study = studies[index];
  const next = studies[(index + 1) % studies.length];
  const paragraphs = study.excerpt.body.split("\n\n");

  return (
    <article className="page study-page">
      <p className="back">
        <Link to="/work">All case studies</Link>
      </p>
      <header className="study-hero">
        <div>
          <Label>
            {study.receipt} · {study.sector} · {study.year}
          </Label>
          <h1 className="display display-sm">{study.client}</h1>
          <p className="campaign-name">{study.campaign}</p>
          <p className="lede">{study.summary}</p>
        </div>
        <div className="study-hero-stat">
          <p>{study.stat}</p>
          <span>{study.statLabel}</span>
        </div>
      </header>

      <section className="letter-frame" aria-label="The email, abbreviated">
        <header>
          <p>
            <span>From</span> Dobrevo, for the store
          </p>
          <p>
            <span>Subject</span> {study.excerpt.subject}
          </p>
        </header>
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <footer>
          <span className="stamp stamp-sm">Sent</span>
          <p>How we would write it. The program is the point, not a borrowed logo.</p>
        </footer>
      </section>

      <div className="two">
        <section>
          <Label>The brief</Label>
          <h2>What was broken.</h2>
          <p>{study.brief}</p>
        </section>
        <section>
          <Label>The work</Label>
          <h2>What we do about it.</h2>
          <ol className="moves">
            {study.moves.map((move) => (
              <li key={move}>{move}</li>
            ))}
          </ol>
        </section>
      </div>

      <section className="section rule-top">
        <Label>The lines</Label>
        <h2>Subject lines we would ship.</h2>
        <ul className="line-list">
          {study.subjects.map((subject, line) => (
            <li key={subject}>
              <span>0{line + 1}</span>
              {subject}
            </li>
          ))}
        </ul>
      </section>

      <section className="result-band">
        {study.results.map((result) => (
          <p key={result.label}>
            <strong>{result.value}</strong>
            <span>{result.label}</span>
          </p>
        ))}
      </section>

      <figure className="pull">
        <blockquote>{study.quote}</blockquote>
        <figcaption>{study.quoteBy}</figcaption>
      </figure>

      <Link className="next-file" to={`/work/${next.slug}`}>
        <span>Next program</span>
        <strong>
          {next.client} — {next.campaign}
        </strong>
      </Link>
    </article>
  );
}
