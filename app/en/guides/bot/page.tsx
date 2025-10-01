import { DocsLayout } from "@/components/docs-layout"
import { enNavigation } from "@/lib/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { 
  Bot,
  MessageSquare,
  Settings,
  Command,
  Info
} from "lucide-react"

export default function BotGuide() {
  return (
    <DocsLayout navigation={enNavigation} lang="en">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Bot className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold">Bot Guide</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Complete guide to using the Discord bot
          </p>
        </div>

        {/* Basic Commands */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Command className="h-5 w-5" />
              Basic Commands
            </CardTitle>
            <CardDescription>
              Essential bot commands for users
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium">Ticket Commands</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`/ticket create
Description: Create a new support ticket
Options:
  - category: Type of ticket (technical/general/complaint/feature)
  - subject: Ticket subject
  - message: Initial message
  - priority: Ticket priority (low/normal/high/urgent)

/ticket close
Description: Close your current ticket
Options:
  - reason: Reason for closing (optional)
  - rating: Rate the support (1-5)
  - feedback: Additional feedback (optional)

/ticket list
Description: List your tickets
Options:
  - status: Filter by status (open/closed)
  - limit: Number of tickets to show (default: 10)`}
                </pre>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">User Commands</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`/profile
Description: View your ticket profile
Options:
  - private: Show profile privately (default: true)

/settings
Description: Manage your preferences
Options:
  - notifications: Enable/disable notifications
  - language: Set preferred language
  - theme: Set theme preference`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Staff Commands */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              Staff Commands
            </CardTitle>
            <CardDescription>
              Commands for support staff and moderators
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium">Ticket Management</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`/ticket claim
Description: Claim an open ticket
Options:
  - ticket: Ticket ID or mention

/ticket unclaim
Description: Release a claimed ticket
Options:
  - ticket: Ticket ID or mention

/ticket transfer
Description: Transfer ticket to another staff member
Options:
  - ticket: Ticket ID or mention
  - user: Staff member to transfer to

/ticket priority
Description: Update ticket priority
Options:
  - ticket: Ticket ID or mention
  - level: New priority level`}
                </pre>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Moderation Commands</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`/ticket delete
Description: Delete a ticket (admin only)
Options:
  - ticket: Ticket ID or mention
  - reason: Deletion reason

/ticket ban
Description: Ban user from creating tickets
Options:
  - user: User to ban
  - duration: Ban duration
  - reason: Ban reason

/ticket unban
Description: Remove ticket creation ban
Options:
  - user: User to unban`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Configuration */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5" />
              Server Configuration
            </CardTitle>
            <CardDescription>
              Server-specific bot settings
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium">Basic Settings</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`/config channel
Description: Set ticket creation channel
Options:
  - channel: Channel for ticket creation

/config category
Description: Manage ticket categories
Options:
  - action: add/remove/list
  - name: Category name
  - description: Category description

/config roles
Description: Configure staff roles
Options:
  - admin: Admin role
  - support: Support staff role`}
                </pre>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Advanced Settings</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`/config autoclose
Description: Configure auto-close settings
Options:
  - enable: Enable/disable auto-close
  - time: Hours before auto-close
  - notify: Enable notifications

/config limit
Description: Set ticket limits
Options:
  - max: Maximum open tickets per user
  - cooldown: Time between tickets

/config message
Description: Customize bot messages
Options:
  - type: welcome/close/claim
  - message: Custom message content`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Best Practices */}
        <Alert>
          <Info className="h-4 w-4" />
          <AlertDescription>
            <strong>Best Practices:</strong> Use appropriate channels. 
            Keep tickets organized. 
            Respond promptly. 
            Use clear communication. 
            Follow server guidelines.
          </AlertDescription>
        </Alert>
      </div>
    </DocsLayout>
  )
}
