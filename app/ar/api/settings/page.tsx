import { DocsLayout } from "@/components/docs-layout"
import { arNavigation } from "@/lib/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { 
  Settings, 
  Save, 
  RotateCcw, 
  Bot,
  CheckCircle,
  AlertTriangle,
  Info,
  Code,
  Shield,
  Bell,
  MessageSquare
} from "lucide-react"

export default function APISettings() {
  return (
    <DocsLayout navigation={arNavigation} lang="ar">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Settings className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold">API الإعدادات</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            إدارة إعدادات النظام عبر واجهة برمجة التطبيقات
          </p>
        </div>

        {/* Endpoints Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">GET /settings</CardTitle>
              <Settings className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-sm">جلب الإعدادات</div>
              <p className="text-xs text-muted-foreground">
                جميع إعدادات النظام
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">POST /settings</CardTitle>
              <Save className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-sm">تحديث الإعدادات</div>
              <p className="text-xs text-muted-foreground">
                حفظ الإعدادات الجديدة
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">PUT /settings</CardTitle>
              <RotateCcw className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-sm">إعادة تعيين</div>
              <p className="text-xs text-muted-foreground">
                إعادة تعيين الإعدادات
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">POST /settings/validate</CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-sm">التحقق من الإعدادات</div>
              <p className="text-xs text-muted-foreground">
                فحص صحة الإعدادات
              </p>
            </CardContent>
          </Card>
        </div>

        {/* GET /settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5" />
              GET /api/settings
            </CardTitle>
            <CardDescription>
              جلب جميع إعدادات النظام
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium">معاملات الاستعلام (Query Parameters)</h4>
              <div className="space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">section</span>
                      <Badge variant="outline">string</Badge>
                      <Badge variant="secondary">اختياري</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">فلترة حسب القسم (bot, messages, notifications)</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">includeSensitive</span>
                      <Badge variant="outline">boolean</Badge>
                      <Badge variant="secondary">اختياري</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">تضمين الإعدادات الحساسة (افتراضي: false)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">مثال على الطلب</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`GET /api/settings?section=bot&includeSensitive=false
Authorization: Bearer YOUR_TOKEN
Content-Type: application/json`}
                </pre>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">مثال على الاستجابة</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`{
  "success": true,
  "data": {
    "bot": {
      "ticketCategory": "1234567890123456789",
      "ticketSendChannel": "9876543210987654321",
      "supportRoles": [
        "1111111111111111111",
        "2222222222222222222"
      ]
    },
    "messages": {
      "welcomeMessage": "مرحباً بك في نظام التذاكر!",
      "closeMessage": "تم إغلاق تذكرتك. شكراً لك!",
      "panelMessage": "مرحباً بك في نظام التذاكر! اختر نوع المساعدة:"
    },
    "notifications": {
      "notifyOnCreate": true,
      "notifyOnClose": true,
      "reminderInterval": 30
    },
    "advanced": {
      "maxTicketsPerUser": 3,
      "autoCloseTime": 24,
      "ratingsEnabled": true,
      "transcriptsEnabled": true
    },
    "logs": {
      "adminLogChannel": "3333333333333333333",
      "normalLogChannel": "4444444444444444444",
      "ratingChannel": "5555555555555555555"
    },
    "updatedAt": "2024-01-15T12:45:00Z"
  }
}`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* POST /settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Save className="h-5 w-5" />
              POST /api/settings
            </CardTitle>
            <CardDescription>
              تحديث إعدادات النظام
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium">معاملات الطلب (Request Body)</h4>
              <div className="space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">bot</span>
                      <Badge variant="outline">object</Badge>
                      <Badge variant="secondary">اختياري</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">إعدادات البوت</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">messages</span>
                      <Badge variant="outline">object</Badge>
                      <Badge variant="secondary">اختياري</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">رسائل النظام</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">notifications</span>
                      <Badge variant="outline">object</Badge>
                      <Badge variant="secondary">اختياري</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">إعدادات الإشعارات</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">advanced</span>
                      <Badge variant="outline">object</Badge>
                      <Badge variant="secondary">اختياري</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">الإعدادات المتقدمة</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">مثال على الطلب</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`POST /api/settings
Authorization: Bearer YOUR_TOKEN
Content-Type: application/json

{
  "bot": {
    "ticketCategory": "1234567890123456789",
    "ticketSendChannel": "9876543210987654321",
    "supportRoles": [
      "1111111111111111111",
      "2222222222222222222"
    ]
  },
  "messages": {
    "welcomeMessage": "مرحباً بك في نظام التذاكر!",
    "closeMessage": "تم إغلاق تذكرتك. شكراً لك!"
  },
  "advanced": {
    "maxTicketsPerUser": 3,
    "autoCloseTime": 24,
    "ratingsEnabled": true
  }
}`}
                </pre>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">مثال على الاستجابة</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`{
  "success": true,
  "data": {
    "message": "تم تحديث الإعدادات بنجاح",
    "updatedFields": [
      "bot.ticketCategory",
      "bot.ticketSendChannel",
      "bot.supportRoles",
      "messages.welcomeMessage",
      "messages.closeMessage",
      "advanced.maxTicketsPerUser",
      "advanced.autoCloseTime",
      "advanced.ratingsEnabled"
    ],
    "settings": {
      "bot": {
        "ticketCategory": "1234567890123456789",
        "ticketSendChannel": "9876543210987654321",
        "supportRoles": [
          "1111111111111111111",
          "2222222222222222222"
        ]
      },
      "messages": {
        "welcomeMessage": "مرحباً بك في نظام التذاكر!",
        "closeMessage": "تم إغلاق تذكرتك. شكراً لك!"
      },
      "advanced": {
        "maxTicketsPerUser": 3,
        "autoCloseTime": 24,
        "ratingsEnabled": true
      }
    },
    "updatedAt": "2024-01-15T12:45:00Z"
  }
}`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* POST /settings/validate */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5" />
              POST /api/settings/validate
            </CardTitle>
            <CardDescription>
              التحقق من صحة الإعدادات قبل الحفظ
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium">معاملات الطلب (Request Body)</h4>
              <div className="space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">settings</span>
                      <Badge variant="outline">object</Badge>
                      <Badge variant="destructive">مطلوب</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">الإعدادات المراد التحقق منها</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">validateDiscord</span>
                      <Badge variant="outline">boolean</Badge>
                      <Badge variant="secondary">اختياري</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">التحقق من صحة معرفات Discord (افتراضي: true)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">مثال على الطلب</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`POST /api/settings/validate
Authorization: Bearer YOUR_TOKEN
Content-Type: application/json

{
  "settings": {
    "bot": {
      "ticketCategory": "1234567890123456789",
      "ticketSendChannel": "9876543210987654321",
      "supportRoles": [
        "1111111111111111111"
      ]
    }
  },
  "validateDiscord": true
}`}
                </pre>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">مثال على الاستجابة</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`{
  "success": true,
  "data": {
    "valid": true,
    "errors": [],
    "warnings": [
      {
        "field": "bot.supportRoles",
        "message": "يُنصح بإضافة أكثر من رتبة دعم"
      }
    ],
    "validatedFields": [
      "bot.ticketCategory",
      "bot.ticketSendChannel",
      "bot.supportRoles"
    ]
  }
}`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Settings Schema */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="h-5 w-5" />
              هيكل الإعدادات
            </CardTitle>
            <CardDescription>
              هيكل البيانات الكامل للإعدادات
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium">إعدادات البوت</h4>
              <div className="space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">ticketCategory</span>
                      <Badge variant="outline">string</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">معرف قسم التذاكر</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">ticketSendChannel</span>
                      <Badge variant="outline">string</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">معرف قناة إرسال التذاكر</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">supportRoles</span>
                      <Badge variant="outline">array</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">رتب الدعم</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">رسائل النظام</h4>
              <div className="space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">welcomeMessage</span>
                      <Badge variant="outline">string</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">رسالة الترحيب</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">closeMessage</span>
                      <Badge variant="outline">string</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">رسالة الإغلاق</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">panelMessage</span>
                      <Badge variant="outline">string</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">رسالة لوحة التذاكر</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">الإعدادات المتقدمة</h4>
              <div className="space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">maxTicketsPerUser</span>
                      <Badge variant="outline">number</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">الحد الأقصى للتذاكر لكل مستخدم</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">autoCloseTime</span>
                      <Badge variant="outline">number</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">وقت الإغلاق التلقائي (ساعات)</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">ratingsEnabled</span>
                      <Badge variant="outline">boolean</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">تفعيل التقييمات</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">transcriptsEnabled</span>
                      <Badge variant="outline">boolean</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">تفعيل النصوص</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Error Responses */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5" />
              استجابات الأخطاء
            </CardTitle>
            <CardDescription>
              الأخطاء الشائعة في API الإعدادات
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-medium">400 - Bad Request</h4>
                <div className="bg-muted p-4 rounded-lg">
                  <pre className="text-sm overflow-x-auto">
{`{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "الإعدادات المرسلة غير صحيحة",
    "details": {
      "field": "bot.ticketCategory",
      "reason": "معرف القسم غير صحيح"
    }
  }
}`}
                  </pre>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium">403 - Forbidden</h4>
                <div className="bg-muted p-4 rounded-lg">
                  <pre className="text-sm overflow-x-auto">
{`{
  "success": false,
  "error": {
    "code": "INSUFFICIENT_PERMISSIONS",
    "message": "ليس لديك صلاحية لتعديل الإعدادات",
    "details": {
      "requiredRole": "admin",
      "userRole": "support"
    }
  }
}`}
                  </pre>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium">409 - Conflict</h4>
                <div className="bg-muted p-4 rounded-lg">
                  <pre className="text-sm overflow-x-auto">
{`{
  "success": false,
  "error": {
    "code": "SETTINGS_CONFLICT",
    "message": "تعارض في الإعدادات",
    "details": {
      "conflictingFields": [
        "bot.ticketCategory",
        "bot.ticketSendChannel"
      ],
      "reason": "القناة المحددة لا تنتمي للقسم المحدد"
    }
  }
}`}
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
            <strong>أفضل الممارسات:</strong> استخدم التحقق من الإعدادات قبل الحفظ. 
            احتفظ بنسخة احتياطية من الإعدادات المهمة. تأكد من صحة معرفات Discord قبل التحديث.
          </AlertDescription>
        </Alert>
      </div>
    </DocsLayout>
  )
}
