import { CodeBlock } from "@/components/code-block"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Zap, Shield, Database, Globe, Code } from "lucide-react"

export default function IntroductionPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <Badge className="bg-primary/10 text-primary border-primary/20">Getting Started</Badge>
        <h1 className="text-4xl font-bold tracking-tight">Introduction</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Welcome to the comprehensive documentation for the Discord Ticket Management System. This guide will help you
          understand, set up, and manage your private ticket system.
        </p>
      </div>

      <div className="border-l-4 border-primary pl-6 py-4 bg-primary/5 rounded-r-lg">
        <p className="text-lg font-medium mb-2">What is the Ticket System?</p>
        <p className="text-muted-foreground leading-relaxed">
          A comprehensive solution for managing support tickets on Discord with a modern web dashboard. The system
          combines a powerful Discord bot with a Next.js web interface, providing real-time synchronization and advanced
          features for teams of all sizes.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-3xl font-bold">Key Features</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Card className="p-6 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Zap className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-lg font-semibold">Real-time Synchronization</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Instant updates between Discord bot and web dashboard with automatic data synchronization.
            </p>
          </Card>

          <Card className="p-6 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
              <Shield className="w-5 h-5 text-secondary" />
            </div>
            <h3 className="text-lg font-semibold">Advanced Security</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Discord OAuth authentication, role-based access control, and comprehensive audit logging.
            </p>
          </Card>

          <Card className="p-6 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Database className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-lg font-semibold">Robust Database</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              MongoDB Atlas with automatic JSON fallback for reliability and data persistence.
            </p>
          </Card>

          <Card className="p-6 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
              <Globe className="w-5 h-5 text-secondary" />
            </div>
            <h3 className="text-lg font-semibold">Modern Web Dashboard</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Built with Next.js 14, TypeScript, and Tailwind CSS for a responsive experience.
            </p>
          </Card>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-3xl font-bold">System Architecture</h2>
        <p className="text-muted-foreground leading-relaxed">
          The system consists of three main components working together seamlessly:
        </p>

        <div className="space-y-4">
          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Code className="w-6 h-6 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Discord Bot</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Built with Node.js and Discord.js v14, the bot handles all Discord interactions including slash
                  commands, button interactions, and ticket management. It features automatic ticket creation, support
                  role management, and comprehensive logging.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <Badge variant="secondary">Node.js 18+</Badge>
                  <Badge variant="secondary">Discord.js v14</Badge>
                  <Badge variant="secondary">Slash Commands</Badge>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                <Globe className="w-6 h-6 text-secondary" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Web Dashboard</h3>
                <p className="text-muted-foreground leading-relaxed">
                  A modern Next.js 14 application with TypeScript providing a comprehensive interface for managing
                  tickets, viewing statistics, and configuring the system. Features Discord OAuth authentication and
                  real-time updates.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <Badge variant="secondary">Next.js 14</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">Tailwind CSS</Badge>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Database className="w-6 h-6 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Database System</h3>
                <p className="text-muted-foreground leading-relaxed">
                  MongoDB Atlas serves as the primary database with an automatic JSON fallback system for reliability.
                  The system includes comprehensive models for tickets, users, and settings with real-time
                  synchronization.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <Badge variant="secondary">MongoDB Atlas</Badge>
                  <Badge variant="secondary">JSON Fallback</Badge>
                  <Badge variant="secondary">Real-time Sync</Badge>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-3xl font-bold">Who is this for?</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <span className="font-medium">End Users</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed ml-7">
              Learn how to create tickets, interact with support staff, and provide feedback.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <span className="font-medium">Moderators</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed ml-7">
              Understand how to claim tickets, respond to users, and manage support workflows.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <span className="font-medium">Administrators</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed ml-7">
              Configure the system, manage permissions, and monitor performance metrics.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <span className="font-medium">Developers</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed ml-7">
              Integrate with the API, customize features, and extend functionality.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-3xl font-bold">Quick Example</h2>
        <p className="text-muted-foreground leading-relaxed">
          Here's a simple example of how to create a ticket using the Discord bot:
        </p>

        <CodeBlock
          language="typescript"
          title="Creating a Ticket"
          code={`// Using slash command
/ticket subject: "Need help with account"

// Using button interaction
// Click on the appropriate category button in the ticket panel
// - 🔧 Technical Support
// - ❓ General Inquiry
// - 📝 Complaint
// - 💡 Feature Request
// - 📋 Other`}
        />
      </div>

      <Card className="p-6 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
        <h3 className="text-xl font-semibold mb-3">Ready to get started?</h3>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Continue to the Quick Start guide to set up your ticket system in minutes, or explore the detailed
          documentation for comprehensive information about all features.
        </p>
        <div className="flex gap-3">
          <a href="/en/quick-start" className="text-primary hover:underline font-medium">
            Quick Start Guide →
          </a>
          <a href="/en/installation" className="text-secondary hover:underline font-medium">
            Installation Guide →
          </a>
        </div>
      </Card>
    </div>
  )
}
