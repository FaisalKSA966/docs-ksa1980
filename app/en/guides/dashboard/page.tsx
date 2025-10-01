"use client"

import { DocsLayout } from "@/components/docs-layout"
import { enNavigation } from "@/lib/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { 
  LayoutDashboard,
  Users,
  Settings,
  BarChart,
  Info
} from "lucide-react"

export default function DashboardGuide() {
  return (
    <DocsLayout navigation={enNavigation} lang="en">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <LayoutDashboard className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold">Dashboard Guide</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Complete guide to using the web dashboard
          </p>
        </div>

        {/* User Dashboard */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              User Dashboard
            </CardTitle>
            <CardDescription>
              Features available to all users
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium">Ticket Management</h4>
              <div className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Create Ticket</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    1. Click "New Ticket" button
                    2. Select category
                    3. Enter subject and description
                    4. Set priority level
                    5. Add attachments (optional)
                    6. Submit ticket
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">View Tickets</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    - List all your tickets
                    - Filter by status/category
                    - Sort by date/priority
                    - Search tickets
                    - View ticket details
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Manage Tickets</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    - Add replies
                    - Upload attachments
                    - Close tickets
                    - Rate support
                    - Provide feedback
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Profile Settings</h4>
              <div className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Notifications</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    - Enable/disable notifications
                    - Choose notification types
                    - Set notification preferences
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Preferences</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    - Change language
                    - Set theme
                    - Update timezone
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Staff Dashboard */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5" />
              Staff Dashboard
            </CardTitle>
            <CardDescription>
              Additional features for support staff
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium">Ticket Queue</h4>
              <div className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Queue Management</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    - View open tickets
                    - Sort by priority/age
                    - Filter by category
                    - Claim tickets
                    - Transfer tickets
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Ticket Actions</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    - Update status
                    - Change priority
                    - Add internal notes
                    - Close tickets
                    - Delete tickets
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">User Management</h4>
              <div className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">User Actions</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    - View user profiles
                    - Check ticket history
                    - Ban/unban users
                    - Reset limits
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Staff Tools</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    - Assign roles
                    - Set permissions
                    - Track activity
                    - View performance
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Analytics */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart className="h-5 w-5" />
              Analytics
            </CardTitle>
            <CardDescription>
              Statistics and reporting features
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium">Ticket Statistics</h4>
              <div className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Overview</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    - Total tickets
                    - Open/closed ratio
                    - Average response time
                    - Resolution rate
                    - Satisfaction score
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Detailed Reports</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    - Category breakdown
                    - Priority distribution
                    - Time analysis
                    - Staff performance
                    - User activity
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Export Options</h4>
              <div className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Report Types</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    - Daily summaries
                    - Weekly reports
                    - Monthly analytics
                    - Custom date ranges
                    - Specific metrics
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Export Formats</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    - CSV export
                    - PDF reports
                    - Excel sheets
                    - JSON data
                    - API access
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Best Practices */}
        <Alert>
          <Info className="h-4 w-4" />
          <AlertDescription>
            <strong>Best Practices:</strong> Check dashboard regularly. 
            Keep tickets organized. 
            Monitor statistics. 
            Use filters effectively. 
            Export reports periodically.
          </AlertDescription>
        </Alert>
      </div>
    </DocsLayout>
  )
}
