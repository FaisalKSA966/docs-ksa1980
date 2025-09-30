import { DocsContent } from "@/components/docs-content"
import { Card } from "@/components/ui/card"

export default function SlashCommandsPage() {
  return (
    <DocsContent
      title="Slash Commands"
      description="Complete reference for all Discord slash commands in the ticket system"
    >
      <p className="text-lg text-muted-foreground">
        Slash commands provide a modern, user-friendly interface for interacting with the bot. All commands include
        autocomplete, validation, and helpful descriptions.
      </p>

      <h2>/ticket create</h2>
      <p>Create a new support ticket with a specific category.</p>

      <div className="bg-muted/50 p-4 rounded-lg border space-y-2">
        <p className="font-semibold">Usage:</p>
        <code className="text-sm block">/ticket create category:[general|technical|billing|report]</code>
        <p className="text-sm text-muted-foreground mt-2">
          Creates a private ticket channel where you can discuss your issue with support staff.
        </p>
      </div>

      <h2>/ticket close</h2>
      <p>Close the current ticket with an optional reason.</p>

      <div className="bg-muted/50 p-4 rounded-lg border space-y-2">
        <p className="font-semibold">Usage:</p>
        <code className="text-sm block">/ticket close [reason:optional]</code>
        <p className="text-sm text-muted-foreground mt-2">
          Closes the ticket, generates a transcript, and archives it for future reference.
        </p>
      </div>

      <h2>/ticket add</h2>
      <p>Add a user to the current ticket.</p>

      <div className="bg-muted/50 p-4 rounded-lg border space-y-2">
        <p className="font-semibold">Usage:</p>
        <code className="text-sm block">/ticket add user:@username</code>
        <p className="text-sm text-muted-foreground mt-2">
          Grants the specified user access to view and send messages in the ticket channel.
        </p>
      </div>

      <h2>/ticket remove</h2>
      <p>Remove a user from the current ticket.</p>

      <div className="bg-muted/50 p-4 rounded-lg border space-y-2">
        <p className="font-semibold">Usage:</p>
        <code className="text-sm block">/ticket remove user:@username</code>
        <p className="text-sm text-muted-foreground mt-2">Revokes the specified user's access to the ticket channel.</p>
      </div>

      <h2>/stats</h2>
      <p>View comprehensive ticket statistics.</p>

      <div className="bg-muted/50 p-4 rounded-lg border space-y-2">
        <p className="font-semibold">Usage:</p>
        <code className="text-sm block">/stats [user:optional]</code>
        <p className="text-sm text-muted-foreground mt-2">
          Displays statistics including total tickets, open tickets, closed tickets, and average response time.
        </p>
      </div>

      <h2>/setup</h2>
      <p>Configure the ticket system (Admin only).</p>

      <Card className="p-4 bg-amber-500/10 border-amber-500/20">
        <p className="text-sm">
          <strong>⚠️ Admin Only:</strong> This command requires administrator permissions and sets up the ticket system
          channels, roles, and categories.
        </p>
      </Card>

      <div className="bg-muted/50 p-4 rounded-lg border space-y-2 mt-4">
        <p className="font-semibold">Usage:</p>
        <code className="text-sm block">/setup</code>
        <p className="text-sm text-muted-foreground mt-2">
          Automatically creates ticket categories, channels, and configures permissions.
        </p>
      </div>

      <h2>Command Permissions</h2>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b">
              <th className="text-left p-3">Command</th>
              <th className="text-left p-3">Required Role</th>
              <th className="text-left p-3">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="p-3 font-mono text-sm">/ticket create</td>
              <td className="p-3 text-sm">Everyone</td>
              <td className="p-3 text-sm">Create a new ticket</td>
            </tr>
            <tr className="border-b">
              <td className="p-3 font-mono text-sm">/ticket close</td>
              <td className="p-3 text-sm">Support+</td>
              <td className="p-3 text-sm">Close tickets</td>
            </tr>
            <tr className="border-b">
              <td className="p-3 font-mono text-sm">/ticket add</td>
              <td className="p-3 text-sm">Moderator+</td>
              <td className="p-3 text-sm">Add users to tickets</td>
            </tr>
            <tr className="border-b">
              <td className="p-3 font-mono text-sm">/ticket remove</td>
              <td className="p-3 text-sm">Moderator+</td>
              <td className="p-3 text-sm">Remove users from tickets</td>
            </tr>
            <tr className="border-b">
              <td className="p-3 font-mono text-sm">/stats</td>
              <td className="p-3 text-sm">Support+</td>
              <td className="p-3 text-sm">View statistics</td>
            </tr>
            <tr className="border-b">
              <td className="p-3 font-mono text-sm">/setup</td>
              <td className="p-3 text-sm">Admin</td>
              <td className="p-3 text-sm">Configure system</td>
            </tr>
          </tbody>
        </table>
      </div>
    </DocsContent>
  )
}
