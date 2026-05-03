import { TopBar } from "@/components/top-bar"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { GraduationCap, FileText, Plane, Home, BookOpen, Users, Globe, Award } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Services | Overseas Study and Travel Pvt",
  description: "Our comprehensive services for studying abroad - counseling, visa assistance, accommodation, and more.",
}

const services = [
  {
    icon: GraduationCap,
    title: "Career Counseling",
    description: "Our expert counselors help you choose the right course and university based on your academic background, career goals, and budget.",
  },
  {
    icon: FileText,
    title: "University Admissions",
    description: "We assist with the entire admission process, from application preparation to document verification and submission.",
  },
  {
    icon: Globe,
    title: "Visa Assistance",
    description: "Complete visa guidance including documentation, interview preparation, and application submission support.",
  },
  {
    icon: BookOpen,
    title: "Test Preparation",
    description: "IELTS, TOEFL, GRE, GMAT, and SAT preparation classes with experienced instructors and practice materials.",
  },
  {
    icon: Award,
    title: "Scholarship Guidance",
    description: "We help you identify and apply for scholarships, grants, and financial aid opportunities worldwide.",
  },
  {
    icon: Plane,
    title: "Travel Arrangements",
    description: "Flight bookings, travel insurance, and pre-departure briefings to ensure a smooth journey.",
  },
  {
    icon: Home,
    title: "Accommodation Support",
    description: "Assistance with finding suitable accommodation options including university housing and private rentals.",
  },
  {
    icon: Users,
    title: "Post-Arrival Support",
    description: "Airport pickup, orientation assistance, and ongoing support throughout your study abroad journey.",
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <TopBar />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-primary py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Our Services
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Comprehensive support for your study abroad journey from start to finish
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-card rounded-lg border border-border p-6 hover:shadow-lg transition-shadow text-center group"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                  <service.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Our Process
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Free Consultation", description: "Book a free session with our counselors to discuss your goals" },
              { step: "02", title: "Profile Evaluation", description: "We assess your profile and recommend suitable options" },
              { step: "03", title: "Application & Visa", description: "We handle your university application and visa process" },
              { step: "04", title: "Pre-Departure", description: "Final preparations, travel arrangements, and departure support" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-accent text-accent-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Book a free consultation with our expert counselors today and take the first step towards your international education.
          </p>
          <Link 
            href="/apply" 
            className="inline-block bg-accent hover:bg-accent/90 text-accent-foreground font-medium py-3 px-8 rounded-lg transition-colors"
          >
            Book Free Consultation
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
