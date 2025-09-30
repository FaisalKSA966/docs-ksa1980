export default function DashboardSettingsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Dashboard Settings</h1>
        <p className="text-lg text-muted-foreground">
          Configure system settings and customize the ticket system behavior.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">General Settings</h2>
        <div className="space-y-4">
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">System Name</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Customize the name displayed in the dashboard and bot messages
            </p>
            <p className="text-xs text-muted-foreground">Default: "Support Ticket System"</p>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">Language</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Set the default language for bot messages and dashboard interface
            </p>
            <p className="text-xs text-muted-foreground">Options: English, Arabic</p>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">Timezone</h3>
            <p className="text-sm text-muted-foreground mb-2">Configure timezone for timestamps and scheduled tasks</p>
            <p className="text-xs text-muted-foreground">Default: UTC</p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Ticket Settings</h2>
        <div className="space-y-4">
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">Auto-Close Inactive Tickets</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Automatically close tickets after a period of inactivity
            </p>
            <p className="text-xs text-muted-foreground">Default: 7 days</p>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">Maximum Open Tickets Per User</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Limit how many tickets a user can have open simultaneously
            </p>
            <p className="text-xs text-muted-foreground">Default: 3 tickets</p>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">Ticket Categories</h3>
            <p className="text-sm text-muted-foreground mb-2">Add, edit, or remove ticket categories</p>
            <p className="text-xs text-muted-foreground">
              Current: Technical Support, Billing, General Inquiry, Bug Report, Feature Request
            </p>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">Priority Levels</h3>
            <p className="text-sm text-muted-foreground mb-2">Configure priority levels and their colors</p>
            <p className="text-xs text-muted-foreground">Current: Low, Medium, High, Urgent</p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Notification Settings</h2>
        <div className="space-y-4">
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">Staff Notifications</h3>
            <p className="text-sm text-muted-foreground mb-2">Configure when staff members receive notifications</p>
            <ul className="text-xs text-muted-foreground list-disc list-inside ml-4 mt-2">
              <li>New ticket created</li>
              <li>Ticket assigned to them</li>
              <li>New message in assigned ticket</li>
              <li>Ticket priority changed</li>
            </ul>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">User Notifications</h3>
            <p className="text-sm text-muted-foreground mb-2">Configure when users receive notifications</p>
            <ul className="text-xs text-muted-foreground list-disc list-inside ml-4 mt-2">
              <li>Staff response to their ticket</li>
              <li>Ticket status changed</li>
              <li>Ticket closed</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Permission Settings</h2>
        <div className="space-y-4">
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">Admin Roles</h3>
            <p className="text-sm text-muted-foreground mb-2">Select Discord roles that have full admin access</p>
            <p className="text-xs text-muted-foreground">Users with these roles can access all dashboard features</p>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">Moderator Roles</h3>
            <p className="text-sm text-muted-foreground mb-2">Select Discord roles that have moderator access</p>
            <p className="text-xs text-muted-foreground">
              Users with these roles can manage tickets but not change settings
            </p>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">Ticket Access</h3>
            <p className="text-sm text-muted-foreground mb-2">Configure who can view tickets</p>
            <p className="text-xs text-muted-foreground">Options: Only ticket creator, All staff, Everyone</p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Appearance Settings</h2>
        <div className="space-y-4">
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">Theme</h3>
            <p className="text-sm text-muted-foreground mb-2">Choose dashboard color theme</p>
            <p className="text-xs text-muted-foreground">Options: Light, Dark, Auto (follows system)</p>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">Brand Colors</h3>
            <p className="text-sm text-muted-foreground mb-2">Customize primary and secondary colors</p>
            <p className="text-xs text-muted-foreground">Current: Green (#10b981) and Purple (#a855f7)</p>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">Logo</h3>
            <p className="text-sm text-muted-foreground mb-2">Upload custom logo for dashboard header</p>
            <p className="text-xs text-muted-foreground">Recommended size: 200x50 pixels, PNG format</p>
          </div>
        </div>
      </div>

      <div className="p-4 border-l-4 border-primary bg-primary/5 rounded">
        <p className="text-sm">
          <strong>Important:</strong> Changes to settings are applied immediately. Make sure to test changes in a
          development environment first.
        </p>
      </div>
    </div>
  )
}
