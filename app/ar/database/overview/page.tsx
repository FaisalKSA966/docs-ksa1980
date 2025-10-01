import { DocsLayout } from "@/components/docs-layout"
import { arNavigation } from "@/lib/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { 
  Database, 
  Server, 
  Cloud, 
  Shield,
  Clock,
  CheckCircle,
  AlertTriangle,
  Info,
  RefreshCw,
  Download,
  Upload
} from "lucide-react"

export default function DatabaseOverview() {
  return (
    <DocsLayout navigation={arNavigation} lang="ar">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Database className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold">نظام قاعدة البيانات</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            نظام قاعدة بيانات متقدم مع MongoDB ونسخ احتياطية JSON
          </p>
        </div>

        {/* Database Status */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">MongoDB Atlas</CardTitle>
              <Cloud className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                <span className="text-sm font-medium">متصل</span>
              </div>
              <p className="text-xs text-muted-foreground">
                آخر تحديث: منذ دقيقتين
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">JSON Backup</CardTitle>
              <Server className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                <span className="text-sm font-medium">نشط</span>
              </div>
              <p className="text-xs text-muted-foreground">
                آخر نسخة: منذ 5 دقائق
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">إجمالي السجلات</CardTitle>
              <Database className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2,847</div>
              <p className="text-xs text-muted-foreground">
                +23 من اليوم
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">حجم قاعدة البيانات</CardTitle>
              <Shield className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">45.2</div>
              <p className="text-xs text-muted-foreground">
                ميجابايت
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Database Architecture */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">البنية المعمارية</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Cloud className="h-5 w-5" />
                  MongoDB Atlas
                </CardTitle>
                <CardDescription>
                  قاعدة البيانات الأساسية في السحابة
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">نسخ احتياطية تلقائية</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">تشفير البيانات</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">توسع تلقائي</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">مراقبة الأداء</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">الحالة</span>
                    <Badge variant="default">متصل</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">المنطقة</span>
                    <span className="text-sm">us-east-1</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">الإصدار</span>
                    <span className="text-sm">6.0</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Server className="h-5 w-5" />
                  JSON Backup System
                </CardTitle>
                <CardDescription>
                  نظام احتياطي محلي للبيانات
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">نسخ احتياطية دورية</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">استرداد سريع</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">تزامن فوري</span>
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
                  <div className="flex items-center justify-between">
                    <span className="text-sm">عدد النسخ</span>
                    <span className="text-sm">30</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Collections Overview */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">المجموعات (Collections)</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="h-5 w-5" />
                  tickets
                </CardTitle>
                <CardDescription>
                  جميع التذاكر في النظام
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">عدد السجلات</span>
                    <Badge variant="secondary">1,234</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">الحجم</span>
                    <span className="text-sm">28.5 MB</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">الفهرسة</span>
                    <Badge variant="outline">مفهرس</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="h-5 w-5" />
                  users
                </CardTitle>
                <CardDescription>
                  معلومات المستخدمين
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">عدد السجلات</span>
                    <Badge variant="secondary">892</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">الحجم</span>
                    <span className="text-sm">12.3 MB</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">الفهرسة</span>
                    <Badge variant="outline">مفهرس</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="h-5 w-5" />
                  settings
                </CardTitle>
                <CardDescription>
                  إعدادات النظام
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">عدد السجلات</span>
                    <Badge variant="secondary">1</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">الحجم</span>
                    <span className="text-sm">0.8 MB</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">الفهرسة</span>
                    <Badge variant="outline">مفهرس</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Synchronization */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <RefreshCw className="h-5 w-5" />
              نظام التزامن
            </CardTitle>
            <CardDescription>
              تزامن فوري بين قاعدة البيانات والنسخ الاحتياطية
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-medium">مميزات التزامن</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">تزامن فوري</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">تزامن ثنائي الاتجاه</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">حل التعارضات</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">مراقبة الحالة</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-medium">إحصائيات التزامن</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">آخر تزامن</span>
                    <span className="text-sm">منذ دقيقتين</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">معدل النجاح</span>
                    <span className="text-sm">99.8%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">متوسط وقت التزامن</span>
                    <span className="text-sm">150ms</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">التزامنات اليوم</span>
                    <span className="text-sm">2,847</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Backup Management */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">إدارة النسخ الاحتياطية</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Download className="h-5 w-5" />
                  النسخ الاحتياطية التلقائية
                </CardTitle>
                <CardDescription>
                  نسخ احتياطية دورية ومجدولة
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">النسخ اليومية</span>
                    <Badge variant="default">نشط</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">النسخ الأسبوعية</span>
                    <Badge variant="default">نشط</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">النسخ الشهرية</span>
                    <Badge variant="default">نشط</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">مدة الاحتفاظ</span>
                    <span className="text-sm">30 يوم</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-medium text-sm">النسخ الأخيرة</h4>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span>backup_2024_01_15.json</span>
                      <span>منذ 5 دقائق</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span>backup_2024_01_14.json</span>
                      <span>منذ يوم</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span>backup_2024_01_13.json</span>
                      <span>منذ يومين</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Upload className="h-5 w-5" />
                  استرداد البيانات
                </CardTitle>
                <CardDescription>
                  استرداد البيانات من النسخ الاحتياطية
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">استرداد فوري</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">استرداد جزئي</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">استرداد كامل</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">التحقق من التكامل</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Button variant="outline" className="w-full">
                    <Download className="h-4 w-4 mr-2" />
                    تحميل نسخة احتياطية
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Upload className="h-4 w-4 mr-2" />
                    استرداد من نسخة
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Performance Monitoring */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              مراقبة الأداء
            </CardTitle>
            <CardDescription>
              إحصائيات أداء قاعدة البيانات
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm">متوسط وقت الاستجابة</span>
                  <span className="text-sm font-medium">45ms</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{width: '75%'}}></div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm">الاستعلامات/الثانية</span>
                  <span className="text-sm font-medium">156</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{width: '60%'}}></div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm">استخدام الذاكرة</span>
                  <span className="text-sm font-medium">68%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-yellow-500 h-2 rounded-full" style={{width: '68%'}}></div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm">استخدام القرص</span>
                  <span className="text-sm font-medium">23%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{width: '23%'}}></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Security */}
        <Alert>
          <Shield className="h-4 w-4" />
          <AlertDescription>
            <strong>الأمان:</strong> جميع البيانات مشفرة في التخزين والنقل. 
            النسخ الاحتياطية محمية بكلمات مرور قوية ومشفرة.
          </AlertDescription>
        </Alert>
      </div>
    </DocsLayout>
  )
}
