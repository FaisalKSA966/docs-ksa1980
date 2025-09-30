"use client"

import { cn } from "@/lib/utils"
import { ChevronDown, ChevronRight } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

interface NavItem {
  title: string
  href?: string
  items?: NavItem[]
}

interface DocsSidebarProps {
  lang: "en" | "ar"
  navigation: NavItem[]
  className?: string
}

export function DocsSidebar({ lang, navigation, className }: DocsSidebarProps) {
  const pathname = usePathname()
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({})

  const toggleSection = (title: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }))
  }

  const renderNavItem = (item: NavItem, level = 0) => {
    const hasChildren = item.items && item.items.length > 0
    const isOpen = openSections[item.title] ?? true
    const isActive = item.href && pathname === item.href

    if (hasChildren) {
      return (
        <div key={item.title} className="mb-1">
          <button
            onClick={() => toggleSection(item.title)}
            className={cn(
              "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
              level === 0 && "text-foreground",
              level > 0 && "text-muted-foreground",
            )}
          >
            <span>{item.title}</span>
            {isOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
          </button>
          {isOpen && (
            <div className={cn("ml-3 mt-1 space-y-1 border-l border-border pl-3")}>
              {item.items?.map((child) => renderNavItem(child, level + 1))}
            </div>
          )}
        </div>
      )
    }

    return (
      <Link
        key={item.title}
        href={item.href || "#"}
        className={cn(
          "block rounded-md px-3 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground",
          isActive ? "bg-accent font-medium text-accent-foreground" : "text-muted-foreground",
          level > 0 && "text-sm",
        )}
      >
        {item.title}
      </Link>
    )
  }

  return (
    <aside
      className={cn(
        "fixed top-16 z-30 h-[calc(100vh-4rem)] w-64 shrink-0 overflow-y-auto border-r border-border bg-background pb-10",
        lang === "ar" && "right-0 border-l border-r-0",
        lang === "en" && "left-0",
        className,
      )}
    >
      <div className="space-y-1 p-4">{navigation.map((item) => renderNavItem(item))}</div>
    </aside>
  )
}
