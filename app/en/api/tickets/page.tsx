"use client"

import { DocsLayout } from "@/components/docs-layout"
import { enNavigation } from "@/lib/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { 
  MessageSquare,
  Code,
  Search,
  Plus,
  Edit,
  Trash,
  Info
} from "lucide-react"

export default function ApiTickets() {
  return (
    <DocsLayout navigation={enNavigation} lang="en">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <MessageSquare className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold">Tickets API</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Complete guide to managing tickets through the API
          </p>
        </div>

        {/* Create Ticket */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Plus className="h-5 w-5" />
              Create Ticket
            </CardTitle>
            <CardDescription>
              Create a new support ticket
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium">Endpoint</h4>
              <div className="bg-muted p-4 rounded-lg api-endpoint">
                <div className="flex items-center gap-2 mb-2">
                  <span className="method">POST</span>
                  <span className="path">/tickets</span>
                </div>
                <pre className="text-sm overflow-x-auto">
{`// Request Body
{
  "category": "technical",     // Required: technical | general | complaint | feature | other
  "subject": "string",         // Required: max 200 characters
  "message": "string",         // Required: max 2000 characters
  "priority": "normal",        // Optional: low | normal | high | urgent
  "attachments": ["string"]    // Optional: array of file URLs
}

// Response
{
  "success": true,
  "data": {
    "ticketId": "T123456",
    "status": "open",
    "createdAt": "2025-10-01T12:00:00Z",
    "category": "technical",
    "priority": "normal",
    "subject": "API Integration Issue",
    "message": "Having trouble with authentication"
  }
}`}
                </pre>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Example</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`// JavaScript
async function createTicket(data) {
  const response = await fetch('https://api.ksa1980.lol/v1/tickets', {
    method: 'POST',
    headers: {
      'Authorization': \`Bearer \${API_KEY}\`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  
  return response.json();
}

// Create ticket
const ticket = await createTicket({
  category: 'technical',
  subject: 'API Integration Issue',
  message: 'Having trouble with authentication',
  priority: 'high'
});`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Get Tickets */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="h-5 w-5" />
              Get Tickets
            </CardTitle>
            <CardDescription>
              List and filter tickets
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium">List Tickets</h4>
              <div className="bg-muted p-4 rounded-lg api-endpoint">
                <div className="flex items-center gap-2 mb-2">
                  <span className="method">GET</span>
                  <span className="path">/tickets</span>
                </div>
                <pre className="text-sm overflow-x-auto">
{`// Query Parameters
{
  "page": "number",           // Optional: default 1
  "limit": "number",          // Optional: default 20, max 100
  "status": "string",         // Optional: open | claimed | closed
  "category": "string",       // Optional: technical | general | complaint | feature | other
  "priority": "string",       // Optional: low | normal | high | urgent
  "startDate": "string",      // Optional: ISO date string
  "endDate": "string"         // Optional: ISO date string
}

// Response
{
  "success": true,
  "data": [
    {
      "ticketId": "T123456",
      "status": "open",
      "category": "technical",
      "priority": "high",
      "subject": "API Integration Issue",
      "createdAt": "2025-10-01T12:00:00Z",
      "updatedAt": "2025-10-01T12:00:00Z"
    }
  ],
  "meta": {
    "page": 1,
    "limit": 20,
    "total": 45
  }
}`}
                </pre>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Get Single Ticket</h4>
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
    "status": "open",
    "category": "technical",
    "priority": "high",
    "subject": "API Integration Issue",
    "message": "Having trouble with authentication",
    "attachments": [],
    "createdAt": "2025-10-01T12:00:00Z",
    "updatedAt": "2025-10-01T12:00:00Z",
    "messages": [
      {
        "id": "M789012",
        "author": "user",
        "message": "Initial message",
        "timestamp": "2025-10-01T12:00:00Z"
      }
    ]
  }
}`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Update Ticket */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Edit className="h-5 w-5" />
              Update Ticket
            </CardTitle>
            <CardDescription>
              Update ticket details and status
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium">Update Ticket</h4>
              <div className="bg-muted p-4 rounded-lg api-endpoint">
                <div className="flex items-center gap-2 mb-2">
                  <span className="method">PUT</span>
                  <span className="path">/tickets/:ticketId</span>
                </div>
                <pre className="text-sm overflow-x-auto">
{`// Request Body
{
  "status": "string",         // Optional: open | claimed | closed
  "priority": "string",       // Optional: low | normal | high | urgent
  "category": "string",       // Optional: technical | general | complaint | feature | other
  "subject": "string",        // Optional: max 200 characters
  "message": "string"         // Optional: max 2000 characters
}

// Response
{
  "success": true,
  "data": {
    "ticketId": "T123456",
    "status": "claimed",
    "category": "technical",
    "priority": "high",
    "subject": "Updated: API Integration Issue",
    "updatedAt": "2025-10-01T12:30:00Z"
  }
}`}
                </pre>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Add Reply</h4>
              <div className="bg-muted p-4 rounded-lg api-endpoint">
                <div className="flex items-center gap-2 mb-2">
                  <span className="method">POST</span>
                  <span className="path">/tickets/:ticketId/replies</span>
                </div>
                <pre className="text-sm overflow-x-auto">
{`// Request Body
{
  "message": "string",         // Required: max 2000 characters
  "attachments": ["string"],   // Optional: array of file URLs
  "internal": false           // Optional: true for staff-only notes
}

// Response
{
  "success": true,
  "data": {
    "replyId": "R789012",
    "message": "Working on the issue",
    "author": "support",
    "timestamp": "2025-10-01T12:45:00Z",
    "internal": false
  }
}`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Delete Ticket */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trash className="h-5 w-5" />
              Delete Ticket
            </CardTitle>
            <CardDescription>
              Permanently delete a ticket
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <Alert>
              <Info className="h-4 w-4" />
              <AlertDescription>
                This action cannot be undone. Only administrators can delete tickets.
              </AlertDescription>
            </Alert>

            <div className="space-y-4">
              <h4 className="font-medium">Delete Ticket</h4>
              <div className="bg-muted p-4 rounded-lg api-endpoint">
                <div className="flex items-center gap-2 mb-2">
                  <span className="method">DELETE</span>
                  <span className="path">/tickets/:ticketId</span>
                </div>
                <pre className="text-sm overflow-x-auto">
{`// Response
{
  "success": true,
  "data": {
    "message": "Ticket deleted successfully",
    "ticketId": "T123456"
  }
}`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Best Practices */}
        <Alert>
          <Info className="h-4 w-4" />
          <AlertDescription>
            <strong>Best Practices:</strong>
            <ul className="mt-2 space-y-1">
              <li>• Always validate input data before sending</li>
              <li>• Handle rate limits appropriately</li>
              <li>• Implement proper error handling</li>
              <li>• Use appropriate timeouts</li>
              <li>• Keep track of ticket IDs</li>
            </ul>
          </AlertDescription>
        </Alert>
      </div>
    </DocsLayout>
  )
}