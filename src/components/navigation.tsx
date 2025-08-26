"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"
import { scrollToSection } from "@/lib/smooth-scroll"
import { ModeToggle } from "@/components/mode-toggle"

export function Navigation() {
  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Experience", id: "experience" },
    { name: "Projects", id: "projects" },
    { name: "Research", id: "research" },
    { name: "Certifications", id: "certifications" },
    { name: "Contact", id: "contact" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/40">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link 
            href="#" 
            className="text-xl font-semibold tracking-tight hover:opacity-80 transition-opacity text-[#3466AA]"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
          >
            Gumpala Teja
          </Link>
          
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "px-4 py-2 rounded-md text-sm font-medium transition-all",
                  "text-foreground/80 hover:text-foreground hover:bg-foreground/5",
                  "focus:outline-none focus:ring-2 focus:ring-foreground/20"
                )}
              >
                {item.name}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <ModeToggle />
            <button className="md:hidden p-2 rounded-md hover:bg-foreground/5">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

function Menu(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}
