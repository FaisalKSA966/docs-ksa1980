import { DocsLayout } from "@/components/docs-layout"
import { enNavigation } from "@/lib/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { 
  Database, 
  Server, 
  Cloud,
  CheckCircle,
  AlertTriangle,
  Info,
  Code,
  Settings,
  Shield,
  Activity,
  Zap,
  Globe
} from "lucide-react"

export default function DatabaseOverview() {
  return (
    <DocsLayout navigation={enNavigation} lang="en">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Database className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold">Database Overview</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Complete guide to the ticket system database architecture and management
          </p>
        </div>

        {/* Database Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Cloud className="h-5 w-5" />
                MongoDB Atlas
              </CardTitle>
              <CardDescription>
                Primary cloud database
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Cloud-hosted</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Auto-scaling</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Backup & Recovery</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Server className="h-5 w-5" />
                JSON Fallback
              </CardTitle>
              <CardDescription>
                Local backup system
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Offline support</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Data persistence</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Sync capability</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5" />
                Real-time Sync
              </CardTitle>
              <CardDescription>
                Data synchronization
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Auto-sync</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Conflict resolution</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Data integrity</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Database Models */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="h-5 w-5" />
              Database Models
            </CardTitle>
            <CardDescription>
              Core data structures and relationships
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium">Ticket Model</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`{
  _id: ObjectId,
  ticketId: String, // Unique ticket identifier
  userId: String, // Discord user ID
  guildId: String, // Discord server ID
  channelId: String, // Discord channel ID
  category: String, // technical, general, complaint, feature, other
  priority: String, // low, normal, high, urgent
  status: String, // open, claimed, closed
  subject: String, // Ticket subject
  message: String, // Initial message
  attachments: [String], // File URLs
  createdAt: Date,
  updatedAt: Date,
  closedAt: Date,
  claimedBy: String, // Staff member ID
  rating: Number, // 1-5 rating
  feedback: String, // User feedback
  tags: [String], // Custom tags
  notes: [{
    author: String,
    message: String,
    timestamp: Date,
    internal: Boolean
  }]
}`}
                </pre>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">User Model</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`{
  _id: ObjectId,
  userId: String, // Discord user ID
  username: String, // Discord username
  discriminator: String, // Discord discriminator
  avatar: String, // Discord avatar URL
  email: String, // User email (if available)
  tickets: [ObjectId], // Array of ticket IDs
  createdAt: Date,
  lastActive: Date,
  preferences: {
    notifications: Boolean,
    language: String,
    theme: String
  },
  stats: {
    totalTickets: Number,
    openTickets: Number,
    closedTickets: Number,
    averageRating: Number
  }
}`}
                </pre>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Guild Model</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`{
  _id: ObjectId,
  guildId: String, // Discord server ID
  name: String, // Server name
  icon: String, // Server icon URL
  ownerId: String, // Server owner ID
  settings: {
    ticketChannel: String, // Channel for ticket creation
    supportRole: String, // Support staff role
    adminRole: String, // Admin role
    autoClose: Boolean, // Auto-close inactive tickets
    autoCloseTime: Number, // Hours before auto-close
    maxTickets: Number, // Max tickets per user
    categories: [String], // Available categories
    welcomeMessage: String, // Welcome message template
    closeMessage: String // Close message template
  },
  stats: {
    totalTickets: Number,
    openTickets: Number,
    closedTickets: Number,
    averageResponseTime: Number,
    averageRating: Number
  },
  createdAt: Date,
  updatedAt: Date
}`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Database Operations */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5" />
              Database Operations
            </CardTitle>
            <CardDescription>
              Common database operations and queries
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium">Creating Tickets</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`// Create a new ticket
async function createTicket(ticketData) {
  try {
    const ticket = new Ticket({
      ticketId: generateTicketId(),
      userId: ticketData.userId,
      guildId: ticketData.guildId,
      category: ticketData.category,
      priority: ticketData.priority || 'normal',
      status: 'open',
      subject: ticketData.subject,
      message: ticketData.message,
      attachments: ticketData.attachments || [],
      createdAt: new Date(),
      updatedAt: new Date()
    });

    const savedTicket = await ticket.save();
    
    // Update user stats
    await User.findOneAndUpdate(
      { userId: ticketData.userId },
      { 
        $inc: { 'stats.totalTickets': 1, 'stats.openTickets': 1 },
        $push: { tickets: savedTicket._id }
      }
    );

    return savedTicket;
  } catch (error) {
    console.error('Error creating ticket:', error);
    throw error;
  }
}`}
                </pre>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Querying Tickets</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`// Get tickets with filters
async function getTickets(filters = {}) {
  const query = {};
  
  // Apply filters
  if (filters.userId) query.userId = filters.userId;
  if (filters.guildId) query.guildId = filters.guildId;
  if (filters.status) query.status = filters.status;
  if (filters.category) query.category = filters.category;
  if (filters.priority) query.priority = filters.priority;
  
  // Date range filter
  if (filters.startDate || filters.endDate) {
    query.createdAt = {};
    if (filters.startDate) query.createdAt.$gte = new Date(filters.startDate);
    if (filters.endDate) query.createdAt.$lte = new Date(filters.endDate);
  }

  const tickets = await Ticket.find(query)
    .sort({ createdAt: -1 })
    .limit(filters.limit || 20)
    .skip(filters.skip || 0)
    .populate('userId', 'username avatar')
    .populate('guildId', 'name icon');

  return tickets;
}

// Get ticket statistics
async function getTicketStats(guildId, timeRange = '30d') {
  const startDate = new Date();
  startDate.setDate(startDate.getDate() - parseInt(timeRange));

  const stats = await Ticket.aggregate([
    { $match: { guildId, createdAt: { $gte: startDate } } },
    {
      $group: {
        _id: null,
        total: { $sum: 1 },
        open: { $sum: { $cond: [{ $eq: ['$status', 'open'] }, 1, 0] } },
        closed: { $sum: { $cond: [{ $eq: ['$status', 'closed'] }, 1, 0] } },
        avgRating: { $avg: '$rating' },
        avgResponseTime: { $avg: '$responseTime' }
      }
    }
  ]);

  return stats[0] || { total: 0, open: 0, closed: 0, avgRating: 0, avgResponseTime: 0 };
}`}
                </pre>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Updating Tickets</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`// Update ticket status
async function updateTicketStatus(ticketId, status, userId = null) {
  const updateData = {
    status,
    updatedAt: new Date()
  };

  if (status === 'claimed' && userId) {
    updateData.claimedBy = userId;
  } else if (status === 'closed') {
    updateData.closedAt = new Date();
  }

  const ticket = await Ticket.findByIdAndUpdate(
    ticketId,
    updateData,
    { new: true }
  );

  if (!ticket) {
    throw new Error('Ticket not found');
  }

  // Update user stats
  if (status === 'closed') {
    await User.findOneAndUpdate(
      { userId: ticket.userId },
      { 
        $inc: { 'stats.openTickets': -1, 'stats.closedTickets': 1 }
      }
    );
  }

  return ticket;
}

// Add note to ticket
async function addTicketNote(ticketId, noteData) {
  const note = {
    author: noteData.author,
    message: noteData.message,
    timestamp: new Date(),
    internal: noteData.internal || false
  };

  const ticket = await Ticket.findByIdAndUpdate(
    ticketId,
    { $push: { notes: note } },
    { new: true }
  );

  return ticket;
}`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Data Synchronization */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5" />
              Data Synchronization
            </CardTitle>
            <CardDescription>
              How data syncs between MongoDB and JSON fallback
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium">Sync Strategy</h4>
              <div className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Primary: MongoDB Atlas</span>
                  </div>
                  <p className="text-xs text-muted-foreground">All operations go to MongoDB first</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Fallback: JSON Files</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Local JSON files as backup</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Auto-sync</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Automatic synchronization every 5 minutes</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Sync Implementation</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`// Sync data from MongoDB to JSON
async function syncToJSON() {
  try {
    const tickets = await Ticket.find({});
    const users = await User.find({});
    const guilds = await Guild.find({});

    const data = {
      tickets: tickets,
      users: users,
      guilds: guilds,
      lastSync: new Date().toISOString()
    };

    await fs.writeFile('data/backup.json', JSON.stringify(data, null, 2));
    console.log('Data synced to JSON successfully');
  } catch (error) {
    console.error('Error syncing to JSON:', error);
  }
}

// Sync data from JSON to MongoDB
async function syncFromJSON() {
  try {
    const data = JSON.parse(await fs.readFile('data/backup.json', 'utf8'));
    
    // Clear existing data
    await Ticket.deleteMany({});
    await User.deleteMany({});
    await Guild.deleteMany({});

    // Insert synced data
    await Ticket.insertMany(data.tickets);
    await User.insertMany(data.users);
    await Guild.insertMany(data.guilds);

    console.log('Data synced from JSON successfully');
  } catch (error) {
    console.error('Error syncing from JSON:', error);
  }
}

// Auto-sync every 5 minutes
setInterval(syncToJSON, 5 * 60 * 1000);`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Database Security */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Database Security
            </CardTitle>
            <CardDescription>
              Security measures and best practices
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium">MongoDB Atlas Security</h4>
              <div className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Network Access Control</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Restrict access to specific IP addresses</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Database User Management</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Create users with specific permissions</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Encryption at Rest</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Automatic encryption of all data</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Data Protection</h4>
              <div className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Input Validation</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Validate all input data before storage</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Query Sanitization</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Sanitize all database queries</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Access Logging</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Log all database access and operations</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Performance Optimization */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5" />
              Performance Optimization
            </CardTitle>
            <CardDescription>
              Tips for optimizing database performance
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium">Indexing Strategy</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`// Create indexes for better performance
db.tickets.createIndex({ "userId": 1 });
db.tickets.createIndex({ "guildId": 1 });
db.tickets.createIndex({ "status": 1 });
db.tickets.createIndex({ "category": 1 });
db.tickets.createIndex({ "createdAt": -1 });
db.tickets.createIndex({ "userId": 1, "status": 1 });
db.tickets.createIndex({ "guildId": 1, "status": 1 });

// Compound indexes for complex queries
db.tickets.createIndex({ 
  "guildId": 1, 
  "status": 1, 
  "createdAt": -1 
});

db.tickets.createIndex({ 
  "userId": 1, 
  "status": 1, 
  "createdAt": -1 
});`}
                </pre>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Query Optimization</h4>
              <div className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Use Projection</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Only select needed fields</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Limit Results</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Use limit() and skip() for pagination</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Use Aggregation</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Use aggregation pipeline for complex queries</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Best Practices */}
        <Alert>
          <Info className="h-4 w-4" />
          <AlertDescription>
            <strong>Best Practices:</strong> Always use indexes for frequently queried fields. 
            Implement proper error handling. Use transactions for critical operations. 
            Monitor database performance regularly.
          </AlertDescription>
        </Alert>
      </div>
    </DocsLayout>
  )
}
