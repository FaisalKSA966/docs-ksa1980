export default function DashboardOverviewPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Web Dashboard Overview</h1>
        <p className="text-lg text-muted-foreground">
          The web dashboard provides a comprehensive interface for managing your Discord ticket system through a modern
          web application.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="p-6 border rounded-lg bg-card">
          <h3 className="text-xl font-semibold mb-3 text-primary">Real-time Monitoring</h3>
          <p className="text-muted-foreground">
            Monitor all active tickets, user interactions, and system status in real-time with live updates.
          </p>
        </div>
        <div className="p-6 border rounded-lg bg-card">
          <h3 className="text-xl font-semibold mb-3 text-secondary">Ticket Management</h3>
          <p className="text-muted-foreground">
            View, search, filter, and manage all tickets from a centralized interface with advanced controls.
          </p>
        </div>
        <div className="p-6 border rounded-lg bg-card">
          <h3 className="text-xl font-semibold mb-3 text-primary">Statistics & Analytics</h3>
          <p className="text-muted-foreground">
            Access detailed statistics, charts, and reports about ticket activity and system performance.
          </p>
        </div>
        <div className="p-6 border rounded-lg bg-card">
          <h3 className="text-xl font-semibold mb-3 text-secondary">Configuration</h3>
          <p className="text-muted-foreground">
            Configure system settings, customize messages, and manage permissions through an intuitive interface.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Key Features</h2>
        <ul className="space-y-3 list-disc list-inside text-muted-foreground">
          <li>Discord OAuth2 authentication for secure access</li>
          <li>Role-based access control (Admin, Moderator, User)</li>
          <li>Responsive design that works on all devices</li>
          <li>Dark mode support</li>
          <li>Real-time notifications</li>
          <li>Advanced search and filtering</li>
          <li>Export data to CSV/JSON</li>
          <li>Audit logs for all actions</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Accessing the Dashboard</h2>
        <div className="space-y-3">
          <p className="text-muted-foreground">To access the web dashboard:</p>
          <ol className="space-y-2 list-decimal list-inside text-muted-foreground ml-4">
            <li>Navigate to your dashboard URL (e.g., https://yourdomain.com/dashboard)</li>
            <li>Click "Login with Discord" button</li>
            <li>Authorize the application to access your Discord account</li>
            <li>You'll be redirected to the dashboard home page</li>
          </ol>
        </div>
      </div>

      <div className="p-4 border-l-4 border-primary bg-primary/5 rounded">
        <p className="text-sm">
          <strong>Note:</strong> Only users with appropriate roles (Admin, Moderator) can access the dashboard. Regular
          users will see limited information.
        </p>
      </div>
    </div>
  )
}
