"use client"

import { DocsLayout } from "@/components/docs-layout"
import { enNavigation } from "@/lib/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { 
  FileKey,
  Shield,
  Key,
  Lock,
  Info
} from "lucide-react"

export default function DeploymentEnv() {
  return (
    <DocsLayout navigation={enNavigation} lang="en">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <FileKey className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold">Environment Setup</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Guide to setting up environment variables and secrets
          </p>
        </div>

        {/* Environment Variables */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Key className="h-5 w-5" />
              Environment Variables
            </CardTitle>
            <CardDescription>
              Required environment variables for deployment
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium">Bot Environment Variables</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`# Discord Bot Configuration
DISCORD_TOKEN=your_bot_token
DISCORD_CLIENT_ID=your_client_id
DISCORD_CLIENT_SECRET=your_client_secret

# MongoDB Configuration
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database

# API Configuration
API_PORT=3000
API_URL=https://api.ksa1980.lol
API_SECRET=your_api_secret

# JWT Configuration
JWT_SECRET=your_jwt_secret
JWT_EXPIRY=24h

# Redis Configuration (Optional)
REDIS_URL=redis://username:password@host:port

# Logging Configuration
LOG_LEVEL=info
LOG_FORMAT=json`}
                </pre>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Website Environment Variables</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`# Next.js Configuration
NEXT_PUBLIC_API_URL=https://api.ksa1980.lol
NEXT_PUBLIC_WEBSITE_URL=https://ksa1980.lol

# Authentication Configuration
NEXTAUTH_URL=https://ksa1980.lol
NEXTAUTH_SECRET=your_nextauth_secret

# Discord OAuth Configuration
DISCORD_CLIENT_ID=your_client_id
DISCORD_CLIENT_SECRET=your_client_secret

# Analytics Configuration (Optional)
NEXT_PUBLIC_GA_ID=your_ga_id
NEXT_PUBLIC_POSTHOG_KEY=your_posthog_key

# Feature Flags
NEXT_PUBLIC_ENABLE_BETA_FEATURES=false
NEXT_PUBLIC_MAINTENANCE_MODE=false`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Secrets Management */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lock className="h-5 w-5" />
              Secrets Management
            </CardTitle>
            <CardDescription>
              How to manage and secure sensitive information
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium">Development Environment</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`# Create .env.local file
touch .env.local

# Add to .gitignore
echo ".env*" >> .gitignore

# Example .env.local
cat > .env.local << EOL
DISCORD_TOKEN=your_development_bot_token
MONGODB_URI=mongodb://localhost:27017/ticket_system
API_SECRET=development_secret
JWT_SECRET=development_jwt_secret
EOL`}
                </pre>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Production Environment</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`# Create production environment file
sudo mkdir -p /etc/ticket-system
sudo touch /etc/ticket-system/.env.production

# Set secure permissions
sudo chown www-data:www-data /etc/ticket-system/.env.production
sudo chmod 600 /etc/ticket-system/.env.production

# Add environment variables
sudo cat > /etc/ticket-system/.env.production << EOL
DISCORD_TOKEN=your_production_bot_token
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/production
API_SECRET=production_secret
JWT_SECRET=production_jwt_secret
EOL

# Link environment file
sudo ln -s /etc/ticket-system/.env.production /var/www/ticket-system/.env`}
                </pre>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Environment Validation</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`// Environment validation script
const requiredEnv = [
  'DISCORD_TOKEN',
  'DISCORD_CLIENT_ID',
  'DISCORD_CLIENT_SECRET',
  'MONGODB_URI',
  'API_SECRET',
  'JWT_SECRET'
];

function validateEnv() {
  const missing = [];
  
  for (const env of requiredEnv) {
    if (!process.env[env]) {
      missing.push(env);
    }
  }
  
  if (missing.length > 0) {
    throw new Error(
      'Missing required environment variables: ' + 
      missing.join(', ')
    );
  }
  
  // Validate MongoDB URI format
  if (!process.env.MONGODB_URI.startsWith('mongodb')) {
    throw new Error('Invalid MongoDB URI format');
  }
  
  // Validate JWT secret length
  if (process.env.JWT_SECRET.length < 32) {
    throw new Error('JWT_SECRET should be at least 32 characters');
  }
}

// Usage
try {
  validateEnv();
  console.log('Environment validation passed');
} catch (error) {
  console.error('Environment validation failed:', error.message);
  process.exit(1);
}`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Security Best Practices */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Security Best Practices
            </CardTitle>
            <CardDescription>
              Best practices for securing environment variables
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium">File Permissions</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`# Set correct ownership
sudo chown -R www-data:www-data /var/www/ticket-system

# Set correct permissions
sudo find /var/www/ticket-system -type f -exec chmod 644 {} \\;
sudo find /var/www/ticket-system -type d -exec chmod 755 {} \\;

# Set restrictive permissions for env files
sudo chmod 600 /var/www/ticket-system/.env*

# Set correct SELinux context (if applicable)
sudo chcon -R -t httpd_sys_content_t /var/www/ticket-system`}
                </pre>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Backup and Recovery</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`# Create backup script
cat > backup-env.sh << EOL
#!/bin/bash

# Set backup directory
BACKUP_DIR="/backup/env"
DATE=$(date +%Y%m%d_%H%M%S)

# Create backup directory
mkdir -p $BACKUP_DIR

# Backup environment files
tar -czf $BACKUP_DIR/env_backup_$DATE.tar.gz \\
    /etc/ticket-system/.env.production \\
    /var/www/ticket-system/.env*

# Encrypt backup
gpg -e -r admin@ksa1980.lol $BACKUP_DIR/env_backup_$DATE.tar.gz

# Remove unencrypted backup
rm $BACKUP_DIR/env_backup_$DATE.tar.gz

# Keep only last 7 days of backups
find $BACKUP_DIR -type f -mtime +7 -delete
EOL

# Set script permissions
chmod +x backup-env.sh

# Add to crontab
(crontab -l 2>/dev/null; echo "0 0 * * * /path/to/backup-env.sh") | crontab -`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Best Practices */}
        <Alert>
          <Info className="h-4 w-4" />
          <AlertDescription>
            <strong>Best Practices:</strong> Never commit secrets to version control. 
            Use different values for development and production. 
            Rotate secrets regularly. 
            Use secure storage solutions. 
            Implement proper access controls.
          </AlertDescription>
        </Alert>
      </div>
    </DocsLayout>
  )
}
