import { DocsLayout } from "@/components/docs-layout"
import { arNavigation } from "@/lib/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { 
  Settings, 
  Play, 
  Square, 
  RotateCcw,
  Monitor,
  CheckCircle,
  AlertTriangle,
  Info,
  Code,
  Activity,
  Zap,
  Shield
} from "lucide-react"

export default function DeploymentPM2() {
  return (
    <DocsLayout navigation={arNavigation} lang="ar">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Settings className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold">إعداد PM2</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            دليل شامل لإعداد وإدارة العمليات باستخدام PM2
          </p>
        </div>

        {/* PM2 Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Play className="h-5 w-5" />
                إدارة العمليات
              </CardTitle>
              <CardDescription>
                تشغيل وإدارة التطبيقات
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm">تشغيل</span>
                  <Badge variant="default">pm2 start</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">إيقاف</span>
                  <Badge variant="destructive">pm2 stop</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">إعادة تشغيل</span>
                  <Badge variant="outline">pm2 restart</Badge>
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
                  <span className="text-sm">الحالة</span>
                  <Badge variant="default">pm2 status</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">السجلات</span>
                  <Badge variant="outline">pm2 logs</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">المراقبة</span>
                  <Badge variant="outline">pm2 monit</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5" />
                التلقائية
              </CardTitle>
              <CardDescription>
                التشغيل التلقائي والاسترداد
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm">بدء تلقائي</span>
                  <Badge variant="default">pm2 startup</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">حفظ</span>
                  <Badge variant="outline">pm2 save</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">استرداد</span>
                  <Badge variant="outline">pm2 resurrect</Badge>
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
                حماية وإدارة العمليات
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm">الصلاحيات</span>
                  <Badge variant="default">محدودة</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">العزل</span>
                  <Badge variant="outline">مفعل</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">المراقبة</span>
                  <Badge variant="outline">مفعل</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* PM2 Installation */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5" />
              تثبيت PM2
            </CardTitle>
            <CardDescription>
              خطوات تثبيت وإعداد PM2
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-medium">تثبيت PM2</h4>
                <div className="bg-muted p-4 rounded-lg">
                  <pre className="text-sm overflow-x-auto">
{`# تثبيت PM2 عالمياً
sudo npm install -g pm2

# التحقق من التثبيت
pm2 --version

# تثبيت PM2 Logrotate (اختياري)
pm2 install pm2-logrotate`}
                  </pre>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium">إعداد PM2 للبدء التلقائي</h4>
                <div className="bg-muted p-4 rounded-lg">
                  <pre className="text-sm overflow-x-auto">
{`# إنشاء سكريبت البدء التلقائي
pm2 startup

# سيظهر لك أمر مشابه لهذا:
# sudo env PATH=$PATH:/usr/bin /usr/lib/node_modules/pm2/bin/pm2 startup systemd -u $USER --hp $HOME

# تشغيل الأمر المعروض
sudo env PATH=$PATH:/usr/bin /usr/lib/node_modules/pm2/bin/pm2 startup systemd -u $USER --hp $HOME`}
                  </pre>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* PM2 Configuration */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="h-5 w-5" />
              ملف تكوين PM2
            </CardTitle>
            <CardDescription>
              إنشاء ملف تكوين PM2 للمشروع
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium">الملف: /opt/ticket-system/ecosystem.config.js</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`module.exports = {
  apps: [
    {
      name: 'ticket-bot',
      script: 'index.js',
      cwd: '/opt/ticket-system/bot',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PORT: 3001
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 3001
      },
      log_file: '/opt/ticket-system/logs/bot.log',
      out_file: '/opt/ticket-system/logs/bot-out.log',
      error_file: '/opt/ticket-system/logs/bot-error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      time: true
    },
    {
      name: 'ticket-website',
      script: 'npm',
      args: 'start',
      cwd: '/opt/ticket-system/website',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PORT: 3000
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 3000
      },
      log_file: '/opt/ticket-system/logs/website.log',
      out_file: '/opt/ticket-system/logs/website-out.log',
      error_file: '/opt/ticket-system/logs/website-error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      time: true
    }
  ],

  deploy: {
    production: {
      user: 'deploy',
      host: 'ksa1980.lol',
      ref: 'origin/main',
      repo: 'git@github.com:username/ticket-system.git',
      path: '/opt/ticket-system',
      'pre-deploy-local': '',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};`}
                </pre>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">شرح خيارات التكوين</h4>
              <div className="space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">name</span>
                      <Badge variant="outline">string</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">اسم العملية في PM2</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">script</span>
                      <Badge variant="outline">string</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">مسار ملف البداية</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">cwd</span>
                      <Badge variant="outline">string</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">مجلد العمل</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">instances</span>
                      <Badge variant="outline">number</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">عدد النسخ (1 أو max)</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">autorestart</span>
                      <Badge variant="outline">boolean</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">إعادة تشغيل تلقائي عند التوقف</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">max_memory_restart</span>
                      <Badge variant="outline">string</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">إعادة تشغيل عند تجاوز الذاكرة</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* PM2 Commands */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5" />
              أوامر PM2 الأساسية
            </CardTitle>
            <CardDescription>
              الأوامر الأساسية لإدارة العمليات
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium">أوامر التشغيل</h4>
              <div className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">تشغيل التطبيق</span>
                    <Badge variant="default">pm2 start ecosystem.config.js</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">تشغيل جميع التطبيقات من ملف التكوين</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">تشغيل تطبيق محدد</span>
                    <Badge variant="default">pm2 start ticket-bot</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">تشغيل تطبيق محدد بالاسم</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">تشغيل مع متغيرات</span>
                    <Badge variant="default">pm2 start --env production</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">تشغيل مع متغيرات بيئة محددة</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">أوامر الإدارة</h4>
              <div className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">عرض الحالة</span>
                    <Badge variant="default">pm2 status</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">عرض حالة جميع العمليات</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">إيقاف التطبيق</span>
                    <Badge variant="destructive">pm2 stop ticket-bot</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">إيقاف تطبيق محدد</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">إعادة تشغيل</span>
                    <Badge variant="outline">pm2 restart ticket-bot</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">إعادة تشغيل تطبيق محدد</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">إعادة تحميل</span>
                    <Badge variant="outline">pm2 reload ticket-bot</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">إعادة تحميل بدون توقف</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">أوامر المراقبة</h4>
              <div className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">عرض السجلات</span>
                    <Badge variant="outline">pm2 logs</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">عرض سجلات جميع التطبيقات</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">سجلات تطبيق محدد</span>
                    <Badge variant="outline">pm2 logs ticket-bot</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">عرض سجلات تطبيق محدد</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">مراقبة الأداء</span>
                    <Badge variant="outline">pm2 monit</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">واجهة مراقبة تفاعلية</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* PM2 Logs Management */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Monitor className="h-5 w-5" />
              إدارة السجلات
            </CardTitle>
            <CardDescription>
              تكوين وإدارة سجلات PM2
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium">تكوين Logrotate</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`# تثبيت PM2 Logrotate
pm2 install pm2-logrotate

# تكوين Logrotate
pm2 set pm2-logrotate:max_size 10M
pm2 set pm2-logrotate:retain 30
pm2 set pm2-logrotate:compress true
pm2 set pm2-logrotate:dateFormat YYYY-MM-DD_HH-mm-ss
pm2 set pm2-logrotate:workerInterval 30
pm2 set pm2-logrotate:rotateInterval 0 0 * * *
pm2 set pm2-logrotate:rotateModule true`}
                </pre>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">إدارة السجلات يدوياً</h4>
              <div className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">مسح السجلات</span>
                    <Badge variant="outline">pm2 flush</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">مسح جميع السجلات</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">مسح سجلات تطبيق</span>
                    <Badge variant="outline">pm2 flush ticket-bot</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">مسح سجلات تطبيق محدد</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">عرض السجلات مع المتابعة</span>
                    <Badge variant="outline">pm2 logs --follow</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">عرض السجلات مع المتابعة المباشرة</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">سكريبت تنظيف السجلات</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`#!/bin/bash
# إنشاء سكريبت تنظيف السجلات
nano /opt/ticket-system/clean-logs.sh

# محتوى السكريبت:
#!/bin/bash

echo "🧹 تنظيف سجلات PM2"
echo "=================="

# تنظيف سجلات PM2
pm2 flush

# حذف السجلات القديمة (أكثر من 30 يوم)
find /opt/ticket-system/logs -name "*.log" -mtime +30 -delete

# ضغط السجلات الكبيرة
find /opt/ticket-system/logs -name "*.log" -size +100M -exec gzip {} \;

echo "✅ تم تنظيف السجلات بنجاح"

# جعل السكريبت قابل للتنفيذ
chmod +x /opt/ticket-system/clean-logs.sh

# إضافة إلى Crontab (أسبوعياً)
# 0 2 * * 0 /opt/ticket-system/clean-logs.sh`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* PM2 Monitoring */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5" />
              مراقبة PM2
            </CardTitle>
            <CardDescription>
              أدوات مراقبة الأداء والحالة
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium">مراقبة الأداء</h4>
              <div className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">مراقبة تفاعلية</span>
                    <Badge variant="default">pm2 monit</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">واجهة مراقبة تفاعلية للأداء</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">معلومات مفصلة</span>
                    <Badge variant="outline">pm2 show ticket-bot</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">عرض معلومات مفصلة عن تطبيق</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">إحصائيات JSON</span>
                    <Badge variant="outline">pm2 jlist</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">عرض الإحصائيات بصيغة JSON</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">مراقبة تلقائية</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`#!/bin/bash
# إنشاء سكريبت مراقبة
nano /opt/ticket-system/monitor.sh

# محتوى السكريبت:
#!/bin/bash

echo "📊 مراقبة حالة PM2"
echo "=================="

# فحص حالة PM2
pm2 status

# فحص استخدام الذاكرة
echo ""
echo "💾 استخدام الذاكرة:"
pm2 jlist | jq '.[] | {name: .name, memory: .monit.memory}'

# فحص عدد إعادة التشغيل
echo ""
echo "🔄 عدد إعادة التشغيل:"
pm2 jlist | jq '.[] | {name: .name, restarts: .pm2_env.restart_time}'

# فحص الأخطاء
echo ""
echo "❌ الأخطاء الأخيرة:"
pm2 logs --err --lines 10

# جعل السكريبت قابل للتنفيذ
chmod +x /opt/ticket-system/monitor.sh`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* PM2 Backup and Restore */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              النسخ الاحتياطي والاسترداد
            </CardTitle>
            <CardDescription>
              إدارة النسخ الاحتياطية لعمليات PM2
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium">حفظ واسترداد العمليات</h4>
              <div className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">حفظ العمليات</span>
                    <Badge variant="default">pm2 save</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">حفظ قائمة العمليات الحالية</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">استرداد العمليات</span>
                    <Badge variant="outline">pm2 resurrect</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">استرداد العمليات المحفوظة</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">حذف العمليات المحفوظة</span>
                    <Badge variant="destructive">pm2 unstartup</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">حذف العمليات من البدء التلقائي</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">سكريبت النسخ الاحتياطي</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`#!/bin/bash
# إنشاء سكريبت النسخ الاحتياطي
nano /opt/ticket-system/backup-pm2.sh

# محتوى السكريبت:
#!/bin/bash

DATE=$(date +%Y%m%d_%H%M%S)
BACKUP_DIR="/opt/ticket-system/backups/pm2"
PM2_DIR="$HOME/.pm2"

echo "💾 إنشاء نسخة احتياطية من PM2"
echo "============================="

# إنشاء مجلد النسخ الاحتياطية
mkdir -p $BACKUP_DIR

# نسخ ملفات PM2
cp -r $PM2_DIR $BACKUP_DIR/pm2_$DATE

# حفظ قائمة العمليات
pm2 save

# نسخ ملف الحفظ
cp $PM2_DIR/dump.pm2 $BACKUP_DIR/dump_$DATE.pm2

# ضغط النسخة الاحتياطية
cd $BACKUP_DIR
tar -czf pm2_backup_$DATE.tar.gz pm2_$DATE dump_$DATE.pm2
rm -rf pm2_$DATE dump_$DATE.pm2

echo "✅ تم إنشاء النسخة الاحتياطية: pm2_backup_$DATE.tar.gz"

# حذف النسخ القديمة (أكثر من 7 أيام)
find $BACKUP_DIR -name "pm2_backup_*.tar.gz" -mtime +7 -delete

# جعل السكريبت قابل للتنفيذ
chmod +x /opt/ticket-system/backup-pm2.sh`}
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
              حل المشاكل الشائعة في PM2
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium">مشاكل شائعة</h4>
              <div className="space-y-3">
                <div className="space-y-2">
                  <h5 className="font-medium text-sm">التطبيق لا يبدأ</h5>
                  <div className="bg-muted p-3 rounded-lg">
                    <pre className="text-xs overflow-x-auto">
{`# فحص السجلات
pm2 logs ticket-bot

# فحص التكوين
pm2 show ticket-bot

# إعادة تشغيل مع إعادة تحميل
pm2 restart ticket-bot --update-env`}
                    </pre>
                  </div>
                </div>

                <div className="space-y-2">
                  <h5 className="font-medium text-sm">استهلاك ذاكرة عالي</h5>
                  <div className="bg-muted p-3 rounded-lg">
                    <pre className="text-xs overflow-x-auto">
{`# فحص استخدام الذاكرة
pm2 monit

# إعادة تشغيل عند تجاوز الحد
pm2 restart ticket-bot

# تعديل حد الذاكرة في التكوين
# max_memory_restart: '500M'`}
                    </pre>
                  </div>
                </div>

                <div className="space-y-2">
                  <h5 className="font-medium text-sm">عدم البدء التلقائي</h5>
                  <div className="bg-muted p-3 rounded-lg">
                    <pre className="text-xs overflow-x-auto">
{`# إعادة إعداد البدء التلقائي
pm2 unstartup
pm2 startup
pm2 save

# فحص حالة systemd
sudo systemctl status pm2-$USER`}
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
            <strong>أفضل الممارسات:</strong> استخدم ملف تكوين PM2. 
            راقب الأداء بانتظام. احتفظ بنسخ احتياطية من التكوين. 
            استخدم Logrotate لإدارة السجلات.
          </AlertDescription>
        </Alert>
      </div>
    </DocsLayout>
  )
}
