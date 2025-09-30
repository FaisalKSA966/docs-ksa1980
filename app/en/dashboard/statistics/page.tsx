export default function DashboardStatisticsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Statistics & Analytics</h1>
        <p className="text-lg text-muted-foreground">
          View comprehensive statistics and analytics about your ticket system performance.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Overview Dashboard</h2>
        <p className="text-muted-foreground">The statistics page provides a comprehensive overview with key metrics:</p>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="p-4 border rounded-lg bg-card">
            <h3 className="text-sm font-medium text-muted-foreground mb-1">Total Tickets</h3>
            <p className="text-2xl font-bold text-primary">1,234</p>
            <p className="text-xs text-muted-foreground mt-1">+12% from last month</p>
          </div>
          <div className="p-4 border rounded-lg bg-card">
            <h3 className="text-sm font-medium text-muted-foreground mb-1">Open Tickets</h3>
            <p className="text-2xl font-bold text-secondary">45</p>
            <p className="text-xs text-muted-foreground mt-1">-8% from last week</p>
          </div>
          <div className="p-4 border rounded-lg bg-card">
            <h3 className="text-sm font-medium text-muted-foreground mb-1">Avg Response Time</h3>
            <p className="text-2xl font-bold text-primary">2.5h</p>
            <p className="text-xs text-muted-foreground mt-1">-15% improvement</p>
          </div>
          <div className="p-4 border rounded-lg bg-card">
            <h3 className="text-sm font-medium text-muted-foreground mb-1">Resolution Rate</h3>
            <p className="text-2xl font-bold text-secondary">94%</p>
            <p className="text-xs text-muted-foreground mt-1">+3% from last month</p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Charts & Graphs</h2>
        <div className="space-y-6">
          <div className="p-6 border rounded-lg bg-card">
            <h3 className="text-lg font-semibold mb-4">Tickets Over Time</h3>
            <p className="text-sm text-muted-foreground">
              Line chart showing ticket creation trends over the past 30 days, with separate lines for open, closed, and
              total tickets.
            </p>
          </div>
          <div className="p-6 border rounded-lg bg-card">
            <h3 className="text-lg font-semibold mb-4">Tickets by Category</h3>
            <p className="text-sm text-muted-foreground">
              Pie chart displaying the distribution of tickets across different categories (Technical Support, Billing,
              General Inquiry, etc.).
            </p>
          </div>
          <div className="p-6 border rounded-lg bg-card">
            <h3 className="text-lg font-semibold mb-4">Response Time Distribution</h3>
            <p className="text-sm text-muted-foreground">
              Bar chart showing how quickly tickets are being responded to, grouped by time ranges (0-1h, 1-4h, 4-24h,
              24h+).
            </p>
          </div>
          <div className="p-6 border rounded-lg bg-card">
            <h3 className="text-lg font-semibold mb-4">Staff Performance</h3>
            <p className="text-sm text-muted-foreground">
              Table showing each staff member's ticket handling statistics including tickets resolved, average response
              time, and customer satisfaction.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Detailed Reports</h2>
        <p className="text-muted-foreground">Generate detailed reports for specific time periods:</p>
        <ul className="space-y-2 list-disc list-inside text-muted-foreground ml-4">
          <li>
            <strong>Daily Report:</strong> Summary of today's ticket activity
          </li>
          <li>
            <strong>Weekly Report:</strong> Last 7 days performance overview
          </li>
          <li>
            <strong>Monthly Report:</strong> Comprehensive monthly statistics
          </li>
          <li>
            <strong>Custom Range:</strong> Select specific start and end dates
          </li>
        </ul>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Export Options</h2>
        <p className="text-muted-foreground">Export statistics data in various formats:</p>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">CSV Export</h3>
            <p className="text-sm text-muted-foreground">Download raw data for analysis in Excel or Google Sheets</p>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">PDF Report</h3>
            <p className="text-sm text-muted-foreground">Generate formatted PDF reports with charts and summaries</p>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">JSON Data</h3>
            <p className="text-sm text-muted-foreground">Export structured data for integration with other tools</p>
          </div>
        </div>
      </div>

      <div className="p-4 border-l-4 border-secondary bg-secondary/5 rounded">
        <p className="text-sm">
          <strong>Note:</strong> Statistics are updated in real-time. Refresh the page to see the latest data.
        </p>
      </div>
    </div>
  )
}
