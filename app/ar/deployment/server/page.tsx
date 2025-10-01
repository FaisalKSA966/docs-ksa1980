import { DocsLayout } from "@/components/docs-layout"
import { arNavigation } from "@/lib/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { 
  Server, 
  Monitor, 
  HardDrive, 
  Cpu,
  CheckCircle,
  AlertTriangle,
  Info,
  Code,
  Terminal,
  Download,
  Upload,
  Shield
} from "lucide-react"

export default function DeploymentServer() {
  return (
    <DocsLayout navigation={arNavigation} lang="ar">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Server className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold">إعداد الخادم</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            دليل شامل لإعداد خادم الإنتاج لنظام إدارة التذاكر
          </p>
        </div>

        {/* Server Requirements */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">متطلبات الخادم</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Cpu className="h-5 w-5" />
                  المعالج
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">الحد الأدنى</span>
                    <Badge variant="outline">2 Core</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">الموصى به</span>
                    <Badge variant="default">4 Core</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">للإنتاج</span>
                    <Badge variant="destructive">8+ Core</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <HardDrive className="h-5 w-5" />
                  الذاكرة
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">الحد الأدنى</span>
                    <Badge variant="outline">2 GB</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">الموصى به</span>
                    <Badge variant="default">4 GB</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">للإنتاج</span>
                    <Badge variant="destructive">8+ GB</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Monitor className="h-5 w-5" />
                  التخزين
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">الحد الأدنى</span>
                    <Badge variant="outline">20 GB</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">الموصى به</span>
                    <Badge variant="default">50 GB</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">للإنتاج</span>
                    <Badge variant="destructive">100+ GB</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  نظام التشغيل
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Ubuntu</span>
                    <Badge variant="default">20.04+</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">CentOS</span>
                    <Badge variant="outline">8+</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Debian</span>
                    <Badge variant="outline">11+</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Initial Setup */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Terminal className="h-5 w-5" />
              الإعداد الأولي
            </CardTitle>
            <CardDescription>
              خطوات إعداد الخادم الأساسية
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-medium">1. تحديث النظام</h4>
                <div className="bg-muted p-4 rounded-lg">
                  <pre className="text-sm overflow-x-auto">
{`# Ubuntu/Debian
sudo apt update && sudo apt upgrade -y

# CentOS/RHEL
sudo yum update -y`}
                  </pre>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium">2. تثبيت Node.js</h4>
                <div className="bg-muted p-4 rounded-lg">
                  <pre className="text-sm overflow-x-auto">
{`# تثبيت Node.js 18
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# التحقق من الإصدار
node --version
npm --version`}
                  </pre>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium">3. تثبيت PM2</h4>
                <div className="bg-muted p-4 rounded-lg">
                  <pre className="text-sm overflow-x-auto">
{`# تثبيت PM2 عالمياً
sudo npm install -g pm2

# التحقق من التثبيت
pm2 --version`}
                  </pre>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium">4. تثبيت Nginx</h4>
                <div className="bg-muted p-4 rounded-lg">
                  <pre className="text-sm overflow-x-auto">
{`# Ubuntu/Debian
sudo apt install nginx -y

# CentOS/RHEL
sudo yum install nginx -y

# تشغيل Nginx
sudo systemctl start nginx
sudo systemctl enable nginx`}
                  </pre>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Firewall Configuration */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              إعداد الجدار الناري
            </CardTitle>
            <CardDescription>
              تكوين الجدار الناري لحماية الخادم
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-medium">إعداد UFW (Ubuntu)</h4>
                <div className="bg-muted p-4 rounded-lg">
                  <pre className="text-sm overflow-x-auto">
{`# تفعيل UFW
sudo ufw enable

# السماح بـ SSH
sudo ufw allow ssh

# السماح بـ HTTP
sudo ufw allow 80

# السماح بـ HTTPS
sudo ufw allow 443

# عرض القواعد
sudo ufw status`}
                  </pre>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium">إعداد Firewalld (CentOS)</h4>
                <div className="bg-muted p-4 rounded-lg">
                  <pre className="text-sm overflow-x-auto">
{`# تشغيل Firewalld
sudo systemctl start firewalld
sudo systemctl enable firewalld

# السماح بالخدمات
sudo firewall-cmd --permanent --add-service=ssh
sudo firewall-cmd --permanent --add-service=http
sudo firewall-cmd --permanent --add-service=https

# إعادة تحميل القواعد
sudo firewall-cmd --reload`}
                  </pre>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* SSL Certificate */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              شهادة SSL
            </CardTitle>
            <CardDescription>
              إعداد شهادة SSL مجانية باستخدام Let's Encrypt
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
                <h4 className="font-medium">الحصول على الشهادة</h4>
                <div className="bg-muted p-4 rounded-lg">
                  <pre className="text-sm overflow-x-auto">
{`# الحصول على شهادة SSL
sudo certbot --nginx -d ksa1980.lol -d www.ksa1980.lol

# تجديد تلقائي
sudo crontab -e
# أضف السطر التالي:
0 12 * * * /usr/bin/certbot renew --quiet`}
                  </pre>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Directory Structure */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="h-5 w-5" />
              هيكل المجلدات
            </CardTitle>
            <CardDescription>
              تنظيم ملفات المشروع على الخادم
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-medium">إنشاء مجلدات المشروع</h4>
                <div className="bg-muted p-4 rounded-lg">
                  <pre className="text-sm overflow-x-auto">
{`# إنشاء مجلدات المشروع
sudo mkdir -p /opt/ticket-system
sudo mkdir -p /opt/ticket-system/logs
sudo mkdir -p /opt/ticket-system/backups
sudo mkdir -p /opt/ticket-system/uploads

# تعيين الصلاحيات
sudo chown -R $USER:$USER /opt/ticket-system
sudo chmod -R 755 /opt/ticket-system`}
                  </pre>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium">هيكل المجلدات النهائي</h4>
                <div className="bg-muted p-4 rounded-lg">
                  <pre className="text-sm overflow-x-auto">
{`/opt/ticket-system/
├── bot/                    # ملفات البوت
│   ├── index.js
│   ├── package.json
│   └── ...
├── website/                # ملفات الموقع
│   ├── app/
│   ├── components/
│   └── ...
├── logs/                   # ملفات السجلات
│   ├── bot.log
│   ├── website.log
│   └── nginx.log
├── backups/                # النسخ الاحتياطية
│   ├── database/
│   └── files/
└── uploads/                # الملفات المرفوعة
    └── ...`}
                  </pre>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Environment Setup */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Terminal className="h-5 w-5" />
              إعداد متغيرات البيئة
            </CardTitle>
            <CardDescription>
              تكوين متغيرات البيئة للإنتاج
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-medium">إنشاء ملفات البيئة</h4>
                <div className="bg-muted p-4 rounded-lg">
                  <pre className="text-sm overflow-x-auto">
{`# إنشاء ملف بيئة البوت
nano /opt/ticket-system/bot/.env

# إنشاء ملف بيئة الموقع
nano /opt/ticket-system/website/.env.local`}
                  </pre>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium">مثال على ملف بيئة البوت</h4>
                <div className="bg-muted p-4 rounded-lg">
                  <pre className="text-sm overflow-x-auto">
{`# Discord Bot
DISCORD_BOT_TOKEN=your_bot_token_here
DISCORD_CLIENT_ID=your_client_id_here
DISCORD_GUILD_ID=your_server_id_here

# Database
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/database

# Admin Settings
ADMIN_USERS=your_discord_user_id_here

# Environment
NODE_ENV=production`}
                  </pre>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium">مثال على ملف بيئة الموقع</h4>
                <div className="bg-muted p-4 rounded-lg">
                  <pre className="text-sm overflow-x-auto">
{`# MongoDB
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/database

# NextAuth
NEXTAUTH_URL=https://ksa1980.lol
NEXTAUTH_SECRET=your-random-secret-key

# Discord OAuth
DISCORD_OAUTH_CLIENT_ID=your_oauth_client_id
DISCORD_OAUTH_CLIENT_SECRET=your_oauth_client_secret

# Discord Bot
DISCORD_BOT_TOKEN=your_bot_token_here

# Admin Users
ADMIN_USERS=your_discord_user_id_here

# Environment
NODE_ENV=production`}
                  </pre>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Security Hardening */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              تعزيز الأمان
            </CardTitle>
            <CardDescription>
              خطوات إضافية لتعزيز أمان الخادم
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-medium">تعطيل تسجيل الدخول بـ Root</h4>
                <div className="bg-muted p-4 rounded-lg">
                  <pre className="text-sm overflow-x-auto">
{`# إنشاء مستخدم جديد
sudo adduser deploy
sudo usermod -aG sudo deploy

# تعطيل تسجيل الدخول بـ Root
sudo nano /etc/ssh/sshd_config
# غير PermitRootLogin إلى no

# إعادة تشغيل SSH
sudo systemctl restart ssh`}
                  </pre>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium">تحديث كلمة مرور SSH</h4>
                <div className="bg-muted p-4 rounded-lg">
                  <pre className="text-sm overflow-x-auto">
{`# تغيير المنفذ الافتراضي
sudo nano /etc/ssh/sshd_config
# غير Port 22 إلى Port 2222

# إضافة المفاتيح العامة
sudo nano ~/.ssh/authorized_keys
# أضف مفاتيح SSH العامة

# إعادة تشغيل SSH
sudo systemctl restart ssh`}
                  </pre>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium">تثبيت Fail2ban</h4>
                <div className="bg-muted p-4 rounded-lg">
                  <pre className="text-sm overflow-x-auto">
{`# تثبيت Fail2ban
sudo apt install fail2ban -y

# تكوين Fail2ban
sudo nano /etc/fail2ban/jail.local

# تشغيل Fail2ban
sudo systemctl start fail2ban
sudo systemctl enable fail2ban`}
                  </pre>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Monitoring Setup */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Monitor className="h-5 w-5" />
              إعداد المراقبة
            </CardTitle>
            <CardDescription>
              أدوات مراقبة الخادم والأداء
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-medium">تثبيت أدوات النظام</h4>
                <div className="bg-muted p-4 rounded-lg">
                  <pre className="text-sm overflow-x-auto">
{`# تثبيت أدوات المراقبة
sudo apt install htop iotop nethogs -y

# تثبيت أدوات الشبكة
sudo apt install netstat-nat tcpdump -y

# تثبيت أدوات التخزين
sudo apt install ncdu -y`}
                  </pre>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium">إعداد Logrotate</h4>
                <div className="bg-muted p-4 rounded-lg">
                  <pre className="text-sm overflow-x-auto">
{`# إنشاء ملف تكوين للسجلات
sudo nano /etc/logrotate.d/ticket-system

# محتوى الملف:
/opt/ticket-system/logs/*.log {
    daily
    missingok
    rotate 30
    compress
    delaycompress
    notifempty
    create 644 deploy deploy
}`}
                  </pre>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Backup Strategy */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Download className="h-5 w-5" />
              استراتيجية النسخ الاحتياطي
            </CardTitle>
            <CardDescription>
              إعداد النسخ الاحتياطية التلقائية
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-medium">إنشاء سكريبت النسخ الاحتياطي</h4>
                <div className="bg-muted p-4 rounded-lg">
                  <pre className="text-sm overflow-x-auto">
{`#!/bin/bash
# إنشاء ملف النسخ الاحتياطي
nano /opt/ticket-system/backup.sh

# محتوى السكريبت:
#!/bin/bash
DATE=$(date +%Y%m%d_%H%M%S)
BACKUP_DIR="/opt/ticket-system/backups"
PROJECT_DIR="/opt/ticket-system"

# إنشاء مجلد النسخ الاحتياطي
mkdir -p $BACKUP_DIR/$DATE

# نسخ ملفات المشروع
cp -r $PROJECT_DIR/bot $BACKUP_DIR/$DATE/
cp -r $PROJECT_DIR/website $BACKUP_DIR/$DATE/

# نسخ قاعدة البيانات (إذا كانت محلية)
# mongodump --out $BACKUP_DIR/$DATE/database

# ضغط النسخة الاحتياطية
cd $BACKUP_DIR
tar -czf $DATE.tar.gz $DATE/
rm -rf $DATE/

# حذف النسخ القديمة (أكثر من 30 يوم)
find $BACKUP_DIR -name "*.tar.gz" -mtime +30 -delete`}
                  </pre>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium">جدولة النسخ الاحتياطية</h4>
                <div className="bg-muted p-4 rounded-lg">
                  <pre className="text-sm overflow-x-auto">
{`# جعل السكريبت قابل للتنفيذ
chmod +x /opt/ticket-system/backup.sh

# إضافة إلى Crontab
crontab -e

# أضف السطر التالي للنسخ اليومي في 2 صباحاً:
0 2 * * * /opt/ticket-system/backup.sh

# أو للنسخ كل 6 ساعات:
0 */6 * * * /opt/ticket-system/backup.sh`}
                  </pre>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Verification */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5" />
              التحقق من الإعداد
            </CardTitle>
            <CardDescription>
              خطوات التحقق من صحة إعداد الخادم
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-medium">فحص الخدمات</h4>
                <div className="bg-muted p-4 rounded-lg">
                  <pre className="text-sm overflow-x-auto">
{`# فحص حالة الخدمات
sudo systemctl status nginx
sudo systemctl status ssh
sudo systemctl status fail2ban

# فحص المنافذ المفتوحة
sudo netstat -tulpn | grep :80
sudo netstat -tulpn | grep :443
sudo netstat -tulpn | grep :22`}
                  </pre>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium">فحص الموارد</h4>
                <div className="bg-muted p-4 rounded-lg">
                  <pre className="text-sm overflow-x-auto">
{`# فحص استخدام الذاكرة
free -h

# فحص استخدام القرص
df -h

# فحص استخدام المعالج
top

# فحص العمليات النشطة
ps aux | grep nginx
ps aux | grep node`}
                  </pre>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Best Practices */}
        <Alert>
          <Info className="h-4 w-4" />
          <AlertDescription>
            <strong>أفضل الممارسات:</strong> احتفظ بنسخ احتياطية منتظمة. 
            راقب أداء الخادم باستمرار. حدث النظام والبرامج بانتظام. 
            استخدم مفاتيح SSH بدلاً من كلمات المرور.
          </AlertDescription>
        </Alert>
      </div>
    </DocsLayout>
  )
}
