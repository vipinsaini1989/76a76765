"use client"

import { Calendar, MapPin } from "lucide-react"
import type { ExperienceItem } from "../types/profile"
import { cn } from "../lib/utils"

export function ExperienceTimeline({ items }: { items: ExperienceItem[] }) {
  return (
    <ol className="relative ml-4 border-l pl-6">
      {items.map((item, idx) => (
        <li key={`${item.company}-${item.role}-${idx}`} className="mb-6">
          <span
            className={cn("absolute -left-[7px] mt-1 size-3 rounded-full ring-4 ring-background", "bg-sky-600")}
            aria-hidden
          />
          <div>
            <h4 className="font-semibold leading-tight">{item.role}</h4>
            <p className="text-sm text-muted-foreground">{item.company}</p>

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

            {item.description ? <p className="mt-2 text-sm text-pretty">{item.description}</p> : null}

            {item.highlights?.length ? (
              <ul className="mt-2 list-disc pl-5 text-sm marker:text-sky-600">
                {item.highlights.map((h, i) => (
                  <li key={i} className="text-pretty">
                    {h}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </li>
      ))}
    </ol>
  )
}
