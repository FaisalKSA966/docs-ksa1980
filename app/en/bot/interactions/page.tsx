import { DocsContent } from "@/components/docs-content"
import { Card } from "@/components/ui/card"

export default function InteractionsPage() {
  return (
    <DocsContent
      title="Interactions"
      description="Understanding buttons, select menus, and modals in the ticket system"
    >
      <p className="text-lg text-muted-foreground">
        The bot uses Discord's interaction components to create rich, interactive experiences for users. This includes
        buttons, select menus, and modals for ticket creation and management.
      </p>

      <h2>Ticket Creation Button</h2>

      <p>The main ticket creation interface uses a button component that users can click to start creating a ticket.</p>

      <div className="bg-muted/50 p-4 rounded-lg border space-y-2">
        <p className="font-semibold">What you'll see:</p>
        <p className="text-sm text-muted-foreground">
          A blue button labeled "🎫 Create Ticket" in the support channel. Click it to begin the ticket creation
          process.
        </p>
      </div>

      <h2>Category Select Menu</h2>

      <p>After clicking the create ticket button, you'll see a dropdown menu to choose your ticket category:</p>

      <div className="bg-muted/50 p-4 rounded-lg border space-y-3">
        <p className="font-semibold">Available Categories:</p>
        <div className="space-y-2">
          <div className="flex items-start gap-2">
            <span className="text-lg">💬</span>
            <div>
              <p className="font-medium text-sm">General Support</p>
              <p className="text-xs text-muted-foreground">General questions and support</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-lg">🔧</span>
            <div>
              <p className="font-medium text-sm">Technical Issue</p>
              <p className="text-xs text-muted-foreground">Report technical problems</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-lg">💳</span>
            <div>
              <p className="font-medium text-sm">Billing</p>
              <p className="text-xs text-muted-foreground">Billing and payment questions</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-lg">🚨</span>
            <div>
              <p className="font-medium text-sm">Report User</p>
              <p className="text-xs text-muted-foreground">Report rule violations</p>
            </div>
          </div>
        </div>
      </div>

      <h2>Ticket Creation Modal</h2>

      <p>After selecting a category, a form will appear where you can provide details about your ticket:</p>

      <div className="bg-muted/50 p-4 rounded-lg border space-y-3">
        <p className="font-semibold">Form Fields:</p>
        <div className="space-y-2">
          <div>
            <p className="font-medium text-sm">Subject (Required)</p>
            <p className="text-xs text-muted-foreground">Brief description of your issue (max 100 characters)</p>
          </div>
          <div>
            <p className="font-medium text-sm">Description (Required)</p>
            <p className="text-xs text-muted-foreground">Detailed description of your issue (max 1000 characters)</p>
          </div>
        </div>
      </div>

      <h2>Ticket Control Panel</h2>

      <p>Each ticket channel includes a control panel with action buttons for staff members:</p>

      <div className="bg-muted/50 p-4 rounded-lg border space-y-3">
        <p className="font-semibold">Available Actions:</p>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-sm">✋</span>
            <div>
              <p className="font-medium text-sm">Claim Button (Green)</p>
              <p className="text-xs text-muted-foreground">Assign the ticket to yourself</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm">📝</span>
            <div>
              <p className="font-medium text-sm">Transcript Button (Gray)</p>
              <p className="text-xs text-muted-foreground">Generate a transcript of the conversation</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm">🔒</span>
            <div>
              <p className="font-medium text-sm">Close Button (Red)</p>
              <p className="text-xs text-muted-foreground">Close the ticket</p>
            </div>
          </div>
        </div>
      </div>

      <h2>Close Confirmation</h2>

      <p>When closing a ticket, you'll see a confirmation dialog to prevent accidental closures:</p>

      <div className="bg-muted/50 p-4 rounded-lg border space-y-2">
        <p className="font-semibold">Confirmation Options:</p>
        <p className="text-sm text-muted-foreground">
          <strong>Confirm Close (Red):</strong> Proceed with closing the ticket
        </p>
        <p className="text-sm text-muted-foreground">
          <strong>Cancel (Gray):</strong> Keep the ticket open
        </p>
      </div>

      <h2>Rating System</h2>

      <p>
        After a ticket is closed, the ticket creator will receive a direct message asking them to rate their experience:
      </p>

      <div className="bg-muted/50 p-4 rounded-lg border space-y-2">
        <p className="font-semibold">Rating Options:</p>
        <div className="space-y-1 text-sm">
          <p>⭐⭐⭐⭐⭐ - Excellent (5 stars)</p>
          <p>⭐⭐⭐⭐ - Good (4 stars)</p>
          <p>⭐⭐⭐ - Average (3 stars)</p>
          <p>⭐⭐ - Below Average (2 stars)</p>
          <p>⭐ - Poor (1 star)</p>
        </div>
      </div>

      <h2>Interaction Tips</h2>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="p-4">
          <h3 className="font-semibold mb-2">✅ Best Practices</h3>
          <ul className="text-sm space-y-1 text-muted-foreground">
            <li>Provide clear and detailed information in ticket forms</li>
            <li>Select the most appropriate category for your issue</li>
            <li>Wait for confirmation messages before taking additional actions</li>
            <li>Rate your experience honestly to help improve the service</li>
          </ul>
        </Card>

        <Card className="p-4">
          <h3 className="font-semibold mb-2">⚠️ Common Issues</h3>
          <ul className="text-sm space-y-1 text-muted-foreground">
            <li>If a button doesn't respond, wait a few seconds and try again</li>
            <li>Don't click buttons multiple times rapidly</li>
            <li>Make sure you have the required permissions for staff actions</li>
            <li>Interactions expire after 15 minutes of inactivity</li>
          </ul>
        </Card>
      </div>

      <Card className="p-4 bg-blue-500/10 border-blue-500/20 mt-6">
        <p className="text-sm">
          <strong>💡 Tip:</strong> All interactions are designed to be intuitive and user-friendly. If you encounter any
          issues, contact a server administrator for assistance.
        </p>
      </Card>
    </DocsContent>
  )
}
