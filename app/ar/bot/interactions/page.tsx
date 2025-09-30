import { DocsContent } from "@/components/docs-content"
import { Card } from "@/components/ui/card"

export default function InteractionsPageAr() {
  return (
    <DocsContent title="التفاعلات" description="الأزرار والقوائم والنماذج التفاعلية">
      <p className="text-lg text-muted-foreground">
        يستخدم البوت مكونات Discord التفاعلية لتوفير تجربة مستخدم سلسة وبديهية.
      </p>

      <h2>لوحة إنشاء التذاكر</h2>
      <p>اللوحة الرئيسية التي يتفاعل معها المستخدمون لإنشاء تذاكر جديدة.</p>

      <Card className="p-6">
        <h3 className="font-semibold mb-4">🎫 إنشاء تذكرة</h3>
        <p className="text-sm text-muted-foreground mb-4">
          انقر على الزر أدناه لإنشاء تذكرة دعم. سيتم إنشاء قناة خاصة لك للتواصل مع فريق الدعم.
        </p>
        <div className="bg-primary text-primary-foreground px-4 py-2 rounded-md inline-block">🎫 إنشاء تذكرة</div>
      </Card>

      <h2>قائمة اختيار الفئة</h2>
      <p>عند النقر على زر إنشاء تذكرة، تظهر قائمة منسدلة لاختيار فئة التذكرة.</p>

      <div className="bg-muted/50 p-4 rounded-lg border space-y-2">
        <p className="font-semibold">الفئات المتاحة:</p>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>📋 دعم عام - للاستفسارات والأسئلة العامة</li>
          <li>🔧 مشكلة تقنية - للمشاكل التقنية والأخطاء</li>
          <li>💳 فوترة - لاستفسارات الدفع والاشتراكات</li>
          <li>🚨 بلاغ - للإبلاغ عن مخالفات أو مشاكل</li>
        </ul>
      </div>

      <h2>أزرار إدارة التذكرة</h2>
      <p>تظهر هذه الأزرار في كل قناة تذكرة لإدارتها بسهولة.</p>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="p-4">
          <h3 className="font-semibold mb-2">🔒 إغلاق التذكرة</h3>
          <p className="text-sm text-muted-foreground">يغلق التذكرة الحالية ويحفظ نسخة من المحادثة.</p>
        </Card>

        <Card className="p-4">
          <h3 className="font-semibold mb-2">➕ إضافة مستخدم</h3>
          <p className="text-sm text-muted-foreground">يفتح نموذج لإضافة مستخدم آخر إلى التذكرة.</p>
        </Card>

        <Card className="p-4">
          <h3 className="font-semibold mb-2">➖ إزالة مستخدم</h3>
          <p className="text-sm text-muted-foreground">يفتح قائمة لاختيار مستخدم لإزالته من التذكرة.</p>
        </Card>

        <Card className="p-4">
          <h3 className="font-semibold mb-2">📊 الإحصائيات</h3>
          <p className="text-sm text-muted-foreground">يعرض إحصائيات التذكرة الحالية ومعلومات إضافية.</p>
        </Card>
      </div>

      <h2>نموذج إغلاق التذكرة</h2>
      <p>عند إغلاق تذكرة، يظهر نموذج لإدخال سبب الإغلاق.</p>

      <Card className="p-6">
        <h3 className="font-semibold mb-4">إغلاق التذكرة</h3>
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium">سبب الإغلاق (اختياري)</label>
            <div className="mt-1 bg-background border rounded-md p-2 text-sm text-muted-foreground">
              تم حل المشكلة بنجاح...
            </div>
          </div>
          <div className="flex gap-2">
            <div className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm">إغلاق</div>
            <div className="bg-muted text-muted-foreground px-4 py-2 rounded-md text-sm">إلغاء</div>
          </div>
        </div>
      </Card>

      <h2>رسالة تأكيد الإنشاء</h2>
      <p>بعد إنشاء التذكرة بنجاح، يتلقى المستخدم رسالة تأكيد.</p>

      <Card className="p-6 bg-green-500/10 border-green-500/20">
        <h3 className="font-semibold mb-2">✅ تم إنشاء التذكرة بنجاح!</h3>
        <p className="text-sm">
          تم إنشاء تذكرتك في <span className="font-mono">#ticket-0001</span>
        </p>
        <p className="text-sm text-muted-foreground mt-2">سيقوم فريق الدعم بالرد عليك في أقرب وقت ممكن.</p>
      </Card>

      <Card className="p-4 bg-blue-500/10 border-blue-500/20 mt-6">
        <p className="text-sm">
          <strong>💡 نصيحة:</strong> جميع التفاعلات تعمل بشكل فوري ولا تتطلب إعادة تحميل الصفحة.
        </p>
      </Card>
    </DocsContent>
  )
}
