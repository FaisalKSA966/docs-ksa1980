import type React from "react"
import { DocsLayout } from "@/components/docs-layout"

const navigation = [
  {
    title: "Getting Started",
    items: [
      { title: "Introduction", href: "/en/introduction" },
      { title: "Quick Start", href: "/en/quick-start" },
      { title: "Installation", href: "/en/installation" },
    ],
  },
  {
    title: "Discord Bot",
    items: [
      { title: "Overview", href: "/en/bot/overview" },
      { title: "Commands", href: "/en/bot/commands" },
      { title: "Interactions", href: "/en/bot/interactions" },
      { title: "Configuration", href: "/en/bot/configuration" },
    ],
  },
  {
    title: "Web Dashboard",
    items: [
      { title: "Overview", href: "/en/dashboard/overview" },
      { title: "Authentication", href: "/en/dashboard/authentication" },
      { title: "Features", href: "/en/dashboard/features" },
      { title: "Settings", href: "/en/dashboard/settings" },
    ],
  },
  {
    title: "API Reference",
    items: [
      { title: "Overview", href: "/en/api/overview" },
      { title: "Tickets", href: "/en/api/tickets" },
      { title: "Statistics", href: "/en/api/statistics" },
      { title: "Sync", href: "/en/api/sync" },
    ],
  },
  {
    title: "Guides",
    items: [
      { title: "For Users", href: "/en/guides/users" },
      { title: "For Moderators", href: "/en/guides/moderators" },
      { title: "For Administrators", href: "/en/guides/administrators" },
      { title: "For Developers", href: "/en/guides/developers" },
    ],
  },
  {
    title: "Advanced",
    items: [
      { title: "Database Schema", href: "/en/advanced/database" },
      { title: "Deployment", href: "/en/advanced/deployment" },
      { title: "Troubleshooting", href: "/en/advanced/troubleshooting" },
      { title: "Security", href: "/en/advanced/security" },
    ],
  },
]

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return (
    <DocsLayout navigation={navigation} lang="en">
      {children}
    </DocsLayout>
  )
}
