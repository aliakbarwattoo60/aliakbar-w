import { TopBar } from "@/components/top-bar"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Users, Award, Globe, Target, Heart, Lightbulb } from "lucide-react"

export const metadata = {
  title: "About | Overseas Study and Travel Pvt",
  description: "Learn about NU Consultants - Your trusted partner for overseas education and travel services.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <TopBar />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-primary py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            About NU Consultants
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Your trusted partner for overseas education and travel services since 2002
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Who We Are
              </h2>
              <p className="text-muted-foreground mb-4">
                NU Consultants is a leading overseas education consultancy firm with over 22 years of experience in helping students achieve their dreams of studying abroad. We have successfully placed thousands of students in top universities across 65+ countries.
              </p>
              <p className="text-muted-foreground mb-4">
                Our team of expert counselors provides personalized guidance to each student, ensuring they find the perfect university and program that aligns with their career goals and aspirations.
              </p>
              <p className="text-muted-foreground">
                With offices across Pakistan and partnerships with universities worldwide, we are committed to making international education accessible and achievable for every ambitious student.
              </p>
            </div>
            <div className="bg-card rounded-lg p-8 border border-border">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <p className="text-4xl font-bold text-accent">22+</p>
                  <p className="text-muted-foreground">Years Experience</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-accent">65+</p>
                  <p className="text-muted-foreground">Destinations</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-accent">50K+</p>
                  <p className="text-muted-foreground">Students Placed</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-accent">500+</p>
                  <p className="text-muted-foreground">Partner Universities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Target, title: "Excellence", description: "We strive for excellence in everything we do, ensuring the highest quality of service for our students." },
              { icon: Heart, title: "Integrity", description: "We maintain complete transparency and honesty in all our dealings with students and partners." },
              { icon: Users, title: "Student-Centric", description: "Our students are at the heart of everything we do. Their success is our success." },
              { icon: Globe, title: "Global Reach", description: "With partners across 65+ countries, we offer truly global opportunities to our students." },
              { icon: Award, title: "Expertise", description: "Our team of experienced counselors brings deep knowledge of international education systems." },
              { icon: Lightbulb, title: "Innovation", description: "We continuously evolve our services to meet the changing needs of students and the education landscape." },
            ].map((value, index) => (
              <div key={index} className="bg-card rounded-lg p-6 border border-border text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
