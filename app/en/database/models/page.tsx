"use client"

import { DocsLayout } from "@/components/docs-layout"
import { enNavigation } from "@/lib/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { 
  Database, 
  Code, 
  FileText,
  CheckCircle,
  AlertTriangle,
  Info,
  Settings,
  Users,
  MessageSquare,
  Shield,
  Activity,
  Zap,
  Globe
} from "lucide-react"

export default function DatabaseModels() {
  return (
    <DocsLayout navigation={enNavigation} lang="en">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Code className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold">Database Models</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Detailed documentation of all database models and their relationships
          </p>
        </div>

        {/* Model Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                Ticket Model
              </CardTitle>
              <CardDescription>
                Core ticket data structure
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">User information</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Status tracking</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Message history</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                User Model
              </CardTitle>
              <CardDescription>
                User profile and statistics
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Discord integration</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Ticket history</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Preferences</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5" />
                Guild Model
              </CardTitle>
              <CardDescription>
                Server configuration
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Server settings</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Role management</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Statistics</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Ticket Model */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              Ticket Model
            </CardTitle>
            <CardDescription>
              Complete ticket data structure with all fields and relationships
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium">Schema Definition</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`const ticketSchema = new mongoose.Schema({
  // Unique identifiers
  ticketId: {
    type: String,
    required: true,
    unique: true,
    index: true
  },
  
  // Discord information
  userId: {
    type: String,
    required: true,
    index: true
  },
  guildId: {
    type: String,
    required: true,
    index: true
  },
  channelId: {
    type: String,
    required: true
  },
  
  // Ticket classification
  category: {
    type: String,
    required: true,
    enum: ['technical', 'general', 'complaint', 'feature', 'other'],
    index: true
  },
  priority: {
    type: String,
    required: true,
    enum: ['low', 'normal', 'high', 'urgent'],
    default: 'normal',
    index: true
  },
  status: {
    type: String,
    required: true,
    enum: ['open', 'claimed', 'closed'],
    default: 'open',
    index: true
  },
  
  // Ticket content
  subject: {
    type: String,
    required: true,
    maxlength: 200
  },
  message: {
    type: String,
    required: true,
    maxlength: 2000
  },
  attachments: [{
    type: String,
    validate: {
      validator: function(v) {
        return /^https?:\/\/.+/.test(v);
      },
      message: 'Invalid attachment URL'
    }
  }],
  
  // Timestamps
  createdAt: {
    type: Date,
    default: Date.now,
    index: true
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  closedAt: {
    type: Date
  },
  
  // Staff information
  claimedBy: {
    type: String,
    index: true
  },
  
  // Feedback and rating
  rating: {
    type: Number,
    min: 1,
    max: 5
  },
  feedback: {
    type: String,
    maxlength: 500
  },
  
  // Custom tags
  tags: [{
    type: String,
    maxlength: 50
  }],
  
  // Internal notes
  notes: [{
    author: {
      type: String,
      required: true
    },
    message: {
      type: String,
      required: true,
      maxlength: 1000
    },
    timestamp: {
      type: Date,
      default: Date.now
    },
    internal: {
      type: Boolean,
      default: false
    }
  }]
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});`}
                </pre>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Virtual Fields</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`// Virtual fields for computed properties
ticketSchema.virtual('isOpen').get(function() {
  return this.status === 'open';
});

ticketSchema.virtual('isClaimed').get(function() {
  return this.status === 'claimed';
});

ticketSchema.virtual('isClosed').get(function() {
  return this.status === 'closed';
});

ticketSchema.virtual('responseTime').get(function() {
  if (this.claimedBy && this.updatedAt) {
    return this.updatedAt - this.createdAt;
  }
  return null;
});

ticketSchema.virtual('resolutionTime').get(function() {
  if (this.closedAt) {
    return this.closedAt - this.createdAt;
  }
  return null;
});

ticketSchema.virtual('age').get(function() {
  return Date.now() - this.createdAt;
});

ticketSchema.virtual('publicNotes').get(function() {
  return this.notes.filter(note => !note.internal);
});

ticketSchema.virtual('internalNotes').get(function() {
  return this.notes.filter(note => note.internal);
});`}
                </pre>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Instance Methods</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`// Instance methods for ticket operations
ticketSchema.methods.claim = function(staffId) {
  this.status = 'claimed';
  this.claimedBy = staffId;
  this.updatedAt = new Date();
  return this.save();
};

ticketSchema.methods.close = function() {
  this.status = 'closed';
  this.closedAt = new Date();
  this.updatedAt = new Date();
  return this.save();
};

ticketSchema.methods.reopen = function() {
  this.status = 'open';
  this.claimedBy = undefined;
  this.closedAt = undefined;
  this.updatedAt = new Date();
  return this.save();
};

ticketSchema.methods.addNote = function(author, message, internal = false) {
  this.notes.push({
    author,
    message,
    timestamp: new Date(),
    internal
  });
  this.updatedAt = new Date();
  return this.save();
};

ticketSchema.methods.addRating = function(rating, feedback = '') {
  this.rating = rating;
  this.feedback = feedback;
  this.updatedAt = new Date();
  return this.save();
};

ticketSchema.methods.addTag = function(tag) {
  if (!this.tags.includes(tag)) {
    this.tags.push(tag);
    this.updatedAt = new Date();
  }
  return this.save();
};

ticketSchema.methods.removeTag = function(tag) {
  this.tags = this.tags.filter(t => t !== tag);
  this.updatedAt = new Date();
  return this.save();
};`}
                </pre>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Static Methods</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`// Static methods for ticket queries
ticketSchema.statics.findByUser = function(userId, options = {}) {
  const query = { userId };
  
  if (options.status) query.status = options.status;
  if (options.category) query.category = options.category;
  if (options.priority) query.priority = options.priority;
  
  return this.find(query)
    .sort({ createdAt: -1 })
    .limit(options.limit || 20)
    .skip(options.skip || 0);
};

ticketSchema.statics.findByGuild = function(guildId, options = {}) {
  const query = { guildId };
  
  if (options.status) query.status = options.status;
  if (options.category) query.category = options.category;
  if (options.priority) query.priority = options.priority;
  
  return this.find(query)
    .sort({ createdAt: -1 })
    .limit(options.limit || 20)
    .skip(options.skip || 0);
};

ticketSchema.statics.findByStaff = function(staffId, options = {}) {
  const query = { claimedBy: staffId };
  
  if (options.status) query.status = options.status;
  
  return this.find(query)
    .sort({ createdAt: -1 })
    .limit(options.limit || 20)
    .skip(options.skip || 0);
};

ticketSchema.statics.getStats = function(guildId, timeRange = '30d') {
  const startDate = new Date();
  startDate.setDate(startDate.getDate() - parseInt(timeRange));
  
  return this.aggregate([
    { $match: { guildId, createdAt: { $gte: startDate } } },
    {
      $group: {
        _id: null,
        total: { $sum: 1 },
        open: { $sum: { $cond: [{ $eq: ['$status', 'open'] }, 1, 0] } },
        claimed: { $sum: { $cond: [{ $eq: ['$status', 'claimed'] }, 1, 0] } },
        closed: { $sum: { $cond: [{ $eq: ['$status', 'closed'] }, 1, 0] } },
        avgRating: { $avg: '$rating' },
        avgResponseTime: { $avg: '$responseTime' }
      }
    }
  ]);
};`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* User Model */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              User Model
            </CardTitle>
            <CardDescription>
              User profile and statistics data structure
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium">Schema Definition</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`const userSchema = new mongoose.Schema({
  // Discord information
  userId: {
    type: String,
    required: true,
    unique: true,
    index: true
  },
  username: {
    type: String,
    required: true
  },
  discriminator: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },
  email: {
    type: String,
    validate: {
      validator: function(v) {
        return !v || /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(v);
      },
      message: 'Invalid email format'
    }
  },
  
  // Ticket references
  tickets: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Ticket'
  }],
  
  // Timestamps
  createdAt: {
    type: Date,
    default: Date.now,
    index: true
  },
  lastActive: {
    type: Date,
    default: Date.now
  },
  
  // User preferences
  preferences: {
    notifications: {
      type: Boolean,
      default: true
    },
    language: {
      type: String,
      default: 'en',
      enum: ['en', 'ar']
    },
    theme: {
      type: String,
      default: 'dark',
      enum: ['light', 'dark', 'auto']
    }
  },
  
  // User statistics
  stats: {
    totalTickets: {
      type: Number,
      default: 0
    },
    openTickets: {
      type: Number,
      default: 0
    },
    closedTickets: {
      type: Number,
      default: 0
    },
    averageRating: {
      type: Number,
      default: 0
    }
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});`}
                </pre>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Virtual Fields</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`// Virtual fields for computed properties
