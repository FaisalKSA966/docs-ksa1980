"use client"

import { DocsLayout } from "@/components/docs-layout"
import { arNavigation } from "@/lib/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { 
  Globe,
  Code,
  Shield,
  Key,
  Info,
  CheckCircle
} from "lucide-react"

export default function ApiOverview() {
  return (
    <DocsLayout navigation={arNavigation} lang="ar">
      {/* ... rest of the component ... */}
    </DocsLayout>
  )
}