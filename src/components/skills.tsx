import type { SkillGroup } from "../types/profile";

export function Skills({ skills }: { skills: SkillGroup[] }) {
  return (
    <div className="space-y-3">
      {skills.map((group) => (
        <div key={group.category}>
          <h4 className="mb-1 text-xs font-medium text-muted-foreground">
            {group.category}
          </h4>
          <div className="flex flex-wrap gap-2">
            {group.items.map((s) => (
              <span
                key={s}
                className="rounded-full border px-2 py-1 text-xs bg-muted text-foreground"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
