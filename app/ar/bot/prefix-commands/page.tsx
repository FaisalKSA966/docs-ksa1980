import { DocsContent } from "@/components/docs-content"
import { Card } from "@/components/ui/card"

export default function PrefixCommandsPageAr() {
  return (
    <DocsContent title="أوامر البريفكس" description="مرجع كامل لجميع أوامر البريفكس التقليدية">
      <p className="text-lg text-muted-foreground">
        أوامر البريفكس هي الطريقة التقليدية للتفاعل مع البوت. البريفكس الافتراضي هو <code>!</code> ولكن يمكن تخصيصه.
      </p>

      <Card className="p-4 bg-blue-500/10 border-blue-500/20">
        <p className="text-sm">
          <strong>💡 ملاحظة:</strong> نوصي باستخدام أوامر Slash للحصول على تجربة أفضل مع الإكمال التلقائي والتحقق من
          الصحة.
        </p>
      </Card>

      <h2>!ticket create</h2>
      <p>إنشاء تذكرة دعم جديدة.</p>

      <div className="bg-muted/50 p-4 rounded-lg border space-y-2">
        <p className="font-semibold">الاستخدام:</p>
        <code className="text-sm block">!ticket create [الفئة]</code>
        <p className="text-sm text-muted-foreground mt-2">
          <strong>مثال:</strong> <code>!ticket create general</code>
        </p>
      </div>

      <h2>!ticket close</h2>
      <p>إغلاق التذكرة الحالية.</p>

      <div className="bg-muted/50 p-4 rounded-lg border space-y-2">
        <p className="font-semibold">الاستخدام:</p>
        <code className="text-sm block">!ticket close [السبب]</code>
        <p className="text-sm text-muted-foreground mt-2">
          <strong>مثال:</strong> <code>!ticket close تم حل المشكلة</code>
        </p>
      </div>

      <h2>!ticket add</h2>
      <p>إضافة مستخدم إلى التذكرة.</p>

      <div className="bg-muted/50 p-4 rounded-lg border space-y-2">
        <p className="font-semibold">الاستخدام:</p>
        <code className="text-sm block">!ticket add @user</code>
        <p className="text-sm text-muted-foreground mt-2">
          <strong>مثال:</strong> <code>!ticket add @Ahmed</code>
        </p>
      </div>

      <h2>!ticket remove</h2>
      <p>إزالة مستخدم من التذكرة.</p>

      <div className="bg-muted/50 p-4 rounded-lg border space-y-2">
        <p className="font-semibold">الاستخدام:</p>
        <code className="text-sm block">!ticket remove @user</code>
        <p className="text-sm text-muted-foreground mt-2">
          <strong>مثال:</strong> <code>!ticket remove @Ahmed</code>
        </p>
      </div>

      <h2>!stats</h2>
      <p>عرض إحصائيات التذاكر.</p>

      <div className="bg-muted/50 p-4 rounded-lg border space-y-2">
        <p className="font-semibold">الاستخدام:</p>
        <code className="text-sm block">!stats [@user]</code>
        <p className="text-sm text-muted-foreground mt-2">
          <strong>مثال:</strong> <code>!stats</code> أو <code>!stats @Ahmed</code>
        </p>
      </div>

      <h2>!setup</h2>
      <p>إعداد نظام التذاكر (للمسؤولين فقط).</p>

      <Card className="p-4 bg-amber-500/10 border-amber-500/20">
        <p className="text-sm">
          <strong>⚠️ للمسؤولين فقط:</strong> يتطلب صلاحيات المسؤول.
        </p>
      </Card>

      <div className="bg-muted/50 p-4 rounded-lg border space-y-2 mt-4">
        <p className="font-semibold">الاستخدام:</p>
        <code className="text-sm block">!setup</code>
      </div>

      <h2>!prefix</h2>
      <p>تغيير البريفكس الخاص بالسيرفر.</p>

      <div className="bg-muted/50 p-4 rounded-lg border space-y-2">
        <p className="font-semibold">الاستخدام:</p>
        <code className="text-sm block">!prefix [البريفكس الجديد]</code>
        <p className="text-sm text-muted-foreground mt-2">
          <strong>مثال:</strong> <code>!prefix ?</code>
        </p>
      </div>

      <h2>الفئات المتاحة</h2>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="p-4">
          <h3 className="font-semibold mb-2">general</h3>
          <p className="text-sm text-muted-foreground">دعم عام واستفسارات</p>
        </Card>

        <Card className="p-4">
          <h3 className="font-semibold mb-2">technical</h3>
          <p className="text-sm text-muted-foreground">مشاكل تقنية وأخطاء</p>
        </Card>

        <Card className="p-4">
          <h3 className="font-semibold mb-2">billing</h3>
          <p className="text-sm text-muted-foreground">استفسارات الفوترة والدفع</p>
        </Card>

        <Card className="p-4">
          <h3 className="font-semibold mb-2">report</h3>
          <p className="text-sm text-muted-foreground">الإبلاغ عن مشاكل أو مخالفات</p>
        </Card>
      </div>
    </DocsContent>
  )
}
