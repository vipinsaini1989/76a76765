import type { EducationItem } from "../types/profile";
import { cn } from "../lib/utils";
import { Calendar, MapPin } from "lucide-react";

export function Education({ items }: { items: EducationItem[] }) {
  return (
    <ul className="relative ml-4 border-l pl-6">
      {items.map((e, i) => (
        <li key={`${e.school}-${e.degree}-${i}`} className="mb-6">
          <span
            className={cn(
              "absolute -left-[7px] mt-1 size-3 rounded-full ring-4 ring-background",
              "bg-sky-600"
            )}
            aria-hidden
          />
          <div>
            <h4 className="font-semibold leading-tight">{e.degree}</h4>
            <p className="text-sm text-muted-foreground">{e.school}</p>

            <div className="mt-1 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              {e.period ? (
                <span className="inline-flex items-center gap-1">
                  <Calendar className="size-3" aria-hidden />
                  {e.period}
                </span>
              ) : null}
              {e.location ? (
                <span className="inline-flex items-center gap-1">
                  <MapPin className="size-3" aria-hidden />
                  {e.location}
                </span>
              ) : null}
            </div>
          </div>
        </li>
        // <li key={`${e.school}-${e.degree}-${i}`}>
        //   <h4 className="text-sm font-semibold leading-tight">{e.degree}</h4>
        //   <p className="text-xs text-muted-foreground">{e.school}</p>
        //   <div className="mt-1 text-xs text-muted-foreground">
        //     {e.period} {e.location ? `• ${e.location}` : ""}
        //   </div>
        // </li>
      ))}
    </ul>
  );
}
