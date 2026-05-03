import Link from "next/link"
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Study Destinations", href: "/destinations" },
  { name: "Our Offices", href: "/offices" },
  { name: "Blogs", href: "/blogs" },
  { name: "Events", href: "/events" },
]

const destinations = [
  { name: "Study in UK", href: "/destinations#uk" },
  { name: "Study in USA", href: "/destinations#usa" },
  { name: "Study in Australia", href: "/destinations#australia" },
  { name: "Study in Canada", href: "/destinations#canada" },
  { name: "Study in Germany", href: "/destinations#germany" },
  { name: "Study in Malaysia", href: "/destinations#malaysia" },
]

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-topbar">
      <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="mb-4 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary/80 via-primary to-primary/90 text-sm font-bold text-primary-foreground">
                OS
              </span>
              <span className="text-sm font-semibold text-foreground">
                Overseas Study and Travel
              </span>
            </Link>
            <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
              Your trusted partner for international education and travel. With 22+ years of experience, we help students achieve their dreams of studying abroad.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-foreground/10 text-foreground/80 transition-colors hover:bg-primary hover:text-primary-foreground"
                  aria-label={social.name}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Study Destinations */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-foreground">Study Destinations</h3>
            <ul className="space-y-2">
              {destinations.map((dest) => (
                <li key={dest.name}>
                  <Link
                    href={dest.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {dest.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-foreground">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+9242111128128"
                  className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Phone className="h-4 w-4 text-primary" />
                  (042) 111 128 128
                </a>
              </li>
              <li>
                <a
                  href="mailto:admissions.lhr@nu.edu.pk"
                  className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Mail className="h-4 w-4 text-primary" />
                  admissions.lhr@nu.edu.pk
                </a>
              </li>
              <li>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Block-B%2C+Faisal+Town%2C+Lahore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  Block-B, Faisal Town, Lahore, Pakistan
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-border pt-6">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Overseas Study and Travel Pvt. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
