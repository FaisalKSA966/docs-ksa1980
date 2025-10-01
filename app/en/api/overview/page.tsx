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
  CheckCircle,
  Lock
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
            Complete guide to the ticket system API
          </p>
        </div>

        {/* API Basics */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="h-5 w-5" />
              API Basics
            </CardTitle>
            <CardDescription>
              Core concepts and usage
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium">Base URL</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
                  https://api.ksa1980.lol/v1
                </pre>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Authentication</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`// Bearer Token Authentication
Authorization: Bearer YOUR_API_TOKEN

// Example Request
fetch('https://api.ksa1980.lol/v1/tickets', {
  headers: {
    'Authorization': 'Bearer YOUR_API_TOKEN',
    'Content-Type': 'application/json'
  }
});`}
                </pre>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Response Format</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`// Success Response
{
  "success": true,
  "data": {
    // Response data
  },
  "meta": {
    "page": 1,
    "limit": 20,
    "total": 100
  }
}

// Error Response
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "Error description"
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
              How to authenticate with the API
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium">Getting API Token</h4>
              <div className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Generate token in dashboard settings</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Access your dashboard and navigate to API settings</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Set token permissions</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Choose which endpoints the token can access</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Store token securely</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Never expose your token in client-side code</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Using API Token</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`// JavaScript Example
const API_TOKEN = process.env.API_TOKEN;

async function fetchTickets() {
  const response = await fetch('https://api.ksa1980.lol/v1/tickets', {
    headers: {
      'Authorization': \`Bearer \${API_TOKEN}\`,
      'Content-Type': 'application/json'
    }
  });
  
  const data = await response.json();
  return data;
}

// Python Example
import requests

API_TOKEN = os.environ.get('API_TOKEN')

def fetch_tickets():
    headers = {
        'Authorization': f'Bearer {API_TOKEN}',
        'Content-Type': 'application/json'
    }
    
    response = requests.get(
        'https://api.ksa1980.lol/v1/tickets',
        headers=headers
    )
    
    return response.json()`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Rate Limiting */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Rate Limiting
            </CardTitle>
            <CardDescription>
              API request limits and quotas
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium">Rate Limits</h4>
              <div className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">1000 requests per hour per token</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Standard rate limit for all API tokens</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">5 concurrent requests per token</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Maximum number of simultaneous requests</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Rate limit headers included in response</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Monitor your usage through response headers</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Rate Limit Headers</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`// Response Headers
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 999
X-RateLimit-Reset: 1698765432

// Rate Limit Error Response
{
  "success": false,
  "error": {
    "code": "RATE_LIMIT_EXCEEDED",
    "message": "Rate limit exceeded. Try again in 3600 seconds",
    "reset": 1698765432
  }
}`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Error Handling */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lock className="h-5 w-5" />
              Error Handling
            </CardTitle>
            <CardDescription>
              Understanding and handling API errors
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium">Error Codes</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`// Common Error Codes
400 Bad Request
  - INVALID_PARAMETERS
  - MISSING_REQUIRED_FIELD
  - VALIDATION_ERROR

401 Unauthorized
  - INVALID_TOKEN
  - TOKEN_EXPIRED
  - MISSING_TOKEN

403 Forbidden
  - INSUFFICIENT_PERMISSIONS
  - TOKEN_REVOKED
  - ACCOUNT_SUSPENDED

404 Not Found
  - RESOURCE_NOT_FOUND
  - ENDPOINT_NOT_FOUND

429 Too Many Requests
  - RATE_LIMIT_EXCEEDED

500 Internal Server Error
  - SERVER_ERROR
  - DATABASE_ERROR`}
                </pre>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Error Handling Example</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`// JavaScript Error Handling
async function createTicket(data) {
  try {
    const response = await fetch('https://api.ksa1980.lol/v1/tickets', {
      method: 'POST',
      headers: {
        'Authorization': \`Bearer \${API_TOKEN}\`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    
    const result = await response.json();
    
    if (!response.ok) {
      switch (response.status) {
        case 400:
          throw new Error('Invalid request: ' + result.error.message);
        case 401:
          throw new Error('Authentication failed');
        case 403:
          throw new Error('Permission denied');
        case 404:
          throw new Error('Resource not found');
        case 429:
          throw new Error('Rate limit exceeded');
        default:
          throw new Error('Server error');
      }
    }
    
    return result;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
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
            <strong>Best Practices:</strong> Always use HTTPS. 
            Store API tokens securely. 
            Implement proper error handling. 
            Monitor rate limits. 
            Cache responses when possible.
          </AlertDescription>
        </Alert>
      </div>
    </DocsLayout>
  )
}
