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
            Complete guide to the tickets endpoints
          </p>
        </div>

        {/* List Tickets */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="h-5 w-5" />
              List Tickets
            </CardTitle>
            <CardDescription>
              Get a list of tickets with filtering and pagination
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium">Endpoint</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
                  GET /tickets
                </pre>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Query Parameters</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`{
  "page": "Page number (default: 1)",
  "limit": "Items per page (default: 20, max: 100)",
  "status": "open | claimed | closed",
  "category": "technical | general | complaint | feature | other",
  "priority": "low | normal | high | urgent",
  "userId": "Filter by user ID",
  "guildId": "Filter by guild ID",
  "startDate": "Filter by creation date (ISO string)",
  "endDate": "Filter by creation date (ISO string)"
}`}
                </pre>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Response</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`{
  "success": true,
  "data": [
    {
      "ticketId": "string",
      "userId": "string",
      "guildId": "string",
      "category": "string",
      "priority": "string",
      "status": "string",
      "subject": "string",
      "message": "string",
      "attachments": ["string"],
      "createdAt": "string",
      "updatedAt": "string",
      "closedAt": "string",
      "claimedBy": "string",
      "rating": "number",
      "feedback": "string"
    }
  ],
  "meta": {
    "page": 1,
    "limit": 20,
    "total": 100
  }
}`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Create Ticket */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Plus className="h-5 w-5" />
              Create Ticket
            </CardTitle>
            <CardDescription>
              Create a new ticket
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium">Endpoint</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
                  POST /tickets
                </pre>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Request Body</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`{
  "userId": "string (required)",
  "guildId": "string (required)",
  "category": "string (required)",
  "priority": "string (default: normal)",
  "subject": "string (required)",
  "message": "string (required)",
  "attachments": ["string"]
}`}
                </pre>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Response</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`{
  "success": true,
  "data": {
    "ticketId": "string",
    "userId": "string",
    "guildId": "string",
    "category": "string",
    "priority": "string",
    "status": "open",
    "subject": "string",
    "message": "string",
    "attachments": ["string"],
    "createdAt": "string",
    "updatedAt": "string"
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
              Update an existing ticket
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium">Endpoint</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
                  PUT /tickets/:ticketId
                </pre>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Request Body</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`{
  "status": "string",
  "priority": "string",
  "category": "string",
  "subject": "string",
  "message": "string",
  "attachments": ["string"],
  "claimedBy": "string",
  "rating": "number",
  "feedback": "string"
}`}
                </pre>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Response</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`{
  "success": true,
  "data": {
    "ticketId": "string",
    "userId": "string",
    "guildId": "string",
    "category": "string",
    "priority": "string",
    "status": "string",
    "subject": "string",
    "message": "string",
    "attachments": ["string"],
    "createdAt": "string",
    "updatedAt": "string",
    "closedAt": "string",
    "claimedBy": "string",
    "rating": "number",
    "feedback": "string"
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
              Delete an existing ticket
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium">Endpoint</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
                  DELETE /tickets/:ticketId
                </pre>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Response</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`{
  "success": true,
  "data": {
    "message": "Ticket deleted successfully"
  }
}`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Code Examples */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="h-5 w-5" />
              Code Examples
            </CardTitle>
            <CardDescription>
              Examples of using the tickets API
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium">JavaScript Example</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`// List tickets
async function listTickets(filters = {}) {
  const params = new URLSearchParams(filters);
  
  const response = await fetch(
    \`https://api.ksa1980.lol/v1/tickets?\${params}\`,
    {
      headers: {
        'Authorization': \`Bearer \${API_TOKEN}\`,
        'Content-Type': 'application/json'
      }
    }
  );
  
  return response.json();
}

// Create ticket
async function createTicket(data) {
  const response = await fetch(
    'https://api.ksa1980.lol/v1/tickets',
    {
      method: 'POST',
      headers: {
        'Authorization': \`Bearer \${API_TOKEN}\`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }
  );
  
  return response.json();
}

// Update ticket
async function updateTicket(ticketId, data) {
  const response = await fetch(
    \`https://api.ksa1980.lol/v1/tickets/\${ticketId}\`,
    {
      method: 'PUT',
      headers: {
        'Authorization': \`Bearer \${API_TOKEN}\`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }
  );
  
  return response.json();
}

// Delete ticket
async function deleteTicket(ticketId) {
  const response = await fetch(
    \`https://api.ksa1980.lol/v1/tickets/\${ticketId}\`,
    {
      method: 'DELETE',
      headers: {
        'Authorization': \`Bearer \${API_TOKEN}\`,
        'Content-Type': 'application/json'
      }
    }
  );
  
  return response.json();
}`}
                </pre>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Python Example</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`import requests

class TicketsAPI:
    def __init__(self, api_token):
        self.api_token = api_token
        self.base_url = 'https://api.ksa1980.lol/v1'
        self.headers = {
            'Authorization': f'Bearer {api_token}',
            'Content-Type': 'application/json'
        }
    
    def list_tickets(self, **filters):
        response = requests.get(
            f'{self.base_url}/tickets',
            headers=self.headers,
            params=filters
        )
        return response.json()
    
    def create_ticket(self, data):
        response = requests.post(
            f'{self.base_url}/tickets',
            headers=self.headers,
            json=data
        )
        return response.json()
    
    def update_ticket(self, ticket_id, data):
        response = requests.put(
            f'{self.base_url}/tickets/{ticket_id}',
            headers=self.headers,
            json=data
        )
        return response.json()
    
    def delete_ticket(self, ticket_id):
        response = requests.delete(
            f'{self.base_url}/tickets/{ticket_id}',
            headers=self.headers
        )
        return response.json()

# Usage example
api = TicketsAPI('YOUR_API_TOKEN')

# List tickets
tickets = api.list_tickets(
    status='open',
    category='technical',
    page=1,
    limit=20
)

# Create ticket
new_ticket = api.create_ticket({
    'userId': '123456789',
    'guildId': '987654321',
    'category': 'technical',
    'priority': 'normal',
    'subject': 'Test ticket',
    'message': 'This is a test ticket'
})

# Update ticket
updated_ticket = api.update_ticket(
    'ticket_id',
    {
        'status': 'closed',
        'rating': 5,
        'feedback': 'Great support!'
    }
)

# Delete ticket
result = api.delete_ticket('ticket_id')`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Best Practices */}
        <Alert>
          <Info className="h-4 w-4" />
          <AlertDescription>
            <strong>Best Practices:</strong> Use appropriate HTTP methods. 
            Include error handling. 
            Validate input data. 
            Use pagination for large datasets. 
            Cache responses when possible.
          </AlertDescription>
        </Alert>
      </div>
    </DocsLayout>
  )
}
