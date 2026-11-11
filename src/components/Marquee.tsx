export function Marquee({ items }: { items: string[] }) {
  const row = (hidden: boolean) => (
    <p aria-hidden={hidden || undefined}>
      {items.map((item) => (
        <span key={item}>
          {item}
          <i aria-hidden="true"> / </i>
        </span>
      ))}
    </p>
  );

  return (
    <div className="marquee" aria-label="Subject lines from the case files">
      <div className="marquee-track">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
