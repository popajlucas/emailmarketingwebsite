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
        The filter’s stated reason: the URL contained too many consonants and not enough
        point of view. We have appealed. Appeals take time. The rest of the studio does
        not.
      </p>
      <div className="hero-actions">
        <Link className="btn" to="/">
          Fish it out
        </Link>
        <Link className="btn btn-ghost" to="/work">
          Read a real file
        </Link>
      </div>
    </article>
  );
}
