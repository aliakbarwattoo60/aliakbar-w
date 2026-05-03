import { Phone, Mail, MapPin } from "lucide-react"

export function TopBar() {
  return (
    <header className="bg-topbar text-foreground text-sm" aria-label="Contact information">
      <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-2.5 md:gap-6">
        <a
          className="flex items-center gap-2 text-foreground/90 transition-colors hover:text-foreground"
          href="tel:+9242111128128"
          aria-label="Call us"
        >
          <Phone className="h-3.5 w-3.5" />
          <span>Tel: (042) 111 128 128</span>
        </a>
        
        <a
          className="flex items-center gap-2 text-foreground/90 transition-colors hover:text-foreground"
          href="mailto:admissions.lhr@nu.edu.pk"
          aria-label="Email us"
        >
          <Mail className="h-3.5 w-3.5" />
          <span>Email: admissions.lhr@nu.edu.pk</span>
        </a>
        
        <a
          className="ml-auto flex items-center gap-2 text-foreground/90 transition-colors hover:text-foreground"
          href="https://www.google.com/maps/search/?api=1&query=Block-B%2C+Faisal+Town%2C+Lahore"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View location on Google Maps"
        >
          <MapPin className="h-3.5 w-3.5" />
          <span>Block-B, Faisal Town, Lahore</span>
        </a>
      </div>
    </header>
  )
}
