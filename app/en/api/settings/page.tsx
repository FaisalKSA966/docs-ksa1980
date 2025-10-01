"use client"

import { DocsLayout } from "@/components/docs-layout"
import { enNavigation } from "@/lib/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { 
  Settings,
  Code,
  Server,
  Users,
  Info
} from "lucide-react"

export default function ApiSettings() {
  return (
    <DocsLayout navigation={enNavigation} lang="en">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Settings className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold">Settings API</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Manage guild and user settings through the API
          </p>
        </div>

        {/* Guild Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Server className="h-5 w-5" />
              Guild Settings
            </CardTitle>
            <CardDescription>
              Manage guild-specific settings
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium">Get Guild Settings</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`GET /settings/guild/:guildId

Response:
{
  "success": true,
  "data": {
    "ticketChannel": "string",
    "supportRole": "string",
    "adminRole": "string",
    "autoClose": boolean,
    "autoCloseTime": number,
    "maxTickets": number,
    "categories": ["string"],
    "welcomeMessage": "string",
    "closeMessage": "string"
  }
}`}
                </pre>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Update Guild Settings</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`PUT /settings/guild/:guildId

Request Body:
{
  "ticketChannel": "string",
  "supportRole": "string",
  "adminRole": "string",
  "autoClose": boolean,
  "autoCloseTime": number,
  "maxTickets": number,
  "categories": ["string"],
  "welcomeMessage": "string",
  "closeMessage": "string"
}

Response:
{
  "success": true,
  "data": {
    // Updated settings
  }
}`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* User Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              User Settings
            </CardTitle>
            <CardDescription>
              Manage user-specific settings
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium">Get User Settings</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`GET /settings/user/:userId

Response:
{
  "success": true,
  "data": {
    "notifications": boolean,
    "language": "string",
    "theme": "string"
  }
}`}
                </pre>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Update User Settings</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`PUT /settings/user/:userId

Request Body:
{
  "notifications": boolean,
  "language": "string",
  "theme": "string"
}

Response:
{
  "success": true,
  "data": {
    // Updated settings
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
              Examples of using the settings API
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium">JavaScript Example</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`// Guild Settings
async function getGuildSettings(guildId) {
  const response = await fetch(
    \`https://api.ksa1980.lol/v1/settings/guild/\${guildId}\`,
    {
      headers: {
        'Authorization': \`Bearer \${API_TOKEN}\`,
        'Content-Type': 'application/json'
      }
    }
  );
  
  return response.json();
}

async function updateGuildSettings(guildId, settings) {
  const response = await fetch(
    \`https://api.ksa1980.lol/v1/settings/guild/\${guildId}\`,
    {
      method: 'PUT',
      headers: {
        'Authorization': \`Bearer \${API_TOKEN}\`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(settings)
    }
  );
  
  return response.json();
}

// User Settings
async function getUserSettings(userId) {
  const response = await fetch(
    \`https://api.ksa1980.lol/v1/settings/user/\${userId}\`,
    {
      headers: {
        'Authorization': \`Bearer \${API_TOKEN}\`,
        'Content-Type': 'application/json'
      }
    }
  );
  
  return response.json();
}

async function updateUserSettings(userId, settings) {
  const response = await fetch(
    \`https://api.ksa1980.lol/v1/settings/user/\${userId}\`,
    {
      method: 'PUT',
      headers: {
        'Authorization': \`Bearer \${API_TOKEN}\`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(settings)
    }
  );
  
  return response.json();
}

// Example usage
async function setupGuild(guildId) {
  // Update guild settings
  const guildSettings = await updateGuildSettings(guildId, {
    ticketChannel: '123456789',
    supportRole: '987654321',
    adminRole: '456789123',
    autoClose: true,
    autoCloseTime: 72,
    maxTickets: 5,
    categories: ['technical', 'general', 'complaint'],
    welcomeMessage: 'Welcome to support!',
    closeMessage: 'Thank you for using our support.'
  });
  
  console.log('Guild settings updated:', guildSettings);
  
  // Update user settings
  const userSettings = await updateUserSettings('userId', {
    notifications: true,
    language: 'en',
    theme: 'dark'
  });
  
  console.log('User settings updated:', userSettings);
}`}
                </pre>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Python Example</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`import requests

class SettingsAPI:
    def __init__(self, api_token):
        self.api_token = api_token
        self.base_url = 'https://api.ksa1980.lol/v1/settings'
        self.headers = {
            'Authorization': f'Bearer {api_token}',
            'Content-Type': 'application/json'
        }
    
    def get_guild_settings(self, guild_id):
        response = requests.get(
            f'{self.base_url}/guild/{guild_id}',
            headers=self.headers
        )
        return response.json()
    
    def update_guild_settings(self, guild_id, settings):
        response = requests.put(
            f'{self.base_url}/guild/{guild_id}',
            headers=self.headers,
            json=settings
        )
        return response.json()
    
    def get_user_settings(self, user_id):
        response = requests.get(
            f'{self.base_url}/user/{user_id}',
            headers=self.headers
        )
        return response.json()
    
    def update_user_settings(self, user_id, settings):
        response = requests.put(
            f'{self.base_url}/user/{user_id}',
            headers=self.headers,
            json=settings
        )
        return response.json()

# Usage example
api = SettingsAPI('YOUR_API_TOKEN')

# Update guild settings
guild_settings = api.update_guild_settings(
    'guild_id',
    {
        'ticketChannel': '123456789',
        'supportRole': '987654321',
        'adminRole': '456789123',
        'autoClose': True,
        'autoCloseTime': 72,
        'maxTickets': 5,
        'categories': ['technical', 'general', 'complaint'],
        'welcomeMessage': 'Welcome to support!',
        'closeMessage': 'Thank you for using our support.'
    }
)

print('Guild settings:', guild_settings)

# Update user settings
user_settings = api.update_user_settings(
    'user_id',
    {
        'notifications': True,
        'language': 'en',
        'theme': 'dark'
    }
)

print('User settings:', user_settings)`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Best Practices */}
        <Alert>
          <Info className="h-4 w-4" />
          <AlertDescription>
            <strong>Best Practices:</strong> Validate settings before updating. 
            Cache settings when possible. 
            Use appropriate permissions. 
            Log settings changes. 
            Handle defaults properly.
          </AlertDescription>
        </Alert>
      </div>
    </DocsLayout>
  )
}
