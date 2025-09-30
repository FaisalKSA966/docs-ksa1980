import { CodeBlock } from "@/components/code-block"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Settings, Shield, Bell, Database } from "lucide-react"

export default function ConfigurationPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <Badge className="bg-primary/10 text-primary border-primary/20">Getting Started</Badge>
        <h1 className="text-4xl font-bold tracking-tight">Configuration</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Configure your ticket system to match your server's needs and workflow.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl font-bold">Initial Setup</h2>

        <p className="text-muted-foreground leading-relaxed">
          After installation, run the setup command in your Discord server to configure the basic system:
        </p>

        <CodeBlock language="typescript" code={`/setup`} />

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-3">What the setup command does:</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Creates a dedicated category for ticket channels</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Sets up a ticket creation channel with interactive buttons</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Configures support roles for ticket management</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Creates log channels for admin and ticket activities</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Deploys the ticket panel with category buttons</span>
            </li>
          </ul>
        </Card>
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl font-bold flex items-center gap-2">
          <Settings className="w-8 h-8" />
          System Settings
        </h2>

        <div className="space-y-4">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">Ticket Categories</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              The system supports multiple ticket categories to organize support requests:
            </p>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg">
                <span className="text-xl">🔧</span>
                <span className="font-medium">Technical Support</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg">
                <span className="text-xl">❓</span>
                <span className="font-medium">General Inquiry</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg">
                <span className="text-xl">📝</span>
                <span className="font-medium">Complaint</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg">
                <span className="text-xl">💡</span>
                <span className="font-medium">Feature Request</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg">
                <span className="text-xl">📋</span>
                <span className="font-medium">Other</span>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
              <Shield className="w-6 h-6" />
              Support Roles
            </h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Configure which roles can manage tickets. Support staff with these roles can:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>Claim tickets to take ownership</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>Close tickets after resolution</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>View all ticket channels</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>Access ticket history and logs</span>
              </li>
            </ul>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
              <Bell className="w-6 h-6" />
              Logging Channels
            </h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              The system creates dedicated channels for different types of logs:
            </p>
            <div className="space-y-3">
              <div className="p-4 bg-muted/50 rounded-lg">
                <p className="font-medium mb-1">Admin Log Channel</p>
                <p className="text-sm text-muted-foreground">
                  Records administrative actions, system changes, and important events
                </p>
              </div>
              <div className="p-4 bg-muted/50 rounded-lg">
                <p className="font-medium mb-1">Ticket Log Channel</p>
                <p className="text-sm text-muted-foreground">
                  Tracks ticket creation, claims, closures, and user interactions
                </p>
              </div>
              <div className="p-4 bg-muted/50 rounded-lg">
                <p className="font-medium mb-1">Rating Channel</p>
                <p className="text-sm text-muted-foreground">Collects user feedback and ratings for closed tickets</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
              <Database className="w-6 h-6" />
              Advanced Settings
            </h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Additional configuration options available through the web dashboard:
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Badge variant="secondary">Max Tickets</Badge>
                <p className="text-sm text-muted-foreground">Limit the number of open tickets per user (default: 3)</p>
              </div>
              <div className="flex items-start gap-3">
                <Badge variant="secondary">Welcome Message</Badge>
                <p className="text-sm text-muted-foreground">Customize the message sent when a ticket is created</p>
              </div>
              <div className="flex items-start gap-3">
                <Badge variant="secondary">Auto-save Transcripts</Badge>
                <p className="text-sm text-muted-foreground">Automatically save ticket conversations when closed</p>
              </div>
              <div className="flex items-start gap-3">
                <Badge variant="secondary">DM Notifications</Badge>
                <p className="text-sm text-muted-foreground">Send direct messages to users on ticket open/close</p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl font-bold">Web Dashboard Configuration</h2>

        <p className="text-muted-foreground leading-relaxed">
          Access advanced settings through the web dashboard at{" "}
          <code className="text-sm bg-muted px-2 py-1 rounded">https://yourdomain.com/dashboard</code>
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-3">Authentication</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Configure Discord OAuth, set required roles, and manage admin access through the dashboard settings.
            </p>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-3">Ticket Settings</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Customize ticket behavior, categories, priorities, and automatic actions from the settings panel.
            </p>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-3">Notifications</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Configure when and how users and staff receive notifications about ticket activities.
            </p>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-3">Integrations</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Set up webhooks, external APIs, and third-party integrations for extended functionality.
            </p>
          </Card>
        </div>
      </div>

      <Card className="p-6 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
        <h3 className="text-xl font-semibold mb-3">Next Steps</h3>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Now that your system is configured, explore the bot commands and dashboard features to get the most out of
          your ticket system.
        </p>
        <div className="flex flex-wrap gap-3">
          <a href="/en/bot/slash-commands" className="text-primary hover:underline font-medium">
            Bot Commands →
          </a>
          <a href="/en/dashboard/overview" className="text-secondary hover:underline font-medium">
            Dashboard Guide →
          </a>
        </div>
      </Card>
    </div>
  )
}
