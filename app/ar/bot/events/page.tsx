import { DocsContent } from "@/components/docs-content"
import { Card } from "@/components/ui/card"

export default function EventsPageAr() {
  return (
    <DocsContent title="الأحداث" description="الأحداث التلقائية والإشعارات في نظام التذاكر">
      <p className="text-lg text-muted-foreground">
        يستمع البوت إلى مجموعة من الأحداث لتوفير تجربة سلسة وتلقائية لإدارة التذاكر.
      </p>

      <h2>حدث إنشاء التذكرة</h2>
      <p>يتم تشغيله عند إنشاء تذكرة جديدة.</p>

      <div className="bg-muted/50 p-4 rounded-lg border space-y-2">
        <p className="font-semibold">الإجراءات التلقائية:</p>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>إنشاء قناة خاصة للتذكرة</li>
          <li>تعيين الصلاحيات المناسبة</li>
          <li>إرسال رسالة ترحيب</li>
          <li>إضافة أزرار الإدارة</li>
          <li>حفظ البيانات في قاعدة البيانات</li>
          <li>إرسال إشعار لفريق الدعم</li>
        </ul>
      </div>

      <h2>حدث إغلاق التذكرة</h2>
      <p>يتم تشغيله عند إغلاق تذكرة.</p>

      <div className="bg-muted/50 p-4 rounded-lg border space-y-2">
        <p className="font-semibold">الإجراءات التلقائية:</p>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>إنشاء نسخة من المحادثة (Transcript)</li>
          <li>حفظ النسخة في قناة الأرشيف</li>
          <li>تحديث حالة التذكرة في قاعدة البيانات</li>
          <li>إرسال رسالة تأكيد للمستخدم</li>
          <li>حذف القناة بعد 5 ثوانٍ</li>
          <li>تحديث الإحصائيات</li>
        </ul>
      </div>

      <h2>حدث إضافة رسالة</h2>
      <p>يتم تشغيله عند إرسال رسالة في قناة تذكرة.</p>

      <div className="bg-muted/50 p-4 rounded-lg border space-y-2">
        <p className="font-semibold">الإجراءات التلقائية:</p>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>حفظ الرسالة في قاعدة البيانات</li>
          <li>تحديث آخر نشاط للتذكرة</li>
          <li>إرسال إشعار للأطراف المعنية</li>
          <li>تحديث عداد الرسائل</li>
        </ul>
      </div>

      <h2>حدث إضافة/إزالة مستخدم</h2>
      <p>يتم تشغيله عند إضافة أو إزالة مستخدم من تذكرة.</p>

      <div className="bg-muted/50 p-4 rounded-lg border space-y-2">
        <p className="font-semibold">الإجراءات التلقائية:</p>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>تحديث صلاحيات القناة</li>
          <li>إرسال رسالة إعلامية في القناة</li>
          <li>تسجيل الحدث في قاعدة البيانات</li>
          <li>إرسال إشعار للمستخدم المضاف/المحذوف</li>
        </ul>
      </div>

      <h2>حدث التذكرة غير النشطة</h2>
      <p>يتم تشغيله عندما تكون التذكرة غير نشطة لفترة طويلة.</p>

      <Card className="p-4 bg-amber-500/10 border-amber-500/20">
        <p className="text-sm">
          <strong>⚠️ تنبيه:</strong> إذا لم يكن هناك نشاط في التذكرة لمدة 24 ساعة، سيتم إرسال تذكير تلقائي.
        </p>
      </Card>

      <div className="bg-muted/50 p-4 rounded-lg border space-y-2 mt-4">
        <p className="font-semibold">الإجراءات التلقائية:</p>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>إرسال رسالة تذكير في القناة</li>
          <li>إشعار المستخدم والمشرفين</li>
          <li>إغلاق تلقائي بعد 48 ساعة من عدم النشاط</li>
        </ul>
      </div>

      <h2>حدث بدء تشغيل البوت</h2>
      <p>يتم تشغيله عند بدء تشغيل البوت.</p>

      <div className="bg-muted/50 p-4 rounded-lg border space-y-2">
        <p className="font-semibold">الإجراءات التلقائية:</p>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>الاتصال بقاعدة البيانات</li>
          <li>تحميل الإعدادات من قاعدة البيانات</li>
          <li>تسجيل أوامر Slash</li>
          <li>التحقق من التذاكر المفتوحة</li>
          <li>بدء المهام المجدولة</li>
          <li>تسجيل حالة البوت</li>
        </ul>
      </div>

      <h2>الإشعارات</h2>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="p-4">
          <h3 className="font-semibold mb-2">📬 إشعارات المستخدم</h3>
          <p className="text-sm text-muted-foreground">
            يتلقى المستخدمون إشعارات عند إنشاء التذكرة، الردود الجديدة، والإغلاق.
          </p>
        </Card>

        <Card className="p-4">
          <h3 className="font-semibold mb-2">🔔 إشعارات المشرفين</h3>
          <p className="text-sm text-muted-foreground">
            يتلقى المشرفون إشعارات عند إنشاء تذاكر جديدة والتذاكر غير النشطة.
          </p>
        </Card>
      </div>

      <Card className="p-4 bg-blue-500/10 border-blue-500/20 mt-6">
        <p className="text-sm">
          <strong>💡 نصيحة:</strong> يمكن تخصيص جميع الأحداث والإشعارات من لوحة التحكم.
        </p>
      </Card>
    </DocsContent>
  )
}
