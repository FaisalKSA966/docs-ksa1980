import { DocsLayout } from "@/components/docs-layout"
import { arNavigation } from "@/lib/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { 
  BarChart3, 
  TrendingUp, 
  TrendingDown,
  Users, 
  Clock,
  Star,
  MessageSquare,
  CheckCircle,
  AlertCircle,
  Info,
  Download,
  Calendar
} from "lucide-react"

export default function DashboardStatistics() {
  return (
    <DocsLayout navigation={arNavigation} lang="ar">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <BarChart3 className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold">الإحصائيات والتقارير</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            تحليل مفصل لأداء النظام وإحصائيات شاملة
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">إجمالي التذاكر</CardTitle>
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,234</div>
              <div className="flex items-center text-xs text-green-600">
                <TrendingUp className="h-3 w-3 mr-1" />
                +12% من الشهر الماضي
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">معدل الحل</CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">94%</div>
              <div className="flex items-center text-xs text-green-600">
                <TrendingUp className="h-3 w-3 mr-1" />
                +2% من الشهر الماضي
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">متوسط وقت الحل</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2.5</div>
              <div className="flex items-center text-xs text-red-600">
                <TrendingDown className="h-3 w-3 mr-1" />
                +0.3 ساعة من الشهر الماضي
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">متوسط التقييم</CardTitle>
              <Star className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4.8</div>
              <div className="flex items-center text-xs text-green-600">
                <TrendingUp className="h-3 w-3 mr-1" />
                +0.1 من الشهر الماضي
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                التذاكر حسب النوع
              </CardTitle>
              <CardDescription>
                توزيع التذاكر على الأنواع المختلفة
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                      <span className="text-sm">دعم تقني</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">357</span>
                      <Badge variant="secondary">29%</Badge>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{width: '29%'}}></div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-green-500"></div>
                      <span className="text-sm">استفسار عام</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">164</span>
                      <Badge variant="secondary">13%</Badge>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{width: '13%'}}></div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-red-500"></div>
                      <span className="text-sm">شكوى</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">92</span>
                      <Badge variant="secondary">7%</Badge>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-red-500 h-2 rounded-full" style={{width: '7%'}}></div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-purple-500"></div>
                      <span className="text-sm">طلب ميزة</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">241</span>
                      <Badge variant="secondary">20%</Badge>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{width: '20%'}}></div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-orange-500"></div>
                      <span className="text-sm">أخرى</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">380</span>
                      <Badge variant="secondary">31%</Badge>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-orange-500 h-2 rounded-full" style={{width: '31%'}}></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                التذاكر الشهرية
              </CardTitle>
              <CardDescription>
                عدد التذاكر المفتوحة والمغلقة شهرياً
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">يناير 2024</span>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-green-600">مغلقة: 89</span>
                      <span className="text-sm text-blue-600">مفتوحة: 12</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">فبراير 2024</span>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-green-600">مغلقة: 95</span>
                      <span className="text-sm text-blue-600">مفتوحة: 8</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">مارس 2024</span>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-green-600">مغلقة: 102</span>
                      <span className="text-sm text-blue-600">مفتوحة: 15</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">أبريل 2024</span>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-green-600">مغلقة: 87</span>
                      <span className="text-sm text-blue-600">مفتوحة: 10</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">مايو 2024</span>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-green-600">مغلقة: 112</span>
                      <span className="text-sm text-blue-600">مفتوحة: 18</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Performance Metrics */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">مقاييس الأداء</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  أوقات الاستجابة
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">أول رد</span>
                    <span className="text-sm font-medium">15 دقيقة</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">حل كامل</span>
                    <span className="text-sm font-medium">2.5 ساعة</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">أطول وقت</span>
                    <span className="text-sm font-medium">8 ساعات</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  نشاط المستخدمين
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">مستخدمين نشطين</span>
                    <span className="text-sm font-medium">892</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">جدد هذا الشهر</span>
                    <span className="text-sm font-medium">156</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">متوسط التذاكر/مستخدم</span>
                    <span className="text-sm font-medium">1.4</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="h-5 w-5" />
                  رضا العملاء
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">تقييم إيجابي</span>
                    <span className="text-sm font-medium">89%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">تقييم سلبي</span>
                    <span className="text-sm font-medium">11%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">بدون تقييم</span>
                    <span className="text-sm font-medium">23%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Support Team Performance */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              أداء فريق الدعم
            </CardTitle>
            <CardDescription>
              إحصائيات مفصلة عن أداء أعضاء فريق الدعم
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">أحمد محمد</span>
                    <Badge variant="default">مدير</Badge>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">تذاكر محلولة</span>
                      <span className="text-xs">234</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">متوسط التقييم</span>
                      <span className="text-xs">4.9</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">متوسط وقت الحل</span>
                      <span className="text-xs">1.8 ساعة</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">فاطمة علي</span>
                    <Badge variant="secondary">دعم</Badge>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">تذاكر محلولة</span>
                      <span className="text-xs">189</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">متوسط التقييم</span>
                      <span className="text-xs">4.7</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">متوسط وقت الحل</span>
                      <span className="text-xs">2.1 ساعة</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">محمد حسن</span>
                    <Badge variant="secondary">دعم</Badge>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">تذاكر محلولة</span>
                      <span className="text-xs">156</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">متوسط التقييم</span>
                      <span className="text-xs">4.6</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">متوسط وقت الحل</span>
                      <span className="text-xs">2.8 ساعة</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">نور الدين</span>
                    <Badge variant="outline">متدرب</Badge>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">تذاكر محلولة</span>
                      <span className="text-xs">67</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">متوسط التقييم</span>
                      <span className="text-xs">4.3</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">متوسط وقت الحل</span>
                      <span className="text-xs">3.2 ساعة</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Export and Reports */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Download className="h-5 w-5" />
              التصدير والتقارير
            </CardTitle>
            <CardDescription>
              تصدير الإحصائيات والتقارير بصيغ مختلفة
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
                <Download className="h-5 w-5" />
                <span className="text-sm">PDF</span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
                <Download className="h-5 w-5" />
                <span className="text-sm">Excel</span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
                <Download className="h-5 w-5" />
                <span className="text-sm">CSV</span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span className="text-sm">جدولة</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Insights */}
        <Alert>
          <Info className="h-4 w-4" />
          <AlertDescription>
            <strong>تحليل:</strong> يظهر الأداء تحسناً ملحوظاً في معدل الحل وجودة الخدمة. 
            يُنصح بزيادة عدد أعضاء فريق الدعم خلال ساعات الذروة.
          </AlertDescription>
        </Alert>
      </div>
    </DocsLayout>
  )
}
