import { DocsContent } from "@/components/docs-content"
import { Card } from "@/components/ui/card"

export default function BotOverviewPageAr() {
  return (
    <DocsContent title="نظرة عامة على البوت" description="مقدمة شاملة لبوت Discord لإدارة التذاكر">
      <p className="text-lg text-muted-foreground">
        بوت Discord هو القلب النابض لنظام إدارة التذاكر، حيث يوفر واجهة سهلة الاستخدام للمستخدمين والمشرفين لإنشاء
        وإدارة تذاكر الدعم.
      </p>

      <h2>الميزات الرئيسية</h2>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="p-6">
          <h3 className="font-semibold mb-2">🎫 إنشاء التذاكر</h3>
          <p className="text-sm text-muted-foreground">
            يمكن للمستخدمين إنشاء تذاكر دعم بسهولة من خلال أوامر Slash أو الأزرار التفاعلية.
          </p>
        </Card>

        <Card className="p-6">
          <h3 className="font-semibold mb-2">🔒 إدارة الصلاحيات</h3>
          <p className="text-sm text-muted-foreground">
            نظام صلاحيات متقدم يضمن أن كل مستخدم يمكنه الوصول فقط إلى التذاكر الخاصة به.
          </p>
        </Card>

        <Card className="p-6">
          <h3 className="font-semibold mb-2">📊 الإحصائيات</h3>
          <p className="text-sm text-muted-foreground">
            تتبع شامل لجميع التذاكر مع إحصائيات مفصلة عن الأداء ووقت الاستجابة.
          </p>
        </Card>

        <Card className="p-6">
          <h3 className="font-semibold mb-2">💾 النسخ الاحتياطي</h3>
          <p className="text-sm text-muted-foreground">
            حفظ تلقائي لجميع المحادثات والتذاكر في قاعدة البيانات مع إمكانية تصدير النصوص.
          </p>
        </Card>
      </div>

      <h2>كيف يعمل</h2>

      <div className="space-y-4">
        <div className="flex gap-4">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
            1
          </div>
          <div>
            <h3 className="font-semibold">إنشاء التذكرة</h3>
            <p className="text-sm text-muted-foreground">
              يقوم المستخدم بالنقر على زر "إنشاء تذكرة" أو استخدام أمر <code>/ticket create</code>
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
            2
          </div>
          <div>
            <h3 className="font-semibold">اختيار الفئة</h3>
            <p className="text-sm text-muted-foreground">
              يختار المستخدم فئة التذكرة (دعم عام، مشكلة تقنية، فوترة، بلاغ)
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
            3
          </div>
          <div>
            <h3 className="font-semibold">إنشاء القناة</h3>
            <p className="text-sm text-muted-foreground">يقوم البوت بإنشاء قناة خاصة للتذكرة مع الصلاحيات المناسبة</p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
            4
          </div>
          <div>
            <h3 className="font-semibold">المحادثة والدعم</h3>
            <p className="text-sm text-muted-foreground">يتواصل المستخدم مع فريق الدعم في القناة الخاصة</p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
            5
          </div>
          <div>
            <h3 className="font-semibold">إغلاق التذكرة</h3>
            <p className="text-sm text-muted-foreground">عند حل المشكلة، يتم إغلاق التذكرة وحفظ نسخة من المحادثة</p>
          </div>
        </div>
      </div>

      <h2>أنواع الأوامر</h2>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="p-6">
          <h3 className="font-semibold mb-2">أوامر Slash</h3>
          <p className="text-sm text-muted-foreground mb-4">
            أوامر حديثة وسهلة الاستخدام مع إكمال تلقائي والتحقق من الصحة.
          </p>
          <code className="text-sm">/ticket create</code>
        </Card>

        <Card className="p-6">
          <h3 className="font-semibold mb-2">أوامر البريفكس</h3>
          <p className="text-sm text-muted-foreground mb-4">أوامر تقليدية تبدأ برمز معين (مثل ! أو ؟).</p>
          <code className="text-sm">!ticket create</code>
        </Card>
      </div>

      <Card className="p-4 bg-blue-500/10 border-blue-500/20 mt-6">
        <p className="text-sm">
          <strong>💡 نصيحة:</strong> نوصي باستخدام أوامر Slash للحصول على أفضل تجربة مستخدم.
        </p>
      </Card>
    </DocsContent>
  )
}