userSchema.virtual('displayName').get(function() {
  return this.discriminator === '0' ? this.username : `${this.username}#${this.discriminator}`;
});

userSchema.virtual('avatarUrl').get(function() {
  if (this.avatar) {
    return `https://cdn.discordapp.com/avatars/${this.userId}/${this.avatar}.png`;
  }
  return `https://cdn.discordapp.com/embed/avatars/${parseInt(this.discriminator) % 5}.png`;
});

userSchema.virtual('isActive').get(function() {
  const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);
  return this.lastActive > oneDayAgo;
});

userSchema.virtual('ticketCount').get(function() {
  return this.tickets.length;
});

userSchema.virtual('satisfactionScore').get(function() {
  if (this.stats.averageRating === 0) return 'N/A';
  if (this.stats.averageRating >= 4) return 'Excellent';
  if (this.stats.averageRating >= 3) return 'Good';
  if (this.stats.averageRating >= 2) return 'Fair';
  return 'Poor';
});`}
                </pre>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Instance Methods</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`// Instance methods for user operations
userSchema.methods.updateActivity = function() {
  this.lastActive = new Date();
  return this.save();
};

userSchema.methods.addTicket = function(ticketId) {
  if (!this.tickets.includes(ticketId)) {
    this.tickets.push(ticketId);
    this.stats.totalTickets += 1;
    this.stats.openTickets += 1;
  }
  return this.save();
};

