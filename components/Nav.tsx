import Link from "next/link";

type Item = { label: string; href: string };

export function Nav({
  items,
  crumb,
  cta,
  extra,
}: {
  items: Item[];
  crumb?: string;
  cta: { href: string; label: string };
  extra?: { href: string; label: string };
}) {
  return (
    <header className="nav">
      <div className="nav-in">
        <Link href="/" className="nav-brand" aria-label="Clovix">
          <span className="mark l-clovix-d only-dark" role="img" aria-label="Clovix" />
          <span className="mark l-clovix only-solid" aria-hidden="true" />
          {crumb && <span className="crumb">{crumb}</span>}
        </Link>
        <nav className="nav-links">
          {items.map((i) =>
            i.href.startsWith("#") || i.href.startsWith("http") ? (
              <a key={i.href} href={i.href}>{i.label}</a>
            ) : (
              <Link key={i.href} href={i.href}>{i.label}</Link>
            ),
          )}
        </nav>
        <div className="nav-cta">
          {extra && (
            <a href={extra.href} className="btn btn-ghost btn-sm">{extra.label}</a>
          )}
          <a href={cta.href} className="btn btn-grad btn-sm">{cta.label}</a>
        </div>
      </div>
    </header>
  );
}
