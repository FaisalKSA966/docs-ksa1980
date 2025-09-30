import type React from "react"
import { DocsLayout } from "@/components/docs-layout"

const navigation = [
  {
    title: "البداية",
    items: [
      { title: "المقدمة", href: "/ar/introduction" },
      { title: "البدء السريع", href: "/ar/quick-start" },
      { title: "التثبيت", href: "/ar/installation" },
    ],
  },
  {
    title: "بوت Discord",
    items: [
      { title: "نظرة عامة", href: "/ar/bot/overview" },
      { title: "الأوامر", href: "/ar/bot/commands" },
      { title: "التفاعلات", href: "/ar/bot/interactions" },
      { title: "الإعدادات", href: "/ar/bot/configuration" },
    ],
  },
  {
    title: "لوحة التحكم",
    items: [
      { title: "نظرة عامة", href: "/ar/dashboard/overview" },
      { title: "المصادقة", href: "/ar/dashboard/authentication" },
      { title: "المميزات", href: "/ar/dashboard/features" },
      { title: "الإعدادات", href: "/ar/dashboard/settings" },
    ],
  },
  {
    title: "مرجع API",
    items: [
      { title: "نظرة عامة", href: "/ar/api/overview" },
      { title: "التذاكر", href: "/ar/api/tickets" },
      { title: "الإحصائيات", href: "/ar/api/statistics" },
      { title: "المزامنة", href: "/ar/api/sync" },
    ],
  },
  {
    title: "الأدلة",
    items: [
      { title: "للمستخدمين", href: "/ar/guides/users" },
      { title: "للمشرفين", href: "/ar/guides/moderators" },
      { title: "للإداريين", href: "/ar/guides/administrators" },
      { title: "للمطورين", href: "/ar/guides/developers" },
    ],
  },
  {
    title: "متقدم",
    items: [
      { title: "قاعدة البيانات", href: "/ar/advanced/database" },
      { title: "النشر", href: "/ar/advanced/deployment" },
      { title: "حل المشاكل", href: "/ar/advanced/troubleshooting" },
      { title: "الأمان", href: "/ar/advanced/security" },
    ],
  },
]

export default function ArLayout({ children }: { children: React.ReactNode }) {
  return (
    <DocsLayout navigation={navigation} lang="ar">
      {children}
    </DocsLayout>
  )
}
