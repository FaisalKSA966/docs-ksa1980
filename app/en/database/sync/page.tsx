import { DocsLayout } from "@/components/docs-layout"
import { enNavigation } from "@/lib/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { 
  RotateCw,
  Database,
  Server,
  Info,
  CheckCircle
} from "lucide-react"

export default function DatabaseSync() {
  return (
    <DocsLayout navigation={enNavigation} lang="en">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <RotateCw className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold">Data Synchronization</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            How data synchronizes between MongoDB Atlas and JSON fallback
          </p>
        </div>

        {/* Sync Overview */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="h-5 w-5" />
              Sync Architecture
            </CardTitle>
            <CardDescription>
              Overview of the synchronization system
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium">Primary Database</h4>
              <div className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">MongoDB Atlas as primary database</span>
                  </div>
                  <p className="text-xs text-muted-foreground">All write operations go to MongoDB first</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Fallback System</h4>
              <div className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">JSON files as local backup</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Automatic sync every 5 minutes</p>
                </div>
              </div>
            </div>

            <div className="bg-muted p-4 rounded-lg">
              <pre className="text-sm overflow-x-auto">
{`// Sync Configuration
const syncConfig = {
  interval: 5 * 60 * 1000, // 5 minutes
  backupPath: './data/backup.json',
  collections: ['tickets', 'users', 'guilds'],
  retryAttempts: 3,
  retryDelay: 1000 // 1 second
};

// Sync Manager
class SyncManager {
  constructor(config) {
    this.config = config;
    this.syncInterval = null;
    this.lastSync = null;
  }

  // Start automatic sync
  start() {
    this.syncInterval = setInterval(() => {
      this.sync();
    }, this.config.interval);
  }

  // Stop automatic sync
  stop() {
    if (this.syncInterval) {
      clearInterval(this.syncInterval);
    }
  }

  // Perform sync
  async sync() {
    try {
      // Get data from MongoDB
      const data = await this.fetchFromMongoDB();
      
      // Write to JSON backup
      await this.writeToJSON(data);
      
      this.lastSync = new Date();
      console.log('Sync completed successfully');
    } catch (error) {
      console.error('Sync failed:', error);
      this.handleSyncError(error);
    }
  }

  // Fetch data from MongoDB
  async fetchFromMongoDB() {
    const data = {};
    
    for (const collection of this.config.collections) {
      data[collection] = await mongoose.model(collection).find({});
    }
    
    return data;
  }

  // Write data to JSON
  async writeToJSON(data) {
    const backup = {
      data,
      timestamp: new Date().toISOString(),
      version: process.env.APP_VERSION
    };
    
    await fs.writeFile(
      this.config.backupPath,
      JSON.stringify(backup, null, 2)
    );
  }

  // Handle sync errors
  async handleSyncError(error) {
    let attempts = 0;
    
    while (attempts < this.config.retryAttempts) {
      try {
        await new Promise(resolve => 
          setTimeout(resolve, this.config.retryDelay)
        );
        await this.sync();
        return;
      } catch (retryError) {
        attempts++;
        console.error(
          'Retry attempt ${attempts} failed:',
          retryError
        );
      }
    }
    
    // Send alert after all retries fail
    this.sendSyncAlert(error);
  }
}`}
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Fallback System */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Server className="h-5 w-5" />
              Fallback System
            </CardTitle>
            <CardDescription>
              How the JSON fallback system works
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-muted p-4 rounded-lg">
              <pre className="text-sm overflow-x-auto">
{`// Fallback System
class FallbackSystem {
  constructor(backupPath) {
    this.backupPath = backupPath;
  }

  // Check if MongoDB is available
  async isMongoDBAvailable() {
    try {
      await mongoose.connection.db.admin().ping();
      return true;
    } catch {
      return false;
    }
  }

  // Get data from fallback
  async getData(collection) {
    try {
      const backup = JSON.parse(
        await fs.readFile(this.backupPath, 'utf8')
      );
      return backup.data[collection] || [];
    } catch (error) {
      console.error('Error reading fallback:', error);
      return [];
    }
  }

  // Save data to fallback
  async saveData(collection, data) {
    try {
      const backup = JSON.parse(
        await fs.readFile(this.backupPath, 'utf8')
      );
      
      backup.data[collection] = data;
      backup.timestamp = new Date().toISOString();
      
      await fs.writeFile(
        this.backupPath,
        JSON.stringify(backup, null, 2)
      );
    } catch (error) {
      console.error('Error saving fallback:', error);
    }
  }

  // Restore data to MongoDB
  async restoreToMongoDB() {
    try {
      const backup = JSON.parse(
        await fs.readFile(this.backupPath, 'utf8')
      );
      
      for (const [collection, data] of Object.entries(backup.data)) {
        const Model = mongoose.model(collection);
        await Model.deleteMany({});
        await Model.insertMany(data);
      }
      
      console.log('Restore completed successfully');
    } catch (error) {
      console.error('Restore failed:', error);
      throw error;
    }
  }
}`}
              </pre>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Usage Example</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`// Initialize systems
const syncManager = new SyncManager(syncConfig);
const fallbackSystem = new FallbackSystem(syncConfig.backupPath);

// Start automatic sync
syncManager.start();

// Database operations with fallback
async function getTickets(filters) {
  try {
    // Try MongoDB first
    if (await fallbackSystem.isMongoDBAvailable()) {
      return await Ticket.find(filters);
    }
    
    // Fallback to JSON if MongoDB is down
    console.warn('MongoDB unavailable, using fallback');
    const tickets = await fallbackSystem.getData('tickets');
    
    // Apply filters manually
    return tickets.filter(ticket => {
      for (const [key, value] of Object.entries(filters)) {
        if (ticket[key] !== value) return false;
      }
      return true;
    });
  } catch (error) {
    console.error('Error getting tickets:', error);
    return [];
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
            <strong>Best Practices:</strong> Monitor sync status regularly. 
            Implement proper error handling and retries. 
            Keep backup data encrypted. 
            Validate data integrity during sync.
          </AlertDescription>
        </Alert>
      </div>
    </DocsLayout>
  )
}
