import { DocsLayout } from "@/components/docs-layout"
import { arNavigation } from "@/lib/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Clock,
  Star,
  CheckCircle,
  AlertTriangle,
  Info,
  Code,
  Calendar,
  Download
} from "lucide-react"

export default function APIStatistics() {
  return (
    <DocsLayout navigation={arNavigation} lang="ar">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <BarChart3 className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold">API الإحصائيات</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            جلب الإحصائيات والتقارير عبر واجهة برمجة التطبيقات
          </p>
        </div>

        {/* Endpoints Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">GET /stats</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-sm">الإحصائيات العامة</div>
              <p className="text-xs text-muted-foreground">
                نظرة عامة على النظام
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">GET /stats/tickets</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-sm">إحصائيات التذاكر</div>
              <p className="text-xs text-muted-foreground">
                تفاصيل التذاكر
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">GET /stats/users</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-sm">إحصائيات المستخدمين</div>
              <p className="text-xs text-muted-foreground">
                نشاط المستخدمين
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">GET /stats/performance</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-sm">أداء النظام</div>
              <p className="text-xs text-muted-foreground">
                مقاييس الأداء
              </p>
            </CardContent>
          </Card>
        </div>

        {/* GET /stats */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              GET /api/stats
            </CardTitle>
            <CardDescription>
              جلب الإحصائيات العامة للنظام
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium">معاملات الاستعلام (Query Parameters)</h4>
              <div className="space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">period</span>
                      <Badge variant="outline">string</Badge>
                      <Badge variant="secondary">اختياري</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">الفترة الزمنية (day, week, month, year)</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">startDate</span>
                      <Badge variant="outline">string</Badge>
                      <Badge variant="secondary">اختياري</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">تاريخ البداية (YYYY-MM-DD)</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">endDate</span>
                      <Badge variant="outline">string</Badge>
                      <Badge variant="secondary">اختياري</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">تاريخ النهاية (YYYY-MM-DD)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">مثال على الطلب</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`GET /api/stats?period=month&startDate=2024-01-01&endDate=2024-01-31
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
    "overview": {
      "totalTickets": 1234,
      "activeTickets": 45,
      "closedTickets": 1189,
      "totalUsers": 892,
      "averageRating": 4.8,
      "averageCloseTime": 2.5
    },
    "period": {
      "start": "2024-01-01T00:00:00Z",
      "end": "2024-01-31T23:59:59Z",
      "type": "month"
    },
    "trends": {
      "ticketsGrowth": 12.5,
      "usersGrowth": 8.3,
      "ratingChange": 0.1
    }
  }
}`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* GET /stats/tickets */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              GET /api/stats/tickets
            </CardTitle>
            <CardDescription>
              إحصائيات مفصلة عن التذاكر
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium">معاملات الاستعلام (Query Parameters)</h4>
              <div className="space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">category</span>
                      <Badge variant="outline">string</Badge>
                      <Badge variant="secondary">اختياري</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">فلترة حسب الفئة</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">status</span>
                      <Badge variant="outline">string</Badge>
                      <Badge variant="secondary">اختياري</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">فلترة حسب الحالة</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">groupBy</span>
                      <Badge variant="outline">string</Badge>
                      <Badge variant="secondary">اختياري</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">تجميع حسب (day, week, month)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">مثال على الطلب</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`GET /api/stats/tickets?category=technical&groupBy=day&period=week
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
    "summary": {
      "total": 357,
      "open": 15,
      "closed": 342,
      "averageCloseTime": 1.8,
      "averageRating": 4.9
    },
    "byCategory": {
      "technical": 357,
      "general": 164,
      "complaint": 92,
      "feature": 241,
      "other": 380
    },
    "byStatus": {
      "open": 45,
      "claimed": 12,
      "closed": 1177
    },
    "byPriority": {
      "high": 89,
      "normal": 1100,
      "low": 45
    },
    "timeline": [
      {
        "date": "2024-01-15",
        "created": 23,
        "closed": 18,
        "open": 5
      },
      {
        "date": "2024-01-16",
        "created": 19,
        "closed": 22,
        "open": 2
      }
    ]
  }
}`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* GET /stats/users */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              GET /api/stats/users
            </CardTitle>
            <CardDescription>
              إحصائيات المستخدمين ونشاطهم
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium">معاملات الاستعلام (Query Parameters)</h4>
              <div className="space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">role</span>
                      <Badge variant="outline">string</Badge>
                      <Badge variant="secondary">اختياري</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">فلترة حسب الدور</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">activity</span>
                      <Badge variant="outline">string</Badge>
                      <Badge variant="secondary">اختياري</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">فلترة حسب النشاط (active, inactive)</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">limit</span>
                      <Badge variant="outline">number</Badge>
                      <Badge variant="secondary">اختياري</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">عدد النتائج (افتراضي: 50)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">مثال على الطلب</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`GET /api/stats/users?role=support&activity=active&limit=20
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
    "summary": {
      "totalUsers": 892,
      "activeUsers": 156,
      "newUsers": 23,
      "bannedUsers": 5
    },
    "byRole": {
      "admin": 3,
      "moderator": 12,
      "support": 8,
      "member": 869
    },
    "topUsers": [
      {
        "userId": "123456789012345678",
        "username": "أحمد محمد",
        "totalTickets": 15,
        "closedTickets": 13,
        "averageRating": 4.9,
        "averageCloseTime": 1.8
      }
    ],
    "activity": {
      "dailyActive": 89,
      "weeklyActive": 234,
      "monthlyActive": 567
    }
  }
}`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* GET /stats/performance */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              GET /api/stats/performance
            </CardTitle>
            <CardDescription>
              مقاييس أداء النظام
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium">معاملات الاستعلام (Query Parameters)</h4>
              <div className="space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">metric</span>
                      <Badge variant="outline">string</Badge>
                      <Badge variant="secondary">اختياري</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">نوع المقياس (response, uptime, errors)</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">interval</span>
                      <Badge variant="outline">string</Badge>
                      <Badge variant="secondary">اختياري</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">فترة القياس (1m, 5m, 1h, 1d)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">مثال على الطلب</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`GET /api/stats/performance?metric=response&interval=1h
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
    "system": {
      "uptime": "99.9%",
      "responseTime": 45,
      "throughput": 156,
      "errorRate": 0.1
    },
    "database": {
      "connectionTime": 12,
      "queryTime": 23,
      "connections": 45,
      "cacheHitRate": 89.5
    },
    "api": {
      "requestsPerMinute": 156,
      "averageResponseTime": 45,
      "successRate": 99.9,
      "errorRate": 0.1
    },
    "timeline": [
      {
        "timestamp": "2024-01-15T10:00:00Z",
        "responseTime": 42,
        "requests": 145,
        "errors": 0
      },
      {
        "timestamp": "2024-01-15T10:01:00Z",
        "responseTime": 48,
        "requests": 167,
        "errors": 1
      }
    ]
  }
}`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Export Reports */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Download className="h-5 w-5" />
              GET /api/stats/export
            </CardTitle>
            <CardDescription>
              تصدير التقارير بصيغ مختلفة
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium">معاملات الاستعلام (Query Parameters)</h4>
              <div className="space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">format</span>
                      <Badge variant="outline">string</Badge>
                      <Badge variant="destructive">مطلوب</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">صيغة التصدير (pdf, excel, csv, json)</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">type</span>
                      <Badge variant="outline">string</Badge>
                      <Badge variant="destructive">مطلوب</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">نوع التقرير (tickets, users, performance)</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">period</span>
                      <Badge variant="outline">string</Badge>
                      <Badge variant="secondary">اختياري</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">الفترة الزمنية</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">مثال على الطلب</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`GET /api/stats/export?format=pdf&type=tickets&period=month
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
    "downloadUrl": "https://ksa1980.lol/api/stats/export/download/123456789",
    "expiresAt": "2024-01-15T16:30:00Z",
    "fileSize": "2.5MB",
    "format": "pdf",
    "type": "tickets",
    "period": "month"
  }
}`}
                </pre>
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
              الأخطاء الشائعة في API الإحصائيات
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
    "code": "INVALID_PERIOD",
    "message": "الفترة الزمنية غير صحيحة",
    "details": {
      "period": "invalid_period",
      "validPeriods": ["day", "week", "month", "year"]
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
    "message": "ليس لديك صلاحية لعرض هذه الإحصائيات",
    "details": {
      "requiredRole": "admin",
      "userRole": "support"
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
            <strong>أفضل الممارسات:</strong> استخدم الفترات الزمنية المناسبة لتقليل وقت الاستجابة. 
            احتفظ بنسخ محلية من الإحصائيات المهمة. استخدم التصدير للتقارير الكبيرة.
          </AlertDescription>
        </Alert>
      </div>
    </DocsLayout>
  )
}
