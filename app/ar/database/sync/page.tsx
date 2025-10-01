import { DocsLayout } from "@/components/docs-layout"
import { arNavigation } from "@/lib/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { 
  RefreshCw, 
  Database, 
  Server, 
  Cloud,
  Clock,
  CheckCircle,
  AlertTriangle,
  Info,
  ArrowRight,
  ArrowLeft,
  Zap,
  Shield
} from "lucide-react"

export default function DatabaseSync() {
  return (
    <DocsLayout navigation={arNavigation} lang="ar">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <RefreshCw className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold">نظام التزامن</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            تزامن فوري بين قاعدة البيانات والنسخ الاحتياطية
          </p>
        </div>

        {/* Sync Status */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">حالة التزامن</CardTitle>
              <RefreshCw className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                <span className="text-sm font-medium">نشط</span>
              </div>
              <p className="text-xs text-muted-foreground">
                آخر تزامن: منذ دقيقتين
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">معدل النجاح</CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">99.8%</div>
              <p className="text-xs text-muted-foreground">
                +0.1% من الأسبوع الماضي
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">متوسط وقت التزامن</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">150</div>
              <p className="text-xs text-muted-foreground">
                مللي ثانية
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">التزامنات اليوم</CardTitle>
              <Zap className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2,847</div>
              <p className="text-xs text-muted-foreground">
                +156 من الأمس
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Sync Architecture */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">بنية التزامن</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Cloud className="h-5 w-5" />
                  MongoDB Atlas
                </CardTitle>
                <CardDescription>
                  قاعدة البيانات الأساسية
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">البيانات الأساسية</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">تزامن فوري</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">نسخ احتياطية</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">الحالة</span>
                    <Badge variant="default">متصل</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">الاستجابة</span>
                    <span className="text-sm">45ms</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <RefreshCw className="h-5 w-5" />
                  Sync Manager
                </CardTitle>
                <CardDescription>
                  مدير التزامن المركزي
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">مراقبة التحديثات</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">حل التعارضات</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">إدارة الأخطاء</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">الحالة</span>
                    <Badge variant="default">نشط</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">العمليات/الثانية</span>
                    <span className="text-sm">156</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Server className="h-5 w-5" />
                  JSON Backup
                </CardTitle>
                <CardDescription>
                  النسخ الاحتياطية المحلية
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">نسخ احتياطية</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">استرداد سريع</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">ضغط البيانات</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">الحالة</span>
                    <Badge variant="default">نشط</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">آخر نسخة</span>
                    <span className="text-sm">منذ 5 دقائق</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Sync Flow */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ArrowRight className="h-5 w-5" />
              تدفق التزامن
            </CardTitle>
            <CardDescription>
              كيفية عمل نظام التزامن خطوة بخطوة
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-medium">
                  1
                </div>
                <div className="flex-1">
                  <h4 className="font-medium">تحديث البيانات</h4>
                  <p className="text-sm text-muted-foreground">
                    تحديث البيانات في MongoDB Atlas أو JSON Backup
                  </p>
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground" />
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-medium">
                  2
                </div>
                <div className="flex-1">
                  <h4 className="font-medium">كشف التغيير</h4>
                  <p className="text-sm text-muted-foreground">
                    Sync Manager يكشف التغيير في البيانات
                  </p>
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground" />
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-medium">
                  3
                </div>
                <div className="flex-1">
                  <h4 className="font-medium">التحقق من التعارضات</h4>
                  <p className="text-sm text-muted-foreground">
                    فحص وجود تعارضات في البيانات
                  </p>
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground" />
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-medium">
                  4
                </div>
                <div className="flex-1">
                  <h4 className="font-medium">تطبيق التحديث</h4>
                  <p className="text-sm text-muted-foreground">
                    تطبيق التحديث على جميع المصادر
                  </p>
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground" />
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-medium">
                  5
                </div>
                <div className="flex-1">
                  <h4 className="font-medium">تأكيد التزامن</h4>
                  <p className="text-sm text-muted-foreground">
                    تأكيد نجاح التزامن وتسجيل العملية
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Sync Types */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">أنواع التزامن</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5" />
                  التزامن الفوري
                </CardTitle>
                <CardDescription>
                  تزامن فوري عند حدوث تغيير
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">تحديث فوري</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">أقل من 200ms</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">موثوقية عالية</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-medium text-sm">الاستخدام:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1 mr-4">
                    <li>• تحديث التذاكر</li>
                    <li>• إضافة الرسائل</li>
                    <li>• تغيير الإعدادات</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  التزامن المجدول
                </CardTitle>
                <CardDescription>
                  تزامن دوري في أوقات محددة
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">تزامن دوري</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">كل 5 دقائق</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">تحسين الأداء</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-medium text-sm">الاستخدام:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1 mr-4">
                    <li>• النسخ الاحتياطية</li>
                    <li>• تنظيف البيانات</li>
                    <li>• تحديث الإحصائيات</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Conflict Resolution */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              حل التعارضات
            </CardTitle>
            <CardDescription>
              كيفية حل التعارضات في البيانات
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-medium">استراتيجيات حل التعارضات</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Last Write Wins - آخر كتابة تفوز</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Timestamp Priority - أولوية الوقت</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">User Priority - أولوية المستخدم</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Manual Resolution - حل يدوي</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium">مثال على حل التعارض</h4>
                <div className="bg-muted p-4 rounded-lg">
                  <pre className="text-sm overflow-x-auto">
{`// تعارض في تحديث التذكرة
Conflict Detected:
- MongoDB: status = "closed", closedAt = "2024-01-15T10:30:00Z"
- JSON: status = "open", closedAt = null

Resolution Strategy: Last Write Wins
- MongoDB timestamp: 2024-01-15T10:30:00Z
- JSON timestamp: 2024-01-15T10:25:00Z

Result: MongoDB version wins (newer timestamp)
Final: status = "closed", closedAt = "2024-01-15T10:30:00Z"`}
                  </pre>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Monitoring and Alerts */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">المراقبة والتنبيهات</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  تنبيهات الأخطاء
                </CardTitle>
                <CardDescription>
                  تنبيهات عند حدوث مشاكل في التزامن
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">فشل التزامن</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">انقطاع الاتصال</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">تعارضات البيانات</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">بطء الأداء</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Info className="h-5 w-5" />
                  إحصائيات الأداء
                </CardTitle>
                <CardDescription>
                  مراقبة أداء نظام التزامن
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">معدل النجاح</span>
                    <span className="text-sm font-medium">99.8%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">متوسط وقت التزامن</span>
                    <span className="text-sm font-medium">150ms</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">التزامنات/الساعة</span>
                    <span className="text-sm font-medium">118</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">التعارضات المحلولة</span>
                    <span className="text-sm font-medium">23</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Best Practices */}
        <Alert>
          <Info className="h-4 w-4" />
          <AlertDescription>
            <strong>أفضل الممارسات:</strong> راقب أداء التزامن بانتظام. 
            تأكد من وجود نسخ احتياطية. استخدم التزامن المجدول للعمليات الثقيلة.
          </AlertDescription>
        </Alert>
      </div>
    </DocsLayout>
  )
}
