import { CodeBlock } from "@/components/code-block"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertCircle, CheckCircle2, Server, Database, Globe } from "lucide-react"

export default function InstallationPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <Badge className="bg-primary/10 text-primary border-primary/20">Getting Started</Badge>
        <h1 className="text-4xl font-bold tracking-tight">Installation</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Detailed installation guide for setting up the Discord Ticket Management System.
        </p>
      </div>

      <div className="border-l-4 border-primary pl-6 py-4 bg-primary/5 rounded-r-lg">
        <div className="flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
          <div>
            <p className="font-medium mb-1">Prerequisites</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Before you begin, ensure you have Node.js 18 or higher installed, a Discord bot token, and a MongoDB Atlas
              account (optional but recommended).
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl font-bold">System Requirements</h2>

        <div className="grid md:grid-cols-3 gap-4">
          <Card className="p-6">
            <Server className="w-8 h-8 text-primary mb-3" />
            <h3 className="font-semibold mb-2">Server</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Node.js 18+</li>
              <li>• 2GB RAM minimum</li>
              <li>• Ubuntu 20.04+ or Windows Server</li>
            </ul>
          </Card>

          <Card className="p-6">
            <Database className="w-8 h-8 text-secondary mb-3" />
            <h3 className="font-semibold mb-2">Database</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• MongoDB Atlas (recommended)</li>
              <li>• JSON fallback included</li>
              <li>• Automatic backups</li>
            </ul>
          </Card>

          <Card className="p-6">
            <Globe className="w-8 h-8 text-primary mb-3" />
            <h3 className="font-semibold mb-2">Discord</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Bot token</li>
              <li>• OAuth2 credentials</li>
              <li>• Server admin access</li>
            </ul>
          </Card>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl font-bold">Step 1: Discord Bot Setup</h2>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Create Discord Application</h3>
          <ol className="space-y-3 list-decimal list-inside text-muted-foreground">
            <li>
              Go to{" "}
              <a
                href="https://discord.com/developers/applications"
                className="text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Discord Developer Portal
              </a>
            </li>
            <li>Click "New Application" and give it a name</li>
            <li>Navigate to the "Bot" section and click "Add Bot"</li>
            <li>
              Enable the following Privileged Gateway Intents:
              <ul className="ml-6 mt-2 space-y-1 list-disc">
                <li>Server Members Intent</li>
                <li>Message Content Intent</li>
              </ul>
            </li>
            <li>Copy your bot token (keep it secret!)</li>
          </ol>

          <Card className="p-4 bg-muted/50">
            <p className="text-sm font-medium mb-2">Required Bot Permissions</p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Manage Channels</Badge>
              <Badge variant="secondary">Manage Roles</Badge>
              <Badge variant="secondary">Send Messages</Badge>
              <Badge variant="secondary">Embed Links</Badge>
              <Badge variant="secondary">Attach Files</Badge>
              <Badge variant="secondary">Read Message History</Badge>
              <Badge variant="secondary">Add Reactions</Badge>
            </div>
          </Card>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">OAuth2 Configuration</h3>
          <ol className="space-y-3 list-decimal list-inside text-muted-foreground">
            <li>Navigate to the "OAuth2" section</li>
            <li>
              Add redirect URL:{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">
                https://yourdomain.com/api/auth/callback/discord
              </code>
            </li>
            <li>Copy your Client ID and Client Secret</li>
          </ol>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl font-bold">Step 2: MongoDB Setup</h2>

        <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            MongoDB Atlas provides a free tier perfect for getting started. The system also includes a JSON fallback for
            development.
          </p>

          <ol className="space-y-3 list-decimal list-inside text-muted-foreground">
            <li>
              Create account at{" "}
              <a
                href="https://www.mongodb.com/cloud/atlas"
                className="text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                MongoDB Atlas
              </a>
            </li>
            <li>Create a new cluster (free tier available)</li>
            <li>Create a database user with read/write permissions</li>
            <li>Whitelist your IP address (or use 0.0.0.0/0 for all IPs)</li>
            <li>Get your connection string</li>
          </ol>

          <CodeBlock
            language="text"
            title="MongoDB Connection String Format"
            code={`mongodb+srv://<username>:<password>@cluster.mongodb.net/<database>?retryWrites=true&w=majority`}
          />
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl font-bold">Step 3: Install Dependencies</h2>

        <CodeBlock
          language="bash"
          title="Bot Installation"
          code={`# Navigate to project root
cd ticket-system

# Install bot dependencies
npm install

# Required packages will be installed:
# - discord.js@14
# - mongoose
# - dotenv
# - and more...`}
        />

        <CodeBlock
          language="bash"
          title="Website Installation"
          code={`# Navigate to website directory
cd "Website UI"

# Install website dependencies
npm install

# Required packages will be installed:
# - next@14
# - react@18
# - next-auth
# - tailwindcss
# - and more...`}
        />
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl font-bold">Step 4: Environment Configuration</h2>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Bot Environment (.env)</h3>
          <p className="text-muted-foreground">
            Create a <code className="text-sm bg-muted px-2 py-1 rounded">.env</code> file in the project root:
          </p>

          <CodeBlock
            language="bash"
            code={`# Discord Bot Configuration
DISCORD_BOT_TOKEN=your_bot_token_here
DISCORD_CLIENT_ID=your_client_id_here
DISCORD_GUILD_ID=your_server_id_here

# Database Configuration
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/tickets

# Admin Configuration
ADMIN_USERS=123456789012345678,987654321098765432

# Optional: Logging
LOG_LEVEL=info`}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Website Environment (.env.local)</h3>
          <p className="text-muted-foreground">
            Create a <code className="text-sm bg-muted px-2 py-1 rounded">.env.local</code> file in the Website UI
            directory:
          </p>

          <CodeBlock
            language="bash"
            code={`# Database
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/tickets

# NextAuth Configuration
NEXTAUTH_URL=https://yourdomain.com
NEXTAUTH_SECRET=generate-a-random-secret-key-here

# Discord OAuth
DISCORD_OAUTH_CLIENT_ID=your_oauth_client_id
DISCORD_OAUTH_CLIENT_SECRET=your_oauth_client_secret

# Discord Bot
DISCORD_BOT_TOKEN=your_bot_token_here

# Admin Users
ADMIN_USERS=123456789012345678,987654321098765432

# Server Configuration
DISCORD_GUILD_ID=your_server_id_here`}
          />

          <div className="border-l-4 border-secondary pl-6 py-4 bg-secondary/5 rounded-r-lg">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
              <div>
                <p className="font-medium mb-1">Generate NEXTAUTH_SECRET</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                  Use this command to generate a secure random secret:
                </p>
                <code className="text-sm bg-muted px-3 py-1.5 rounded block">openssl rand -base64 32</code>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl font-bold">Step 5: Deploy Slash Commands</h2>

        <p className="text-muted-foreground leading-relaxed">
          Before starting the bot, deploy the slash commands to your Discord server:
        </p>

        <CodeBlock
          language="bash"
          code={`# Deploy commands
npm run deploy

# You should see:
# ✅ Successfully registered application commands.`}
        />
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl font-bold">Step 6: Start the System</h2>

        <div className="grid md:grid-cols-2 gap-4">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-3">Development Mode</h3>
            <CodeBlock
              language="bash"
              code={`# Start bot
npm start

# Start website (new terminal)
cd "Website UI"
npm run dev`}
            />
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-3">Production Mode</h3>
            <CodeBlock
              language="bash"
              code={`# Build website
cd "Website UI"
npm run build

# Start with PM2
pm2 start ecosystem.config.js`}
            />
          </Card>
        </div>
      </div>

      <Card className="p-6 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
        <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
          <CheckCircle2 className="w-6 h-6 text-primary" />
          Installation Complete!
        </h3>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Your system is now installed. Continue to the configuration guide to set up your ticket system in Discord.
        </p>
        <div className="flex flex-wrap gap-3">
          <a href="/en/configuration" className="text-primary hover:underline font-medium">
            Configuration Guide →
          </a>
          <a href="/en/bot/overview" className="text-secondary hover:underline font-medium">
            Bot Documentation →
          </a>
        </div>
      </Card>
    </div>
  )
}
