import { useRef } from "react";
import { ResumeDownloadButton } from "./components/resume-download-button";
import { ThemeToggle } from "./components/theme-toggle";
import { useProfile } from "./hooks/use-profile";
import {
  Briefcase,
  GalleryHorizontalEnd,
  GraduationCap,
  LinkIcon,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { ContactLinks } from "./components/contact-links";
import { Education } from "./components/education";
import { ExperienceTimeline } from "./components/experience-timeline";
import { Skills } from "./components/skills";

function App() {
  const resumeRef = useRef<HTMLDivElement>(null);
  const { data, isLoading, error } = useProfile();

  return (
    <main className="min-h-dvh bg-background text-foreground font-sans">
      <header className="sticky top-0 z-10 border-b bg-background/80 backdrop-blur print:hidden">
        <div className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between">
          <div
            className="flex items-center gap-2"
            title={data?.name + " Portfolio"}
          >
            <GalleryHorizontalEnd
              className="h-6 w-6 text-sky-600"
              aria-hidden
            />
            <span className="text-sm font-medium tracking-tight">
              Portfolio
            </span>
          </div>
          <div className="flex items-center gap-2">
            {/* Small screens: compact icon-only resume button */}
            <div className="sm:hidden">
              <ResumeDownloadButton targetRef={resumeRef} compact />
            </div>
            {/* >= sm: full button with label */}
            <div className="hidden sm:block">
              <ResumeDownloadButton targetRef={resumeRef} />
            </div>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-4 py-6">
        {/* LinkedIn-like cover area */}
        <section className="rounded-lg border bg-card">
          <div
            className="h-36 w-full rounded-t-lg bg-muted bg-[url(../public/images/bg-person.svg)] hero-1 print:h-16"
            aria-hidden
          />
          <div className="px-4 pb-6 sm:px-6">
            {isLoading ? (
              <div className="py-8 text-sm text-muted-foreground">
                Loading profile...
              </div>
            ) : error ? (
              <div className="py-8 text-sm text-red-600">
                Failed to load content. Ensure content/profile.md exists.
              </div>
            ) : data ? (
              <div className="-mt-10 flex flex-col gap-4 sm:flex-row sm:items-end">
                <img
                  src={data.avatar || "/images/placeholder-user.jpg"}
                  alt={`${data.name} avatar`}
                  className="h-40 h- w-40 rounded-full ring-4 ring-background object-cover shadow shadow-black"
                />
                <div className="flex-1">
                  <h1 className="text-balance text-2xl font-semibold leading-tight">
                    {data.name}
                  </h1>
                  <p className="text-pretty text-sm text-muted-foreground">
                    {data.title}
                    {data.company ? ` @ ${data.company}` : ""}
                  </p>

                  <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
                    {data.location ? (
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="size-4 text-sky-600" aria-hidden />
                        {data.location}
                      </span>
                    ) : null}
                    {data.contact?.email ? (
                      <a
                        href={`mailto:${data.contact.email}`}
                        className="inline-flex items-center gap-1 text-sky-600 hover:underline"
                      >
                        <Mail className="size-4" aria-hidden />{" "}
                        {data.contact.email}
                      </a>
                    ) : null}
                    {data.contact?.phone ? (
                      <a
                        href={`tel:${data.contact.phone}`}
                        className="inline-flex items-center gap-1 text-sky-600 hover:underline"
                      >
                        <Phone className="size-4" aria-hidden />{" "}
                        {data.contact.phone}
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>
            ) : null}

            {data?.aboutHtml ? (
              <div className="mt-4">
                <h2 className="text-base font-semibold">About</h2>
                <div
                  className="prose prose-sm max-w-none dark:prose-invert text-pretty"
                  dangerouslySetInnerHTML={{ __html: data.aboutHtml }}
                />
              </div>
            ) : null}
          </div>
        </section>

        {/* Content columns */}
        <div
          ref={resumeRef}
          className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3 print:bg-white print:text-black"
        >
          {/* Left column: Skills, Contact/Links */}
          <aside className="lg:col-span-1">
            {data?.skills?.length ? (
              <section className="rounded-lg border bg-card p-4">
                <div className="mb-2 flex items-center gap-2">
                  <LinkIcon className="size-4 text-sky-600" aria-hidden />
                  <h3 className="text-sm font-semibold">Skills</h3>
                </div>
                <Skills skills={data.skills} />
              </section>
            ) : null}

            {data?.links?.length || data?.contact ? (
              <section className="mt-6 rounded-lg border bg-card p-4">
                <div className="mb-2 flex items-center gap-2">
                  <LinkIcon className="size-4 text-sky-600" aria-hidden />
                  <h3 className="text-sm font-semibold">Contact & Links</h3>
                </div>
                <ContactLinks
                  contact={data?.contact}
                  links={data?.links || []}
                />
              </section>
            ) : null}
          </aside>

          {/* Right column: Experience, Education */}
          <section className="lg:col-span-2 flex flex-col gap-6">
            {data?.experience?.length ? (
              <div className="rounded-lg border bg-card p-4">
                <div className="mb-2 flex items-center gap-2">
                  <Briefcase className="size-4 text-sky-600" aria-hidden />
                  <h3 className=" font-semibold">Work Experience</h3>
                </div>
                <ExperienceTimeline items={data.experience} />
              </div>
            ) : null}

            {data?.education?.length ? (
              <div className="rounded-lg border bg-card p-4">
                <div className="mb-2 flex items-center gap-2">
                  <GraduationCap className="size-4 text-sky-600" aria-hidden />
                  <h3 className="font-semibold">Education</h3>
                </div>
                <Education items={data.education} />
              </div>
            ) : null}
          </section>
        </div>
      </div>
    </main>
  );
}

export default App;
