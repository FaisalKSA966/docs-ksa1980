import { DocsContent } from "@/components/docs-content"
import { Card } from "@/components/ui/card"

export default function SlashCommandsPageAr() {
  return (
    <DocsContent title="أوامر Slash" description="مرجع كامل لجميع أوامر Slash في نظام التذاكر">
      <p className="text-lg text-muted-foreground">
        توفر أوامر Slash واجهة حديثة وسهلة الاستخدام للتفاعل مع البوت. جميع الأوامر تتضمن إكمال تلقائي والتحقق من الصحة
        ووصف مفيد.
      </p>

      <h2>/ticket create</h2>
      <p>إنشاء تذكرة دعم جديدة مع فئة محددة.</p>

      <div className="bg-muted/50 p-4 rounded-lg border space-y-2">
        <p className="font-semibold">الاستخدام:</p>
        <code className="text-sm block">/ticket create category:[general|technical|billing|report]</code>
        <p className="text-sm text-muted-foreground mt-2">
          ينشئ قناة تذكرة خاصة حيث يمكنك مناقشة مشكلتك مع فريق الدعم.
        </p>
      </div>

      <h2>/ticket close</h2>
      <p>إغلاق التذكرة الحالية مع سبب اختياري.</p>

      <div className="bg-muted/50 p-4 rounded-lg border space-y-2">
        <p className="font-semibold">الاستخدام:</p>
        <code className="text-sm block">/ticket close [reason:اختياري]</code>
        <p className="text-sm text-muted-foreground mt-2">
          يغلق التذكرة، وينشئ نسخة من المحادثة، ويحفظها للرجوع إليها مستقبلاً.
        </p>
      </div>

      <h2>/ticket add</h2>
      <p>إضافة مستخدم إلى التذكرة الحالية.</p>

      <div className="bg-muted/50 p-4 rounded-lg border space-y-2">
        <p className="font-semibold">الاستخدام:</p>
        <code className="text-sm block">/ticket add user:@username</code>
        <p className="text-sm text-muted-foreground mt-2">
          يمنح المستخدم المحدد إمكانية الوصول لعرض وإرسال الرسائل في قناة التذكرة.
        </p>
      </div>

      <h2>/ticket remove</h2>
      <p>إزالة مستخدم من التذكرة الحالية.</p>

      <div className="bg-muted/50 p-4 rounded-lg border space-y-2">
        <p className="font-semibold">الاستخدام:</p>
        <code className="text-sm block">/ticket remove user:@username</code>
        <p className="text-sm text-muted-foreground mt-2">يلغي وصول المستخدم المحدد إلى قناة التذكرة.</p>
      </div>

      <h2>/stats</h2>
      <p>عرض إحصائيات شاملة للتذاكر.</p>

      <div className="bg-muted/50 p-4 rounded-lg border space-y-2">
        <p className="font-semibold">الاستخدام:</p>
        <code className="text-sm block">/stats [user:اختياري]</code>
        <p className="text-sm text-muted-foreground mt-2">
          يعرض إحصائيات تشمل إجمالي التذاكر، التذاكر المفتوحة، التذاكر المغلقة، ومتوسط وقت الاستجابة.
        </p>
      </div>

      <h2>/setup</h2>
      <p>تكوين نظام التذاكر (للمسؤولين فقط).</p>

      <Card className="p-4 bg-amber-500/10 border-amber-500/20">
        <p className="text-sm">
          <strong>⚠️ للمسؤولين فقط:</strong> يتطلب هذا الأمر صلاحيات المسؤول ويقوم بإعداد قنوات نظام التذاكر والأدوار
          والفئات.
        </p>
      </Card>

      <div className="bg-muted/50 p-4 rounded-lg border space-y-2 mt-4">
        <p className="font-semibold">الاستخدام:</p>
        <code className="text-sm block">/setup</code>
        <p className="text-sm text-muted-foreground mt-2">ينشئ تلقائياً فئات التذاكر والقنوات ويكوّن الصلاحيات.</p>
      </div>

      <h2>صلاحيات الأوامر</h2>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b">
              <th className="text-right p-3">الأمر</th>
              <th className="text-right p-3">الدور المطلوب</th>
              <th className="text-right p-3">الوصف</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="p-3 font-mono text-sm">/ticket create</td>
              <td className="p-3 text-sm">الجميع</td>
              <td className="p-3 text-sm">إنشاء تذكرة جديدة</td>
            </tr>
            <tr className="border-b">
              <td className="p-3 font-mono text-sm">/ticket close</td>
              <td className="p-3 text-sm">الدعم+</td>
              <td className="p-3 text-sm">إغلاق التذاكر</td>
            </tr>
            <tr className="border-b">
              <td className="p-3 font-mono text-sm">/ticket add</td>
              <td className="p-3 text-sm">المشرف+</td>
              <td className="p-3 text-sm">إضافة مستخدمين للتذاكر</td>
            </tr>
            <tr className="border-b">
              <td className="p-3 font-mono text-sm">/ticket remove</td>
              <td className="p-3 text-sm">المشرف+</td>
              <td className="p-3 text-sm">إزالة مستخدمين من التذاكر</td>
            </tr>
            <tr className="border-b">
              <td className="p-3 font-mono text-sm">/stats</td>
              <td className="p-3 text-sm">الدعم+</td>
              <td className="p-3 text-sm">عرض الإحصائيات</td>
            </tr>
            <tr className="border-b">
              <td className="p-3 font-mono text-sm">/setup</td>
              <td className="p-3 text-sm">المسؤول</td>
              <td className="p-3 text-sm">تكوين النظام</td>
            </tr>
          </tbody>
        </table>
      </div>
    </DocsContent>
  )
}
