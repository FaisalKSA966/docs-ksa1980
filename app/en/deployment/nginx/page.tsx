"use client"

import { DocsLayout } from "@/components/docs-layout"
import { enNavigation } from "@/lib/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { 
  Globe,
  Shield,
  Settings,
  Lock,
  Info
} from "lucide-react"

export default function DeploymentNginx() {
  return (
    <DocsLayout navigation={enNavigation} lang="en">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Globe className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold">Nginx Configuration</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Guide to configuring Nginx as a reverse proxy
          </p>
        </div>

        {/* Basic Configuration */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5" />
              Basic Configuration
            </CardTitle>
            <CardDescription>
              Basic Nginx configuration for the application
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium">Website Configuration</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`# /etc/nginx/sites-available/ksa1980.lol
server {
    listen 80;
    listen [::]:80;
    server_name ksa1980.lol www.ksa1980.lol;

    # Redirect to HTTPS
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name ksa1980.lol www.ksa1980.lol;

    # SSL Configuration
    ssl_certificate /etc/letsencrypt/live/ksa1980.lol/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/ksa1980.lol/privkey.pem;
    ssl_trusted_certificate /etc/letsencrypt/live/ksa1980.lol/chain.pem;

    # SSL Settings
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384;
    ssl_prefer_server_ciphers off;
    ssl_session_timeout 1d;
    ssl_session_cache shared:SSL:50m;
    ssl_session_tickets off;
    ssl_stapling on;
    ssl_stapling_verify on;
    resolver 8.8.8.8 8.8.4.4 valid=300s;
    resolver_timeout 5s;

    # Security Headers
    add_header Strict-Transport-Security "max-age=63072000" always;
    add_header X-Frame-Options DENY;
    add_header X-Content-Type-Options nosniff;
    add_header X-XSS-Protection "1; mode=block";
    add_header Referrer-Policy "strict-origin-when-cross-origin";

    # Root Directory
    root /var/www/ksa1980.lol;
    index index.html;

    # Proxy Settings
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    # Static Files
    location /_next/static {
        alias /var/www/ksa1980.lol/.next/static;
        expires 365d;
        access_log off;
    }

    # Gzip Settings
    gzip on;
    gzip_vary on;
    gzip_proxied any;
    gzip_comp_level 6;
    gzip_types text/plain text/css text/xml application/json application/javascript application/xml+rss application/atom+xml image/svg+xml;
}`}
                </pre>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">API Configuration</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`# /etc/nginx/sites-available/api.ksa1980.lol
server {
    listen 80;
    listen [::]:80;
    server_name api.ksa1980.lol;

    # Redirect to HTTPS
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name api.ksa1980.lol;

    # SSL Configuration
    ssl_certificate /etc/letsencrypt/live/api.ksa1980.lol/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/api.ksa1980.lol/privkey.pem;
    ssl_trusted_certificate /etc/letsencrypt/live/api.ksa1980.lol/chain.pem;

    # SSL Settings
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384;
    ssl_prefer_server_ciphers off;

    # Security Headers
    add_header Strict-Transport-Security "max-age=63072000" always;
    add_header X-Frame-Options DENY;
    add_header X-Content-Type-Options nosniff;
    add_header X-XSS-Protection "1; mode=block";
    add_header Referrer-Policy "strict-origin-when-cross-origin";

    # Rate Limiting
    limit_req_zone $binary_remote_addr zone=api_limit:10m rate=10r/s;
    limit_req zone=api_limit burst=20 nodelay;

    # Proxy Settings
    location / {
        proxy_pass http://localhost:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;

        # CORS Headers
        add_header 'Access-Control-Allow-Origin' 'https://ksa1980.lol' always;
        add_header 'Access-Control-Allow-Methods' 'GET, POST, PUT, DELETE, OPTIONS' always;
        add_header 'Access-Control-Allow-Headers' 'Authorization, Content-Type' always;
        add_header 'Access-Control-Allow-Credentials' 'true' always;

        if ($request_method = 'OPTIONS') {
            add_header 'Access-Control-Allow-Origin' 'https://ksa1980.lol' always;
            add_header 'Access-Control-Allow-Methods' 'GET, POST, PUT, DELETE, OPTIONS' always;
            add_header 'Access-Control-Allow-Headers' 'Authorization, Content-Type' always;
            add_header 'Access-Control-Allow-Credentials' 'true' always;
            add_header 'Content-Type' 'text/plain charset=UTF-8';
            add_header 'Content-Length' 0;
            return 204;
        }
    }
}`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Security Configuration */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Security Configuration
            </CardTitle>
            <CardDescription>
              Additional security settings for Nginx
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium">SSL Configuration</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`# /etc/nginx/conf.d/ssl.conf
ssl_protocols TLSv1.2 TLSv1.3;
ssl_prefer_server_ciphers off;

ssl_ciphers ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384;

ssl_session_timeout 1d;
ssl_session_cache shared:SSL:50m;
ssl_session_tickets off;

ssl_stapling on;
ssl_stapling_verify on;
resolver 8.8.8.8 8.8.4.4 valid=300s;
resolver_timeout 5s;

# HSTS (uncomment if you're sure)
# add_header Strict-Transport-Security "max-age=63072000" always;`}
                </pre>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Security Headers</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`# /etc/nginx/conf.d/security.conf
add_header X-Frame-Options DENY;
add_header X-Content-Type-Options nosniff;
add_header X-XSS-Protection "1; mode=block";
add_header Referrer-Policy "strict-origin-when-cross-origin";
add_header Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https://api.ksa1980.lol;";

# Disable server tokens
server_tokens off;

# File upload limits
client_max_body_size 10M;
client_body_buffer_size 128k;

# Timeouts
client_body_timeout 12;
client_header_timeout 12;
keepalive_timeout 15;
send_timeout 10;`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Performance Configuration */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5" />
              Performance Configuration
            </CardTitle>
            <CardDescription>
              Performance optimization settings
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium">Caching Configuration</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`# /etc/nginx/conf.d/cache.conf
# Proxy cache settings
proxy_cache_path /var/cache/nginx levels=1:2 keys_zone=my_cache:10m max_size=10g inactive=60m use_temp_path=off;

# Browser cache settings
location ~* \\.(jpg|jpeg|png|gif|ico|css|js)$ {
    expires 365d;
    add_header Cache-Control "public, no-transform";
}

# Gzip settings
gzip on;
gzip_vary on;
gzip_proxied any;
gzip_comp_level 6;
gzip_buffers 16 8k;
gzip_http_version 1.1;
gzip_min_length 256;
gzip_types
    application/atom+xml
    application/javascript
    application/json
    application/ld+json
    application/manifest+json
    application/rss+xml
    application/vnd.geo+json
    application/vnd.ms-fontobject
    application/x-font-ttf
    application/x-web-app-manifest+json
    application/xhtml+xml
    application/xml
    font/opentype
    image/bmp
    image/svg+xml
    image/x-icon
    text/cache-manifest
    text/css
    text/plain
    text/vcard
    text/vnd.rim.location.xloc
    text/vtt
    text/x-component
    text/x-cross-domain-policy;`}
                </pre>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Worker Configuration</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`# /etc/nginx/nginx.conf
worker_processes auto;
worker_rlimit_nofile 65535;

events {
    multi_accept on;
    worker_connections 65535;
    use epoll;
}

http {
    # Buffer size for POST submissions
    client_body_buffer_size 10K;
    client_max_body_size 8m;

    # Buffer size for Headers
    client_header_buffer_size 1k;

    # Max time to receive client headers/body
    client_body_timeout 12;
    client_header_timeout 12;

    # Max time to keep a connection open
    keepalive_timeout 15;

    # Max time for the client accept/receive a response
    send_timeout 10;

    # Skip buffering for static files
    sendfile on;

    # Optimize sendfile packets
    tcp_nopush on;
    tcp_nodelay on;
}`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Best Practices */}
        <Alert>
          <Info className="h-4 w-4" />
          <AlertDescription>
            <strong>Best Practices:</strong> Always use HTTPS. 
            Enable HTTP/2. 
            Configure proper caching. 
            Implement rate limiting. 
            Use secure headers. 
            Monitor error logs.
          </AlertDescription>
        </Alert>
      </div>
    </DocsLayout>
  )
}
