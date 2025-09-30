"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Search } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

interface NavItem {
  title: string
  href: string
  items?: NavItem[]
}

interface DocsLayoutProps {
  children: React.ReactNode
  navigation: NavItem[]
  lang: "en" | "ar"
}

export function DocsLayout({ children, navigation, lang }: DocsLayoutProps) {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const isRTL = lang === "ar"

  const toggleLanguage = () => {
    const newLang = lang === "en" ? "ar" : "en"
    const currentPath = pathname.replace(`/${lang}`, "")
    window.location.href = `/${newLang}${currentPath}`
  }

  return (
    <div className={cn("min-h-screen", isRTL && "rtl")} dir={isRTL ? "rtl" : "ltr"}>
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-sidebar/95 backdrop-blur supports-[backdrop-filter]:bg-sidebar/60">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-4">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side={isRTL ? "right" : "left"} className="w-80 p-0">
                <ScrollArea className="h-full py-6">
                  <Navigation items={navigation} pathname={pathname} lang={lang} />
                </ScrollArea>
              </SheetContent>
            </Sheet>

            <Link href={`/${lang}`} className="flex items-center gap-2">
              <span className="font-bold text-sidebar-foreground text-lg">
                {lang === "en" ? "Documentation" : "التوثيق"}
              </span>
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Search className="h-5 w-5" />
            </Button>

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

      <div className="container flex-1 items-start lg:grid lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10 px-4 py-8">
        {/* Sidebar Navigation */}
        <aside className="fixed top-16 z-30 hidden h-[calc(100vh-4rem)] w-60 shrink-0 lg:sticky lg:block">
          <ScrollArea className="h-full py-6 pr-6">
            <Navigation items={navigation} pathname={pathname} lang={lang} />
          </ScrollArea>
        </aside>

        {/* Main Content */}
        <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_200px]">
          <div className="mx-auto w-full min-w-0 max-w-3xl">{children}</div>

          {/* Table of Contents - Right Sidebar */}
          <div className="hidden text-sm xl:block">
            <div className="sticky top-20 -mt-10 pt-4">
              <div className="space-y-2">
                <p className="font-medium text-muted-foreground">{lang === "en" ? "On this page" : "في هذه الصفحة"}</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

function Navigation({ items, pathname, lang }: { items: NavItem[]; pathname: string; lang: string }) {
  return (
    <nav className="space-y-2">
      {items.map((item, index) => (
        <div key={index} className="space-y-1">
          {item.href ? (
            <Link
              href={item.href}
              className={cn(
                "block rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                pathname === item.href
                  ? "bg-sidebar-accent text-sidebar-accent-foreground"
                  : "text-sidebar-foreground/70",
              )}
            >
              {item.title}
            </Link>
          ) : (
            <div className="px-3 py-2 text-sm font-semibold text-sidebar-foreground">{item.title}</div>
          )}

          {item.items && (
            <div className={cn("space-y-1", lang === "ar" ? "mr-4" : "ml-4")}>
              {item.items.map((subItem, subIndex) => (
                <Link
                  key={subIndex}
                  href={subItem.href}
                  className={cn(
                    "block rounded-lg px-3 py-2 text-sm transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                    pathname === subItem.href
                      ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                      : "text-sidebar-foreground/60",
                  )}
                >
                  {subItem.title}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  )
}
