import { DocsContent } from "@/components/docs-content"
import { CodeBlock } from "@/components/code-block"

export default function EventsPage() {
  return (
    <DocsContent title="Bot Events" description="Understanding Discord bot event handlers and their implementations">
      <p className="text-lg text-muted-foreground">
        The bot uses Discord.js event handlers to respond to various Discord events. This page documents all the key
        events and their implementations.
      </p>

      <h2>ready Event</h2>

      <p>Fired when the bot successfully connects to Discord:</p>

      <CodeBlock
        language="javascript"
        code={`// events/ready.js
module.exports = {
  name: 'ready',
  once: true,
  async execute(client) {
    console.log(\`✅ Logged in as \${client.user.tag}\`);
    
    // Set bot status
    client.user.setActivity('tickets', { type: ActivityType.Watching });
    
    // Sync database
    await syncDatabase();
    
    // Register slash commands
    await registerCommands(client);
    
    console.log('🎫 Ticket system ready!');
  }
};`}
      />

      <h2>interactionCreate Event</h2>

      <p>Handles all interaction types (commands, buttons, select menus, modals):</p>

      <CodeBlock
        language="javascript"
        code={`// events/interactionCreate.js
module.exports = {
  name: 'interactionCreate',
  async execute(interaction) {
    // Handle slash commands
    if (interaction.isChatInputCommand()) {
      const command = interaction.client.commands.get(interaction.commandName);
      if (!command) return;

      try {
        await command.execute(interaction);
      } catch (error) {
        console.error(error);
        await interaction.reply({
          content: '❌ An error occurred while executing this command',
          ephemeral: true
        });
      }
    }

    // Handle button interactions
    if (interaction.isButton()) {
      const handler = interaction.client.buttonHandlers.get(interaction.customId);
      if (handler) await handler.execute(interaction);
    }

    // Handle select menu interactions
    if (interaction.isStringSelectMenu()) {
      const handler = interaction.client.selectMenuHandlers.get(interaction.customId);
      if (handler) await handler.execute(interaction);
    }

    // Handle modal submissions
    if (interaction.isModalSubmit()) {
      const handler = interaction.client.modalHandlers.get(interaction.customId);
      if (handler) await handler.execute(interaction);
    }
  }
};`}
      />

      <h2>messageCreate Event</h2>

      <p>Handles prefix commands and ticket message logging:</p>

      <CodeBlock
        language="javascript"
        code={`// events/messageCreate.js
module.exports = {
  name: 'messageCreate',
  async execute(message) {
    if (message.author.bot) return;

    // Check if message is in a ticket channel
    const ticket = await Ticket.findOne({
      where: { channelId: message.channel.id }
    });

    if (ticket) {
      // Log message to database
      await TicketMessage.create({
        ticketId: ticket.id,
        userId: message.author.id,
        content: message.content,
        attachments: message.attachments.map(a => a.url),
        timestamp: message.createdAt
      });
    }

    // Handle prefix commands
    const prefix = process.env.PREFIX || '!';
    if (!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    const command = message.client.commands.get(commandName);
    if (!command) return;

    try {
      await command.execute(message, args);
    } catch (error) {
      console.error(error);
      await message.reply('❌ An error occurred while executing this command');
    }
  }
};`}
      />

      <h2>guildMemberAdd Event</h2>

      <p>Welcomes new members and assigns default roles:</p>

      <CodeBlock
        language="javascript"
        code={`// events/guildMemberAdd.js
module.exports = {
  name: 'guildMemberAdd',
  async execute(member) {
    // Send welcome message
    const welcomeChannel = member.guild.channels.cache.find(
      ch => ch.name === 'welcome'
    );

    if (welcomeChannel) {
      const embed = new EmbedBuilder()
        .setTitle(\`Welcome to \${member.guild.name}! 👋\`)
        .setDescription(\`Welcome \${member}! Create a ticket if you need help.\`)
        .setColor('#5865F2')
        .setThumbnail(member.user.displayAvatarURL());

      await welcomeChannel.send({ embeds: [embed] });
    }

    // Assign default role
    const defaultRole = member.guild.roles.cache.find(r => r.name === 'Member');
    if (defaultRole) {
      await member.roles.add(defaultRole);
    }
  }
};`}
      />

      <h2>channelDelete Event</h2>

      <p>Handles ticket channel deletion and cleanup:</p>

      <CodeBlock
        language="javascript"
        code={`// events/channelDelete.js
module.exports = {
  name: 'channelDelete',
  async execute(channel) {
    // Check if deleted channel was a ticket
    const ticket = await Ticket.findOne({
      where: { channelId: channel.id }
    });

    if (ticket && ticket.status !== 'closed') {
      // Mark ticket as force-closed
      await ticket.update({
        status: 'closed',
        closedAt: new Date(),
        closeReason: 'Channel manually deleted'
      });

      // Log to audit channel
      const logChannel = channel.guild.channels.cache.find(
        ch => ch.name === 'ticket-logs'
      );

      if (logChannel) {
        await logChannel.send(
          \`⚠️ Ticket channel \${channel.name} was manually deleted\`
        );
      }
    }
  }
};`}
      />

      <h2>Event Handler Structure</h2>

      <p>The bot uses a modular event handler system:</p>

      <CodeBlock
        language="javascript"
        code={`// index.js - Event Handler Loader
const fs = require('fs');
const path = require('path');

// Load all event files
const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
  const filePath = path.join(eventsPath, file);
  const event = require(filePath);

  if (event.once) {
    client.once(event.name, (...args) => event.execute(...args));
  } else {
    client.on(event.name, (...args) => event.execute(...args));
  }

  console.log(\`✅ Loaded event: \${event.name}\`);
}`}
      />

      <h2>Custom Events</h2>

      <p>The bot also emits custom events for internal use:</p>

      <CodeBlock
        language="javascript"
        code={`// Custom event emission
client.emit('ticketCreated', {
  ticket: ticketData,
  user: interaction.user,
  channel: ticketChannel
});

// Custom event listener
client.on('ticketCreated', async (data) => {
  // Update statistics
  await updateStats(data.ticket);
  
  // Notify staff
  await notifyStaff(data);
  
  // Log to database
  await logTicketCreation(data);
});`}
      />
    </DocsContent>
  )
}
