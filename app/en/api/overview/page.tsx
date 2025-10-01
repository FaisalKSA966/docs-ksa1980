"use client"

import { DocsLayout } from "@/components/docs-layout"
import { enNavigation } from "@/lib/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { 
  Globe,
  Code,
  Shield,
  Key,
  Info,
  CheckCircle
} from "lucide-react"

export default function ApiOverview() {
  return (
    <DocsLayout navigation={enNavigation} lang="en">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Globe className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold">API Overview</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Complete guide to integrating with our ticket system API
          </p>
        </div>

        {/* Quick Start */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="h-5 w-5" />
              Quick Start
            </CardTitle>
            <CardDescription>
              Get started with the API in minutes
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium">1. Get Your API Key</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`# Contact us to get your API key
API_KEY=your_api_key_here

# Store it securely in your environment
export TICKET_API_KEY=your_api_key_here`}
                </pre>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">2. Make Your First API Call</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`# JavaScript/Node.js
const response = await fetch('https://api.ksa1980.lol/v1/tickets', {
  headers: {
    'Authorization': \`Bearer \${process.env.TICKET_API_KEY}\`,
    'Content-Type': 'application/json'
  }
});

const tickets = await response.json();

# Python
import requests

response = requests.get(
    'https://api.ksa1980.lol/v1/tickets',
    headers={
        'Authorization': f'Bearer {os.environ["TICKET_API_KEY"]}',
        'Content-Type': 'application/json'
    }
)

tickets = response.json()`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Common Use Cases */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5" />
              Common Use Cases
            </CardTitle>
            <CardDescription>
              Popular ways to use our API
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium">Create a Ticket</h4>
              <div className="bg-muted p-4 rounded-lg api-endpoint">
                <div className="flex items-center gap-2 mb-2">
                  <span className="method">POST</span>
                  <span className="path">/tickets</span>
                </div>
                <pre className="text-sm overflow-x-auto">
{`// Request
{
  "category": "technical",
  "subject": "API Integration Issue",
  "message": "Having trouble with authentication",
  "priority": "high"
}

// Response
{
  "success": true,
  "data": {
    "ticketId": "T123456",
    "status": "open",
    "createdAt": "2025-10-01T12:00:00Z"
  }
}`}
                </pre>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Get Ticket Status</h4>
              <div className="bg-muted p-4 rounded-lg api-endpoint">
                <div className="flex items-center gap-2 mb-2">
                  <span className="method">GET</span>
                  <span className="path">/tickets/:ticketId</span>
                </div>
                <pre className="text-sm overflow-x-auto">
{`// Response
{
  "success": true,
  "data": {
    "ticketId": "T123456",
    "status": "in_progress",
    "assignedTo": "Support Team A",
    "lastUpdate": "2025-10-01T12:30:00Z",
    "messages": [
      {
        "author": "support",
        "message": "We're looking into this",
        "timestamp": "2025-10-01T12:15:00Z"
      }
    ]
  }
}`}
                </pre>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Add Reply to Ticket</h4>
              <div className="bg-muted p-4 rounded-lg api-endpoint">
                <div className="flex items-center gap-2 mb-2">
                  <span className="method">POST</span>
                  <span className="path">/tickets/:ticketId/replies</span>
                </div>
                <pre className="text-sm overflow-x-auto">
{`// Request
{
  "message": "Additional information about the issue",
  "attachments": ["https://example.com/screenshot.png"]
}

// Response
{
  "success": true,
  "data": {
    "replyId": "R789012",
    "timestamp": "2025-10-01T12:45:00Z"
  }
}`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Authentication */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Key className="h-5 w-5" />
              Authentication
            </CardTitle>
            <CardDescription>
              Secure your API requests
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium">Bearer Token Authentication</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`// Include in all API requests
headers: {
  'Authorization': 'Bearer YOUR_API_KEY',
  'Content-Type': 'application/json'
}`}
                </pre>
              </div>
            </div>

            <Alert>
              <Info className="h-4 w-4" />
              <AlertDescription>
                Keep your API key secure. Never expose it in client-side code or public repositories.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Rate Limits */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Rate Limits
            </CardTitle>
            <CardDescription>
              API request limits and quotas
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium">Default Limits</h4>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 bg-muted rounded">
                  <span>Requests per minute</span>
                  <Badge>60</Badge>
                </div>
                <div className="flex items-center justify-between p-2 bg-muted rounded">
                  <span>Requests per hour</span>
                  <Badge>1000</Badge>
                </div>
                <div className="flex items-center justify-between p-2 bg-muted rounded">
                  <span>Concurrent requests</span>
                  <Badge>5</Badge>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Rate Limit Headers</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`// Response Headers
X-RateLimit-Limit: 60
X-RateLimit-Remaining: 59
X-RateLimit-Reset: 1698765432`}
                </pre>
              </div>
            </div>

            <Alert>
              <Info className="h-4 w-4" />
              <AlertDescription>
                Contact us if you need higher rate limits for your integration.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Best Practices */}
        <Alert>
          <Info className="h-4 w-4" />
          <AlertDescription>
            <strong>Best Practices:</strong>
            <ul className="mt-2 space-y-1">
              <li>• Always use HTTPS for API requests</li>
              <li>• Implement proper error handling</li>
              <li>• Cache responses when possible</li>
              <li>• Use appropriate timeouts</li>
              <li>• Monitor your API usage</li>
            </ul>
          </AlertDescription>
        </Alert>
      </div>
    </DocsLayout>
  )
}