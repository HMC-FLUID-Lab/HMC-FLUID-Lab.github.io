/** How the PI's name appears in author lists; always set in bold. */
const PI_NAMES = ["B. Zhuang", "Z. Bilin"];

/** An author list with the PI and the group's own members set in bold. */
export function Authors({
  authors,
  groupAuthors = [],
}: {
  authors: string;
  groupAuthors?: string[];
}) {
  const names = authors.split(", ");
  return (
    <>
      {names.map((name, i) => {
        // Markers (†, ‡, *) trail the name, so match on the prefix.
        const isGroup = [...PI_NAMES, ...groupAuthors].some((g) =>
          name.startsWith(g),
        );
        return (
          <span key={i}>
            {isGroup ? (
              <strong className="font-semibold text-[color:var(--color-ink)]">
                {name}
              </strong>
            ) : (
              name
            )}
            {i < names.length - 1 ? ", " : ""}
          </span>
        );
      })}
    </>
  );
}
