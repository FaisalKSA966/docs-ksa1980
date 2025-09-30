export default function DashboardAuthPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Dashboard Authentication</h1>
        <p className="text-lg text-muted-foreground">
          Learn how authentication works in the web dashboard and how to manage user access.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Discord OAuth2</h2>
        <p className="text-muted-foreground">
          The dashboard uses Discord OAuth2 for secure authentication. This means users log in with their Discord
          accounts, and the system verifies their identity and permissions through Discord's API.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Login Process</h2>
        <ol className="space-y-3 list-decimal list-inside text-muted-foreground ml-4">
          <li>User clicks "Login with Discord" on the dashboard</li>
          <li>User is redirected to Discord's authorization page</li>
          <li>User authorizes the application to access their Discord profile</li>
          <li>Discord redirects back to the dashboard with an authorization code</li>
          <li>System exchanges the code for an access token</li>
          <li>System fetches user information and guild roles</li>
          <li>User is logged in and redirected to the dashboard</li>
        </ol>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Role-Based Access Control</h2>
        <div className="space-y-4">
          <div className="p-4 border rounded-lg">
            <h3 className="text-lg font-semibold mb-2 text-primary">Administrator</h3>
            <p className="text-sm text-muted-foreground mb-2">Full access to all dashboard features:</p>
            <ul className="space-y-1 list-disc list-inside text-sm text-muted-foreground ml-4">
              <li>View and manage all tickets</li>
              <li>Access all statistics and reports</li>
              <li>Configure system settings</li>
              <li>Manage user permissions</li>
              <li>View audit logs</li>
            </ul>
          </div>

          <div className="p-4 border rounded-lg">
            <h3 className="text-lg font-semibold mb-2 text-secondary">Moderator</h3>
            <p className="text-sm text-muted-foreground mb-2">Limited access to ticket management:</p>
            <ul className="space-y-1 list-disc list-inside text-sm text-muted-foreground ml-4">
              <li>View and manage tickets</li>
              <li>View basic statistics</li>
              <li>Cannot change system settings</li>
              <li>Cannot manage permissions</li>
            </ul>
          </div>

          <div className="p-4 border rounded-lg">
            <h3 className="text-lg font-semibold mb-2">User</h3>
            <p className="text-sm text-muted-foreground mb-2">View-only access:</p>
            <ul className="space-y-1 list-disc list-inside text-sm text-muted-foreground ml-4">
              <li>View their own tickets only</li>
              <li>Cannot access admin features</li>
              <li>Cannot view other users' tickets</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Session Management</h2>
        <p className="text-muted-foreground">Sessions are managed securely with the following features:</p>
        <ul className="space-y-2 list-disc list-inside text-muted-foreground ml-4">
          <li>Sessions expire after 7 days of inactivity</li>
          <li>Secure HTTP-only cookies prevent XSS attacks</li>
          <li>Automatic token refresh for active sessions</li>
          <li>Logout functionality clears all session data</li>
        </ul>
      </div>

      <div className="p-4 border-l-4 border-secondary bg-secondary/5 rounded">
        <p className="text-sm">
          <strong>Security Tip:</strong> Always log out when using shared computers. Your session token provides full
          access to your dashboard permissions.
        </p>
      </div>
    </div>
  )
}
