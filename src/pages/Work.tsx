import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Label } from "../components/Bits";
import { sectors, studies, type Sector } from "../data";

export function Work() {
  const [filter, setFilter] = useState<"All" | Sector>("All");
  const visible = useMemo(
    () => (filter === "All" ? studies : studies.filter((study) => study.sector === filter)),
    [filter],
  );

  return (
    <article className="page">
      <header className="page-head">
        <Label index="03">Case Studies</Label>
        <h1 className="display display-sm">
          The programs, with the templates <em>cut.</em>
        </h1>
        <p className="lede">
          Eight systems we install for ecommerce brands. These are not borrowed client
          logos. They are the flows and the peak calendar, written the way we would write
          them for a store that is tired of renting every reorder.
        </p>
      </header>

      <div className="filters" role="toolbar" aria-label="Filter case studies">
        {sectors.map((sector) => (
          <button
            key={sector}
            type="button"
            aria-pressed={filter === sector}
            onClick={() => setFilter(sector)}
          >
            {sector}
          </button>
        ))}
      </div>

      <div className={filter === "All" ? "work-grid is-featured" : "work-grid"}>
        {visible.map((study) => (
          <Link key={study.slug} className="study-card" to={`/work/${study.slug}`}>
            <p className="study-kicker">
              <span>{study.receipt}</span>
              <span>{study.sector}</span>
              <span>{study.year}</span>
            </p>
            <p className="study-stat">{study.stat}</p>
            <h2>{study.client}</h2>
            <p className="study-campaign">{study.campaign}</p>
            <p className="study-summary">{study.summary}</p>
            <p className="subject-pill">{study.excerpt.subject}</p>
            <span className="card-open">Open the program</span>
          </Link>
        ))}
      </div>

      <section className="subject-index">
        <Label index="04">Subject index</Label>
        <h2>Lines that had to earn the preview pane.</h2>
        <ul>
          {studies.flatMap((study) =>
            study.subjects.map((subject) => (
              <li key={subject}>
                <Link to={`/work/${study.slug}`}>
                  <span>{study.client}</span>
                  {subject}
                </Link>
              </li>
            )),
          )}
        </ul>
      </section>
    </article>
  );
}
