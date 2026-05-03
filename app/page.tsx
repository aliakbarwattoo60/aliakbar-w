import { TopBar } from "@/components/top-bar"
import { Navbar } from "@/components/navbar"
import { HeroBanner } from "@/components/hero-banner"
import { HighlightsSection } from "@/components/highlights-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main>
        <HeroBanner />
        <HighlightsSection />
      </main>
      <Footer />
    </>
  )
}
