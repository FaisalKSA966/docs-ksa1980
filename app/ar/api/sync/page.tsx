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
  CheckCircle,
  AlertTriangle,
  Info,
  Code,
  Zap,
  Clock,
  Shield
} from "lucide-react"

export default function APISync() {
  return (
    <DocsLayout navigation={arNavigation} lang="ar">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <RefreshCw className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold">API التزامن</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            إدارة تزامن البيانات عبر واجهة برمجة التطبيقات
          </p>
        </div>

        {/* Endpoints Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">GET /sync</CardTitle>
              <RefreshCw className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-sm">حالة التزامن</div>
              <p className="text-xs text-muted-foreground">
                معلومات التزامن الحالية
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">POST /sync</CardTitle>
              <Zap className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-sm">بدء التزامن</div>
              <p className="text-xs text-muted-foreground">
                تشغيل عملية التزامن
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">PUT /sync</CardTitle>
              <Database className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-sm">تحديث التزامن</div>
              <p className="text-xs text-muted-foreground">
                تحديث إعدادات التزامن
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">DELETE /sync</CardTitle>
              <AlertTriangle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-sm">إيقاف التزامن</div>
              <p className="text-xs text-muted-foreground">
                إيقاف عملية التزامن
              </p>
            </CardContent>
          </Card>
        </div>

        {/* GET /sync */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <RefreshCw className="h-5 w-5" />
              GET /api/sync
            </CardTitle>
            <CardDescription>
              جلب معلومات حالة التزامن الحالية
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium">معاملات الاستعلام (Query Parameters)</h4>
              <div className="space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">includeStats</span>
                      <Badge variant="outline">boolean</Badge>
                      <Badge variant="secondary">اختياري</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">تضمين إحصائيات التزامن (افتراضي: true)</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">includeErrors</span>
                      <Badge variant="outline">boolean</Badge>
                      <Badge variant="secondary">اختياري</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">تضمين أخطاء التزامن (افتراضي: false)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">مثال على الطلب</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`GET /api/sync?includeStats=true&includeErrors=false
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
    "status": "active",
    "lastSync": "2024-01-15T12:45:00Z",
    "nextSync": "2024-01-15T12:50:00Z",
    "sources": {
      "mongodb": {
        "status": "connected",
        "lastUpdate": "2024-01-15T12:44:30Z",
        "responseTime": 45
      },
      "json": {
        "status": "connected",
        "lastUpdate": "2024-01-15T12:44:35Z",
        "responseTime": 12
      }
    },
    "statistics": {
      "totalSyncs": 2847,
      "successfulSyncs": 2840,
      "failedSyncs": 7,
      "successRate": 99.8,
      "averageSyncTime": 150,
      "lastError": null
    },
    "configuration": {
      "autoSync": true,
      "syncInterval": 300,
      "retryAttempts": 3,
      "conflictResolution": "last_write_wins"
    }
  }
}`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* POST /sync */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5" />
              POST /api/sync
            </CardTitle>
            <CardDescription>
              بدء عملية تزامن فوري
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium">معاملات الطلب (Request Body)</h4>
              <div className="space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">type</span>
                      <Badge variant="outline">string</Badge>
                      <Badge variant="destructive">مطلوب</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">نوع التزامن (full, incremental, specific)</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">source</span>
                      <Badge variant="outline">string</Badge>
                      <Badge variant="secondary">اختياري</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">المصدر (mongodb, json, both)</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">collections</span>
                      <Badge variant="outline">array</Badge>
                      <Badge variant="secondary">اختياري</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">المجموعات المحددة للتزامن</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">force</span>
                      <Badge variant="outline">boolean</Badge>
                      <Badge variant="secondary">اختياري</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">فرض التزامن حتى لو كان نشطاً (افتراضي: false)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">مثال على الطلب</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`POST /api/sync
Authorization: Bearer YOUR_TOKEN
Content-Type: application/json

{
  "type": "incremental",
  "source": "both",
  "collections": ["tickets", "users"],
  "force": false
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
    "syncId": "sync_123456789",
    "status": "started",
    "type": "incremental",
    "source": "both",
    "collections": ["tickets", "users"],
    "startedAt": "2024-01-15T12:45:00Z",
    "estimatedDuration": 30,
    "progress": {
      "current": 0,
      "total": 100,
      "percentage": 0
    }
  }
}`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* PUT /sync */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="h-5 w-5" />
              PUT /api/sync
            </CardTitle>
            <CardDescription>
              تحديث إعدادات التزامن
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium">معاملات الطلب (Request Body)</h4>
              <div className="space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">autoSync</span>
                      <Badge variant="outline">boolean</Badge>
                      <Badge variant="secondary">اختياري</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">تفعيل التزامن التلقائي</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">syncInterval</span>
                      <Badge variant="outline">number</Badge>
                      <Badge variant="secondary">اختياري</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">فترة التزامن (ثواني)</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">retryAttempts</span>
                      <Badge variant="outline">number</Badge>
                      <Badge variant="secondary">اختياري</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">عدد محاولات إعادة المحاولة</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">conflictResolution</span>
                      <Badge variant="outline">string</Badge>
                      <Badge variant="secondary">اختياري</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">استراتيجية حل التعارضات</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">مثال على الطلب</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`PUT /api/sync
Authorization: Bearer YOUR_TOKEN
Content-Type: application/json

{
  "autoSync": true,
  "syncInterval": 300,
  "retryAttempts": 3,
  "conflictResolution": "last_write_wins"
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
    "message": "تم تحديث إعدادات التزامن بنجاح",
    "updatedFields": [
      "autoSync",
      "syncInterval",
      "retryAttempts",
      "conflictResolution"
    ],
    "configuration": {
      "autoSync": true,
      "syncInterval": 300,
      "retryAttempts": 3,
      "conflictResolution": "last_write_wins"
    },
    "updatedAt": "2024-01-15T12:45:00Z"
  }
}`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* GET /sync/status/:id */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              GET /api/sync/status/:id
            </CardTitle>
            <CardDescription>
              جلب حالة عملية تزامن محددة
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium">معاملات المسار (Path Parameters)</h4>
              <div className="space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">id</span>
                      <Badge variant="outline">string</Badge>
                      <Badge variant="destructive">مطلوب</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">معرف عملية التزامن</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">مثال على الطلب</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`GET /api/sync/status/sync_123456789
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
    "syncId": "sync_123456789",
    "status": "completed",
    "type": "incremental",
    "source": "both",
    "collections": ["tickets", "users"],
    "startedAt": "2024-01-15T12:45:00Z",
    "completedAt": "2024-01-15T12:45:30Z",
    "duration": 30,
    "progress": {
      "current": 100,
      "total": 100,
      "percentage": 100
    },
    "results": {
      "tickets": {
        "synced": 15,
        "conflicts": 0,
        "errors": 0
      },
      "users": {
        "synced": 8,
        "conflicts": 0,
        "errors": 0
      }
    },
    "errors": []
  }
}`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* DELETE /sync */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5" />
              DELETE /api/sync
            </CardTitle>
            <CardDescription>
              إيقاف عملية التزامن
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium">معاملات الاستعلام (Query Parameters)</h4>
              <div className="space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">syncId</span>
                      <Badge variant="outline">string</Badge>
                      <Badge variant="secondary">اختياري</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">معرف عملية التزامن المحددة</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">force</span>
                      <Badge variant="outline">boolean</Badge>
                      <Badge variant="secondary">اختياري</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">فرض الإيقاف (افتراضي: false)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">مثال على الطلب</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`DELETE /api/sync?syncId=sync_123456789&force=false
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
    "message": "تم إيقاف عملية التزامن بنجاح",
    "syncId": "sync_123456789",
    "status": "stopped",
    "stoppedAt": "2024-01-15T12:45:15Z",
    "progress": {
      "current": 45,
      "total": 100,
      "percentage": 45
    }
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
              الأخطاء الشائعة في API التزامن
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
    "code": "INVALID_SYNC_TYPE",
    "message": "نوع التزامن غير صحيح",
    "details": {
      "type": "invalid_type",
      "validTypes": ["full", "incremental", "specific"]
    }
  }
}`}
                  </pre>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium">409 - Conflict</h4>
                <div className="bg-muted p-4 rounded-lg">
                  <pre className="text-sm overflow-x-auto">
{`{
  "success": false,
  "error": {
    "code": "SYNC_ALREADY_RUNNING",
    "message": "عملية تزامن أخرى قيد التشغيل",
    "details": {
      "runningSyncId": "sync_123456789",
      "startedAt": "2024-01-15T12:40:00Z"
    }
  }
}`}
                  </pre>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium">500 - Internal Server Error</h4>
                <div className="bg-muted p-4 rounded-lg">
                  <pre className="text-sm overflow-x-auto">
{`{
  "success": false,
  "error": {
    "code": "SYNC_FAILED",
    "message": "فشل في عملية التزامن",
    "details": {
      "syncId": "sync_123456789",
      "reason": "Database connection lost",
      "retryable": true
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
            <strong>أفضل الممارسات:</strong> استخدم التزامن التدريجي للبيانات الكبيرة. 
            راقب حالة التزامن بانتظام. استخدم إعادة المحاولة للأخطاء المؤقتة.
          </AlertDescription>
        </Alert>
      </div>
    </DocsLayout>
  )
}
