import { DocsLayout } from "@/components/docs-layout"
import { arNavigation } from "@/lib/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { 
  Ticket, 
  MessageSquare, 
  Clock, 
  User,
  CheckCircle,
  AlertCircle,
  Info,
  Filter,
  Search,
  Plus
} from "lucide-react"

export default function DashboardTickets() {
  return (
    <DocsLayout navigation={arNavigation} lang="ar">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Ticket className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold">إدارة التذاكر</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            إدارة شاملة لجميع التذاكر من واجهة واحدة
          </p>
        </div>

        {/* Quick Actions */}
        <div className="flex flex-wrap gap-4">
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            تذكرة جديدة
          </Button>
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            فلترة
          </Button>
          <Button variant="outline">
            <Search className="h-4 w-4 mr-2" />
            بحث
          </Button>
        </div>

        {/* Ticket Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">التذاكر النشطة</CardTitle>
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">45</div>
              <p className="text-xs text-muted-foreground">
                +3 من اليوم
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">في الانتظار</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">
                تحتاج رد
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">تم حلها</CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,177</div>
              <p className="text-xs text-muted-foreground">
                هذا الشهر
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">متوسط وقت الحل</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2.5</div>
              <p className="text-xs text-muted-foreground">
                ساعة
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Ticket Categories */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">أنواع التذاكر</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                  دعم تقني
                </CardTitle>
                <CardDescription>
                  المشاكل التقنية والمساعدة الفنية
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">نشطة</span>
                    <Badge variant="secondary">15</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">مغلقة</span>
                    <Badge variant="outline">342</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  استفسار عام
                </CardTitle>
                <CardDescription>
                  الأسئلة العامة والاستفسارات
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">نشطة</span>
                    <Badge variant="secondary">8</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">مغلقة</span>
                    <Badge variant="outline">156</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  شكوى
                </CardTitle>
                <CardDescription>
                  الشكاوى والبلاغات
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">نشطة</span>
                    <Badge variant="secondary">3</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">مغلقة</span>
                    <Badge variant="outline">89</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-purple-500"></div>
                  طلب ميزة
                </CardTitle>
                <CardDescription>
                  طلبات الميزات الجديدة والتحسينات
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">نشطة</span>
                    <Badge variant="secondary">7</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">مغلقة</span>
                    <Badge variant="outline">234</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-orange-500"></div>
                  أخرى
                </CardTitle>
                <CardDescription>
                  التذاكر الأخرى والمتنوعة
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">نشطة</span>
                    <Badge variant="secondary">12</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">مغلقة</span>
                    <Badge variant="outline">356</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Ticket Management Features */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">مميزات إدارة التذاكر</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5" />
                  إدارة المحادثات
                </CardTitle>
                <CardDescription>
                  عرض وإدارة محادثات التذاكر
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">عرض جميع الرسائل</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">إضافة ملاحظات خاصة</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">تتبع حالة التذكرة</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">إرفاق الملفات</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  إدارة المستخدمين
                </CardTitle>
                <CardDescription>
                  معلومات وإدارة المستخدمين
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">عرض معلومات المستخدم</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">تاريخ التذاكر السابقة</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">تقييم المستخدم</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">حظر/إلغاء حظر</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Ticket Actions */}
        <Card>
          <CardHeader>
            <CardTitle>إجراءات التذاكر</CardTitle>
            <CardDescription>
              الإجراءات المتاحة لإدارة التذاكر
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-medium">إجراءات أساسية</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                    <span className="text-sm">استلام التذكرة</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-green-500"></div>
                    <span className="text-sm">إغلاق التذكرة</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                    <span className="text-sm">تغيير الأولوية</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                    <span className="text-sm">تغيير الفئة</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-medium">إجراءات متقدمة</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-red-500"></div>
                    <span className="text-sm">حذف التذكرة</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-orange-500"></div>
                    <span className="text-sm">نقل التذكرة</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-indigo-500"></div>
                    <span className="text-sm">إضافة ملاحظة</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-pink-500"></div>
                    <span className="text-sm">تصدير التذكرة</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Filtering and Search */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Filter className="h-5 w-5" />
              الفلترة والبحث
            </CardTitle>
            <CardDescription>
              أدوات متقدمة للبحث والفلترة
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-medium">فلترة حسب</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">الحالة</Badge>
                    <span className="text-sm text-muted-foreground">مفتوح، مغلق، في الانتظار</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">النوع</Badge>
                    <span className="text-sm text-muted-foreground">دعم تقني، استفسار، شكوى</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">الأولوية</Badge>
                    <span className="text-sm text-muted-foreground">عاجل، عادي، منخفض</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">التاريخ</Badge>
                    <span className="text-sm text-muted-foreground">اليوم، الأسبوع، الشهر</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-medium">البحث في</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">محتوى الرسائل</Badge>
                    <span className="text-sm text-muted-foreground">البحث في نص الرسائل</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">اسم المستخدم</Badge>
                    <span className="text-sm text-muted-foreground">البحث حسب المستخدم</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">معرف التذكرة</Badge>
                    <span className="text-sm text-muted-foreground">البحث بالمعرف المحدد</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">الملاحظات</Badge>
                    <span className="text-sm text-muted-foreground">البحث في الملاحظات</span>
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
            <strong>نصيحة:</strong> استخدم الفلترة والبحث للعثور على التذاكر بسرعة. 
            يمكنك حفظ فلاتر مخصصة للاستخدام المتكرر.
          </AlertDescription>
        </Alert>
      </div>
    </DocsLayout>
  )
}
