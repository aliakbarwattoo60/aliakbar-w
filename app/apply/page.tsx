"use client"

import { useState } from "react"
import { TopBar } from "@/components/top-bar"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Send } from "lucide-react"

export default function ApplyPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    education: "",
    destination: "",
    program: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    alert("Application submitted successfully! We will contact you soon.")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <main className="min-h-screen bg-background">
      <TopBar />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-primary py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Apply Now
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Start your journey to studying abroad by filling out our application form
          </p>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
              Application Form
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-foreground mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="+92 300 1234567"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="education" className="block text-sm font-medium text-foreground mb-2">
                  Current Education Level *
                </label>
                <select
                  id="education"
                  name="education"
                  required
                  value={formData.education}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                >
                  <option value="">Select your education level</option>
                  <option value="matric">Matric / O-Levels</option>
                  <option value="intermediate">Intermediate / A-Levels</option>
                  <option value="bachelors">Bachelor&apos;s Degree</option>
                  <option value="masters">Master&apos;s Degree</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="destination" className="block text-sm font-medium text-foreground mb-2">
                  Preferred Destination *
                </label>
                <select
                  id="destination"
                  name="destination"
                  required
                  value={formData.destination}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                >
                  <option value="">Select your preferred destination</option>
                  <option value="uk">United Kingdom</option>
                  <option value="usa">United States</option>
                  <option value="australia">Australia</option>
                  <option value="canada">Canada</option>
                  <option value="germany">Germany</option>
                  <option value="malaysia">Malaysia</option>
                  <option value="turkey">Turkey</option>
                  <option value="newzealand">New Zealand</option>
                  <option value="uae">UAE</option>
                  <option value="sweden">Sweden</option>
                </select>
              </div>

              <div>
                <label htmlFor="program" className="block text-sm font-medium text-foreground mb-2">
                  Preferred Program
                </label>
                <input
                  type="text"
                  id="program"
                  name="program"
                  value={formData.program}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="e.g., Computer Science, Business Administration"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Additional Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                  placeholder="Tell us more about your goals and requirements..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
