import { DocsLayout } from "@/components/docs-layout"
import { enNavigation } from "@/lib/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { 
  Activity,
  Terminal,
  BarChart,
  Settings,
  Info
} from "lucide-react"

export default function DeploymentPm2() {
  return (
    <DocsLayout navigation={enNavigation} lang="en">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Activity className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold">PM2 Process Management</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Guide to managing your application with PM2
          </p>
        </div>

        {/* PM2 Installation */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Terminal className="h-5 w-5" />
              Installation
            </CardTitle>
            <CardDescription>
              Installing and configuring PM2
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium">Install PM2</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`# Install PM2 globally
npm install -g pm2

# Update PM2
npm install -g pm2@latest

# Install PM2 startup script
pm2 startup

# Install PM2 logrotate module
pm2 install pm2-logrotate

# Configure logrotate
pm2 set pm2-logrotate:max_size 10M
pm2 set pm2-logrotate:retain 7
pm2 set pm2-logrotate:compress true`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Process Configuration */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5" />
              Process Configuration
            </CardTitle>
            <CardDescription>
              Setting up process configuration files
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium">Discord Bot Configuration</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`// ecosystem.config.js
module.exports = {
  apps: [{
    name: 'discord-bot',
    script: 'dist/bot.js',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    },
    error_file: 'logs/bot-error.log',
    out_file: 'logs/bot-out.log',
    merge_logs: true,
    time: true
  }]
};

# Start bot process
pm2 start ecosystem.config.js

# Save process list
pm2 save`}
                </pre>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Website Configuration</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`// ecosystem.website.config.js
module.exports = {
  apps: [{
    name: 'website',
    script: 'node_modules/next/dist/bin/next',
    args: 'start',
    instances: 'max',
    exec_mode: 'cluster',
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    },
    error_file: 'logs/website-error.log',
    out_file: 'logs/website-out.log',
    merge_logs: true,
    time: true
  }]
};

# Start website process
pm2 start ecosystem.website.config.js

# Save process list
pm2 save`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Process Management */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5" />
              Process Management
            </CardTitle>
            <CardDescription>
              Common PM2 management commands
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium">Basic Commands</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`# List all processes
pm2 list

# Show process details
pm2 show discord-bot
pm2 show website

# Monitor processes
pm2 monit

# View logs
pm2 logs
pm2 logs discord-bot
pm2 logs website

# Restart processes
pm2 restart all
pm2 restart discord-bot
pm2 restart website

# Stop processes
pm2 stop all
pm2 stop discord-bot
pm2 stop website

# Delete processes
pm2 delete all
pm2 delete discord-bot
pm2 delete website

# Save process list
pm2 save

# Resurrect saved processes
pm2 resurrect`}
                </pre>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Update and Deployment</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`# Pull latest changes
git pull origin main

# Install dependencies
npm install

# Build application
npm run build

# Reload processes
pm2 reload all

# Zero-downtime reload
pm2 reload ecosystem.config.js --env production

# Update PM2
pm2 update

# Save new process list
pm2 save`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Monitoring */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart className="h-5 w-5" />
              Monitoring
            </CardTitle>
            <CardDescription>
              Process monitoring and logging
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium">PM2 Monitoring</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`# Install PM2 monitoring modules
pm2 install pm2-server-monit
pm2 install pm2-logrotate
pm2 install pm2-auto-pull

# Configure monitoring
pm2 set pm2-server-monit:drive / # Monitor root drive
pm2 set pm2-server-monit:interval 5 # Check every 5 seconds

# Configure auto-pull
pm2 set pm2-auto-pull:interval 30 # Pull every 30 minutes

# View monitoring dashboard
pm2 plus

# Monitor specific metrics
pm2 monit

# Generate startup script
pm2 startup

# Save monitoring configuration
pm2 save`}
                </pre>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Log Management</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`# View logs
pm2 logs # All logs
pm2 logs discord-bot # Bot logs
pm2 logs website # Website logs

# Clear logs
pm2 flush
pm2 flush discord-bot

# Configure log rotation
pm2 set pm2-logrotate:max_size 10M
pm2 set pm2-logrotate:retain 7
pm2 set pm2-logrotate:compress true
pm2 set pm2-logrotate:dateFormat YYYY-MM-DD_HH-mm-ss

# Configure log format
pm2 set pm2-logrotate:rotateModule true
pm2 set pm2-logrotate:workerInterval 30
pm2 set pm2-logrotate:rotateInterval '0 0 * * *'`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Best Practices */}
        <Alert>
          <Info className="h-4 w-4" />
          <AlertDescription>
            <strong>Best Practices:</strong> Use cluster mode for better performance. 
            Implement proper error handling. 
            Monitor memory usage. 
            Configure log rotation. 
            Use environment-specific configurations.
          </AlertDescription>
        </Alert>
      </div>
    </DocsLayout>
  )
}
