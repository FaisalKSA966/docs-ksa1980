import { DocsLayout } from "@/components/docs-layout"
import { arNavigation } from "@/lib/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { 
  Globe, 
  Shield, 
  Zap, 
  Settings,
  CheckCircle,
  AlertTriangle,
  Info,
  Code,
  Lock,
  Activity,
  Monitor
} from "lucide-react"

export default function DeploymentNginx() {
  return (
    <DocsLayout navigation={arNavigation} lang="ar">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Globe className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold">إعداد Nginx</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            دليل شامل لإعداد Nginx كبروكسي عكسي للموقع
          </p>
        </div>

        {/* Nginx Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5" />
                البروكسي العكسي
              </CardTitle>
              <CardDescription>
                توجيه الطلبات للتطبيقات
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm">HTTP</span>
                  <Badge variant="default">Port 80</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">HTTPS</span>
                  <Badge variant="default">Port 443</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Load Balance</span>
                  <Badge variant="outline">مفعل</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                الأمان
              </CardTitle>
              <CardDescription>
                حماية وتحسين الأمان
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm">SSL/TLS</span>
                  <Badge variant="default">مفعل</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Rate Limiting</span>
                  <Badge variant="outline">مفعل</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Headers</span>
                  <Badge variant="outline">مفعل</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5" />
                الأداء
              </CardTitle>
              <CardDescription>
                تحسين السرعة والأداء
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Gzip</span>
                  <Badge variant="default">مفعل</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Caching</span>
                  <Badge variant="outline">مفعل</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Compression</span>
                  <Badge variant="outline">مفعل</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Monitor className="h-5 w-5" />
                المراقبة
              </CardTitle>
              <CardDescription>
                مراقبة الأداء والحالة
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Access Logs</span>
                  <Badge variant="default">مفعل</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Error Logs</span>
                  <Badge variant="default">مفعل</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Status</span>
                  <Badge variant="outline">مفعل</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Nginx Installation */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5" />
              تثبيت Nginx
            </CardTitle>
            <CardDescription>
              خطوات تثبيت وإعداد Nginx
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-medium">تثبيت Nginx</h4>
                <div className="bg-muted p-4 rounded-lg">
                  <pre className="text-sm overflow-x-auto">
{`# Ubuntu/Debian
sudo apt update
sudo apt install nginx -y

# CentOS/RHEL
sudo yum install nginx -y

# تشغيل Nginx
sudo systemctl start nginx
sudo systemctl enable nginx

# التحقق من الحالة
sudo systemctl status nginx`}
                  </pre>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium">فتح المنافذ</h4>
                <div className="bg-muted p-4 rounded-lg">
                  <pre className="text-sm overflow-x-auto">
{`# Ubuntu (UFW)
sudo ufw allow 'Nginx Full'
sudo ufw allow OpenSSH
sudo ufw enable

# CentOS (Firewalld)
sudo firewall-cmd --permanent --add-service=http
sudo firewall-cmd --permanent --add-service=https
sudo firewall-cmd --reload`}
                  </pre>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Nginx Configuration */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="h-5 w-5" />
              تكوين Nginx
            </CardTitle>
            <CardDescription>
              إعداد Nginx كبروكسي عكسي للموقع
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium">الملف: /etc/nginx/sites-available/ksa1980.lol</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`# إعادة توجيه HTTP إلى HTTPS
server {
    listen 80;
    server_name ksa1980.lol www.ksa1980.lol;
    return 301 https://$server_name$request_uri;
}

# تكوين HTTPS الرئيسي
server {
    listen 443 ssl http2;
    server_name ksa1980.lol www.ksa1980.lol;

    # شهادات SSL
    ssl_certificate /etc/letsencrypt/live/ksa1980.lol/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/ksa1980.lol/privkey.pem;

    # إعدادات SSL
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers ECDHE-RSA-AES256-GCM-SHA512:DHE-RSA-AES256-GCM-SHA512:ECDHE-RSA-AES256-GCM-SHA384:DHE-RSA-AES256-GCM-SHA384;
    ssl_prefer_server_ciphers off;
    ssl_session_cache shared:SSL:10m;
    ssl_session_timeout 10m;

    # أمان إضافي
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
    add_header X-Frame-Options DENY always;
    add_header X-Content-Type-Options nosniff always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;

    # تحديد معدل الطلبات
    limit_req_zone $binary_remote_addr zone=api:10m rate=10r/s;
    limit_req_zone $binary_remote_addr zone=login:10m rate=1r/s;

    # ضغط الملفات
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_proxied any;
    gzip_comp_level 6;
    gzip_types
        text/plain
        text/css
        text/xml
        text/javascript
        application/json
        application/javascript
        application/xml+rss
        application/atom+xml
        image/svg+xml;

    # التخزين المؤقت
    location ~* \\.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
        access_log off;
    }

    # API endpoints
    location /api/ {
        limit_req zone=api burst=20 nodelay;
        
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
        proxy_read_timeout 300s;
        proxy_connect_timeout 75s;
    }

    # صفحات المصادقة
    location /auth/ {
        limit_req zone=login burst=5 nodelay;
        
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

    # الموقع الرئيسي
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
        proxy_read_timeout 300s;
        proxy_connect_timeout 75s;
    }

    # منع الوصول للملفات الحساسة
    location ~ /\\. {
        deny all;
        access_log off;
        log_not_found off;
    }

    # منع الوصول لملفات النسخ الاحتياطية
    location ~* \\.(bak|backup|old|orig|save|swp|tmp)$ {
        deny all;
        access_log off;
        log_not_found off;
    }

    # سجلات الوصول
    access_log /var/log/nginx/ksa1980.lol.access.log;
    error_log /var/log/nginx/ksa1980.lol.error.log;
}`}
                </pre>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">تفعيل التكوين</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`# إنشاء رابط رمزي
sudo ln -s /etc/nginx/sites-available/ksa1980.lol /etc/nginx/sites-enabled/

# إزالة التكوين الافتراضي
sudo rm /etc/nginx/sites-enabled/default

# فحص التكوين
sudo nginx -t

# إعادة تحميل Nginx
sudo systemctl reload nginx`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* SSL Configuration */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lock className="h-5 w-5" />
              تكوين SSL
            </CardTitle>
            <CardDescription>
              إعداد شهادة SSL باستخدام Let's Encrypt
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-medium">تثبيت Certbot</h4>
                <div className="bg-muted p-4 rounded-lg">
                  <pre className="text-sm overflow-x-auto">
{`# Ubuntu/Debian
sudo apt install certbot python3-certbot-nginx -y

# CentOS/RHEL
sudo yum install certbot python3-certbot-nginx -y`}
                  </pre>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium">الحصول على شهادة SSL</h4>
                <div className="bg-muted p-4 rounded-lg">
                  <pre className="text-sm overflow-x-auto">
{`# الحصول على شهادة SSL
sudo certbot --nginx -d ksa1980.lol -d www.ksa1980.lol

# سيطلب منك:
# - البريد الإلكتروني
# - الموافقة على الشروط
# - اختيار إعادة توجيه HTTP إلى HTTPS`}
                  </pre>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium">إعداد التجديد التلقائي</h4>
                <div className="bg-muted p-4 rounded-lg">
                  <pre className="text-sm overflow-x-auto">
{`# إضافة إلى Crontab
sudo crontab -e

# أضف السطر التالي:
0 12 * * * /usr/bin/certbot renew --quiet

# أو استخدام systemd timer
sudo systemctl enable certbot.timer
sudo systemctl start certbot.timer`}
                  </pre>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Performance Optimization */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5" />
              تحسين الأداء
            </CardTitle>
            <CardDescription>
              إعدادات تحسين الأداء والسرعة
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium">الملف: /etc/nginx/nginx.conf</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`user www-data;
worker_processes auto;
pid /run/nginx.pid;
include /etc/nginx/modules-enabled/*.conf;

events {
    worker_connections 1024;
    use epoll;
    multi_accept on;
}

http {
    # إعدادات أساسية
    sendfile on;
    tcp_nopush on;
    tcp_nodelay on;
    keepalive_timeout 65;
    types_hash_max_size 2048;
    server_tokens off;

    # MIME types
    include /etc/nginx/mime.types;
    default_type application/octet-stream;

    # إعدادات السجلات
    log_format main '$remote_addr - $remote_user [$time_local] "$request" '
                    '$status $body_bytes_sent "$http_referer" '
                    '"$http_user_agent" "$http_x_forwarded_for"';

    access_log /var/log/nginx/access.log main;
    error_log /var/log/nginx/error.log;

    # إعدادات الضغط
    gzip on;
    gzip_vary on;
    gzip_proxied any;
    gzip_comp_level 6;
    gzip_types
        text/plain
        text/css
        text/xml
        text/javascript
        application/json
        application/javascript
        application/xml+rss
        application/atom+xml
        image/svg+xml;

    # إعدادات التخزين المؤقت
    open_file_cache max=1000 inactive=20s;
    open_file_cache_valid 30s;
    open_file_cache_min_uses 2;
    open_file_cache_errors on;

    # إعدادات الحدود
    client_max_body_size 10M;
    client_body_buffer_size 128k;
    client_header_buffer_size 1k;
    large_client_header_buffers 4 4k;

    # إعدادات المهلة الزمنية
    client_body_timeout 12;
    client_header_timeout 12;
    keepalive_timeout 15;
    send_timeout 10;

    # تضمين ملفات التكوين
    include /etc/nginx/conf.d/*.conf;
    include /etc/nginx/sites-enabled/*;
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
              تكوين الأمان
            </CardTitle>
            <CardDescription>
              إعدادات الأمان والحماية
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium">الملف: /etc/nginx/conf.d/security.conf</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`# منع الوصول للملفات الحساسة
location ~ /\\.(ht|htaccess|htpasswd|ini|log|sh|sql|conf)$ {
    deny all;
    access_log off;
    log_not_found off;
}

# منع الوصول لملفات النسخ الاحتياطية
location ~* \\.(bak|backup|old|orig|save|swp|tmp)$ {
    deny all;
    access_log off;
    log_not_found off;
}

# منع الوصول لمجلدات النظام
location ~ ^/(\\.git|\\.svn|\\.hg|CVS|RCS|SCCS|_darcs|_MTN|_sgbak|_backup|_temp|_tmp|_old|_orig|_save|_swp|_tmp)$ {
    deny all;
    access_log off;
    log_not_found off;
}

# منع الوصول لملفات PHP
location ~ \\.php$ {
    deny all;
    access_log off;
    log_not_found off;
}

# تحديد معدل الطلبات
limit_req_zone $binary_remote_addr zone=login:10m rate=1r/s;
limit_req_zone $binary_remote_addr zone=api:10m rate=10r/s;
limit_req_zone $binary_remote_addr zone=general:10m rate=30r/s;

# تحديد عدد الاتصالات
limit_conn_zone $binary_remote_addr zone=conn_limit_per_ip:10m;

# أمان إضافي
add_header X-Frame-Options "SAMEORIGIN" always;
add_header X-XSS-Protection "1; mode=block" always;
add_header X-Content-Type-Options "nosniff" always;
add_header Referrer-Policy "no-referrer-when-downgrade" always;
add_header Content-Security-Policy "default-src 'self' http: https: data: blob: 'unsafe-inline'" always;

# منع الوصول للمنافذ غير المصرح بها
if ($request_method !~ ^(GET|HEAD|POST|PUT|DELETE|OPTIONS)$ ) {
    return 405;
}

# منع الوصول للمتصفحات القديمة
if ($http_user_agent ~* (bot|crawler|spider|scraper)) {
    return 403;
}`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Monitoring and Logs */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5" />
              المراقبة والسجلات
            </CardTitle>
            <CardDescription>
              إعداد مراقبة Nginx وإدارة السجلات
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium">إعداد Logrotate</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`# إنشاء ملف Logrotate لـ Nginx
sudo nano /etc/logrotate.d/nginx

# محتوى الملف:
/var/log/nginx/*.log {
    daily
    missingok
    rotate 52
    compress
    delaycompress
    notifempty
    create 640 nginx adm
    sharedscripts
    prerotate
        if [ -d /etc/logrotate.d/httpd-prerotate ]; then \\
            run-parts /etc/logrotate.d/httpd-prerotate; \\
        fi \\
    endscript
    postrotate
        invoke-rc.d nginx rotate >/dev/null 2>&1
    endscript
}`}
                </pre>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">سكريبت مراقبة Nginx</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`#!/bin/bash
# إنشاء سكريبت مراقبة Nginx
nano /opt/ticket-system/monitor-nginx.sh

# محتوى السكريبت:
#!/bin/bash

echo "📊 مراقبة حالة Nginx"
echo "===================="

# فحص حالة Nginx
if systemctl is-active --quiet nginx; then
    echo "✅ Nginx يعمل بشكل طبيعي"
else
    echo "❌ Nginx متوقف"
    exit 1
fi

# فحص التكوين
if nginx -t > /dev/null 2>&1; then
    echo "✅ تكوين Nginx صحيح"
else
    echo "❌ خطأ في تكوين Nginx"
    nginx -t
fi

# فحص المنافذ
echo ""
echo "🔌 المنافذ المفتوحة:"
netstat -tulpn | grep nginx

# فحص السجلات
echo ""
echo "📝 آخر 10 أخطاء:"
tail -10 /var/log/nginx/error.log

# فحص الإحصائيات
echo ""
echo "📈 إحصائيات الاتصالات:"
ss -tuln | grep :80
ss -tuln | grep :443

# جعل السكريبت قابل للتنفيذ
chmod +x /opt/ticket-system/monitor-nginx.sh`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Troubleshooting */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5" />
              استكشاف الأخطاء
            </CardTitle>
            <CardDescription>
              حل المشاكل الشائعة في Nginx
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium">مشاكل شائعة</h4>
              <div className="space-y-3">
                <div className="space-y-2">
                  <h5 className="font-medium text-sm">خطأ في التكوين</h5>
                  <div className="bg-muted p-3 rounded-lg">
                    <pre className="text-xs overflow-x-auto">
{`# فحص التكوين
sudo nginx -t

# عرض تفاصيل الخطأ
sudo nginx -T

# إعادة تحميل التكوين
sudo systemctl reload nginx`}
                    </pre>
                  </div>
                </div>

                <div className="space-y-2">
                  <h5 className="font-medium text-sm">مشكلة في SSL</h5>
                  <div className="bg-muted p-3 rounded-lg">
                    <pre className="text-xs overflow-x-auto">
{`# فحص شهادة SSL
sudo certbot certificates

# تجديد الشهادة
sudo certbot renew

# فحص صلاحيات الملفات
sudo chmod 644 /etc/letsencrypt/live/ksa1980.lol/fullchain.pem
sudo chmod 600 /etc/letsencrypt/live/ksa1980.lol/privkey.pem`}
                    </pre>
                  </div>
                </div>

                <div className="space-y-2">
                  <h5 className="font-medium text-sm">مشكلة في البروكسي</h5>
                  <div className="bg-muted p-3 rounded-lg">
                    <pre className="text-xs overflow-x-auto">
{`# فحص حالة التطبيق
pm2 status

# فحص المنافذ
netstat -tulpn | grep :3000

# فحص السجلات
sudo tail -f /var/log/nginx/error.log`}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Best Practices */}
        <Alert>
          <Info className="h-4 w-4" />
          <AlertDescription>
            <strong>أفضل الممارسات:</strong> استخدم HTTPS دائماً. 
            راقب السجلات بانتظام. حدث Nginx بانتظام. 
            استخدم Rate Limiting لحماية من الهجمات.
          </AlertDescription>
        </Alert>
      </div>
    </DocsLayout>
  )
}
