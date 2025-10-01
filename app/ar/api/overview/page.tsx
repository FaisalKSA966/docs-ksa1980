import { DocsLayout } from "@/components/docs-layout"
import { arNavigation } from "@/lib/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { 
  Code, 
  Globe, 
  Shield, 
  Zap,
  CheckCircle,
  AlertTriangle,
  Info,
  Key,
  Clock,
  Database
} from "lucide-react"

export default function APIOverview() {
  return (
    <DocsLayout navigation={arNavigation} lang="ar">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Code className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold">مرجع API</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            واجهة برمجة التطبيقات الشاملة لنظام إدارة التذاكر
          </p>
        </div>

        {/* API Status */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">حالة API</CardTitle>
              <Globe className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                <span className="text-sm font-medium">متاح</span>
              </div>
              <p className="text-xs text-muted-foreground">
                آخر فحص: منذ دقيقتين
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">متوسط الاستجابة</CardTitle>
              <Zap className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">45ms</div>
              <p className="text-xs text-muted-foreground">
                -5ms من الأسبوع الماضي
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">الطلبات/الدقيقة</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">156</div>
              <p className="text-xs text-muted-foreground">
                +12% من الأمس
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">معدل النجاح</CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">99.9%</div>
              <p className="text-xs text-muted-foreground">
                +0.1% من الشهر الماضي
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Base URL and Authentication */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5" />
                Base URL
              </CardTitle>
              <CardDescription>
                الرابط الأساسي لجميع طلبات API
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-muted p-4 rounded-lg">
                <code className="text-sm">https://ksa1980.lol/api</code>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-medium text-sm">مثال على الطلب:</h4>
                <div className="bg-muted p-4 rounded-lg">
                  <pre className="text-sm overflow-x-auto">
{`GET https://ksa1980.lol/api/tickets
Authorization: Bearer YOUR_TOKEN
Content-Type: application/json`}
                  </pre>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                المصادقة
              </CardTitle>
              <CardDescription>
                طرق المصادقة المتاحة
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Key className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">Bearer Token</span>
                    <Badge variant="default">مطلوب</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    رمز المصادقة في رأس الطلب
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">Session Cookie</span>
                    <Badge variant="secondary">اختياري</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    ملف تعريف الارتباط للجلسة
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium text-sm">مثال على الرأس:</h4>
                <div className="bg-muted p-4 rounded-lg">
                  <pre className="text-sm overflow-x-auto">
{`Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
Content-Type: application/json
Accept: application/json`}
                  </pre>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* API Endpoints Overview */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">نقاط النهاية (Endpoints)</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="h-5 w-5" />
                  /api/tickets
                </CardTitle>
                <CardDescription>
                  إدارة التذاكر
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">GET</span>
                    <Badge variant="outline">جلب التذاكر</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">POST</span>
                    <Badge variant="outline">إنشاء تذكرة</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">PUT</span>
                    <Badge variant="outline">تحديث تذكرة</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">DELETE</span>
                    <Badge variant="outline">حذف تذكرة</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5" />
                  /api/stats
                </CardTitle>
                <CardDescription>
                  الإحصائيات والتقارير
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">GET</span>
                    <Badge variant="outline">جلب الإحصائيات</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">GET</span>
                    <Badge variant="outline">تقارير مفصلة</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">GET</span>
                    <Badge variant="outline">أداء النظام</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  /api/settings
                </CardTitle>
                <CardDescription>
                  إعدادات النظام
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">GET</span>
                    <Badge variant="outline">جلب الإعدادات</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">POST</span>
                    <Badge variant="outline">تحديث الإعدادات</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">PUT</span>
                    <Badge variant="outline">حفظ الإعدادات</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <RefreshCw className="h-5 w-5" />
                  /api/sync
                </CardTitle>
                <CardDescription>
                  تزامن البيانات
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">GET</span>
                    <Badge variant="outline">حالة التزامن</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">POST</span>
                    <Badge variant="outline">بدء التزامن</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">PUT</span>
                    <Badge variant="outline">تحديث التزامن</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bot className="h-5 w-5" />
                  /api/bot
                </CardTitle>
                <CardDescription>
                  إدارة البوت
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">GET</span>
                    <Badge variant="outline">حالة البوت</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">POST</span>
                    <Badge variant="outline">إعادة تشغيل</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">GET</span>
                    <Badge variant="outline">معلومات البوت</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  /api/users
                </CardTitle>
                <CardDescription>
                  إدارة المستخدمين
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">GET</span>
                    <Badge variant="outline">جلب المستخدمين</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">GET</span>
                    <Badge variant="outline">معلومات مستخدم</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">PUT</span>
                    <Badge variant="outline">تحديث مستخدم</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* HTTP Status Codes */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5" />
              رموز حالة HTTP
            </CardTitle>
            <CardDescription>
              رموز الاستجابة المستخدمة في API
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="space-y-3">
                <h4 className="font-medium text-sm">نجاح (2xx)</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">200</span>
                    <span className="text-xs text-muted-foreground">OK</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">201</span>
                    <span className="text-xs text-muted-foreground">Created</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">204</span>
                    <span className="text-xs text-muted-foreground">No Content</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-medium text-sm">إعادة توجيه (3xx)</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">301</span>
                    <span className="text-xs text-muted-foreground">Moved</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">304</span>
                    <span className="text-xs text-muted-foreground">Not Modified</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-medium text-sm">خطأ العميل (4xx)</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">400</span>
                    <span className="text-xs text-muted-foreground">Bad Request</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">401</span>
                    <span className="text-xs text-muted-foreground">Unauthorized</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">403</span>
                    <span className="text-xs text-muted-foreground">Forbidden</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">404</span>
                    <span className="text-xs text-muted-foreground">Not Found</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-medium text-sm">خطأ الخادم (5xx)</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">500</span>
                    <span className="text-xs text-muted-foreground">Server Error</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">502</span>
                    <span className="text-xs text-muted-foreground">Bad Gateway</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">503</span>
                    <span className="text-xs text-muted-foreground">Service Unavailable</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Rate Limiting */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              تحديد معدل الطلبات
            </CardTitle>
            <CardDescription>
              حدود الطلبات المسموحة لكل مستخدم
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-medium">الحدود العامة</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">طلبات/الدقيقة</span>
                    <Badge variant="secondary">100</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">طلبات/الساعة</span>
                    <Badge variant="secondary">1000</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">طلبات/اليوم</span>
                    <Badge variant="secondary">10000</Badge>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-medium">الحدود الخاصة</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">المديرين</span>
                    <Badge variant="default">غير محدود</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">مقدمي الدعم</span>
                    <Badge variant="outline">500/دقيقة</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">المستخدمين العاديين</span>
                    <Badge variant="outline">100/دقيقة</Badge>
                  </div>
                </div>
              </div>
            </div>

            <Alert>
              <Info className="h-4 w-4" />
              <AlertDescription>
                عند تجاوز الحد المسموح، ستحصل على رمز خطأ 429. 
                انتظر حتى انتهاء فترة التحديد قبل إعادة المحاولة.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Error Handling */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5" />
              معالجة الأخطاء
            </CardTitle>
            <CardDescription>
              كيفية التعامل مع الأخطاء في API
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-medium">تنسيق رسالة الخطأ</h4>
                <div className="bg-muted p-4 rounded-lg">
                  <pre className="text-sm overflow-x-auto">
{`{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "البيانات المرسلة غير صحيحة",
    "details": {
      "field": "userId",
      "reason": "المعرف مطلوب"
    },
    "timestamp": "2024-01-15T10:30:00Z",
    "requestId": "req_123456789"
  }
}`}
                  </pre>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium">أكواد الأخطاء الشائعة</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">VALIDATION_ERROR</span>
                    <span className="text-xs text-muted-foreground">بيانات غير صحيحة</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">AUTHENTICATION_ERROR</span>
                    <span className="text-xs text-muted-foreground">مشكلة في المصادقة</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">AUTHORIZATION_ERROR</span>
                    <span className="text-xs text-muted-foreground">عدم وجود صلاحيات</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">NOT_FOUND_ERROR</span>
                    <span className="text-xs text-muted-foreground">المورد غير موجود</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* SDKs and Libraries */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="h-5 w-5" />
              SDKs والمكتبات
            </CardTitle>
            <CardDescription>
              مكتبات جاهزة للاستخدام مع API
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="space-y-2">
                <h4 className="font-medium">JavaScript/TypeScript</h4>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">Node.js</Badge>
                    <span className="text-xs text-muted-foreground">متاح</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">Browser</Badge>
                    <span className="text-xs text-muted-foreground">متاح</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium">Python</h4>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">requests</Badge>
                    <span className="text-xs text-muted-foreground">متاح</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">aiohttp</Badge>
                    <span className="text-xs text-muted-foreground">متاح</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium">PHP</h4>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">cURL</Badge>
                    <span className="text-xs text-muted-foreground">متاح</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">Guzzle</Badge>
                    <span className="text-xs text-muted-foreground">متاح</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Getting Started */}
        <Alert>
          <Info className="h-4 w-4" />
          <AlertDescription>
            <strong>البدء السريع:</strong> ابدأ بقراءة دليل المصادقة، ثم جرب الطلبات الأساسية. 
            استخدم Postman أو أي أداة مشابهة لاختبار API.
          </AlertDescription>
        </Alert>
      </div>
    </DocsLayout>
  )
}
