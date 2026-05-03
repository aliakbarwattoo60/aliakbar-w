"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"

const destinations = [
  { name: "UK", href: "/destinations#uk" },
  { name: "USA", href: "/destinations#usa" },
  { name: "Australia", href: "/destinations#australia" },
  { name: "Canada", href: "/destinations#canada" },
  { name: "Malaysia", href: "/destinations#malaysia" },
  { name: "Germany", href: "/destinations#germany" },
  { name: "Turkey", href: "/destinations#turkey" },
  { name: "New Zealand", href: "/destinations#new-zealand" },
  { name: "UAE", href: "/destinations#uae" },
  { name: "Sweden", href: "/destinations#sweden" },
]

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Blogs", href: "/blogs" },
  { name: "Events", href: "/events" },
  { name: "Our Offices", href: "/offices" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [destinationsOpen, setDestinationsOpen] = useState(false)

  return (
    <nav className="border-b border-border/20 bg-nav-bg" aria-label="Main navigation">
      <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-3 md:py-4">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3 text-nav-text" aria-label="Overseas Study and Travel Home">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary/80 via-primary to-primary/90 text-base font-bold text-primary-foreground shadow-md">
            OS
          </span>
          <span className="max-w-[170px] text-xs font-medium leading-tight text-nav-text md:text-sm">
            OVERSEAS STUDY AND TRAVEL PVT
          </span>
        </Link>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-nav-text/20 text-nav-text transition-colors hover:bg-nav-text/5 lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-1 rounded-full bg-secondary px-4 py-2 lg:flex">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm font-semibold text-secondary-foreground transition-colors hover:bg-secondary-foreground/10"
              >
                {link.name}
              </Link>
            </li>
          ))}
          
          {/* Destinations Dropdown */}
          <li className="relative">
            <button
              onClick={() => setDestinationsOpen(!destinationsOpen)}
              onMouseEnter={() => setDestinationsOpen(true)}
              className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-semibold text-secondary-foreground transition-colors hover:bg-secondary-foreground/10"
            >
              Study Destinations
              <ChevronDown className="h-3.5 w-3.5" />
            </button>
            
            {destinationsOpen && (
              <div
                className="absolute left-0 top-full z-50 mt-2 min-w-[190px] rounded-xl bg-nav-bg py-2 shadow-xl"
                onMouseLeave={() => setDestinationsOpen(false)}
              >
                {destinations.map((dest) => (
                  <Link
                    key={dest.name}
                    href={dest.href}
                    className="block px-4 py-2 text-sm font-medium text-nav-text transition-colors hover:bg-primary/5 hover:text-primary"
                    onClick={() => setDestinationsOpen(false)}
                  >
                    {dest.name}
                  </Link>
                ))}
              </div>
            )}
          </li>
        </ul>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="w-full pt-4 lg:hidden">
            <ul className="flex flex-col gap-1 rounded-xl bg-secondary p-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="block rounded-lg px-4 py-3 text-sm font-semibold text-secondary-foreground transition-colors hover:bg-secondary-foreground/10"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              
              <li>
                <button
                  onClick={() => setDestinationsOpen(!destinationsOpen)}
                  className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-sm font-semibold text-secondary-foreground transition-colors hover:bg-secondary-foreground/10"
                >
                  Study Destinations
                  <ChevronDown className={`h-4 w-4 transition-transform ${destinationsOpen ? "rotate-180" : ""}`} />
                </button>
                
                {destinationsOpen && (
                  <div className="mt-1 rounded-lg bg-nav-bg/10 py-1">
                    {destinations.map((dest) => (
                      <Link
                        key={dest.name}
                        href={dest.href}
                        className="block px-6 py-2 text-sm text-secondary-foreground/90 transition-colors hover:text-secondary-foreground"
                        onClick={() => {
                          setDestinationsOpen(false)
                          setIsOpen(false)
                        }}
                      >
                        {dest.name}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}
