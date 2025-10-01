import { DocsLayout } from "@/components/docs-layout"
import { arNavigation } from "@/lib/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { 
  Shield, 
  Key, 
  User, 
  Lock,
  CheckCircle,
  AlertTriangle,
  Info,
  ExternalLink
} from "lucide-react"

export default function DashboardAuthentication() {
  return (
    <DocsLayout navigation={arNavigation} lang="ar">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Shield className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold">المصادقة والأمان</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            نظام مصادقة متقدم وآمن للوصول إلى لوحة التحكم
          </p>
        </div>

        {/* Authentication Methods */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">طرق المصادقة</h2>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Discord OAuth
              </CardTitle>
              <CardDescription>
                تسجيل الدخول الآمن عبر Discord
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">مصادقة آمنة عبر Discord</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">لا حاجة لكلمات مرور منفصلة</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">مزامنة تلقائية للمعلومات</span>
                </div>
              </div>
              
              <Alert>
                <Info className="h-4 w-4" />
                <AlertDescription>
                  يجب أن تكون عضو في السيرفر المحدد للوصول إلى لوحة التحكم
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </div>

        {/* Required Permissions */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">الصلاحيات المطلوبة</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Key className="h-5 w-5" />
                  صلاحيات Discord
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">identify</span>
                    <Badge variant="secondary">مطلوب</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">email</span>
                    <Badge variant="secondary">مطلوب</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">guilds</span>
                    <Badge variant="secondary">مطلوب</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">guilds.members.read</span>
                    <Badge variant="secondary">مطلوب</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lock className="h-5 w-5" />
                  أدوار السيرفر
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Dashboard Role</span>
                    <Badge variant="default">وصول أساسي</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Admin Role</span>
                    <Badge variant="destructive">وصول كامل</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Moderator Role</span>
                    <Badge variant="outline">وصول محدود</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Security Features */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">مميزات الأمان</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Shield className="h-5 w-5 text-green-500" />
                  تشفير البيانات
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  جميع البيانات الحساسة مشفرة باستخدام أحدث تقنيات التشفير
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Lock className="h-5 w-5 text-blue-500" />
                  جلسات آمنة
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  جلسات آمنة مع انتهاء صلاحية تلقائي وحماية من CSRF
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Key className="h-5 w-5 text-purple-500" />
                  تحقق من الصلاحيات
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  تحقق مستمر من الصلاحيات على جميع المستويات
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Setup Guide */}
        <Card>
          <CardHeader>
            <CardTitle>دليل الإعداد</CardTitle>
            <CardDescription>
              خطوات إعداد نظام المصادقة
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-medium flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-medium">
                    1
                  </span>
                  إنشاء Discord Application
                </h4>
                <p className="text-sm text-muted-foreground mr-8">
                  اذهب إلى Discord Developer Portal وأنشئ تطبيق جديد
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-medium">
                    2
                  </span>
                  إعداد OAuth2
                </h4>
                <p className="text-sm text-muted-foreground mr-8">
                  أضف Redirect URI: <code className="bg-muted px-1 py-0.5 rounded text-xs">https://ksa1980.lol/auth/callback/discord</code>
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-medium">
                    3
                  </span>
                  إعداد متغيرات البيئة
                </h4>
                <p className="text-sm text-muted-foreground mr-8">
                  أضف Client ID و Client Secret إلى ملف .env
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-medium">
                    4
                  </span>
                  تحديد الأدوار المطلوبة
                </h4>
                <p className="text-sm text-muted-foreground mr-8">
                  حدد ID الأدوار المطلوبة للوصول إلى لوحة التحكم
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Environment Variables */}
        <Card>
          <CardHeader>
            <CardTitle>متغيرات البيئة</CardTitle>
            <CardDescription>
              المتغيرات المطلوبة لإعداد نظام المصادقة
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="space-y-2">
                <h4 className="font-medium text-sm">DISCORD_OAUTH_CLIENT_ID</h4>
                <p className="text-sm text-muted-foreground">
                  معرف تطبيق Discord من Developer Portal
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium text-sm">DISCORD_OAUTH_CLIENT_SECRET</h4>
                <p className="text-sm text-muted-foreground">
                  السر السري لتطبيق Discord
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium text-sm">NEXTAUTH_URL</h4>
                <p className="text-sm text-muted-foreground">
                  رابط الموقع الأساسي (https://ksa1980.lol)
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium text-sm">NEXTAUTH_SECRET</h4>
                <p className="text-sm text-muted-foreground">
                  مفتاح سري عشوائي لتشفير الجلسات
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium text-sm">ADMIN_USERS</h4>
                <p className="text-sm text-muted-foreground">
                  معرفات المستخدمين الذين لديهم صلاحيات إدارية
                </p>
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
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="space-y-2">
                <h4 className="font-medium">لا أستطيع تسجيل الدخول</h4>
                <ul className="text-sm text-muted-foreground space-y-1 mr-4">
                  <li>• تأكد من أنك عضو في السيرفر المحدد</li>
                  <li>• تحقق من أن لديك الأدوار المطلوبة</li>
                  <li>• تأكد من صحة متغيرات البيئة</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium">خطأ في OAuth</h4>
                <ul className="text-sm text-muted-foreground space-y-1 mr-4">
                  <li>• تحقق من صحة Redirect URI</li>
                  <li>• تأكد من صحة Client ID و Client Secret</li>
                  <li>• تحقق من إعدادات التطبيق في Discord</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium">مشاكل الصلاحيات</h4>
                <ul className="text-sm text-muted-foreground space-y-1 mr-4">
                  <li>• تأكد من أن البوت لديه صلاحية "Read Server Members"</li>
                  <li>• تحقق من ترتيب الأدوار في السيرفر</li>
                  <li>• تأكد من صحة ID الأدوار</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DocsLayout>
  )
}
