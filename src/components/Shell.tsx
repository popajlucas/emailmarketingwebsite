import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { nav, studio, subjectFor, titleFor } from "../data";

function todayLabel() {
  return new Date().toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}

export function Shell({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const subject = subjectFor(pathname);

  useEffect(() => {
    document.title = titleFor(pathname);
    window.scrollTo(0, 0);
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="desk">
      <p className="spine" aria-hidden="true">
        Dobrevo Emails — Sell to the list you own
      </p>
      <div className="sheet">
        <a className="skip" href="#main">
          Skip to the letter
        </a>
        <header className="mast">
          <div className="emailbar">
            <p>
              <span>From</span> {studio.email}
            </p>
            <p>
              <span>To</span> you
            </p>
            <p className="emailbar-subject">
              <span>Subject</span> {subject}
              <i className="caret" aria-hidden="true" />
            </p>
            <p className="emailbar-date">
              <span>Date</span> {todayLabel()}
            </p>
          </div>
          <nav className="nav" aria-label="Primary">
            <Link className="brand" to="/" aria-label="Dobrevo Emails home">
              Dobrevo<span>.</span>
            </Link>
            <button
              type="button"
              className="nav-toggle"
              aria-expanded={open}
              aria-controls="site-menu"
              onClick={() => setOpen((value) => !value)}
            >
              {open ? "Close" : "Menu"}
            </button>
            <div id="site-menu" className={open ? "nav-links open" : "nav-links"}>
              {nav.map((item) => {
                const current =
                  item.to === "/"
                    ? pathname === "/"
                    : pathname === item.to || pathname.startsWith(`${item.to}/`);
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    aria-current={current ? "page" : undefined}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
            <Link className="compose" to="/contact" onClick={() => setOpen(false)}>
              Compose
            </Link>
          </nav>
        </header>
        <main id="main">{children}</main>
        <footer className="footer">
          <div className="footer-grid">
            <div>
              <p className="brand footer-brand">
                Dobrevo<span>.</span>
              </p>
              <p className="footer-tag">{studio.tagline}</p>
              <p className="fine">{studio.taking}</p>
            </div>
            <div>
              <p className="label">{studio.address.length ? "Visit" : "For"}</p>
              {(studio.address.length ? studio.address : studio.who).map((line) => (
                <p key={line}>{line}</p>
              ))}
              <p className="fine">{studio.hours}</p>
            </div>
            <div>
              <p className="label">Write</p>
              <p>
                <a href={`mailto:${studio.email}`}>{studio.email}</a>
              </p>
              {studio.phone ? (
                <p>
                  <a href={`tel:+1${studio.phone.replace(/-/g, "")}`}>{studio.phone}</a>
                </p>
              ) : null}
              <Unsubscribe />
            </div>
            <div>
              <p className="label">Index</p>
              <ul className="footer-index">
                {nav.map((item) => (
                  <li key={item.to}>
                    <Link to={item.to}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="colophon">
            <p>
              © {new Date().getFullYear()} {studio.legal}. Ecommerce email for brands
              that are done paying twice for the same customer.
            </p>
            <p>Set in Fraunces and Outfit. No photographs of people pointing at laptops.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

function Unsubscribe() {
  const [done, setDone] = useState(false);
  return (
    <div className="unsub">
      <button type="button" onClick={() => setDone(true)} disabled={done}>
        {done ? "Unsubscribed, with respect" : "Unsubscribe"}
      </button>
      {done ? (
        <p>
          If this were an email, you would be free, and we would not write nine more times
          to confirm your freedom. It is a website. Close the tab. We will not follow you.
        </p>
      ) : null}
    </div>
  );
}
