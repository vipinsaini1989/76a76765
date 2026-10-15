import { Calendar, ExternalLink } from "lucide-react";
import type { ProjectItem } from "../types/profile";

export function Projects({ items }: { items: ProjectItem[] }) {
  return (
    <ul className="space-y-5">
      {items.map((p) => (
        <li key={p.name}>
          <div className="flex items-center gap-1">
            <h4 className="font-semibold leading-tight">{p.name}</h4>
            {p.url ? (
              <a
                href={p.url}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${p.name}`}
                className="transition hover:scale-110"
              >
                <ExternalLink className="size-4 text-sky-600" />
              </a>
            ) : null}
          </div>

          {p.context || p.period ? (
            <div className="mt-1 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              {p.context ? <span>{p.context}</span> : null}
              {p.period ? (
                <span className="inline-flex items-center gap-1">
                  <Calendar className="size-3" aria-hidden />
                  {p.period}
                </span>
              ) : null}
            </div>
          ) : null}

          <p className="mt-2 text-sm text-pretty">{p.description}</p>

          {p.tech?.length ? (
            <div className="mt-2 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border px-2 py-0.5 text-xs bg-muted text-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          ) : null}
        </li>
      ))}
    </ul>
  );
}
