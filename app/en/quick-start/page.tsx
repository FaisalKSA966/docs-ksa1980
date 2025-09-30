import { CodeBlock } from "@/components/code-block"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Terminal, Settings, Rocket } from "lucide-react"

export default function QuickStartPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <Badge className="bg-primary/10 text-primary border-primary/20">Getting Started</Badge>
        <h1 className="text-4xl font-bold tracking-tight">Quick Start</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Get your Discord Ticket Management System up and running in just a few minutes.
        </p>
      </div>

      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 font-bold text-primary">
            1
          </div>
          <div className="space-y-3 flex-1">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Terminal className="w-6 h-6" />
              Clone and Install
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Clone the repository and install dependencies for both the bot and website.
            </p>
            <CodeBlock
              language="bash"
              title="Installation Commands"
              code={`# Clone the repository
git clone https://github.com/your-repo/ticket-system.git
cd ticket-system

# Install bot dependencies
npm install

# Install website dependencies
cd "Website UI"
npm install`}
            />
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 font-bold text-primary">
            2
          </div>
          <div className="space-y-3 flex-1">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Settings className="w-6 h-6" />
              Configure Environment
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Set up your environment variables for both the Discord bot and web dashboard.
            </p>

            <Card className="p-4 bg-muted/50">
              <p className="text-sm font-medium mb-2">Bot Configuration (.env)</p>
              <CodeBlock
                language="bash"
                code={`DISCORD_BOT_TOKEN=your_bot_token_here
DISCORD_CLIENT_ID=your_client_id_here
DISCORD_GUILD_ID=your_server_id_here
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/database
ADMIN_USERS=your_discord_user_id_here`}
              />
            </Card>

            <Card className="p-4 bg-muted/50">
              <p className="text-sm font-medium mb-2">Website Configuration (.env.local)</p>
              <CodeBlock
                language="bash"
                code={`MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/database
NEXTAUTH_URL=https://yourdomain.com
NEXTAUTH_SECRET=your-random-secret-key
DISCORD_OAUTH_CLIENT_ID=your_oauth_client_id
DISCORD_OAUTH_CLIENT_SECRET=your_oauth_client_secret
DISCORD_BOT_TOKEN=your_bot_token_here
ADMIN_USERS=your_discord_user_id_here`}
              />
            </Card>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 font-bold text-primary">
            3
          </div>
          <div className="space-y-3 flex-1">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Rocket className="w-6 h-6" />
              Launch the System
            </h2>
            <p className="text-muted-foreground leading-relaxed">Start both the Discord bot and web dashboard.</p>
            <CodeBlock
              language="bash"
              title="Start Commands"
              code={`# Start the Discord bot
npm start

# In a new terminal, start the website
cd "Website UI"
npm run dev

# For production
npm run build
npm start`}
            />
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 font-bold text-primary">
            4
          </div>
          <div className="space-y-3 flex-1">
            <h2 className="text-2xl font-bold">Setup in Discord</h2>
            <p className="text-muted-foreground leading-relaxed">
              Run the setup command in your Discord server to configure the ticket system.
            </p>
            <CodeBlock
              language="typescript"
              code={`/setup

// This will:
// ✓ Create ticket category
// ✓ Set up ticket send channel
// ✓ Configure support roles
// ✓ Create log channels
// ✓ Deploy ticket panel`}
            />
          </div>
        </div>
      </div>

      <Card className="p-6 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
        <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
          <CheckCircle2 className="w-6 h-6 text-primary" />
          You're all set!
        </h3>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Your ticket system is now ready to use. Users can create tickets through Discord, and you can manage them via
          the web dashboard.
        </p>
        <div className="flex flex-wrap gap-3">
          <a href="/en/bot/slash-commands" className="text-primary hover:underline font-medium">
            Explore Bot Commands →
          </a>
          <a href="/en/dashboard/overview" className="text-secondary hover:underline font-medium">
            Dashboard Guide →
          </a>
        </div>
      </Card>

      <div className="border-l-4 border-secondary pl-6 py-4 bg-secondary/5 rounded-r-lg">
        <p className="text-lg font-medium mb-2">Need Help?</p>
        <p className="text-muted-foreground leading-relaxed">
          If you encounter any issues during setup, check the{" "}
          <a href="/en/guides/troubleshooting" className="text-primary hover:underline">
            Troubleshooting Guide
          </a>{" "}
          or refer to the detailed{" "}
          <a href="/en/installation" className="text-primary hover:underline">
            Installation Documentation
          </a>
          .
        </p>
      </div>
    </div>
  )
}
