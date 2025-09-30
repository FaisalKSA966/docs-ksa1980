export default function QuickStartAr() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          البدء السريع
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          ابدأ مع نظام إدارة التذاكر في دقائق معدودة. اتبع هذا الدليل للإعداد السريع والبدء في استخدام النظام.
        </p>
      </div>

      <div className="bg-card border border-border rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <span className="text-primary">⚡</span>
          الإعداد السريع
        </h2>
        <p className="text-muted-foreground mb-4">يمكنك إعداد النظام بالكامل في 3 خطوات بسيطة:</p>
        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
              1
            </div>
            <div>
              <h3 className="font-semibold mb-1">قم بدعوة البوت إلى سيرفرك</h3>
              <p className="text-sm text-muted-foreground">
                استخدم رابط الدعوة الخاص بالبوت وتأكد من منحه جميع الصلاحيات المطلوبة
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
              2
            </div>
            <div>
              <h3 className="font-semibold mb-1">قم بتشغيل أمر الإعداد</h3>
              <p className="text-sm text-muted-foreground">
                استخدم الأمر <code className="px-2 py-1 bg-muted rounded text-primary">/setup</code> لإعداد النظام
                تلقائياً
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
              3
            </div>
            <div>
              <h3 className="font-semibold mb-1">ابدأ في استخدام النظام</h3>
              <p className="text-sm text-muted-foreground">يمكن للأعضاء الآن إنشاء التذاكر والحصول على الدعم</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-card border border-border rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">المتطلبات الأساسية</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-muted/50 rounded-lg">
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <span className="text-primary">🤖</span>
              البوت
            </h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• صلاحية إدارة القنوات</li>
              <li>• صلاحية إدارة الرتب</li>
              <li>• صلاحية إرسال الرسائل</li>
              <li>• صلاحية إدارة الرسائل</li>
            </ul>
          </div>
          <div className="p-4 bg-muted/50 rounded-lg">
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <span className="text-secondary">👤</span>
              المستخدم
            </h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• صلاحية المدير (للإعداد)</li>
              <li>• رتبة الدعم (للموظفين)</li>
              <li>• عضو في السيرفر</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">أمر الإعداد السريع</h2>
        <p className="text-muted-foreground mb-4">استخدم الأمر التالي لإعداد النظام بالكامل تلقائياً:</p>
        <div className="bg-background/50 backdrop-blur-sm rounded-lg p-4 font-mono text-sm border border-border">
          <div className="flex items-center justify-between mb-2">
            <span className="text-muted-foreground">Discord</span>
            <button className="text-xs text-primary hover:text-primary/80 transition-colors">نسخ</button>
          </div>
          <code className="text-primary">/setup</code>
        </div>
        <p className="text-sm text-muted-foreground mt-4">
          سيقوم هذا الأمر بإنشاء قسم التذاكر، قناة إرسال التذاكر، وإعداد جميع الإعدادات الأساسية تلقائياً.
        </p>
      </div>

      <div className="bg-card border border-border rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">ماذا بعد؟</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <a href="/ar/installation" className="p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors group">
            <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">التثبيت الكامل →</h3>
            <p className="text-sm text-muted-foreground">دليل شامل لتثبيت وإعداد النظام بالكامل</p>
          </a>
          <a href="/ar/configuration" className="p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors group">
            <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">الإعدادات →</h3>
            <p className="text-sm text-muted-foreground">تخصيص النظام ليناسب احتياجات سيرفرك</p>
          </a>
          <a href="/ar/bot-commands" className="p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors group">
            <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">أوامر البوت →</h3>
            <p className="text-sm text-muted-foreground">تعرف على جميع الأوامر المتاحة في البوت</p>
          </a>
        </div>
      </div>

      <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-6">
        <h3 className="font-semibold mb-2 flex items-center gap-2 text-yellow-600 dark:text-yellow-500">
          <span>⚠️</span>
          ملاحظة مهمة
        </h3>
        <p className="text-sm text-muted-foreground">
          تأكد من أن البوت لديه جميع الصلاحيات المطلوبة قبل تشغيل أمر الإعداد. يمكنك التحقق من الصلاحيات من خلال إعدادات
          السيرفر.
        </p>
      </div>
    </div>
  )
}
