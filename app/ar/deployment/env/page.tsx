import { DocsLayout } from "@/components/docs-layout"
import { arNavigation } from "@/lib/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { 
  Settings, 
  Key, 
  Database, 
  Bot,
  Shield,
  CheckCircle,
  AlertTriangle,
  Info,
  Code,
  Eye,
  EyeOff,
  Copy
} from "lucide-react"

export default function DeploymentEnv() {
  return (
    <DocsLayout navigation={arNavigation} lang="ar">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Settings className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold">متغيرات البيئة</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            دليل شامل لإعداد متغيرات البيئة للإنتاج
          </p>
        </div>

        {/* Environment Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bot className="h-5 w-5" />
                متغيرات البوت
              </CardTitle>
              <CardDescription>
                متغيرات بيئة البوت الأساسية
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Discord Bot</span>
                  <Badge variant="destructive">مطلوب</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Database</span>
                  <Badge variant="destructive">مطلوب</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Admin</span>
                  <Badge variant="destructive">مطلوب</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5" />
                متغيرات الموقع
              </CardTitle>
              <CardDescription>
                متغيرات بيئة الموقع
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm">NextAuth</span>
                  <Badge variant="destructive">مطلوب</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">OAuth</span>
                  <Badge variant="destructive">مطلوب</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Database</span>
                  <Badge variant="destructive">مطلوب</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                متغيرات الأمان
              </CardTitle>
              <CardDescription>
                متغيرات الأمان والحماية
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Secrets</span>
                  <Badge variant="destructive">مطلوب</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">URLs</span>
                  <Badge variant="destructive">مطلوب</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Environment</span>
                  <Badge variant="default">production</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bot Environment Variables */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bot className="h-5 w-5" />
              متغيرات بيئة البوت
            </CardTitle>
            <CardDescription>
              جميع المتغيرات المطلوبة لتشغيل البوت
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium">الملف: /opt/ticket-system/bot/.env</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`# Discord Bot Configuration
DISCORD_BOT_TOKEN=your_discord_bot_token_here
DISCORD_CLIENT_ID=your_discord_client_id_here
DISCORD_GUILD_ID=your_discord_server_id_here

# Database Configuration
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database_name
MONGODB_DB_NAME=ticket_system

# Admin Configuration
ADMIN_USERS=123456789012345678,987654321098765432

# Bot Settings
BOT_PREFIX=$
BOT_OWNER_ID=123456789012345678

# Logging
LOG_LEVEL=info
LOG_FILE=/opt/ticket-system/logs/bot.log

# Environment
NODE_ENV=production
PORT=3001

# Optional: Redis for caching
REDIS_URL=redis://localhost:6379

# Optional: Webhook for logs
DISCORD_WEBHOOK_URL=https://discord.com/api/webhooks/...

# Optional: Backup settings
BACKUP_ENABLED=true
BACKUP_INTERVAL=24
BACKUP_RETENTION_DAYS=30`}
                </pre>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">شرح المتغيرات</h4>
              <div className="space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">DISCORD_BOT_TOKEN</span>
                      <Badge variant="destructive">مطلوب</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">رمز البوت من Discord Developer Portal</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">DISCORD_CLIENT_ID</span>
                      <Badge variant="destructive">مطلوب</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">معرف التطبيق من Discord Developer Portal</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">DISCORD_GUILD_ID</span>
                      <Badge variant="destructive">مطلوب</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">معرف السيرفر الذي سيعمل فيه البوت</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">MONGODB_URI</span>
                      <Badge variant="destructive">مطلوب</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">رابط اتصال قاعدة البيانات MongoDB</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">ADMIN_USERS</span>
                      <Badge variant="destructive">مطلوب</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">معرفات المستخدمين الذين لديهم صلاحيات إدارية</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">NODE_ENV</span>
                      <Badge variant="default">production</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">بيئة التشغيل (production/development)</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Website Environment Variables */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="h-5 w-5" />
              متغيرات بيئة الموقع
            </CardTitle>
            <CardDescription>
              جميع المتغيرات المطلوبة لتشغيل الموقع
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium">الملف: /opt/ticket-system/website/.env.local</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`# Database Configuration
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database_name
MONGODB_DB_NAME=ticket_system

# NextAuth Configuration
NEXTAUTH_URL=https://ksa1980.lol
NEXTAUTH_SECRET=your-super-secret-key-here-make-it-long-and-random

# Discord OAuth Configuration
DISCORD_OAUTH_CLIENT_ID=your_discord_oauth_client_id
DISCORD_OAUTH_CLIENT_SECRET=your_discord_oauth_client_secret

# Discord Bot Configuration
DISCORD_BOT_TOKEN=your_discord_bot_token_here

# Admin Configuration
ADMIN_USERS=123456789012345678,987654321098765432

# Required Discord Role IDs
DASHBOARD_ROLE_ID=1414663385236373545
ADMIN_ROLE_ID=1414663299252883547
MODERATOR_ROLE_ID=1414663644704276530

# Environment
NODE_ENV=production
PORT=3000

# Optional: Redis for caching
REDIS_URL=redis://localhost:6379

# Optional: Email configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password

# Optional: Analytics
GOOGLE_ANALYTICS_ID=GA_MEASUREMENT_ID

# Optional: Error tracking
SENTRY_DSN=https://your-sentry-dsn@sentry.io/project-id`}
                </pre>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">شرح المتغيرات</h4>
              <div className="space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">NEXTAUTH_URL</span>
                      <Badge variant="destructive">مطلوب</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">رابط الموقع الأساسي</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">NEXTAUTH_SECRET</span>
                      <Badge variant="destructive">مطلوب</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">مفتاح سري عشوائي لتشفير الجلسات</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">DISCORD_OAUTH_CLIENT_ID</span>
                      <Badge variant="destructive">مطلوب</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">معرف تطبيق OAuth من Discord</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">DISCORD_OAUTH_CLIENT_SECRET</span>
                      <Badge variant="destructive">مطلوب</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">السر السري لتطبيق OAuth</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">DASHBOARD_ROLE_ID</span>
                      <Badge variant="destructive">مطلوب</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">معرف رتبة الوصول للوحة التحكم</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">ADMIN_ROLE_ID</span>
                      <Badge variant="destructive">مطلوب</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">معرف رتبة الإدارة</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Environment Setup Script */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="h-5 w-5" />
              سكريبت إعداد البيئة
            </CardTitle>
            <CardDescription>
              سكريبت تلقائي لإعداد متغيرات البيئة
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium">إنشاء سكريبت الإعداد</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`#!/bin/bash
# إنشاء ملف سكريبت الإعداد
nano /opt/ticket-system/setup-env.sh

# محتوى السكريبت:
#!/bin/bash

echo "🚀 إعداد متغيرات البيئة لنظام إدارة التذاكر"
echo "=============================================="

# إنشاء مجلدات المشروع
mkdir -p /opt/ticket-system/bot
mkdir -p /opt/ticket-system/website
mkdir -p /opt/ticket-system/logs
mkdir -p /opt/ticket-system/backups

# إنشاء ملف بيئة البوت
cat > /opt/ticket-system/bot/.env << 'EOF'
# Discord Bot Configuration
DISCORD_BOT_TOKEN=
DISCORD_CLIENT_ID=
DISCORD_GUILD_ID=

# Database Configuration
MONGODB_URI=
MONGODB_DB_NAME=ticket_system

# Admin Configuration
ADMIN_USERS=

# Bot Settings
BOT_PREFIX=$
LOG_LEVEL=info
LOG_FILE=/opt/ticket-system/logs/bot.log

# Environment
NODE_ENV=production
PORT=3001
EOF

# إنشاء ملف بيئة الموقع
cat > /opt/ticket-system/website/.env.local << 'EOF'
# Database Configuration
MONGODB_URI=
MONGODB_DB_NAME=ticket_system

# NextAuth Configuration
NEXTAUTH_URL=https://ksa1980.lol
NEXTAUTH_SECRET=

# Discord OAuth Configuration
DISCORD_OAUTH_CLIENT_ID=
DISCORD_OAUTH_CLIENT_SECRET=

# Discord Bot Configuration
DISCORD_BOT_TOKEN=

# Admin Configuration
ADMIN_USERS=

# Required Discord Role IDs
DASHBOARD_ROLE_ID=
ADMIN_ROLE_ID=
MODERATOR_ROLE_ID=

# Environment
NODE_ENV=production
PORT=3000
EOF

# تعيين الصلاحيات
chmod 600 /opt/ticket-system/bot/.env
chmod 600 /opt/ticket-system/website/.env.local
chown -R $USER:$USER /opt/ticket-system

echo "✅ تم إنشاء ملفات البيئة بنجاح"
echo "📝 يرجى ملء المتغيرات المطلوبة في الملفات:"
echo "   - /opt/ticket-system/bot/.env"
echo "   - /opt/ticket-system/website/.env.local"
echo ""
echo "🔒 تم تعيين صلاحيات الأمان للملفات"`}
                </pre>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">تشغيل السكريبت</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`# جعل السكريبت قابل للتنفيذ
chmod +x /opt/ticket-system/setup-env.sh

# تشغيل السكريبت
/opt/ticket-system/setup-env.sh`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Environment Validation */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5" />
              التحقق من البيئة
            </CardTitle>
            <CardDescription>
              سكريبت للتحقق من صحة متغيرات البيئة
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium">سكريبت التحقق</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`#!/bin/bash
# إنشاء سكريبت التحقق
nano /opt/ticket-system/validate-env.sh

# محتوى السكريبت:
#!/bin/bash

echo "🔍 التحقق من متغيرات البيئة"
echo "============================="

# دالة للتحقق من متغير
check_var() {
    local var_name=$1
    local var_value=$2
    local required=$3
    
    if [ -z "$var_value" ]; then
        if [ "$required" = "true" ]; then
            echo "❌ $var_name: مطلوب"
            return 1
        else
            echo "⚠️  $var_name: غير محدد (اختياري)"
            return 0
        fi
    else
        echo "✅ $var_name: محدد"
        return 0
    fi
}

# تحميل متغيرات البوت
if [ -f "/opt/ticket-system/bot/.env" ]; then
    echo "📋 فحص متغيرات البوت..."
    source /opt/ticket-system/bot/.env
    
    check_var "DISCORD_BOT_TOKEN" "$DISCORD_BOT_TOKEN" "true"
    check_var "DISCORD_CLIENT_ID" "$DISCORD_CLIENT_ID" "true"
    check_var "DISCORD_GUILD_ID" "$DISCORD_GUILD_ID" "true"
    check_var "MONGODB_URI" "$MONGODB_URI" "true"
    check_var "ADMIN_USERS" "$ADMIN_USERS" "true"
    check_var "NODE_ENV" "$NODE_ENV" "true"
else
    echo "❌ ملف بيئة البوت غير موجود"
fi

echo ""

# تحميل متغيرات الموقع
if [ -f "/opt/ticket-system/website/.env.local" ]; then
    echo "📋 فحص متغيرات الموقع..."
    source /opt/ticket-system/website/.env.local
    
    check_var "NEXTAUTH_URL" "$NEXTAUTH_URL" "true"
    check_var "NEXTAUTH_SECRET" "$NEXTAUTH_SECRET" "true"
    check_var "DISCORD_OAUTH_CLIENT_ID" "$DISCORD_OAUTH_CLIENT_ID" "true"
    check_var "DISCORD_OAUTH_CLIENT_SECRET" "$DISCORD_OAUTH_CLIENT_SECRET" "true"
    check_var "DASHBOARD_ROLE_ID" "$DASHBOARD_ROLE_ID" "true"
    check_var "ADMIN_ROLE_ID" "$ADMIN_ROLE_ID" "true"
    check_var "MONGODB_URI" "$MONGODB_URI" "true"
else
    echo "❌ ملف بيئة الموقع غير موجود"
fi

echo ""
echo "🏁 انتهى التحقق من متغيرات البيئة"`}
                </pre>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">تشغيل التحقق</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`# جعل السكريبت قابل للتنفيذ
chmod +x /opt/ticket-system/validate-env.sh

# تشغيل التحقق
/opt/ticket-system/validate-env.sh`}
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
              أفضل ممارسات الأمان
            </CardTitle>
            <CardDescription>
              نصائح مهمة لحماية متغيرات البيئة
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium">حماية ملفات البيئة</h4>
              <div className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">تعيين صلاحيات 600 للملفات</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">عدم رفع الملفات إلى Git</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">استخدام مفاتيح قوية</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">تحديث المفاتيح بانتظام</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">إنشاء مفاتيح آمنة</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`# إنشاء مفتاح NEXTAUTH_SECRET قوي
openssl rand -base64 32

# إنشاء مفتاح عشوائي
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"

# إنشاء UUID
uuidgen

# إنشاء مفتاح باستخدام Python
python3 -c "import secrets; print(secrets.token_urlsafe(32))"`}
                </pre>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">نسخ احتياطية آمنة</h4>
              <div className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">تشفير النسخ الاحتياطية</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">تخزين منفصل عن الكود</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">الوصول المحدود</span>
                  </div>
                </div>
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
              حل المشاكل الشائعة في متغيرات البيئة
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium">مشاكل شائعة</h4>
              <div className="space-y-3">
                <div className="space-y-2">
                  <h5 className="font-medium text-sm">خطأ: متغير غير محدد</h5>
                  <p className="text-xs text-muted-foreground">
                    تأكد من أن المتغير محدد في ملف البيئة ولا يحتوي على مسافات حول علامة =
                  </p>
                </div>

                <div className="space-y-2">
                  <h5 className="font-medium text-sm">خطأ: صلاحيات الملف</h5>
                  <p className="text-xs text-muted-foreground">
                    تأكد من أن صلاحيات الملف 600 وأن المالك صحيح
                  </p>
                </div>

                <div className="space-y-2">
                  <h5 className="font-medium text-sm">خطأ: اتصال قاعدة البيانات</h5>
                  <p className="text-xs text-muted-foreground">
                    تحقق من صحة MONGODB_URI وتأكد من أن IP مسموح في MongoDB Atlas
                  </p>
                </div>

                <div className="space-y-2">
                  <h5 className="font-medium text-sm">خطأ: Discord OAuth</h5>
                  <p className="text-xs text-muted-foreground">
                    تأكد من صحة CLIENT_ID و CLIENT_SECRET وتطابق Redirect URI
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Best Practices */}
        <Alert>
          <Info className="h-4 w-4" />
          <AlertDescription>
            <strong>أفضل الممارسات:</strong> استخدم مفاتيح قوية وعشوائية. 
            احتفظ بنسخ احتياطية مشفرة. راقب ملفات البيئة بانتظام. 
            لا تشارك المفاتيح الحساسة أبداً.
          </AlertDescription>
        </Alert>
      </div>
    </DocsLayout>
  )
}
