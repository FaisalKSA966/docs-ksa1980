"use client"

import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

interface DocsHeaderProps {
  lang: "en" | "ar"
  onMenuToggle?: () => void
}

export function DocsHeader({ lang, onMenuToggle }: DocsHeaderProps) {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleLanguage = () => {
    const newLang = lang === "en" ? "ar" : "en"
    const newPath = pathname.replace(`/${lang}`, `/${newLang}`)
    window.location.href = newPath
  }

  const handleMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen)
    onMenuToggle?.()
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={handleMenuToggle}>
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>

          <Link href={`/${lang}`} className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5 text-primary-foreground"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </div>
            <span className="text-lg font-semibold">Documentation</span>
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" onClick={toggleLanguage} className="gap-2">
            {lang === "en" ? (
              <>
                <span className="text-xl">🇸🇦</span>
                <span className="hidden sm:inline">العربية</span>
              </>
            ) : (
              <>
                <span className="text-xl">🇬🇧</span>
                <span className="hidden sm:inline">English</span>
              </>
            )}
          </Button>
        </div>
      </div>
    </header>
  )
}
