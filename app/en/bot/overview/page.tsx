import { DocsContent } from "@/components/docs-content"
import { CodeBlock } from "@/components/code-block"
import { Card } from "@/components/ui/card"

export default function BotOverviewPage() {
  return (
    <DocsContent
      title="Discord Bot Overview"
      description="Complete guide to the Discord Ticket Management Bot features and capabilities"
    >
      <p className="text-lg text-muted-foreground">
        The Discord Ticket Management Bot is a comprehensive solution for managing support tickets, user inquiries, and
        community interactions within your Discord server.
      </p>

      <h2>Core Features</h2>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="p-6 border-primary/20">
          <h3 className="text-lg font-semibold mb-2">Ticket System</h3>
          <p className="text-sm text-muted-foreground">
            Create, manage, and close tickets with full logging and transcript generation
          </p>
        </Card>

        <Card className="p-6 border-secondary/20">
          <h3 className="text-lg font-semibold mb-2">Role Management</h3>
          <p className="text-sm text-muted-foreground">
            Automatic role assignment and permission management for staff and users
          </p>
        </Card>

        <Card className="p-6 border-primary/20">
          <h3 className="text-lg font-semibold mb-2">Logging System</h3>
          <p className="text-sm text-muted-foreground">
            Comprehensive logging of all ticket activities and staff actions
          </p>
        </Card>

        <Card className="p-6 border-secondary/20">
          <h3 className="text-lg font-semibold mb-2">Statistics</h3>
          <p className="text-sm text-muted-foreground">
            Real-time statistics and analytics for ticket management and staff performance
          </p>
        </Card>
      </div>

      <h2>Bot Architecture</h2>

      <p>The bot is built using Discord.js v14 with the following structure:</p>

      <CodeBlock
        language="javascript"
        code={`const { Client, GatewayIntentBits, Partials } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.MessageContent,
  ],
  partials: [Partials.Channel, Partials.Message],
});

// Command Handler
client.commands = new Collection();
client.slashCommands = new Collection();

// Event Handler
const eventFiles = fs.readdirSync('./events');
for (const file of eventFiles) {
  const event = require(\`./events/\${file}\`);
  if (event.once) {
    client.once(event.name, (...args) => event.execute(...args, client));
  } else {
    client.on(event.name, (...args) => event.execute(...args, client));
  }
}`}
      />

      <h2>Command Types</h2>

      <h3>Slash Commands</h3>
      <p>Modern Discord slash commands with autocomplete and validation:</p>

      <ul>
        <li>
          <code>/ticket create</code> - Create a new support ticket
        </li>
        <li>
          <code>/ticket close</code> - Close an existing ticket
        </li>
        <li>
          <code>/ticket add</code> - Add a user to a ticket
        </li>
        <li>
          <code>/ticket remove</code> - Remove a user from a ticket
        </li>
        <li>
          <code>/stats</code> - View ticket statistics
        </li>
      </ul>

      <h3>Prefix Commands</h3>
      <p>Traditional prefix-based commands for quick actions:</p>

      <ul>
        <li>
          <code>!close</code> - Close the current ticket
        </li>
        <li>
          <code>!add @user</code> - Add a user to the ticket
        </li>
        <li>
          <code>!remove @user</code> - Remove a user from the ticket
        </li>
        <li>
          <code>!rename [name]</code> - Rename the ticket channel
        </li>
      </ul>

      <h2>Permissions</h2>

      <p>The bot uses a role-based permission system:</p>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b">
              <th className="text-left p-3">Role</th>
              <th className="text-left p-3">Permissions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="p-3 font-mono text-sm">Admin</td>
              <td className="p-3 text-sm">Full access to all commands and settings</td>
            </tr>
            <tr className="border-b">
              <td className="p-3 font-mono text-sm">Moderator</td>
              <td className="p-3 text-sm">Manage tickets, view statistics, add/remove users</td>
            </tr>
            <tr className="border-b">
              <td className="p-3 font-mono text-sm">Support</td>
              <td className="p-3 text-sm">View and respond to tickets</td>
            </tr>
            <tr className="border-b">
              <td className="p-3 font-mono text-sm">User</td>
              <td className="p-3 text-sm">Create tickets, view own tickets</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Next Steps</h2>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="p-4 hover:border-primary/40 transition-colors">
          <h3 className="font-semibold mb-2">Slash Commands</h3>
          <p className="text-sm text-muted-foreground mb-3">Learn about all available slash commands</p>
          <a href="/en/bot/slash-commands" className="text-sm text-primary hover:underline">
            View Commands →
          </a>
        </Card>

        <Card className="p-4 hover:border-primary/40 transition-colors">
          <h3 className="font-semibold mb-2">Interactions</h3>
          <p className="text-sm text-muted-foreground mb-3">Understand buttons and select menus</p>
          <a href="/en/bot/interactions" className="text-sm text-primary hover:underline">
            Learn More →
          </a>
        </Card>

        <Card className="p-4 hover:border-primary/40 transition-colors">
          <h3 className="font-semibold mb-2">Events</h3>
          <p className="text-sm text-muted-foreground mb-3">Explore bot event handlers</p>
          <a href="/en/bot/events" className="text-sm text-primary hover:underline">
            View Events →
          </a>
        </Card>
      </div>
    </DocsContent>
  )
}
