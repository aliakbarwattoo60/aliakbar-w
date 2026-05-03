import { TopBar } from "@/components/top-bar"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export const metadata = {
  title: "Our Offices | Overseas Study and Travel Pvt",
  description: "Find our office locations across Pakistan - Lahore, Karachi, Islamabad, and more.",
}

const offices = [
  {
    city: "Lahore (Head Office)",
    address: "Block-B, Faisal Town, Lahore",
    phone: "(042) 111 128 128",
    email: "admissions.lhr@nu.edu.pk",
    hours: "Mon - Sat: 9:00 AM - 6:00 PM",
  },
  {
    city: "Karachi",
    address: "DHA Phase 6, Karachi",
    phone: "(021) 111 128 128",
    email: "admissions.khi@nu.edu.pk",
    hours: "Mon - Sat: 9:00 AM - 6:00 PM",
  },
  {
    city: "Islamabad",
    address: "Blue Area, Islamabad",
    phone: "(051) 111 128 128",
    email: "admissions.isb@nu.edu.pk",
    hours: "Mon - Sat: 9:00 AM - 6:00 PM",
  },
  {
    city: "Faisalabad",
    address: "D-Ground, Faisalabad",
    phone: "(041) 111 128 128",
    email: "admissions.fsd@nu.edu.pk",
    hours: "Mon - Sat: 9:00 AM - 6:00 PM",
  },
  {
    city: "Multan",
    address: "Bosan Road, Multan",
    phone: "(061) 111 128 128",
    email: "admissions.mtn@nu.edu.pk",
    hours: "Mon - Sat: 9:00 AM - 6:00 PM",
  },
  {
    city: "Peshawar",
    address: "University Road, Peshawar",
    phone: "(091) 111 128 128",
    email: "admissions.pew@nu.edu.pk",
    hours: "Mon - Sat: 9:00 AM - 6:00 PM",
  },
]

export default function OfficesPage() {
  return (
    <main className="min-h-screen bg-background">
      <TopBar />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-primary py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Our Offices
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Visit us at any of our offices across Pakistan for personalized consultation
          </p>
        </div>
      </section>

      {/* Offices Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offices.map((office) => (
              <div 
                key={office.city} 
                className="bg-card rounded-lg border border-border p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {office.city}
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent mt-0.5" />
                    <span className="text-muted-foreground">{office.address}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-accent" />
                    <a 
                      href={`tel:${office.phone}`} 
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      {office.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-accent" />
                    <a 
                      href={`mailto:${office.email}`} 
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      {office.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-accent" />
                    <span className="text-muted-foreground">{office.hours}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Need Help Finding an Office?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Call our helpline or send us an email and we&apos;ll direct you to the nearest office.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:042111128128" 
              className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground font-medium py-3 px-6 rounded-lg transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
            <a 
              href="mailto:admissions.lhr@nu.edu.pk" 
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-3 px-6 rounded-lg transition-colors"
            >
              <Mail className="w-5 h-5" />
              Send Email
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
