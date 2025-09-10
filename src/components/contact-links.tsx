import { Github, Globe, Linkedin, LinkIcon, Mail, Phone } from "lucide-react"

type LinkItem = { label: string; url: string }
type Contact = { email?: string; phone?: string }

export function ContactLinks({ contact, links }: { contact?: Contact; links: LinkItem[] }) {
  const iconFor = (label: string) => {
    const key = label.toLowerCase()
    if (key.includes("linkedin")) return <Linkedin className="size-4" aria-hidden />
    if (key.includes("github")) return <Github className="size-4" aria-hidden />
    if (key.includes("site") || key.includes("portfolio") || key.includes("web"))
      return <Globe className="size-4" aria-hidden />
    return <LinkIcon className="size-4" aria-hidden />
  }

  return (
    <div className="space-y-2">
      {contact?.email ? (
        <a href={`mailto:${contact.email}`} className="group flex items-center gap-2 text-sm hover:underline">
          <Mail className="size-4 text-sky-600 group-hover:opacity-80" aria-hidden />
          {contact.email}
        </a>
      ) : null}
      {contact?.phone ? (
        <a href={`tel:${contact.phone}`} className="group flex items-center gap-2 text-sm hover:underline">
          <Phone className="size-4 text-sky-600 group-hover:opacity-80" aria-hidden />
          {contact.phone}
        </a>
      ) : null}

      {links.map((l, i) => (
        <a
          key={`${l.label}-${i}`}
          href={l.url}
          target="_blank"
          rel="noreferrer"
          className="group flex items-center gap-2 text-sm text-sky-600 hover:underline break-all"
        >
          <span className="text-sky-600 group-hover:opacity-80">{iconFor(l.label)}</span>
          <span>{l.label}</span>
        </a>
      ))}
    </div>
  )
}
