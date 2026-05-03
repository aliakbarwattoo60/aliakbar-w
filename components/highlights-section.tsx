import { RefreshCcw, Sparkles, MapPin, CheckCircle, Users, Flag } from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface HighlightItem {
  number: string
  icon: LucideIcon
  heading: string
  text: string
}

const highlights: HighlightItem[] = [
  {
    number: "22 Years",
    icon: RefreshCcw,
    heading: "Experienced Mentors",
    text: "2.2 M students who trusted us with their futures are counseled with our expert guidance.",
  },
  {
    number: "65+",
    icon: Sparkles,
    heading: "Study Destinations Covered",
    text: "Pursue your education in the world's best study destinations. Explore the world with us.",
  },
  {
    number: "40+",
    icon: MapPin,
    heading: "Offices Across the Globe",
    text: "Local presence with global reach to serve you better through our established global network.",
  },
  {
    number: "1000+",
    icon: CheckCircle,
    heading: "University Partners",
    text: "Direct partnerships with top-ranked institutions worldwide to get you placed in your dream university.",
  },
  {
    number: "50K+",
    icon: Users,
    heading: "Strong Alumni Network",
    text: "Local presence with global reach to serve you better through our established global network.",
  },
  {
    number: "2.2M+",
    icon: Flag,
    heading: "Students Counseled",
    text: "2.2 M students who trusted us with their futures are counseled with our expert guidance.",
  },
]

export function HighlightsSection() {
  return (
    <section className="px-4 py-12 md:py-16" aria-label="Why choose us">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-8 text-center text-2xl font-bold text-foreground md:mb-12 md:text-4xl">
          Why Choose Overseas Study and Travel?
        </h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item) => (
            <article
              key={item.heading}
              className="rounded-xl border border-border bg-muted p-5 backdrop-blur-sm transition-all hover:border-primary/30 hover:bg-muted/80"
            >
              <div className="mb-3 flex items-center justify-between">
                <p className="text-xl font-bold text-foreground md:text-2xl">{item.number}</p>
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-b from-accent to-accent/80 text-accent-foreground">
                  <item.icon className="h-4 w-4" />
                </span>
              </div>
              <h3 className="mb-2 text-base font-bold text-foreground md:text-lg">{item.heading}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
