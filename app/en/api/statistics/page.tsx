"use client"

import { DocsLayout } from "@/components/docs-layout"
import { enNavigation } from "@/lib/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { 
  BarChart,
  Code,
  Clock,
  Star,
  Info
} from "lucide-react"

export default function ApiStatistics() {
  return (
    <DocsLayout navigation={enNavigation} lang="en">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <BarChart className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold">Statistics API</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Access ticket system statistics and analytics
          </p>
        </div>

        {/* Overview Statistics */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart className="h-5 w-5" />
              Overview Statistics
            </CardTitle>
            <CardDescription>
              Get general statistics about tickets
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium">Endpoint</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
                  GET /statistics/overview
                </pre>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Query Parameters</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`{
  "guildId": "Filter by guild ID",
  "startDate": "Start date (ISO string)",
  "endDate": "End date (ISO string)",
  "timeframe": "day | week | month | year"
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
    "total": {
      "tickets": 1000,
      "users": 500,
      "guilds": 10
    },
    "status": {
      "open": 100,
      "claimed": 50,
      "closed": 850
    },
    "categories": {
      "technical": 400,
      "general": 300,
      "complaint": 200,
      "feature": 50,
      "other": 50
    },
    "priorities": {
      "low": 200,
      "normal": 500,
      "high": 200,
      "urgent": 100
    }
  }
}`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Response Time Statistics */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Response Time Statistics
            </CardTitle>
            <CardDescription>
              Get statistics about ticket response times
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium">Endpoint</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
                  GET /statistics/response-time
                </pre>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Query Parameters</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`{
  "guildId": "Filter by guild ID",
  "startDate": "Start date (ISO string)",
  "endDate": "End date (ISO string)",
  "timeframe": "day | week | month | year"
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
    "average": {
      "firstResponse": 300, // seconds
      "resolution": 3600 // seconds
    },
    "distribution": {
      "under1Hour": 500,
      "under4Hours": 300,
      "under24Hours": 150,
      "over24Hours": 50
    },
    "byCategory": {
      "technical": {
        "firstResponse": 250,
        "resolution": 3000
      },
      "general": {
        "firstResponse": 350,
        "resolution": 4000
      }
    },
    "byPriority": {
      "urgent": {
        "firstResponse": 120,
        "resolution": 1800
      },
      "high": {
        "firstResponse": 300,
        "resolution": 3600
      }
    }
  }
}`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Satisfaction Statistics */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="h-5 w-5" />
              Satisfaction Statistics
            </CardTitle>
            <CardDescription>
              Get statistics about ticket satisfaction ratings
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium">Endpoint</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
                  GET /statistics/satisfaction
                </pre>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Query Parameters</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`{
  "guildId": "Filter by guild ID",
  "startDate": "Start date (ISO string)",
  "endDate": "End date (ISO string)",
  "timeframe": "day | week | month | year"
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
    "average": {
      "overall": 4.5,
      "lastMonth": 4.7,
      "lastWeek": 4.8
    },
    "distribution": {
      "1star": 10,
      "2star": 20,
      "3star": 50,
      "4star": 200,
      "5star": 720
    },
    "byCategory": {
      "technical": 4.6,
      "general": 4.4,
      "complaint": 4.2,
      "feature": 4.8,
      "other": 4.5
    },
    "byStaff": {
      "userId1": {
        "average": 4.8,
        "total": 100
      },
      "userId2": {
        "average": 4.6,
        "total": 150
      }
    }
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
              Examples of using the statistics API
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium">JavaScript Example</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`// Get overview statistics
async function getOverviewStats(filters = {}) {
  const params = new URLSearchParams(filters);
  
  const response = await fetch(
    \`https://api.ksa1980.lol/v1/statistics/overview?\${params}\`,
    {
      headers: {
        'Authorization': \`Bearer \${API_TOKEN}\`,
        'Content-Type': 'application/json'
      }
    }
  );
  
  return response.json();
}

// Get response time statistics
async function getResponseTimeStats(filters = {}) {
  const params = new URLSearchParams(filters);
  
  const response = await fetch(
    \`https://api.ksa1980.lol/v1/statistics/response-time?\${params}\`,
    {
      headers: {
        'Authorization': \`Bearer \${API_TOKEN}\`,
        'Content-Type': 'application/json'
      }
    }
  );
  
  return response.json();
}

// Get satisfaction statistics
async function getSatisfactionStats(filters = {}) {
  const params = new URLSearchParams(filters);
  
  const response = await fetch(
    \`https://api.ksa1980.lol/v1/statistics/satisfaction?\${params}\`,
    {
      headers: {
        'Authorization': \`Bearer \${API_TOKEN}\`,
        'Content-Type': 'application/json'
      }
    }
  );
  
  return response.json();
}

// Example usage
async function getGuildStats(guildId) {
  const timeframe = 'month';
  const startDate = new Date();
  startDate.setMonth(startDate.getMonth() - 1);
  
  const filters = {
    guildId,
    startDate: startDate.toISOString(),
    endDate: new Date().toISOString(),
    timeframe
  };
  
  const [overview, responseTime, satisfaction] = await Promise.all([
    getOverviewStats(filters),
    getResponseTimeStats(filters),
    getSatisfactionStats(filters)
  ]);
  
  return {
    overview: overview.data,
    responseTime: responseTime.data,
    satisfaction: satisfaction.data
  };
}`}
                </pre>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Python Example</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`import requests
from datetime import datetime, timedelta

class StatisticsAPI:
    def __init__(self, api_token):
        self.api_token = api_token
        self.base_url = 'https://api.ksa1980.lol/v1/statistics'
        self.headers = {
            'Authorization': f'Bearer {api_token}',
            'Content-Type': 'application/json'
        }
    
    def get_overview_stats(self, **filters):
        response = requests.get(
            f'{self.base_url}/overview',
            headers=self.headers,
            params=filters
        )
        return response.json()
    
    def get_response_time_stats(self, **filters):
        response = requests.get(
            f'{self.base_url}/response-time',
            headers=self.headers,
            params=filters
        )
        return response.json()
    
    def get_satisfaction_stats(self, **filters):
        response = requests.get(
            f'{self.base_url}/satisfaction',
            headers=self.headers,
            params=filters
        )
        return response.json()

# Usage example
api = StatisticsAPI('YOUR_API_TOKEN')

# Get last month's stats
start_date = datetime.now() - timedelta(days=30)
filters = {
    'guildId': '123456789',
    'startDate': start_date.isoformat(),
    'endDate': datetime.now().isoformat(),
    'timeframe': 'month'
}

# Get all statistics
overview = api.get_overview_stats(**filters)
response_time = api.get_response_time_stats(**filters)
satisfaction = api.get_satisfaction_stats(**filters)

# Process results
print(f"Total tickets: {overview['data']['total']['tickets']}")
print(f"Average response time: {response_time['data']['average']['firstResponse']}s")
print(f"Average satisfaction: {satisfaction['data']['average']['overall']}/5")`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Best Practices */}
        <Alert>
          <Info className="h-4 w-4" />
          <AlertDescription>
            <strong>Best Practices:</strong> Cache statistics results. 
            Use appropriate timeframes. 
            Handle rate limits. 
            Aggregate data server-side. 
            Monitor API usage.
          </AlertDescription>
        </Alert>
      </div>
    </DocsLayout>
  )
}
