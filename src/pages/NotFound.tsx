import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <article className="page not-found">
      <p className="label">
        <span>550</span> Spam folder
      </p>
      <h1 className="display display-sm">
        This page was filtered to <em>spam.</em>
      </h1>
      <p className="lede">
        The filter’s stated reason: the URL had too many consonants and not enough of a
        second purchase. The programs are still here.
      </p>
      <div className="hero-actions">
        <Link className="btn" to="/">
          Fish it out
        </Link>
        <Link className="btn btn-ghost" to="/work">
          See the programs
        </Link>
      </div>
    </article>
  );
}
