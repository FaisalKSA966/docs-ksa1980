import { DocsLayout } from "@/components/docs-layout"
import { enNavigation } from "@/lib/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { 
  Server,
  Shield,
  Terminal,
  Settings,
  Info,
  CheckCircle
} from "lucide-react"

export default function DeploymentServer() {
  return (
    <DocsLayout navigation={enNavigation} lang="en">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Server className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold">Server Setup</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Complete guide to setting up your server for deployment
          </p>
        </div>

        {/* Server Requirements */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5" />
              Server Requirements
            </CardTitle>
            <CardDescription>
              Minimum requirements for running the system
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium">Hardware Requirements</h4>
              <div className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">CPU: 2 cores minimum</span>
                  </div>
                  <p className="text-xs text-muted-foreground">4 cores recommended for better performance</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">RAM: 2GB minimum</span>
                  </div>
                  <p className="text-xs text-muted-foreground">4GB recommended for better performance</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Storage: 20GB minimum</span>
                  </div>
                  <p className="text-xs text-muted-foreground">SSD storage recommended for better performance</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Software Requirements</h4>
              <div className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Ubuntu 22.04 LTS or later</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Other Linux distributions may work but are not officially supported</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Node.js 18.x or later</span>
                  </div>
                  <p className="text-xs text-muted-foreground">LTS version recommended</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">MongoDB 6.0 or later</span>
                  </div>
                  <p className="text-xs text-muted-foreground">MongoDB Atlas recommended for production</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Initial Setup */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Terminal className="h-5 w-5" />
              Initial Setup
            </CardTitle>
            <CardDescription>
              Step-by-step server setup guide
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium">Update System</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`# Update package list
sudo apt update

# Upgrade installed packages
sudo apt upgrade -y

# Install essential tools
sudo apt install -y curl git build-essential`}
                </pre>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Install Node.js</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`# Add NodeSource repository
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -

# Install Node.js
sudo apt install -y nodejs

# Verify installation
node --version
npm --version

# Install PM2 globally
sudo npm install -g pm2`}
                </pre>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Install MongoDB</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`# Import MongoDB public key
curl -fsSL https://pgp.mongodb.com/server-6.0.asc | sudo gpg -o /usr/share/keyrings/mongodb-server-6.0.gpg --dearmor

# Add MongoDB repository
echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-6.0.gpg ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list

# Update package list
sudo apt update

# Install MongoDB
sudo apt install -y mongodb-org

# Start MongoDB service
sudo systemctl start mongod
sudo systemctl enable mongod

# Verify MongoDB status
sudo systemctl status mongod`}
                </pre>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Install Nginx</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`# Install Nginx
sudo apt install -y nginx

# Start Nginx service
sudo systemctl start nginx
sudo systemctl enable nginx

# Verify Nginx status
sudo systemctl status nginx

# Allow Nginx through firewall
sudo ufw allow 'Nginx Full'`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Security Setup */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Security Setup
            </CardTitle>
            <CardDescription>
              Essential security configurations
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium">Firewall Configuration</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`# Enable UFW
sudo ufw enable

# Allow SSH
sudo ufw allow ssh

# Allow HTTP/HTTPS
sudo ufw allow http
sudo ufw allow https

# Allow MongoDB (if needed)
sudo ufw allow 27017

# Check status
sudo ufw status`}
                </pre>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">SSH Configuration</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`# Edit SSH config
sudo nano /etc/ssh/sshd_config

# Recommended settings
Port 22
PermitRootLogin no
PasswordAuthentication no
PubkeyAuthentication yes
PermitEmptyPasswords no
X11Forwarding no
MaxAuthTries 3

# Restart SSH service
sudo systemctl restart sshd`}
                </pre>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">System Hardening</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`# Install security packages
sudo apt install -y unattended-upgrades fail2ban

# Configure automatic updates
sudo dpkg-reconfigure -plow unattended-upgrades

# Configure fail2ban
sudo cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.local
sudo nano /etc/fail2ban/jail.local

# Basic fail2ban settings
[DEFAULT]
bantime = 1h
findtime = 10m
maxretry = 5

[sshd]
enabled = true

# Start fail2ban
sudo systemctl start fail2ban
sudo systemctl enable fail2ban`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Monitoring Setup */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5" />
              Monitoring Setup
            </CardTitle>
            <CardDescription>
              Server monitoring configuration
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium">System Monitoring</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`# Install monitoring tools
sudo apt install -y htop netdata

# Configure netdata
sudo nano /etc/netdata/netdata.conf

# Basic netdata settings
[global]
  history = 3600
  update every = 1
  memory mode = dbengine

# Start netdata
sudo systemctl start netdata
sudo systemctl enable netdata

# Access dashboard
# http://your-server-ip:19999`}
                </pre>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Log Monitoring</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`# Install log monitoring tools
sudo apt install -y logwatch

# Configure logwatch
sudo nano /etc/logwatch/conf/logwatch.conf

# Basic logwatch settings
Output = mail
Format = html
MailTo = your-email@domain.com
Detail = Low

# Test logwatch
sudo logwatch --output stdout --format html --range today`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Best Practices */}
        <Alert>
          <Info className="h-4 w-4" />
          <AlertDescription>
            <strong>Best Practices:</strong> Keep system updated. 
            Use strong passwords. 
            Enable automatic security updates. 
            Monitor system resources. 
            Backup regularly.
          </AlertDescription>
        </Alert>
      </div>
    </DocsLayout>
  )
}
