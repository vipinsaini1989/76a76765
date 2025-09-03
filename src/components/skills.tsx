export function Skills({ skills }: { skills: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {skills.map((s, i) => (
        <span
          key={`${s}-${i}`}
          className="rounded-full border px-2 py-1 text-xs bg-muted text-foreground"
        >
          {s}
        </span>
      ))}
    </div>
  );
}
