import { DocsLayout } from "@/components/docs-layout"
import { arNavigation } from "@/lib/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Ticket, 
  Users, 
  BarChart3, 
  Settings, 
  Shield, 
  Clock,
  CheckCircle,
  AlertCircle,
  Star,
  MessageSquare
} from "lucide-react"

export default function DashboardOverview() {
  return (
    <DocsLayout navigation={arNavigation} lang="ar">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <BarChart3 className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold">لوحة التحكم</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            إدارة شاملة لنظام التذاكر مع واجهة ويب حديثة وسهلة الاستخدام
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">إجمالي التذاكر</CardTitle>
              <Ticket className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,234</div>
              <p className="text-xs text-muted-foreground">
                +12% من الشهر الماضي
              </p>
            </CardContent>
          </Card>

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
              <CardTitle className="text-sm font-medium">المستخدمين</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">892</div>
              <p className="text-xs text-muted-foreground">
                +8% من الشهر الماضي
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">متوسط التقييم</CardTitle>
              <Star className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4.8</div>
              <p className="text-xs text-muted-foreground">
                من أصل 5.0
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5" />
                إدارة التذاكر
              </CardTitle>
              <CardDescription>
                عرض وإدارة جميع التذاكر من واجهة واحدة
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm">التذاكر المفتوحة</span>
                  <Badge variant="secondary">45</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">في الانتظار</span>
                  <Badge variant="outline">12</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">تم حلها</span>
                  <Badge variant="default">1,177</Badge>
                </div>
              </div>
              <Button className="w-full">
                عرض جميع التذاكر
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                الإحصائيات
              </CardTitle>
              <CardDescription>
                تحليل مفصل لأداء النظام
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm">متوسط وقت الحل</span>
                  <span className="text-sm font-medium">2.5 ساعة</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">معدل الرضا</span>
                  <span className="text-sm font-medium">96%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">التذاكر اليوم</span>
                  <span className="text-sm font-medium">23</span>
                </div>
              </div>
              <Button variant="outline" className="w-full">
                عرض التقارير
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Features Grid */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">المميزات الرئيسية</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Shield className="h-5 w-5 text-green-500" />
                  أمان متقدم
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  نظام حماية متقدم مع تشفير البيانات والتحقق من الصلاحيات
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Clock className="h-5 w-5 text-blue-500" />
                  تزامن فوري
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  تزامن فوري بين البوت والموقع مع قاعدة بيانات موحدة
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <CheckCircle className="h-5 w-5 text-purple-500" />
                  سهولة الاستخدام
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  واجهة بديهية وسهلة الاستخدام للمستخدمين والإداريين
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <BarChart3 className="h-5 w-5 text-orange-500" />
                  تقارير مفصلة
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  إحصائيات وتقارير مفصلة عن أداء النظام والمستخدمين
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Users className="h-5 w-5 text-red-500" />
                  إدارة المستخدمين
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  إدارة شاملة للمستخدمين والصلاحيات والأدوار
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <AlertCircle className="h-5 w-5 text-yellow-500" />
                  إشعارات ذكية
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  نظام إشعارات متقدم للمستخدمين والإداريين
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Getting Started */}
        <Card>
          <CardHeader>
            <CardTitle>البدء السريع</CardTitle>
            <CardDescription>
              خطوات بسيطة لبدء استخدام لوحة التحكم
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-medium">
                  1
                </div>
                <div>
                  <h4 className="font-medium">تسجيل الدخول</h4>
                  <p className="text-sm text-muted-foreground">
                    سجل دخولك عبر Discord للوصول للوحة التحكم
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-medium">
                  2
                </div>
                <div>
                  <h4 className="font-medium">إعداد النظام</h4>
                  <p className="text-sm text-muted-foreground">
                    قم بإعداد البوت والإعدادات الأساسية
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-medium">
                  3
                </div>
                <div>
                  <h4 className="font-medium">بدء الاستخدام</h4>
                  <p className="text-sm text-muted-foreground">
                    ابدأ في إدارة التذاكر والمستخدمين
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DocsLayout>
  )
}
