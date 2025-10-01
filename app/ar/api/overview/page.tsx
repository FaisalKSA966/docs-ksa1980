"use client"

import { DocsLayout } from "@/components/docs-layout"
import { arNavigation } from "@/lib/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { 
  Globe,
  Code,
  Shield,
  Key,
  Info,
  CheckCircle
} from "lucide-react"

export default function ApiOverview() {
  return (
    <DocsLayout navigation={arNavigation} lang="ar">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Globe className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold">نظرة عامة على API</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            دليل شامل للتكامل مع واجهة برمجة التطبيقات الخاصة بنظام التذاكر
          </p>
        </div>

        {/* Quick Start */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="h-5 w-5" />
              البدء السريع
            </CardTitle>
            <CardDescription>
              ابدأ استخدام API في دقائق
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium">1. احصل على مفتاح API</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`# تواصل معنا للحصول على مفتاح API
API_KEY=your_api_key_here

# قم بتخزينه بشكل آمن في بيئة التشغيل
export TICKET_API_KEY=your_api_key_here`}
                </pre>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">2. قم بأول طلب API</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`# JavaScript/Node.js
const response = await fetch('https://api.ksa1980.lol/v1/tickets', {
  headers: {
    'Authorization': \`Bearer \${process.env.TICKET_API_KEY}\`,
    'Content-Type': 'application/json'
  }
});

const tickets = await response.json();

# Python
import requests

response = requests.get(
    'https://api.ksa1980.lol/v1/tickets',
    headers={
        'Authorization': f'Bearer {os.environ["TICKET_API_KEY"]}',
        'Content-Type': 'application/json'
    }
)

tickets = response.json()`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Common Use Cases */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5" />
              الاستخدامات الشائعة
            </CardTitle>
            <CardDescription>
              الطرق الشائعة لاستخدام API
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium">إنشاء تذكرة</h4>
              <div className="bg-muted p-4 rounded-lg api-endpoint">
                <div className="flex items-center gap-2 mb-2">
                  <span className="method">POST</span>
                  <span className="path">/tickets</span>
                </div>
                <pre className="text-sm overflow-x-auto">
{`// الطلب
{
  "category": "technical",
  "subject": "مشكلة في تكامل API",
  "message": "أواجه مشكلة في المصادقة",
  "priority": "high"
}

// الاستجابة
{
  "success": true,
  "data": {
    "ticketId": "T123456",
    "status": "open",
    "createdAt": "2025-10-01T12:00:00Z"
  }
}`}
                </pre>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">الحصول على حالة التذكرة</h4>
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
    "status": "in_progress",
    "assignedTo": "فريق الدعم أ",
    "lastUpdate": "2025-10-01T12:30:00Z",
    "messages": [
      {
        "author": "support",
        "message": "نحن نبحث في المشكلة",
        "timestamp": "2025-10-01T12:15:00Z"
      }
    ]
  }
}`}
                </pre>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">إضافة رد على التذكرة</h4>
              <div className="bg-muted p-4 rounded-lg api-endpoint">
                <div className="flex items-center gap-2 mb-2">
                  <span className="method">POST</span>
                  <span className="path">/tickets/:ticketId/replies</span>
                </div>
                <pre className="text-sm overflow-x-auto">
{`// الطلب
{
  "message": "معلومات إضافية حول المشكلة",
  "attachments": ["https://example.com/screenshot.png"]
}

// الاستجابة
{
  "success": true,
  "data": {
    "replyId": "R789012",
    "timestamp": "2025-10-01T12:45:00Z"
  }
}`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Authentication */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Key className="h-5 w-5" />
              المصادقة
            </CardTitle>
            <CardDescription>
              تأمين طلبات API
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium">مصادقة Bearer Token</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`// يجب تضمينه في جميع طلبات API
headers: {
  'Authorization': 'Bearer YOUR_API_KEY',
  'Content-Type': 'application/json'
}`}
                </pre>
              </div>
            </div>

            <Alert>
              <Info className="h-4 w-4" />
              <AlertDescription>
                حافظ على أمان مفتاح API. لا تكشف عنه في كود جانب العميل أو المستودعات العامة.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Rate Limits */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              حدود الطلبات
            </CardTitle>
            <CardDescription>
              حدود وحصص طلبات API
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium">الحدود الافتراضية</h4>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 bg-muted rounded">
                  <span>الطلبات في الدقيقة</span>
                  <span className="font-mono">60</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-muted rounded">
                  <span>الطلبات في الساعة</span>
                  <span className="font-mono">1000</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-muted rounded">
                  <span>الطلبات المتزامنة</span>
                  <span className="font-mono">5</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">ترويسات حد الطلبات</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`// ترويسات الاستجابة
X-RateLimit-Limit: 60
X-RateLimit-Remaining: 59
X-RateLimit-Reset: 1698765432`}
                </pre>
              </div>
            </div>

            <Alert>
              <Info className="h-4 w-4" />
              <AlertDescription>
                تواصل معنا إذا كنت بحاجة إلى حدود طلبات أعلى للتكامل الخاص بك.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Best Practices */}
        <Alert>
          <Info className="h-4 w-4" />
          <AlertDescription>
            <strong>أفضل الممارسات:</strong>
            <ul className="mt-2 space-y-1">
              <li>• استخدم HTTPS دائماً لطلبات API</li>
              <li>• قم بتنفيذ معالجة الأخطاء المناسبة</li>
              <li>• قم بتخزين الاستجابات مؤقتاً عند الإمكان</li>
              <li>• استخدم مهلات زمنية مناسبة</li>
              <li>• راقب استخدام API الخاص بك</li>
            </ul>
          </AlertDescription>
        </Alert>
      </div>
    </DocsLayout>
  )
}