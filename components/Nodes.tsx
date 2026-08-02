/** Malla hexagonal de la marca, decorativa. */
export function Nodes({ variant = "a" }: { variant?: "a" | "b" }) {
  return (
    <svg className={`nodes ${variant}`} viewBox="0 0 120 120" fill="none" aria-hidden="true">
    <defs><linearGradient id="ng" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stopColor="#3B6FE8"/><stop offset="1" stopColor="#7B5CF0"/></linearGradient></defs>
    <line x1="60.00" y1="21.00" x2="93.77" y2="40.50" stroke="url(#ng)" strokeWidth="1.1" opacity=".45"/><line x1="93.77" y1="40.50" x2="93.77" y2="79.50" stroke="url(#ng)" strokeWidth="1.1" opacity=".45"/><line x1="93.77" y1="79.50" x2="60.00" y2="99.00" stroke="url(#ng)" strokeWidth="1.1" opacity=".45"/><line x1="60.00" y1="99.00" x2="26.23" y2="79.50" stroke="url(#ng)" strokeWidth="1.1" opacity=".45"/><line x1="26.23" y1="79.50" x2="26.23" y2="40.50" stroke="url(#ng)" strokeWidth="1.1" opacity=".45"/><line x1="26.23" y1="40.50" x2="60.00" y2="21.00" stroke="url(#ng)" strokeWidth="1.1" opacity=".45"/><line x1="60.00" y1="42.80" x2="60.00" y2="21.00" stroke="url(#ng)" strokeWidth="2.6" strokeLinecap="round"/><line x1="74.90" y1="51.40" x2="93.77" y2="40.50" stroke="url(#ng)" strokeWidth="2.6" strokeLinecap="round"/><line x1="74.90" y1="68.60" x2="93.77" y2="79.50" stroke="url(#ng)" strokeWidth="2.6" strokeLinecap="round"/><line x1="60.00" y1="77.20" x2="60.00" y2="99.00" stroke="url(#ng)" strokeWidth="2.6" strokeLinecap="round"/><line x1="45.10" y1="68.60" x2="26.23" y2="79.50" stroke="url(#ng)" strokeWidth="2.6" strokeLinecap="round"/><line x1="45.10" y1="51.40" x2="26.23" y2="40.50" stroke="url(#ng)" strokeWidth="2.6" strokeLinecap="round"/><circle cx="60.00" cy="21.00" r="7.4" fill="url(#ng)"/><circle cx="93.77" cy="40.50" r="7.4" fill="url(#ng)"/><circle cx="93.77" cy="79.50" r="7.4" fill="url(#ng)"/><circle cx="60.00" cy="99.00" r="7.4" fill="url(#ng)"/><circle cx="26.23" cy="79.50" r="7.4" fill="url(#ng)"/><circle cx="26.23" cy="40.50" r="7.4" fill="url(#ng)"/>
    <circle cx="60" cy="60" r="15" fill="none" stroke="url(#ng)" strokeWidth="5"/>
    <circle cx="60" cy="60" r="6" fill="url(#ng)"/></svg>
  );
}