userSchema.methods.removeTicket = function(ticketId) {
  this.tickets = this.tickets.filter(id => id.toString() !== ticketId.toString());
  this.stats.openTickets = Math.max(0, this.stats.openTickets - 1);
  return this.save();
};

userSchema.methods.closeTicket = function() {
  this.stats.openTickets = Math.max(0, this.stats.openTickets - 1);
  this.stats.closedTickets += 1;
  return this.save();
};

userSchema.methods.updateRating = function(newRating) {
  const totalRatings = this.stats.closedTickets;
  const currentTotal = this.stats.averageRating * totalRatings;
  this.stats.averageRating = (currentTotal + newRating) / (totalRatings + 1);
  return this.save();
};

userSchema.methods.updatePreferences = function(preferences) {
  this.preferences = { ...this.preferences, ...preferences };
  return this.save();
};`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Guild Model */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5" />
              Guild Model
            </CardTitle>
            <CardDescription>
              Server configuration and settings data structure
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium">Schema Definition</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`const guildSchema = new mongoose.Schema({
  // Discord information
  guildId: {
    type: String,
    required: true,
    unique: true,
    index: true
  },
  name: {
    type: String,
    required: true
  },
  icon: {
    type: String
  },
  ownerId: {
    type: String,
    required: true
  },
  
  // Guild settings
  settings: {
    ticketChannel: {
      type: String
    },
    supportRole: {
      type: String
    },
    adminRole: {
      type: String
    },
    autoClose: {
      type: Boolean,
      default: false
    },
    autoCloseTime: {
      type: Number,
      default: 72 // hours
    },
    maxTickets: {
      type: Number,
      default: 5
    },
    categories: [{
      type: String,
      enum: ['technical', 'general', 'complaint', 'feature', 'other']
    }],
    welcomeMessage: {
      type: String,
      default: 'Thank you for creating a ticket! A staff member will be with you shortly.'
    },
    closeMessage: {
      type: String,
      default: 'This ticket has been closed. If you need further assistance, please create a new ticket.'
    }
  },
  
  // Guild statistics
  stats: {
    totalTickets: {
      type: Number,
      default: 0
    },
    openTickets: {
      type: Number,
      default: 0
    },
    closedTickets: {
      type: Number,
      default: 0
    },
    averageResponseTime: {
      type: Number,
      default: 0
    },
    averageRating: {
      type: Number,
      default: 0
    }
  },
  
  // Timestamps
  createdAt: {
    type: Date,
    default: Date.now,
    index: true
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});`}
                </pre>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Virtual Fields</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`// Virtual fields for computed properties
guildSchema.virtual('iconUrl').get(function() {
  if (this.icon) {
    return `https://cdn.discordapp.com/icons/${this.guildId}/${this.icon}.png`;
  }
  return null;
});

guildSchema.virtual('isActive').get(function() {
  const oneWeekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
  return this.updatedAt > oneWeekAgo;
});

guildSchema.virtual('ticketVolume').get(function() {
  if (this.stats.totalTickets === 0) return 'Low';
  if (this.stats.totalTickets < 10) return 'Low';
  if (this.stats.totalTickets < 50) return 'Medium';
  if (this.stats.totalTickets < 100) return 'High';
  return 'Very High';
});

guildSchema.virtual('satisfactionScore').get(function() {
  if (this.stats.averageRating === 0) return 'N/A';
  if (this.stats.averageRating >= 4) return 'Excellent';
  if (this.stats.averageRating >= 3) return 'Good';
  if (this.stats.averageRating >= 2) return 'Fair';
  return 'Poor';
});

guildSchema.virtual('responseTimeScore').get(function() {
  if (this.stats.averageResponseTime === 0) return 'N/A';
  if (this.stats.averageResponseTime < 30) return 'Excellent';
  if (this.stats.averageResponseTime < 60) return 'Good';
  if (this.stats.averageResponseTime < 120) return 'Fair';
  return 'Poor';
});`}
                </pre>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Instance Methods</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`// Instance methods for guild operations
guildSchema.methods.updateSettings = function(newSettings) {
  this.settings = { ...this.settings, ...newSettings };
  this.updatedAt = new Date();
  return this.save();
};

guildSchema.methods.addTicket = function() {
  this.stats.totalTickets += 1;
  this.stats.openTickets += 1;
  this.updatedAt = new Date();
  return this.save();
};

guildSchema.methods.closeTicket = function() {
  this.stats.openTickets = Math.max(0, this.stats.openTickets - 1);
  this.stats.closedTickets += 1;
  this.updatedAt = new Date();
  return this.save();
};

guildSchema.methods.updateResponseTime = function(responseTime) {
  const totalTickets = this.stats.closedTickets;
  const currentTotal = this.stats.averageResponseTime * totalTickets;
  this.stats.averageResponseTime = (currentTotal + responseTime) / (totalTickets + 1);
  this.updatedAt = new Date();
  return this.save();
};

guildSchema.methods.updateRating = function(rating) {
  const totalTickets = this.stats.closedTickets;
  const currentTotal = this.stats.averageRating * totalTickets;
  this.stats.averageRating = (currentTotal + rating) / (totalTickets + 1);
  this.updatedAt = new Date();
  return this.save();
};

guildSchema.methods.isCategoryEnabled = function(category) {
  return this.settings.categories.includes(category);
};

guildSchema.methods.canCreateTicket = function(userId) {
  // Check if user has reached max tickets limit
  // This would require a separate query to count user's open tickets
  return true; // Simplified for example
};`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Model Relationships */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="h-5 w-5" />
              Model Relationships
            </CardTitle>
            <CardDescription>
              How the models relate to each other and data flow
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium">Relationship Diagram</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`// Model Relationships
Ticket Model:
  - userId → User.userId (Many-to-One)
  - guildId → Guild.guildId (Many-to-One)
  - claimedBy → User.userId (Many-to-One, optional)

User Model:
  - tickets → Ticket._id (One-to-Many)
  - userId → Ticket.userId (One-to-Many)

Guild Model:
  - guildId → Ticket.guildId (One-to-Many)
  - ownerId → User.userId (One-to-One)

// Data Flow
1. User creates ticket → Ticket created with userId and guildId
2. Staff claims ticket → Ticket.claimedBy set to staff userId
3. Ticket closed → User and Guild stats updated
4. Rating added → User and Guild average ratings updated`}
                </pre>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Population Examples</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`// Populate ticket with user and guild information
const ticket = await Ticket.findById(ticketId)
  .populate('userId', 'username avatar discriminator')
  .populate('guildId', 'name icon settings')
  .populate('claimedBy', 'username avatar');

// Populate user with their tickets
const user = await User.findOne({ userId })
  .populate('tickets', 'ticketId subject status category priority createdAt');

// Populate guild with ticket statistics
const guild = await Guild.findOne({ guildId })
  .populate('tickets', 'status category priority rating createdAt');`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Best Practices */}
        <Alert>
          <Info className="h-4 w-4" />
          <AlertDescription>
            <strong>Best Practices:</strong> Always use proper indexing for frequently queried fields. 
            Implement data validation at the schema level. Use virtual fields for computed properties. 
            Keep related data normalized to avoid duplication.
          </AlertDescription>
        </Alert>
      </div>
    </DocsLayout>
  )
}
