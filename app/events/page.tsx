import { TopBar } from "@/components/top-bar"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Calendar, MapPin, Clock } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Events | Overseas Study and Travel Pvt",
  description: "Join our upcoming education fairs, seminars, and webinars about studying abroad.",
}

const upcomingEvents = [
  {
    id: 1,
    title: "UK Education Fair 2026",
    description: "Meet representatives from top UK universities. Get on-the-spot admissions and scholarship information.",
    date: "May 15, 2026",
    time: "10:00 AM - 5:00 PM",
    location: "Pearl Continental Hotel, Lahore",
    type: "Education Fair",
  },
  {
    id: 2,
    title: "Study in Canada Seminar",
    description: "Learn about study programs, visa requirements, and post-study work opportunities in Canada.",
    date: "May 20, 2026",
    time: "2:00 PM - 4:00 PM",
    location: "NU Consultants Office, Faisal Town",
    type: "Seminar",
  },
  {
    id: 3,
    title: "IELTS Preparation Workshop",
    description: "Free workshop to help you prepare for your IELTS exam with expert tips and practice sessions.",
    date: "May 25, 2026",
    time: "11:00 AM - 1:00 PM",
    location: "Online (Zoom)",
    type: "Workshop",
  },
  {
    id: 4,
    title: "Australia University Open Day",
    description: "Explore programs from leading Australian universities with live Q&A sessions.",
    date: "June 1, 2026",
    time: "3:00 PM - 6:00 PM",
    location: "Marriott Hotel, Islamabad",
    type: "Open Day",
  },
  {
    id: 5,
    title: "Scholarship Opportunities Webinar",
    description: "Discover scholarship opportunities for Pakistani students in 2026-2027 academic year.",
    date: "June 5, 2026",
    time: "5:00 PM - 6:30 PM",
    location: "Online (Zoom)",
    type: "Webinar",
  },
  {
    id: 6,
    title: "Germany Education Fair",
    description: "Learn about tuition-free education in Germany and meet university representatives.",
    date: "June 10, 2026",
    time: "10:00 AM - 4:00 PM",
    location: "Serena Hotel, Karachi",
    type: "Education Fair",
  },
]

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-background">
      <TopBar />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-primary py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Upcoming Events
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Join our education fairs, seminars, and webinars to explore your study abroad options
          </p>
        </div>
      </section>

      {/* Events List */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-6">
            {upcomingEvents.map((event) => (
              <div 
                key={event.id} 
                className="bg-card rounded-lg border border-border p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-accent/10 rounded-lg flex flex-col items-center justify-center">
                      <span className="text-2xl font-bold text-accent">
                        {event.date.split(" ")[1].replace(",", "")}
                      </span>
                      <span className="text-sm text-accent">
                        {event.date.split(" ")[0]}
                      </span>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <span className="inline-block bg-secondary/20 text-secondary-foreground text-xs px-2 py-1 rounded mb-2">
                      {event.type}
                    </span>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {event.title}
                    </h3>
                    <p className="text-muted-foreground mb-3">
                      {event.description}
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {event.time}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {event.location}
                      </span>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <Link 
                      href="/apply" 
                      className="inline-block bg-accent hover:bg-accent/90 text-accent-foreground font-medium py-2 px-6 rounded transition-colors"
                    >
                      Register
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Can&apos;t Attend an Event?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            No worries! Book a free consultation with our expert counselors at your convenience.
          </p>
          <Link 
            href="/apply" 
            className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-3 px-8 rounded-lg transition-colors"
          >
            Book Free Consultation
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
