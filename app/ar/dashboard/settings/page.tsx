import { DocsLayout } from "@/components/docs-layout"
import { arNavigation } from "@/lib/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { 
  Settings, 
  Bot, 
  MessageSquare, 
  Users, 
  Shield,
  Clock,
  Bell,
  Save,
  RotateCcw,
  Info,
  CheckCircle,
  AlertTriangle
} from "lucide-react"

export default function DashboardSettings() {
  return (
    <DocsLayout navigation={arNavigation} lang="ar">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Settings className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold">إعدادات النظام</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            إعداد وتخصيص نظام التذاكر حسب احتياجاتك
          </p>
        </div>

        {/* Settings Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bot className="h-5 w-5" />
                إعدادات البوت
              </CardTitle>
              <CardDescription>
                إعدادات أساسية للبوت وقنوات Discord
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="space-y-2">
                  <label className="text-sm font-medium">معرف قسم التذاكر</label>
                  <div className="flex items-center gap-2">
                    <input 
                      type="text" 
                      placeholder="1234567890123456789"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                    <Button variant="outline" size="sm">تحقق</Button>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    القسم الذي ستُنشأ فيه قنوات التذاكر
                  </p>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">معرف قناة إرسال التذاكر</label>
                  <div className="flex items-center gap-2">
                    <input 
                      type="text" 
                      placeholder="1234567890123456789"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                    <Button variant="outline" size="sm">تحقق</Button>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    القناة التي ستظهر فيها لوحة التذاكر
                  </p>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">رتب الدعم</label>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <input 
                        type="text" 
                        placeholder="1234567890123456789"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      />
                      <Button variant="outline" size="sm">إضافة</Button>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">مدير الدعم</span>
                        <Badge variant="secondary">1234567890123456789</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">دعم تقني</span>
                        <Badge variant="secondary">9876543210987654321</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                رسائل النظام
              </CardTitle>
              <CardDescription>
                تخصيص رسائل النظام والترحيب
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="space-y-2">
                  <label className="text-sm font-medium">رسالة الترحيب</label>
                  <textarea 
                    placeholder="مرحباً بك في نظام التذاكر! كيف يمكننا مساعدتك؟"
                    className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                  <p className="text-xs text-muted-foreground">
                    الرسالة التي تظهر عند إنشاء تذكرة جديدة
                  </p>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">رسالة إغلاق التذكرة</label>
                  <textarea 
                    placeholder="تم إغلاق تذكرتك. شكراً لتواصلك معنا!"
                    className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">رسالة لوحة التذاكر</label>
                  <textarea 
                    placeholder="مرحباً بك في نظام التذاكر! اختر نوع المساعدة التي تحتاجها:"
                    className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Advanced Settings */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                الإعدادات المتقدمة
              </CardTitle>
              <CardDescription>
                إعدادات متقدمة للنظام والأداء
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="space-y-2">
                  <label className="text-sm font-medium">الحد الأقصى للتذاكر لكل مستخدم</label>
                  <input 
                    type="number" 
                    placeholder="3"
                    min="1"
                    max="10"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">وقت الإغلاق التلقائي (ساعات)</label>
                  <input 
                    type="number" 
                    placeholder="24"
                    min="1"
                    max="168"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                  <p className="text-xs text-muted-foreground">
                    إغلاق التذاكر غير النشطة تلقائياً
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <label className="text-sm font-medium">تفعيل التقييمات</label>
                      <p className="text-xs text-muted-foreground">السماح للمستخدمين بتقييم الخدمة</p>
                    </div>
                    <input type="checkbox" defaultChecked className="h-4 w-4" />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <label className="text-sm font-medium">تفعيل النصوص</label>
                      <p className="text-xs text-muted-foreground">حفظ نصوص التذاكر المغلقة</p>
                    </div>
                    <input type="checkbox" defaultChecked className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                الإشعارات
              </CardTitle>
              <CardDescription>
                إعدادات الإشعارات والتذكيرات
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <label className="text-sm font-medium">إشعار عند إنشاء تذكرة</label>
                      <p className="text-xs text-muted-foreground">إرسال إشعار للمديرين</p>
                    </div>
                    <input type="checkbox" defaultChecked className="h-4 w-4" />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <label className="text-sm font-medium">إشعار عند إغلاق تذكرة</label>
                      <p className="text-xs text-muted-foreground">إرسال إشعار لصاحب التذكرة</p>
                    </div>
                    <input type="checkbox" defaultChecked className="h-4 w-4" />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <label className="text-sm font-medium">تذكير بالتذاكر المعلقة</label>
                      <p className="text-xs text-muted-foreground">تذكير دوري بالتذاكر غير المجابة</p>
                    </div>
                    <input type="checkbox" defaultChecked className="h-4 w-4" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">فترة التذكير (دقائق)</label>
                  <input 
                    type="number" 
                    placeholder="30"
                    min="5"
                    max="1440"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Log Channels */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              قنوات السجلات
            </CardTitle>
            <CardDescription>
              إعداد قنوات تسجيل الأحداث والإجراءات
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-3">
                <div className="space-y-2">
                  <label className="text-sm font-medium">قناة سجل الإدارة</label>
                  <div className="flex items-center gap-2">
                    <input 
                      type="text" 
                      placeholder="1234567890123456789"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                    <Button variant="outline" size="sm">تحقق</Button>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    تسجيل الإجراءات الإدارية
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="space-y-2">
                  <label className="text-sm font-medium">قناة سجل التذاكر</label>
                  <div className="flex items-center gap-2">
                    <input 
                      type="text" 
                      placeholder="1234567890123456789"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                    <Button variant="outline" size="sm">تحقق</Button>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    تسجيل أحداث التذاكر
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="space-y-2">
                  <label className="text-sm font-medium">قناة التقييمات</label>
                  <div className="flex items-center gap-2">
                    <input 
                      type="text" 
                      placeholder="1234567890123456789"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                    <Button variant="outline" size="sm">تحقق</Button>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    عرض تقييمات المستخدمين
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="flex flex-wrap gap-4">
          <Button className="flex items-center gap-2">
            <Save className="h-4 w-4" />
            حفظ الإعدادات
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <RotateCcw className="h-4 w-4" />
            إعادة تعيين
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <Bot className="h-4 w-4" />
            نشر لوحة التذاكر
          </Button>
        </div>

        {/* Status */}
        <Alert>
          <CheckCircle className="h-4 w-4" />
          <AlertDescription>
            جميع الإعدادات محفوظة ومطبقة بنجاح. البوت يعمل بشكل طبيعي.
          </AlertDescription>
        </Alert>

        {/* Tips */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Info className="h-5 w-5" />
              نصائح مهمة
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-2">
              <h4 className="font-medium text-sm">كيفية الحصول على معرفات Discord:</h4>
              <ol className="text-sm text-muted-foreground space-y-1 mr-4">
                <li>1. فعل Developer Mode في Discord</li>
                <li>2. اضغط كليك يمين على القناة أو القسم</li>
                <li>3. اختر "Copy ID"</li>
                <li>4. الصق المعرف في الحقل المناسب</li>
              </ol>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium text-sm">إعدادات الأمان:</h4>
              <ul className="text-sm text-muted-foreground space-y-1 mr-4">
                <li>• تأكد من أن البوت لديه الصلاحيات المطلوبة</li>
                <li>• استخدم قنوات منفصلة للسجلات</li>
                <li>• راجع الإعدادات بانتظام</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </DocsLayout>
  )
}
