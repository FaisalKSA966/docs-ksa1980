export default function DashboardTicketsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Ticket Management</h1>
        <p className="text-lg text-muted-foreground">
          Manage all support tickets through the web dashboard with advanced filtering and search capabilities.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Viewing Tickets</h2>
        <p className="text-muted-foreground">
          The tickets page displays all tickets in a table format with the following information:
        </p>
        <ul className="space-y-2 list-disc list-inside text-muted-foreground ml-4">
          <li>
            <strong>Ticket ID:</strong> Unique identifier for each ticket
          </li>
          <li>
            <strong>User:</strong> Discord username and avatar of the ticket creator
          </li>
          <li>
            <strong>Category:</strong> Type of support request
          </li>
          <li>
            <strong>Status:</strong> Open, In Progress, Closed, or Archived
          </li>
          <li>
            <strong>Priority:</strong> Low, Medium, High, or Urgent
          </li>
          <li>
            <strong>Created:</strong> Date and time the ticket was created
          </li>
          <li>
            <strong>Last Updated:</strong> Most recent activity timestamp
          </li>
          <li>
            <strong>Assigned To:</strong> Staff member handling the ticket
          </li>
        </ul>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Filtering Tickets</h2>
        <p className="text-muted-foreground">Use the filter panel to narrow down tickets:</p>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">By Status</h3>
            <ul className="space-y-1 text-sm text-muted-foreground list-disc list-inside ml-4">
              <li>Open - New tickets awaiting response</li>
              <li>In Progress - Currently being handled</li>
              <li>Closed - Resolved tickets</li>
              <li>Archived - Old closed tickets</li>
            </ul>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">By Category</h3>
            <ul className="space-y-1 text-sm text-muted-foreground list-disc list-inside ml-4">
              <li>Technical Support</li>
              <li>Billing Questions</li>
              <li>General Inquiry</li>
              <li>Bug Report</li>
              <li>Feature Request</li>
            </ul>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">By Priority</h3>
            <ul className="space-y-1 text-sm text-muted-foreground list-disc list-inside ml-4">
              <li>Low - Non-urgent issues</li>
              <li>Medium - Standard priority</li>
              <li>High - Important issues</li>
              <li>Urgent - Critical problems</li>
            </ul>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">By Date Range</h3>
            <p className="text-sm text-muted-foreground">
              Select start and end dates to view tickets created within a specific time period.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Searching Tickets</h2>
        <p className="text-muted-foreground">Use the search bar to find tickets by:</p>
        <ul className="space-y-2 list-disc list-inside text-muted-foreground ml-4">
          <li>Ticket ID</li>
          <li>User name or Discord ID</li>
          <li>Keywords in ticket content</li>
          <li>Staff member name</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Ticket Actions</h2>
        <p className="text-muted-foreground">Click on any ticket to view details and perform actions:</p>
        <div className="space-y-3">
          <div className="p-4 border-l-4 border-primary bg-card rounded">
            <h3 className="font-semibold mb-1">View Full Conversation</h3>
            <p className="text-sm text-muted-foreground">See all messages exchanged in the ticket channel</p>
          </div>
          <div className="p-4 border-l-4 border-secondary bg-card rounded">
            <h3 className="font-semibold mb-1">Change Status</h3>
            <p className="text-sm text-muted-foreground">Update ticket status (Open, In Progress, Closed)</p>
          </div>
          <div className="p-4 border-l-4 border-primary bg-card rounded">
            <h3 className="font-semibold mb-1">Assign Staff</h3>
            <p className="text-sm text-muted-foreground">Assign or reassign the ticket to a staff member</p>
          </div>
          <div className="p-4 border-l-4 border-secondary bg-card rounded">
            <h3 className="font-semibold mb-1">Add Notes</h3>
            <p className="text-sm text-muted-foreground">Add internal notes visible only to staff</p>
          </div>
          <div className="p-4 border-l-4 border-primary bg-card rounded">
            <h3 className="font-semibold mb-1">Export Transcript</h3>
            <p className="text-sm text-muted-foreground">Download ticket conversation as HTML or PDF</p>
          </div>
        </div>
      </div>

      <div className="p-4 border-l-4 border-primary bg-primary/5 rounded">
        <p className="text-sm">
          <strong>Tip:</strong> Use keyboard shortcuts for faster navigation: Press 'F' to focus search, 'N' for next
          ticket, 'P' for previous ticket.
        </p>
      </div>
    </div>
  )
}
