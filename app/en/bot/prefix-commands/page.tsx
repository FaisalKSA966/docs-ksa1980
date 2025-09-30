import { DocsContent } from "@/components/docs-content"
import { Card } from "@/components/ui/card"

export default function PrefixCommandsPage() {
  return (
    <DocsContent title="Prefix Commands" description="Quick reference for traditional prefix-based commands">
      <p className="text-lg text-muted-foreground">
        Prefix commands provide quick access to common ticket operations. The default prefix is <code>!</code> but can
        be customized in the configuration.
      </p>

      <h2>!close [reason]</h2>
      <p>Quickly close the current ticket with an optional reason.</p>

      <div className="bg-muted/50 p-4 rounded-lg border space-y-2">
        <p className="font-semibold">Examples:</p>
        <code className="block text-sm">!close</code>
        <code className="block text-sm">!close Issue resolved</code>
        <code className="block text-sm">!close User request</code>
        <p className="text-sm text-muted-foreground mt-2">
          The ticket will be closed, a transcript will be generated, and the channel will be deleted after 5 seconds.
        </p>
      </div>

      <h2>!add @user</h2>
      <p>Add a user to the current ticket.</p>

      <div className="bg-muted/50 p-4 rounded-lg border space-y-2">
        <p className="font-semibold">Examples:</p>
        <code className="block text-sm">!add @username</code>
        <code className="block text-sm">!add @JohnDoe</code>
        <p className="text-sm text-muted-foreground mt-2">
          The mentioned user will be granted access to view and send messages in the ticket channel.
        </p>
      </div>

      <h2>!remove @user</h2>
      <p>Remove a user from the current ticket.</p>

      <div className="bg-muted/50 p-4 rounded-lg border space-y-2">
        <p className="font-semibold">Examples:</p>
        <code className="block text-sm">!remove @username</code>
        <code className="block text-sm">!remove @JohnDoe</code>
        <p className="text-sm text-muted-foreground mt-2">
          The mentioned user will lose access to the ticket channel immediately.
        </p>
      </div>

      <h2>!rename [name]</h2>
      <p>Rename the current ticket channel.</p>

      <div className="bg-muted/50 p-4 rounded-lg border space-y-2">
        <p className="font-semibold">Examples:</p>
        <code className="block text-sm">!rename billing-issue</code>
        <code className="block text-sm">!rename urgent-bug-report</code>
        <p className="text-sm text-muted-foreground mt-2">
          The channel name will be updated to help organize and identify tickets more easily.
        </p>
      </div>

      <h2>!claim</h2>
      <p>Claim the ticket and assign it to yourself.</p>

      <div className="bg-muted/50 p-4 rounded-lg border space-y-2">
        <p className="font-semibold">Usage:</p>
        <code className="text-sm block">!claim</code>
        <p className="text-sm text-muted-foreground mt-2">
          Assigns the ticket to you and notifies the ticket creator that you're handling their request.
        </p>
      </div>

      <h2>!transcript</h2>
      <p>Generate and send a transcript of the current ticket.</p>

      <div className="bg-muted/50 p-4 rounded-lg border space-y-2">
        <p className="font-semibold">Usage:</p>
        <code className="text-sm block">!transcript</code>
        <p className="text-sm text-muted-foreground mt-2">
          Creates a text file containing all messages in the ticket and sends it to the channel.
        </p>
      </div>

      <h2>Command Aliases</h2>

      <p>Many commands have shorter aliases for faster typing:</p>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b">
              <th className="text-left p-3">Command</th>
              <th className="text-left p-3">Aliases</th>
              <th className="text-left p-3">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="p-3 font-mono text-sm">!close</td>
              <td className="p-3 font-mono text-sm">!c, !end</td>
              <td className="p-3 text-sm">Close the ticket</td>
            </tr>
            <tr className="border-b">
              <td className="p-3 font-mono text-sm">!add</td>
              <td className="p-3 font-mono text-sm">!a, !invite</td>
              <td className="p-3 text-sm">Add user to ticket</td>
            </tr>
            <tr className="border-b">
              <td className="p-3 font-mono text-sm">!remove</td>
              <td className="p-3 font-mono text-sm">!r, !kick</td>
              <td className="p-3 text-sm">Remove user from ticket</td>
            </tr>
            <tr className="border-b">
              <td className="p-3 font-mono text-sm">!rename</td>
              <td className="p-3 font-mono text-sm">!rn</td>
              <td className="p-3 text-sm">Rename ticket channel</td>
            </tr>
            <tr className="border-b">
              <td className="p-3 font-mono text-sm">!transcript</td>
              <td className="p-3 font-mono text-sm">!t, !log</td>
              <td className="p-3 text-sm">Generate transcript</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Command Permissions</h2>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b">
              <th className="text-left p-3">Command</th>
              <th className="text-left p-3">Required Role</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="p-3 font-mono text-sm">!close</td>
              <td className="p-3 text-sm">Support Team+</td>
            </tr>
            <tr className="border-b">
              <td className="p-3 font-mono text-sm">!add</td>
              <td className="p-3 text-sm">Moderator+</td>
            </tr>
            <tr className="border-b">
              <td className="p-3 font-mono text-sm">!remove</td>
              <td className="p-3 text-sm">Moderator+</td>
            </tr>
            <tr className="border-b">
              <td className="p-3 font-mono text-sm">!rename</td>
              <td className="p-3 text-sm">Moderator+</td>
            </tr>
            <tr className="border-b">
              <td className="p-3 font-mono text-sm">!claim</td>
              <td className="p-3 text-sm">Support Team+</td>
            </tr>
            <tr className="border-b">
              <td className="p-3 font-mono text-sm">!transcript</td>
              <td className="p-3 text-sm">Support Team+</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Card className="p-4 bg-blue-500/10 border-blue-500/20 mt-6">
        <p className="text-sm">
          <strong>💡 Tip:</strong> Prefix commands are faster for experienced staff members, while slash commands
          provide better discoverability and validation for new users.
        </p>
      </Card>
    </DocsContent>
  )
}
