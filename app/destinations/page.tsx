import { TopBar } from "@/components/top-bar"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"

export const metadata = {
  title: "Study Destinations | Overseas Study and Travel Pvt",
  description: "Explore our study destinations across the globe - UK, USA, Australia, Canada, Germany, and more.",
}

const destinations = [
  {
    name: "United Kingdom",
    code: "UK",
    description: "Home to world-renowned universities like Oxford and Cambridge, the UK offers exceptional education with rich cultural experiences.",
    universities: "150+ Partner Universities",
    popular: ["Business", "Engineering", "Medicine", "Law"],
  },
  {
    name: "United States",
    code: "USA",
    description: "The USA hosts the world's top universities and offers diverse programs with cutting-edge research opportunities.",
    universities: "200+ Partner Universities",
    popular: ["Computer Science", "MBA", "Engineering", "Arts"],
  },
  {
    name: "Australia",
    code: "Australia",
    description: "Australia combines quality education with a fantastic lifestyle, beautiful landscapes, and welcoming culture.",
    universities: "45+ Partner Universities",
    popular: ["Healthcare", "IT", "Hospitality", "Engineering"],
  },
  {
    name: "Canada",
    code: "Canada",
    description: "Canada offers affordable education, post-study work opportunities, and a pathway to permanent residency.",
    universities: "80+ Partner Universities",
    popular: ["IT", "Business", "Healthcare", "Engineering"],
  },
  {
    name: "Malaysia",
    code: "Malaysia",
    description: "An affordable destination with quality education, diverse culture, and English-taught programs.",
    universities: "30+ Partner Universities",
    popular: ["Business", "Engineering", "Hospitality", "IT"],
  },
  {
    name: "Germany",
    code: "Germany",
    description: "Germany offers tuition-free education at public universities with excellent engineering and technical programs.",
    universities: "50+ Partner Universities",
    popular: ["Engineering", "Automotive", "IT", "Sciences"],
  },
  {
    name: "Turkey",
    code: "Turkey",
    description: "Turkey provides affordable education with a rich blend of Eastern and Western cultures.",
    universities: "25+ Partner Universities",
    popular: ["Medicine", "Engineering", "Business", "Arts"],
  },
  {
    name: "New Zealand",
    code: "New Zealand",
    description: "New Zealand offers world-class education in a safe, friendly environment with stunning natural beauty.",
    universities: "20+ Partner Universities",
    popular: ["Agriculture", "Tourism", "IT", "Environmental Science"],
  },
  {
    name: "UAE",
    code: "UAE",
    description: "The UAE is a growing education hub with international campuses and modern facilities.",
    universities: "35+ Partner Universities",
    popular: ["Business", "Engineering", "Hospitality", "Finance"],
  },
  {
    name: "Sweden",
    code: "Sweden",
    description: "Sweden offers innovative education, sustainability focus, and high quality of life.",
    universities: "15+ Partner Universities",
    popular: ["Technology", "Design", "Environmental Studies", "Business"],
  },
]

export default function DestinationsPage() {
  return (
    <main className="min-h-screen bg-background">
      <TopBar />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-primary py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Study Destinations
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Explore our partner universities across 65+ countries worldwide
          </p>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination) => (
              <div 
                key={destination.code} 
                className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-lg transition-shadow group"
              >
                <div className="h-40 bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <span className="text-4xl font-bold text-primary-foreground">
                    {destination.code}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {destination.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {destination.description}
                  </p>
                  <p className="text-accent font-medium text-sm mb-3">
                    {destination.universities}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {destination.popular.map((field) => (
                      <span 
                        key={field} 
                        className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded"
                      >
                        {field}
                      </span>
                    ))}
                  </div>
                  <Link 
                    href="/apply" 
                    className="inline-block w-full text-center bg-accent hover:bg-accent/90 text-accent-foreground font-medium py-2 px-4 rounded transition-colors"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
