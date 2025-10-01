"use client"

import { DocsLayout } from "@/components/docs-layout"
import { arNavigation } from "@/lib/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { 
  MessageSquare,
  Code,
  Search,
  Plus,
  Edit,
  Trash,
  Info
} from "lucide-react"

export default function ApiTickets() {
  return (
    <DocsLayout navigation={arNavigation} lang="ar">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <MessageSquare className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold">واجهة برمجة التذاكر</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            دليل شامل لإدارة التذاكر عبر API
          </p>
        </div>

        {/* Create Ticket */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Plus className="h-5 w-5" />
              إنشاء تذكرة
            </CardTitle>
            <CardDescription>
              إنشاء تذكرة دعم جديدة
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium">نقطة النهاية</h4>
              <div className="bg-muted p-4 rounded-lg api-endpoint">
                <div className="flex items-center gap-2 mb-2">
                  <span className="method">POST</span>
                  <span className="path">/tickets</span>
                </div>
                <pre className="text-sm overflow-x-auto">
{`// محتوى الطلب
{
  "category": "technical",     // مطلوب: technical | general | complaint | feature | other
  "subject": "string",         // مطلوب: 200 حرف كحد أقصى
  "message": "string",         // مطلوب: 2000 حرف كحد أقصى
  "priority": "normal",        // اختياري: low | normal | high | urgent
  "attachments": ["string"]    // اختياري: مصفوفة من روابط الملفات
}

// الاستجابة
{
  "success": true,
  "data": {
    "ticketId": "T123456",
    "status": "open",
    "createdAt": "2025-10-01T12:00:00Z",
    "category": "technical",
    "priority": "normal",
    "subject": "مشكلة في تكامل API",
    "message": "أواجه مشكلة في المصادقة"
  }
}`}
                </pre>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">مثال</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`// JavaScript
async function createTicket(data) {
  const response = await fetch('https://api.ksa1980.lol/v1/tickets', {
    method: 'POST',
    headers: {
      'Authorization': \`Bearer \${API_KEY}\`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  
  return response.json();
}

// إنشاء تذكرة
const ticket = await createTicket({
  category: 'technical',
  subject: 'مشكلة في تكامل API',
  message: 'أواجه مشكلة في المصادقة',
  priority: 'high'
});`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Get Tickets */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="h-5 w-5" />
              الحصول على التذاكر
            </CardTitle>
            <CardDescription>
              عرض وتصفية التذاكر
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium">قائمة التذاكر</h4>
              <div className="bg-muted p-4 rounded-lg api-endpoint">
                <div className="flex items-center gap-2 mb-2">
                  <span className="method">GET</span>
                  <span className="path">/tickets</span>
                </div>
                <pre className="text-sm overflow-x-auto">
{`// معلمات الاستعلام
{
  "page": "number",           // اختياري: الافتراضي 1
  "limit": "number",          // اختياري: الافتراضي 20، الحد الأقصى 100
  "status": "string",         // اختياري: open | claimed | closed
  "category": "string",       // اختياري: technical | general | complaint | feature | other
  "priority": "string",       // اختياري: low | normal | high | urgent
  "startDate": "string",      // اختياري: تاريخ ISO
  "endDate": "string"         // اختياري: تاريخ ISO
}

// الاستجابة
{
  "success": true,
  "data": [
    {
      "ticketId": "T123456",
      "status": "open",
      "category": "technical",
      "priority": "high",
      "subject": "مشكلة في تكامل API",
      "createdAt": "2025-10-01T12:00:00Z",
      "updatedAt": "2025-10-01T12:00:00Z"
    }
  ],
  "meta": {
    "page": 1,
    "limit": 20,
    "total": 45
  }
}`}
                </pre>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">الحصول على تذكرة واحدة</h4>
              <div className="bg-muted p-4 rounded-lg api-endpoint">
                <div className="flex items-center gap-2 mb-2">
                  <span className="method">GET</span>
                  <span className="path">/tickets/:ticketId</span>
                </div>
                <pre className="text-sm overflow-x-auto">
{`// الاستجابة
{
  "success": true,
  "data": {
    "ticketId": "T123456",
    "status": "open",
    "category": "technical",
    "priority": "high",
    "subject": "مشكلة في تكامل API",
    "message": "أواجه مشكلة في المصادقة",
    "attachments": [],
    "createdAt": "2025-10-01T12:00:00Z",
    "updatedAt": "2025-10-01T12:00:00Z",
    "messages": [
      {
        "id": "M789012",
        "author": "user",
        "message": "الرسالة الأولية",
        "timestamp": "2025-10-01T12:00:00Z"
      }
    ]
  }
}`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Update Ticket */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Edit className="h-5 w-5" />
              تحديث التذكرة
            </CardTitle>
            <CardDescription>
              تحديث تفاصيل وحالة التذكرة
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium">تحديث التذكرة</h4>
              <div className="bg-muted p-4 rounded-lg api-endpoint">
                <div className="flex items-center gap-2 mb-2">
                  <span className="method">PUT</span>
                  <span className="path">/tickets/:ticketId</span>
                </div>
                <pre className="text-sm overflow-x-auto">
{`// محتوى الطلب
{
  "status": "string",         // اختياري: open | claimed | closed
  "priority": "string",       // اختياري: low | normal | high | urgent
  "category": "string",       // اختياري: technical | general | complaint | feature | other
  "subject": "string",        // اختياري: 200 حرف كحد أقصى
  "message": "string"         // اختياري: 2000 حرف كحد أقصى
}

// الاستجابة
{
  "success": true,
  "data": {
    "ticketId": "T123456",
    "status": "claimed",
    "category": "technical",
    "priority": "high",
    "subject": "تحديث: مشكلة في تكامل API",
    "updatedAt": "2025-10-01T12:30:00Z"
  }
}`}
                </pre>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">إضافة رد</h4>
              <div className="bg-muted p-4 rounded-lg api-endpoint">
                <div className="flex items-center gap-2 mb-2">
                  <span className="method">POST</span>
                  <span className="path">/tickets/:ticketId/replies</span>
                </div>
                <pre className="text-sm overflow-x-auto">
{`// محتوى الطلب
{
  "message": "string",         // مطلوب: 2000 حرف كحد أقصى
  "attachments": ["string"],   // اختياري: مصفوفة من روابط الملفات
  "internal": false           // اختياري: true للملاحظات الداخلية للموظفين
}

// الاستجابة
{
  "success": true,
  "data": {
    "replyId": "R789012",
    "message": "جاري العمل على المشكلة",
    "author": "support",
    "timestamp": "2025-10-01T12:45:00Z",
    "internal": false
  }
}`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Delete Ticket */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trash className="h-5 w-5" />
              حذف التذكرة
            </CardTitle>
            <CardDescription>
              حذف تذكرة بشكل دائم
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <Alert>
              <Info className="h-4 w-4" />
              <AlertDescription>
                لا يمكن التراجع عن هذا الإجراء. فقط المسؤولون يمكنهم حذف التذاكر.
              </AlertDescription>
            </Alert>

            <div className="space-y-4">
              <h4 className="font-medium">حذف التذكرة</h4>
              <div className="bg-muted p-4 rounded-lg api-endpoint">
                <div className="flex items-center gap-2 mb-2">
                  <span className="method">DELETE</span>
                  <span className="path">/tickets/:ticketId</span>
                </div>
                <pre className="text-sm overflow-x-auto">
{`// الاستجابة
{
  "success": true,
  "data": {
    "message": "تم حذف التذكرة بنجاح",
    "ticketId": "T123456"
  }
}`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Best Practices */}
        <Alert>
          <Info className="h-4 w-4" />
          <AlertDescription>
            <strong>أفضل الممارسات:</strong>
            <ul className="mt-2 space-y-1">
              <li>• تحقق دائماً من صحة البيانات قبل إرسالها</li>
              <li>• تعامل مع حدود الطلبات بشكل مناسب</li>
              <li>• قم بتنفيذ معالجة الأخطاء المناسبة</li>
              <li>• استخدم مهلات زمنية مناسبة</li>
              <li>• احتفظ بسجل لمعرفات التذاكر</li>
            </ul>
          </AlertDescription>
        </Alert>
      </div>
    </DocsLayout>
  )
}