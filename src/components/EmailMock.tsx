import { useEffect, useState } from "react";
import { studies } from "../data";

const previews = studies.map((study) => ({
  from: study.client,
  subject: study.excerpt.subject,
  body: study.excerpt.body.split("\n\n")[0],
}));

export function EmailMock() {
  const [index, setIndex] = useState(0);
  const [count, setCount] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduce, setReduce] = useState(false);
  const current = previews[index];

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduce(media.matches);
    apply();
    media.addEventListener("change", apply);
    return () => media.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    if (reduce) {
      setCount(current.subject.length);
      return;
    }
    if (paused) return;
    if (count < current.subject.length) {
      const timer = window.setTimeout(() => setCount((value) => value + 1), 36);
      return () => window.clearTimeout(timer);
    }
    const timer = window.setTimeout(() => {
      setCount(0);
      setIndex((value) => (value + 1) % previews.length);
    }, 2400);
    return () => window.clearTimeout(timer);
  }, [count, current.subject, paused, reduce]);

  const typed = current.subject.slice(0, reduce ? current.subject.length : count);

  return (
    <article
      className="mock"
      aria-label="Sample email from the studio’s case files"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <header className="mock-bar">
        <span className="dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <p>Inbox — 1 unread</p>
        <span className="mock-live">Live file</span>
      </header>
      <div className="mock-meta">
        <p>
          <span>From</span> {current.from}
        </p>
        <p>
          <span>Subject</span>{" "}
          <strong>
            {typed}
            {reduce ? null : <i className="caret" aria-hidden="true" />}
          </strong>
        </p>
      </div>
      <p className="mock-body">{current.body}</p>
      <footer className="mock-foot">
        <span>Hover to hold the letter still.</span>
        <span className="stamp stamp-sm">Read</span>
      </footer>
    </article>
  );
}
