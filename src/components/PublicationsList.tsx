"use client";

import { useMemo, useState } from "react";
import type { Publication } from "@/types/content";
import { PublicationItem } from "./PublicationItem";
import { paperCount } from "@/data/publications";

type Props = {
  publications: Publication[];
};

/** Years that get their own chip; everything older shares one range chip. */
const SEPARATE_YEARS = 4;

type Bucket = { label: string; from: number; to: number };

export function PublicationsList({ publications }: Props) {
  const buckets = useMemo<Bucket[]>(() => {
    const years = Array.from(new Set(publications.map((p) => p.year))).sort(
      (a, b) => b - a,
    );
    const recent = years.slice(0, SEPARATE_YEARS);
    const older = years.slice(SEPARATE_YEARS);
    const out: Bucket[] = recent.map((y) => ({ label: String(y), from: y, to: y }));
    if (older.length > 0) {
      const to = older[0];
      const from = older[older.length - 1];
      out.push({ label: `${to}–${from}`, from, to });
    }
    return out;
  }, [publications]);

  const [active, setActive] = useState<Bucket | null>(null);

  const inBucket = (year: number, b: Bucket) => year >= b.from && year <= b.to;

  const filtered = useMemo(
    () =>
      active === null
        ? publications
        : publications.filter((p) => inBucket(p.year, active)),
    [active, publications],
  );

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2">
        <FilterChip active={active === null} onClick={() => setActive(null)}>
          all
          <span className="chip-count">{paperCount(publications)}</span>
        </FilterChip>
        {buckets.map((b) => (
          <FilterChip
            key={b.label}
            active={active?.label === b.label}
            onClick={() => setActive(b)}
          >
            {b.label}
            <span className="chip-count">
              {paperCount(publications.filter((p) => inBucket(p.year, b)))}
            </span>
          </FilterChip>
        ))}
      </div>
      {filtered.length === 0 ? (
        <p
          role="status"
          aria-live="polite"
          className="border-t border-[color:var(--color-rule)] py-8 small text-[color:var(--color-ink-3)]"
        >
          No publications in {active?.label}.{" "}
          <button
            type="button"
            onClick={() => setActive(null)}
            className="link-underline text-[color:var(--color-ink-2)]"
          >
            Show all
          </button>
          .
        </p>
      ) : (
        <ol
          key={active?.label ?? "all"}
          className="list-none border-t"
          style={{ borderColor: "var(--color-rule)" }}
        >
          {filtered.map((p, i) => (
            <li
              key={p.id}
              className="pub-enter"
              style={{ "--i": Math.min(i, 12) } as React.CSSProperties}
            >
              <PublicationItem publication={p} />
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}

function FilterChip({
  children,
  active,
  onClick,
}: {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      data-active={active ? "true" : "false"}
      className="chip"
    >
      {children}
    </button>
  );
}
