"use client"

import { DocsLayout } from "@/components/docs-layout"
import { arNavigation } from "@/lib/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { 
  Globe,
  Code,
  Shield,
  Key,
  Info,
  RotateCw
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
            دليل شامل لواجهة برمجة التطبيقات
          </p>
        </div>

        {/* API Basics */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="h-5 w-5" />
              أساسيات API
            </CardTitle>
            <CardDescription>
              المفاهيم الأساسية والاستخدام
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium">عنوان API</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
                  https://api.ksa1980.lol/v1
                </pre>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">المصادقة</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`// مصادقة Bearer Token
Authorization: Bearer YOUR_API_TOKEN

// مثال على الطلب
fetch('https://api.ksa1980.lol/v1/tickets', {
  headers: {
    'Authorization': 'Bearer YOUR_API_TOKEN',
    'Content-Type': 'application/json'
  }
});`}
                </pre>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">تنسيق الاستجابة</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`// استجابة ناجحة
{
  "success": true,
  "data": {
    // بيانات الاستجابة
  },
  "meta": {
    "page": 1,
    "limit": 20,
    "total": 100
  }
}

// استجابة خطأ
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "وصف الخطأ"
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
              كيفية المصادقة مع API
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium">الحصول على رمز API</h4>
              <div className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <RotateCw className="h-4 w-4 text-green-500" />
                    <span className="text-sm">إنشاء رمز في إعدادات لوحة التحكم</span>
                  </div>
                  <p className="text-xs text-muted-foreground">الوصول إلى لوحة التحكم والانتقال إلى إعدادات API</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <RotateCw className="h-4 w-4 text-green-500" />
                    <span className="text-sm">تعيين صلاحيات الرمز</span>
                  </div>
                  <p className="text-xs text-muted-foreground">اختيار النقاط النهائية التي يمكن للرمز الوصول إليها</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <RotateCw className="h-4 w-4 text-green-500" />
                    <span className="text-sm">تخزين الرمز بشكل آمن</span>
                  </div>
                  <p className="text-xs text-muted-foreground">لا تكشف عن رمزك في كود جانب العميل</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">استخدام رمز API</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`// مثال JavaScript
const API_TOKEN = process.env.API_TOKEN;

async function fetchTickets() {
  const response = await fetch('https://api.ksa1980.lol/v1/tickets', {
    headers: {
      'Authorization': \`Bearer \${API_TOKEN}\`,
      'Content-Type': 'application/json'
    }
  });
  
  const data = await response.json();
  return data;
}

// مثال Python
import requests

API_TOKEN = os.environ.get('API_TOKEN')

def fetch_tickets():
    headers = {
        'Authorization': f'Bearer {API_TOKEN}',
        'Content-Type': 'application/json'
    }
    
    response = requests.get(
        'https://api.ksa1980.lol/v1/tickets',
        headers=headers
    )
    
    return response.json()`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Rate Limiting */}
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
              <h4 className="font-medium">حدود الطلبات</h4>
              <div className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <RotateCw className="h-4 w-4 text-green-500" />
                    <span className="text-sm">1000 طلب في الساعة لكل رمز</span>
                  </div>
                  <p className="text-xs text-muted-foreground">حد الطلبات القياسي لجميع رموز API</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <RotateCw className="h-4 w-4 text-green-500" />
                    <span className="text-sm">5 طلبات متزامنة لكل رمز</span>
                  </div>
                  <p className="text-xs text-muted-foreground">الحد الأقصى لعدد الطلبات المتزامنة</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <RotateCw className="h-4 w-4 text-green-500" />
                    <span className="text-sm">ترويسات حد الطلبات مضمنة في الاستجابة</span>
                  </div>
                  <p className="text-xs text-muted-foreground">مراقبة استخدامك من خلال ترويسات الاستجابة</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">ترويسات حد الطلبات</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`// ترويسات الاستجابة
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 999
X-RateLimit-Reset: 1698765432

// استجابة تجاوز حد الطلبات
{
  "success": false,
  "error": {
    "code": "RATE_LIMIT_EXCEEDED",
    "message": "تم تجاوز حد الطلبات. حاول مرة أخرى بعد 3600 ثانية",
    "reset": 1698765432
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
            <strong>أفضل الممارسات:</strong> استخدم HTTPS دائماً. 
            قم بتخزين رموز API بشكل آمن. 
            نفذ معالجة الأخطاء المناسبة. 
            راقب حدود الطلبات. 
            قم بتخزين الاستجابات مؤقتاً عند الإمكان.
          </AlertDescription>
        </Alert>
      </div>
    </DocsLayout>
  )
}