import { DocsLayout } from "@/components/docs-layout"
import { arNavigation } from "@/lib/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { 
  MessageSquare, 
  Plus, 
  Edit, 
  Trash2,
  Search,
  Filter,
  CheckCircle,
  AlertTriangle,
  Info,
  Code,
  Copy
} from "lucide-react"

export default function APITickets() {
  return (
    <DocsLayout navigation={arNavigation} lang="ar">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <MessageSquare className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold">API التذاكر</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            إدارة التذاكر عبر واجهة برمجة التطبيقات
          </p>
        </div>

        {/* Endpoints Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">GET /tickets</CardTitle>
              <Search className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-sm">جلب قائمة التذاكر</div>
              <p className="text-xs text-muted-foreground">
                مع فلترة وبحث
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">POST /tickets</CardTitle>
              <Plus className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-sm">إنشاء تذكرة جديدة</div>
              <p className="text-xs text-muted-foreground">
                مع التحقق من البيانات
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">PUT /tickets/:id</CardTitle>
              <Edit className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-sm">تحديث تذكرة</div>
              <p className="text-xs text-muted-foreground">
                تحديث جزئي أو كامل
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">DELETE /tickets/:id</CardTitle>
              <Trash2 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-sm">حذف تذكرة</div>
              <p className="text-xs text-muted-foreground">
                حذف نهائي أو مؤقت
              </p>
            </CardContent>
          </Card>
        </div>

        {/* GET /tickets */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="h-5 w-5" />
              GET /api/tickets
            </CardTitle>
            <CardDescription>
              جلب قائمة التذاكر مع إمكانية الفلترة والبحث
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium">معاملات الاستعلام (Query Parameters)</h4>
              <div className="space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">userId</span>
                      <Badge variant="outline">string</Badge>
                      <Badge variant="secondary">اختياري</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">فلترة حسب معرف المستخدم</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">status</span>
                      <Badge variant="outline">string</Badge>
                      <Badge variant="secondary">اختياري</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">فلترة حسب الحالة (open, closed, claimed)</p>
                  </div>

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
                      <span className="text-sm font-medium">priority</span>
                      <Badge variant="outline">string</Badge>
                      <Badge variant="secondary">اختياري</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">فلترة حسب الأولوية</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">page</span>
                      <Badge variant="outline">number</Badge>
                      <Badge variant="secondary">اختياري</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">رقم الصفحة (افتراضي: 1)</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">limit</span>
                      <Badge variant="outline">number</Badge>
                      <Badge variant="secondary">اختياري</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">عدد النتائج (افتراضي: 20)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">مثال على الطلب</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`GET /api/tickets?status=open&category=technical&page=1&limit=10
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
    "tickets": [
      {
        "id": "ticket_123456789",
        "channelId": "987654321098765432",
        "userId": "123456789012345678",
        "username": "أحمد محمد",
        "userAvatar": "https://cdn.discordapp.com/avatars/...",
        "status": "open",
        "category": "technical",
        "priority": "high",
        "createdAt": "2024-01-15T10:30:00Z",
        "updatedAt": "2024-01-15T12:45:00Z",
        "claimedBy": null,
        "closedBy": null,
        "messages": [...],
        "adminLog": [...],
        "rating": null,
        "feedback": null
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 10,
      "total": 45,
      "pages": 5
    }
  }
}`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* POST /tickets */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Plus className="h-5 w-5" />
              POST /api/tickets
            </CardTitle>
            <CardDescription>
              إنشاء تذكرة جديدة
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium">معاملات الطلب (Request Body)</h4>
              <div className="space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">userId</span>
                      <Badge variant="outline">string</Badge>
                      <Badge variant="destructive">مطلوب</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">معرف المستخدم</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">username</span>
                      <Badge variant="outline">string</Badge>
                      <Badge variant="destructive">مطلوب</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">اسم المستخدم</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">category</span>
                      <Badge variant="outline">string</Badge>
                      <Badge variant="destructive">مطلوب</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">فئة التذكرة</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">priority</span>
                      <Badge variant="outline">string</Badge>
                      <Badge variant="secondary">اختياري</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">أولوية التذكرة (افتراضي: normal)</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">message</span>
                      <Badge variant="outline">string</Badge>
                      <Badge variant="destructive">مطلوب</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">رسالة التذكرة الأولى</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">مثال على الطلب</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`POST /api/tickets
Authorization: Bearer YOUR_TOKEN
Content-Type: application/json

{
  "userId": "123456789012345678",
  "username": "أحمد محمد",
  "category": "technical",
  "priority": "high",
  "message": "لا أستطيع الدخول للعبة، تظهر رسالة خطأ"
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
    "ticket": {
      "id": "ticket_123456789",
      "channelId": "987654321098765432",
      "userId": "123456789012345678",
      "username": "أحمد محمد",
      "userAvatar": "https://cdn.discordapp.com/avatars/...",
      "status": "open",
      "category": "technical",
      "priority": "high",
      "createdAt": "2024-01-15T10:30:00Z",
      "updatedAt": "2024-01-15T10:30:00Z",
      "claimedBy": null,
      "closedBy": null,
      "messages": [
        {
          "id": "msg_123456789",
          "userId": "123456789012345678",
          "username": "أحمد محمد",
          "content": "لا أستطيع الدخول للعبة، تظهر رسالة خطأ",
          "timestamp": "2024-01-15T10:30:00Z",
          "attachments": []
        }
      ],
      "adminLog": [],
      "rating": null,
      "feedback": null
    }
  }
}`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* PUT /tickets/:id */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Edit className="h-5 w-5" />
              PUT /api/tickets/:id
            </CardTitle>
            <CardDescription>
              تحديث تذكرة موجودة
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium">معاملات الطلب (Request Body)</h4>
              <div className="space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">status</span>
                      <Badge variant="outline">string</Badge>
                      <Badge variant="secondary">اختياري</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">حالة التذكرة</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">priority</span>
                      <Badge variant="outline">string</Badge>
                      <Badge variant="secondary">اختياري</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">أولوية التذكرة</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">claimedBy</span>
                      <Badge variant="outline">string</Badge>
                      <Badge variant="secondary">اختياري</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">معرف من استلم التذكرة</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">closedBy</span>
                      <Badge variant="outline">string</Badge>
                      <Badge variant="secondary">اختياري</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">معرف من أغلق التذكرة</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">rating</span>
                      <Badge variant="outline">number</Badge>
                      <Badge variant="secondary">اختياري</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">تقييم التذكرة (1-5)</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">feedback</span>
                      <Badge variant="outline">string</Badge>
                      <Badge variant="secondary">اختياري</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">تعليق على التذكرة</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">مثال على الطلب</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`PUT /api/tickets/ticket_123456789
Authorization: Bearer YOUR_TOKEN
Content-Type: application/json

{
  "status": "closed",
  "closedBy": "support_user_123",
  "rating": 5,
  "feedback": "تم حل المشكلة بنجاح"
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
    "ticket": {
      "id": "ticket_123456789",
      "channelId": "987654321098765432",
      "userId": "123456789012345678",
      "username": "أحمد محمد",
      "userAvatar": "https://cdn.discordapp.com/avatars/...",
      "status": "closed",
      "category": "technical",
      "priority": "high",
      "createdAt": "2024-01-15T10:30:00Z",
      "updatedAt": "2024-01-15T14:20:00Z",
      "claimedBy": "support_user_123",
      "closedBy": "support_user_123",
      "messages": [...],
      "adminLog": [...],
      "rating": 5,
      "feedback": "تم حل المشكلة بنجاح"
    }
  }
}`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* DELETE /tickets/:id */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trash2 className="h-5 w-5" />
              DELETE /api/tickets/:id
            </CardTitle>
            <CardDescription>
              حذف تذكرة
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium">معاملات الاستعلام (Query Parameters)</h4>
              <div className="space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">permanent</span>
                      <Badge variant="outline">boolean</Badge>
                      <Badge variant="secondary">اختياري</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">حذف نهائي أم مؤقت (افتراضي: false)</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">reason</span>
                      <Badge variant="outline">string</Badge>
                      <Badge variant="secondary">اختياري</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">سبب الحذف</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">مثال على الطلب</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`DELETE /api/tickets/ticket_123456789?permanent=false&reason=duplicate
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
    "message": "تم حذف التذكرة بنجاح",
    "ticketId": "ticket_123456789",
    "deletedAt": "2024-01-15T15:30:00Z",
    "permanent": false,
    "reason": "duplicate"
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
              الأخطاء الشائعة وكيفية التعامل معها
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
    "message": "البيانات المرسلة غير صحيحة",
    "details": {
      "field": "userId",
      "reason": "المعرف مطلوب"
    }
  }
}`}
                  </pre>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium">404 - Not Found</h4>
                <div className="bg-muted p-4 rounded-lg">
                  <pre className="text-sm overflow-x-auto">
{`{
  "success": false,
  "error": {
    "code": "NOT_FOUND_ERROR",
    "message": "التذكرة غير موجودة",
    "details": {
      "ticketId": "ticket_123456789"
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
    "code": "AUTHORIZATION_ERROR",
    "message": "ليس لديك صلاحية لحذف هذه التذكرة",
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
            <strong>أفضل الممارسات:</strong> استخدم الفلترة لتقليل حجم البيانات. 
            تحقق من صحة البيانات قبل الإرسال. استخدم التحديث الجزئي لتوفير النطاق الترددي.
          </AlertDescription>
        </Alert>
      </div>
    </DocsLayout>
  )
}
