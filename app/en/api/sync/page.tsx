"use client"

import { DocsLayout } from "@/components/docs-layout"
import { enNavigation } from "@/lib/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { 
  RotateCw,
  Code,
  Database,
  Server,
  Info
} from "lucide-react"

export default function ApiSync() {
  return (
    <DocsLayout navigation={enNavigation} lang="en">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <RotateCw className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold">Sync API</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Manage data synchronization between bot and website
          </p>
        </div>

        {/* Sync Status */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="h-5 w-5" />
              Sync Status
            </CardTitle>
            <CardDescription>
              Check synchronization status
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium">Get Sync Status</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`GET /sync/status

Response:
{
  "success": true,
  "data": {
    "lastSync": "2025-10-01T12:00:00Z",
    "status": "synced | syncing | error",
    "error": "string | null",
    "stats": {
      "total": {
        "tickets": 1000,
        "users": 500,
        "guilds": 10
      },
      "pending": {
        "tickets": 0,
        "users": 0,
        "guilds": 0
      }
    }
  }
}`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Manual Sync */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Server className="h-5 w-5" />
              Manual Sync
            </CardTitle>
            <CardDescription>
              Trigger manual synchronization
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium">Trigger Sync</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`POST /sync/trigger

Request Body:
{
  "type": "full | tickets | users | guilds",
  "force": boolean
}

Response:
{
  "success": true,
  "data": {
    "syncId": "string",
    "status": "started | queued",
    "estimatedTime": number // seconds
  }
}`}
                </pre>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Check Sync Progress</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`GET /sync/progress/:syncId

Response:
{
  "success": true,
  "data": {
    "syncId": "string",
    "status": "pending | in_progress | completed | failed",
    "progress": {
      "total": 1000,
      "processed": 500,
      "failed": 0
    },
    "error": "string | null",
    "startedAt": "2025-10-01T12:00:00Z",
    "completedAt": "2025-10-01T12:05:00Z"
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
              Examples of using the sync API
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium">JavaScript Example</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`// Check sync status
async function getSyncStatus() {
  const response = await fetch(
    'https://api.ksa1980.lol/v1/sync/status',
    {
      headers: {
        'Authorization': \`Bearer \${API_TOKEN}\`,
        'Content-Type': 'application/json'
      }
    }
  );
  
  return response.json();
}

// Trigger manual sync
async function triggerSync(type = 'full', force = false) {
  const response = await fetch(
    'https://api.ksa1980.lol/v1/sync/trigger',
    {
      method: 'POST',
      headers: {
        'Authorization': \`Bearer \${API_TOKEN}\`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ type, force })
    }
  );
  
  return response.json();
}

// Check sync progress
async function checkSyncProgress(syncId) {
  const response = await fetch(
    \`https://api.ksa1980.lol/v1/sync/progress/\${syncId}\`,
    {
      headers: {
        'Authorization': \`Bearer \${API_TOKEN}\`,
        'Content-Type': 'application/json'
      }
    }
  );
  
  return response.json();
}

// Example: Full sync with progress monitoring
async function performFullSync() {
  try {
    // Check current status
    const status = await getSyncStatus();
    console.log('Current sync status:', status);
    
    if (status.data.status === 'syncing') {
      console.log('Sync already in progress');
      return;
    }
    
    // Trigger sync
    const sync = await triggerSync('full');
    console.log('Sync started:', sync);
    
    // Monitor progress
    const syncId = sync.data.syncId;
    let completed = false;
    
    while (!completed) {
      const progress = await checkSyncProgress(syncId);
      console.log('Sync progress:', progress);
      
      if (['completed', 'failed'].includes(progress.data.status)) {
        completed = true;
      } else {
        await new Promise(resolve => setTimeout(resolve, 5000));
      }
    }
  } catch (error) {
    console.error('Sync error:', error);
  }
}`}
                </pre>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Python Example</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`import requests
import time

class SyncAPI:
    def __init__(self, api_token):
        self.api_token = api_token
        self.base_url = 'https://api.ksa1980.lol/v1/sync'
        self.headers = {
            'Authorization': f'Bearer {api_token}',
            'Content-Type': 'application/json'
        }
    
    def get_status(self):
        response = requests.get(
            f'{self.base_url}/status',
            headers=self.headers
        )
        return response.json()
    
    def trigger_sync(self, sync_type='full', force=False):
        response = requests.post(
            f'{self.base_url}/trigger',
            headers=self.headers,
            json={
                'type': sync_type,
                'force': force
            }
        )
        return response.json()
    
    def check_progress(self, sync_id):
        response = requests.get(
            f'{self.base_url}/progress/{sync_id}',
            headers=self.headers
        )
        return response.json()
    
    def wait_for_completion(self, sync_id, interval=5):
        while True:
            progress = self.check_progress(sync_id)
            status = progress['data']['status']
            
            print(f'Sync status: {status}')
            print(f'Progress: {progress["data"]["progress"]}')
            
            if status in ['completed', 'failed']:
                return progress
            
            time.sleep(interval)

# Usage example
api = SyncAPI('YOUR_API_TOKEN')

# Check current status
status = api.get_status()
print('Current sync status:', status)

# Start sync if not already running
if status['data']['status'] != 'syncing':
    # Trigger full sync
    sync = api.trigger_sync('full')
    print('Sync started:', sync)
    
    # Wait for completion
    result = api.wait_for_completion(sync['data']['syncId'])
    print('Sync completed:', result)`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Best Practices */}
        <Alert>
          <Info className="h-4 w-4" />
          <AlertDescription>
            <strong>Best Practices:</strong> Monitor sync status regularly. 
            Handle sync conflicts properly. 
            Implement retry logic. 
            Log sync operations. 
            Use appropriate timeouts.
          </AlertDescription>
        </Alert>
      </div>
    </DocsLayout>
  )
}
