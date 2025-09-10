import { Calendar, ExternalLink, MapPin } from "lucide-react";
import type { ExperienceItem } from "../types/profile";
import { cn } from "../lib/utils";

export function ExperienceTimeline({ items }: { items: ExperienceItem[] }) {
  return (
    <ol className="relative ml-4 border-l pl-6">
      {items.map((item, idx) => (
        <li key={`${item.company}-${item.role}-${idx}`} className="mb-6">
          <span
            className={cn(
              "absolute -left-[7px] mt-1 size-3 rounded-full ring-4 ring-background",
              "bg-sky-600"
            )}
            aria-hidden
          />
          <div>
            <h4 className="font-semibold leading-tight">{item.role}</h4>
            <div className=" flex items-center">
              <p className="text-sm text-muted-foreground me-1">
                {item.company}
              </p>
              <a
                href={item.companyUrl}
                target="blank"
                className=" hover:scale-110 transition"
              >
                <ExternalLink className="w-4 h-4 text-sky-600" />
              </a>
            </div>

            <div className="mt-1 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              {item.period ? (
                <span className="inline-flex items-center gap-1">
                  <Calendar className="size-3" aria-hidden />
                  {item.period}
                </span>
              ) : null}
              {item.location ? (
                <span className="inline-flex items-center gap-1">
                  <MapPin className="size-3" aria-hidden />
                  {item.location}
                </span>
              ) : null}
            </div>

            {item.description ? (
              <p className="mt-2 text-sm text-pretty">{item.description}</p>
            ) : null}

            {item.highlights?.length ? (
              <ul className="mt-2 list-disc pl-5 text-sm marker:text-sky-600">
                {item.highlights.map((h, i) => (
                  <li key={i} className="text-pretty mb-1">
                    <span className=" font-medium">{h.heading}: </span>
                    <span>{h.description}</span>
                    {h.link ? (
                      <a
                        href={h.link}
                        className=" inline-block ms-1 transition hover:scale-110 text-sky-600"
                      >
                        <ExternalLink className="w-3 h-3 " />
                      </a>
                    ) : null}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </li>
      ))}
    </ol>
  );
}
