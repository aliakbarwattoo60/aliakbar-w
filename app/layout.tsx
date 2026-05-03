import type { Metadata, Viewport } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
})

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins"
})

export const metadata: Metadata = {
  title: "Overseas Study and Travel Pvt | Your Gateway to Global Education",
  description: "Expert consultancy services for studying abroad. 22+ years of experience, 65+ study destinations, 1000+ university partners. Book your consultation today.",
  keywords: "study abroad, overseas education, university consultancy, visa assistance, international education",
}

export const viewport: Viewport = {
  themeColor: "#072646",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
