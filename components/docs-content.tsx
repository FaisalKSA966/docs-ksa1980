import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface DocsContentProps {
  children: ReactNode
  lang: "en" | "ar"
}

export function DocsContent({ children, lang }: DocsContentProps) {
  return (
    <main
      className={cn(
        "flex-1 overflow-y-auto",
        lang === "ar" ? "lg:mr-64" : "lg:ml-64",
        lang === "ar" && "[direction:rtl]",
      )}
    >
      <div className="container max-w-4xl px-4 py-8 lg:px-8">{children}</div>
    </main>
  )
}
