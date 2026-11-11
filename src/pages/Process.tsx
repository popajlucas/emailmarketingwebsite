import { Link } from "react-router-dom";
import { Label } from "../components/Bits";
import { steps } from "../data";

export function Process() {
  return (
    <article className="page">
      <header className="page-head">
        <Label index="02">Our Process</Label>
        <h1 className="display display-sm">
          Six moves. The ads stay <em>on.</em>
        </h1>
        <p className="lede">
          We do not ask you to stop acquiring customers. We stop you paying full price for
          the ones you already have. Capture the email, repay the click, warm the list,
          earn the second order, and show up to Black Friday with a plan.
        </p>
      </header>

      <div className="process-layout">
        <ol className="step-index">
          {steps.map((step) => (
            <li key={step.index}>
              <a href={`#step-${step.index}`}>
                <span>{step.index}</span>
                {step.title}
              </a>
            </li>
          ))}
        </ol>
        <div className="thread">
          {steps.map((step) => (
            <article key={step.index} id={`step-${step.index}`} className="letter">
              <header>
                <span className="mono-seal" aria-hidden="true">
                  {step.from
                    .split(" ")
                    .map((part) => part[0])
                    .join("")}
                </span>
                <div>
                  <p className="letter-from">
                    {step.from}
                    <span> · {step.role}</span>
                  </p>
                  <p className="letter-meta">
                    Step {step.index} · {step.time}
                  </p>
                </div>
              </header>
              <h2>{step.title}</h2>
              <p>{step.body}</p>
              {step.cut && step.kept ? (
                <div className="cut-block">
                  <p className="cut">
                    <span>Cut</span> <s>{step.cut}</s>
                  </p>
                  <p className="kept">
                    <span>Kept</span> {step.kept}
                  </p>
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </div>

      <section className="closer closer-ink">
        <h2>If the list cannot carry a second order, the ads are doing two jobs.</h2>
        <Link className="btn" to="/contact">
          Bring us the store
        </Link>
      </section>
    </article>
  );
}
