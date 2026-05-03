import { TopBar } from "@/components/top-bar"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Calendar, User, ArrowRight } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Blogs | Overseas Study and Travel Pvt",
  description: "Read our latest blogs about studying abroad, visa tips, and international education.",
}

const blogs = [
  {
    id: 1,
    title: "Top 10 Universities in the UK for International Students",
    excerpt: "Discover the best universities in the United Kingdom that offer world-class education and excellent opportunities for international students.",
    author: "NU Consultants",
    date: "April 15, 2026",
    image: "/image.png",
  },
  {
    id: 2,
    title: "How to Apply for a Student Visa: A Complete Guide",
    excerpt: "Everything you need to know about the student visa application process, from documentation to interview tips.",
    author: "NU Consultants",
    date: "April 10, 2026",
    image: "/image.png",
  },
  {
    id: 3,
    title: "Scholarships for Pakistani Students in 2026",
    excerpt: "A comprehensive list of scholarships available for Pakistani students looking to study abroad in 2026.",
    author: "NU Consultants",
    date: "April 5, 2026",
    image: "/image.png",
  },
  {
    id: 4,
    title: "Life as an International Student in Canada",
    excerpt: "Real experiences and tips from students who have studied in Canada. Learn what to expect and how to prepare.",
    author: "NU Consultants",
    date: "March 28, 2026",
    image: "/image.png",
  },
  {
    id: 5,
    title: "IELTS vs TOEFL: Which Test Should You Take?",
    excerpt: "A detailed comparison of IELTS and TOEFL to help you decide which English proficiency test is right for you.",
    author: "NU Consultants",
    date: "March 20, 2026",
    image: "/image.png",
  },
  {
    id: 6,
    title: "Affordable Study Destinations for 2026",
    excerpt: "Looking to study abroad on a budget? Here are the most affordable countries with quality education.",
    author: "NU Consultants",
    date: "March 15, 2026",
    image: "/image.png",
  },
]

export default function BlogsPage() {
  return (
    <main className="min-h-screen bg-background">
      <TopBar />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-primary py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Our Blogs
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Stay updated with the latest news, tips, and guides about studying abroad
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <article key={blog.id} className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-muted flex items-center justify-center">
                  <span className="text-muted-foreground">Blog Image</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {blog.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {blog.author}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2 line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {blog.excerpt}
                  </p>
                  <Link 
                    href="#" 
                    className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium transition-colors"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
