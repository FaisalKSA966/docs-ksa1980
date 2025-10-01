import { DocsLayout } from "@/components/docs-layout"
import { arNavigation } from "@/lib/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { 
  Database, 
  FileText, 
  Key, 
  Calendar,
  User,
  MessageSquare,
  Settings,
  CheckCircle,
  Info,
  Code,
  Copy
} from "lucide-react"

export default function DatabaseModels() {
  return (
    <DocsLayout navigation={arNavigation} lang="ar">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Database className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold">نماذج قاعدة البيانات</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            هيكل البيانات والنماذج المستخدمة في النظام
          </p>
        </div>

        {/* Models Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                Ticket Model
              </CardTitle>
              <CardDescription>
                نموذج التذاكر الرئيسي
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm">الحقول</span>
                  <Badge variant="secondary">15</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">الفهرسة</span>
                  <Badge variant="outline">مفهرس</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">العلاقات</span>
                  <Badge variant="outline">3</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                User Model
              </CardTitle>
              <CardDescription>
                نموذج المستخدمين
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm">الحقول</span>
                  <Badge variant="secondary">12</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">الفهرسة</span>
                  <Badge variant="outline">مفهرس</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">العلاقات</span>
                  <Badge variant="outline">1</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5" />
                Settings Model
              </CardTitle>
              <CardDescription>
                نموذج إعدادات النظام
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm">الحقول</span>
                  <Badge variant="secondary">8</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">الفهرسة</span>
                  <Badge variant="outline">مفهرس</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">العلاقات</span>
                  <Badge variant="outline">0</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Ticket Model Details */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              Ticket Model - تفاصيل النموذج
            </CardTitle>
            <CardDescription>
              نموذج التذاكر مع جميع الحقول والخصائص
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium">الحقول الأساسية</h4>
              <div className="space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Key className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium">id</span>
                      <Badge variant="outline">String</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">معرف فريد للتذكرة</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <MessageSquare className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium">channelId</span>
                      <Badge variant="outline">String</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">معرف قناة Discord</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium">userId</span>
                      <Badge variant="outline">String</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">معرف المستخدم</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">username</span>
                      <Badge variant="outline">String</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">اسم المستخدم</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">userAvatar</span>
                      <Badge variant="outline">String</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">صورة المستخدم</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">status</span>
                      <Badge variant="outline">String</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">حالة التذكرة</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">الحقول الإضافية</h4>
              <div className="space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">category</span>
                      <Badge variant="outline">String</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">فئة التذكرة</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">priority</span>
                      <Badge variant="outline">String</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">أولوية التذكرة</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium">createdAt</span>
                      <Badge variant="outline">Date</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">تاريخ الإنشاء</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium">updatedAt</span>
                      <Badge variant="outline">Date</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">تاريخ آخر تحديث</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">الحقول المتقدمة</h4>
              <div className="space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">claimedBy</span>
                      <Badge variant="outline">String</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">من استلم التذكرة</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">closedBy</span>
                      <Badge variant="outline">String</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">من أغلق التذكرة</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">messages</span>
                      <Badge variant="outline">Array</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">رسائل التذكرة</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">adminLog</span>
                      <Badge variant="outline">Array</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">سجل الإدارة</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">مثال على البيانات</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`{
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
  "claimedBy": "support_user_123",
  "closedBy": null,
  "messages": [...],
  "adminLog": [...],
  "rating": 5,
  "feedback": "خدمة ممتازة!"
}`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* User Model Details */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5" />
              User Model - تفاصيل النموذج
            </CardTitle>
            <CardDescription>
              نموذج المستخدمين مع جميع الحقول والخصائص
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium">الحقول الأساسية</h4>
              <div className="space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Key className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium">id</span>
                      <Badge variant="outline">String</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">معرف فريد للمستخدم</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">username</span>
                      <Badge variant="outline">String</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">اسم المستخدم</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">avatar</span>
                      <Badge variant="outline">String</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">صورة المستخدم</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">إحصائيات التذاكر</h4>
              <div className="space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">totalTickets</span>
                      <Badge variant="outline">Number</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">إجمالي التذاكر</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">openTickets</span>
                      <Badge variant="outline">Number</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">التذاكر المفتوحة</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">closedTickets</span>
                      <Badge variant="outline">Number</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">التذاكر المغلقة</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">مثال على البيانات</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`{
  "id": "123456789012345678",
  "username": "أحمد محمد",
  "avatar": "https://cdn.discordapp.com/avatars/...",
  "totalTickets": 15,
  "openTickets": 2,
  "closedTickets": 13,
  "banned": false,
  "roles": ["member", "verified"],
  "createdAt": "2024-01-01T00:00:00Z",
  "updatedAt": "2024-01-15T12:45:00Z"
}`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Settings Model Details */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5" />
              Settings Model - تفاصيل النموذج
            </CardTitle>
            <CardDescription>
              نموذج إعدادات النظام مع جميع الحقول والخصائص
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium">إعدادات البوت</h4>
              <div className="space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">ticketCategory</span>
                      <Badge variant="outline">String</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">معرف قسم التذاكر</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">ticketSendChannel</span>
                      <Badge variant="outline">String</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">معرف قناة إرسال التذاكر</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">supportRoles</span>
                      <Badge variant="outline">Array</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">رتب الدعم</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">maxTicketsPerUser</span>
                      <Badge variant="outline">Number</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">الحد الأقصى للتذاكر</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">إعدادات الرسائل</h4>
              <div className="space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">welcomeMessage</span>
                      <Badge variant="outline">String</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">رسالة الترحيب</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">closeMessage</span>
                      <Badge variant="outline">String</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">رسالة الإغلاق</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">مثال على البيانات</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`{
  "ticketCategory": "1234567890123456789",
  "ticketSendChannel": "9876543210987654321",
  "supportRoles": [
    "1111111111111111111",
    "2222222222222222222"
  ],
  "adminLogChannel": "3333333333333333333",
  "normalLogChannel": "4444444444444444444",
  "ratingChannel": "5555555555555555555",
  "maxTicketsPerUser": 3,
  "welcomeMessage": "مرحباً بك في نظام التذاكر!",
  "closeMessage": "تم إغلاق تذكرتك. شكراً لك!",
  "ratingsEnabled": true,
  "transcriptsEnabled": true,
  "autoSaveTranscripts": true,
  "dmUserOnClose": true,
  "dmUserOnOpen": false,
  "updatedAt": "2024-01-15T12:45:00Z"
}`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Indexes and Performance */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="h-5 w-5" />
              الفهارس والأداء
            </CardTitle>
            <CardDescription>
              فهارس قاعدة البيانات لتحسين الأداء
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <h4 className="font-medium">فهارس التذاكر</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">id (Unique)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">userId (Index)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">status (Index)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">createdAt (Index)</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">فهارس المستخدمين</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">id (Unique)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">username (Index)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">banned (Index)</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Best Practices */}
        <Alert>
          <Info className="h-4 w-4" />
          <AlertDescription>
            <strong>أفضل الممارسات:</strong> استخدم الفهارس للبحث السريع. 
            احتفظ بالبيانات المهمة فقط. نظف البيانات القديمة بانتظام.
          </AlertDescription>
        </Alert>
      </div>
    </DocsLayout>
  )
}
