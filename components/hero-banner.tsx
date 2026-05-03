"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function HeroBanner() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <section className="relative min-h-[430px] w-full overflow-hidden" aria-label="Educational highlight">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/image.png"
          alt="University students on campus"
          fill
          className="object-cover object-center brightness-90 contrast-105 saturate-105"
          priority
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-background/40 to-accent/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[430px] w-full max-w-7xl items-center justify-end px-4 py-8 md:py-12">
        {/* Consultation Form */}
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md rounded-xl border border-primary/30 bg-card p-5 shadow-2xl backdrop-blur-sm md:p-6"
        >
          <h2 className="mb-4 border-b border-primary/40 pb-3 text-center text-xl font-bold text-card-foreground md:text-2xl">
            Book Consultation Now
          </h2>

          <div className="space-y-3">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full rounded-lg border border-primary/40 bg-foreground/10 px-4 py-3 text-card-foreground placeholder:text-card-foreground/70 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full rounded-lg border border-primary/40 bg-foreground/10 px-4 py-3 text-card-foreground placeholder:text-card-foreground/70 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
              required
            />

            <textarea
              name="message"
              placeholder="How can we help you?"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={3}
              className="w-full resize-none rounded-lg border border-primary/40 bg-foreground/10 px-4 py-3 text-card-foreground placeholder:text-card-foreground/70 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
            />

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-b from-accent to-accent/80 px-6 py-3 text-sm font-bold text-accent-foreground transition-all hover:from-accent/90 hover:to-accent/70 hover:shadow-lg"
            >
              Book Consultation Now
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
