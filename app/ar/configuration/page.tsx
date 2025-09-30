export default function ConfigurationAr() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          الإعدادات والتخصيص
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          تعرف على كيفية تخصيص نظام إدارة التذاكر ليناسب احتياجات سيرفرك. يمكنك التحكم في جميع جوانب النظام من خلال
          الإعدادات المتقدمة.
        </p>
      </div>

      <div className="bg-card border border-border rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">الإعدادات الأساسية</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <span className="text-primary">📁</span>
              قسم التذاكر
            </h3>
            <p className="text-sm text-muted-foreground mb-3">
              القسم الذي سيتم إنشاء قنوات التذاكر فيه. يجب أن يكون البوت لديه صلاحية إدارة القنوات في هذا القسم.
            </p>
            <div className="bg-muted/50 rounded-lg p-4">
              <code className="text-sm">
                <span className="text-muted-foreground">الإعداد:</span>{" "}
                <span className="text-primary">ticketCategory</span>
              </code>
              <p className="text-xs text-muted-foreground mt-2">
                يتم إنشاؤه تلقائياً عند تشغيل أمر <code className="px-1 py-0.5 bg-background rounded">/setup</code>
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <span className="text-primary">📢</span>
              قناة إرسال التذاكر
            </h3>
            <p className="text-sm text-muted-foreground mb-3">
              القناة التي سيتم إرسال زر إنشاء التذاكر فيها. يمكن للأعضاء النقر على الزر لإنشاء تذكرة جديدة.
            </p>
            <div className="bg-muted/50 rounded-lg p-4">
              <code className="text-sm">
                <span className="text-muted-foreground">الإعداد:</span>{" "}
                <span className="text-primary">ticketSendChannel</span>
              </code>
              <p className="text-xs text-muted-foreground mt-2">
                يتم تحديدها تلقائياً عند تشغيل أمر <code className="px-1 py-0.5 bg-background rounded">/setup</code>
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <span className="text-secondary">👥</span>
              رتب الدعم
            </h3>
            <p className="text-sm text-muted-foreground mb-3">
              الرتب التي يمكنها رؤية والرد على التذاكر. يمكنك إضافة عدة رتب للدعم.
            </p>
            <div className="bg-muted/50 rounded-lg p-4">
              <code className="text-sm">
                <span className="text-muted-foreground">الإعداد:</span>{" "}
                <span className="text-primary">supportRoles</span>
              </code>
              <p className="text-xs text-muted-foreground mt-2">
                يمكن تحديدها من لوحة التحكم أو من خلال أمر{" "}
                <code className="px-1 py-0.5 bg-background rounded">/setup</code>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-card border border-border rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">إعدادات السجلات</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <span className="text-primary">📋</span>
              قناة سجلات الإدارة
            </h3>
            <p className="text-sm text-muted-foreground mb-3">
              القناة التي سيتم إرسال سجلات الإدارة فيها (إنشاء، إغلاق، استلام التذاكر).
            </p>
            <div className="bg-muted/50 rounded-lg p-4">
              <code className="text-sm">
                <span className="text-muted-foreground">الإعداد:</span>{" "}
                <span className="text-primary">adminLogChannel</span>
              </code>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <span className="text-primary">📝</span>
              قناة سجلات التذاكر
            </h3>
            <p className="text-sm text-muted-foreground mb-3">القناة التي سيتم إرسال نصوص التذاكر المغلقة فيها.</p>
            <div className="bg-muted/50 rounded-lg p-4">
              <code className="text-sm">
                <span className="text-muted-foreground">الإعداد:</span>{" "}
                <span className="text-primary">normalLogChannel</span>
              </code>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <span className="text-secondary">⭐</span>
              قناة التقييمات
            </h3>
            <p className="text-sm text-muted-foreground mb-3">القناة التي سيتم إرسال تقييمات الأعضاء للدعم فيها.</p>
            <div className="bg-muted/50 rounded-lg p-4">
              <code className="text-sm">
                <span className="text-muted-foreground">الإعداد:</span>{" "}
                <span className="text-primary">ratingChannel</span>
              </code>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-card border border-border rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">إعدادات التذاكر</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <span className="text-primary">🔢</span>
              الحد الأقصى للتذاكر
            </h3>
            <p className="text-sm text-muted-foreground mb-3">
              الحد الأقصى لعدد التذاكر المفتوحة التي يمكن للعضو الواحد إنشاؤها في نفس الوقت.
            </p>
            <div className="bg-muted/50 rounded-lg p-4">
              <code className="text-sm">
                <span className="text-muted-foreground">الإعداد:</span>{" "}
                <span className="text-primary">maxTicketsPerUser</span>
              </code>
              <p className="text-xs text-muted-foreground mt-2">
                القيمة الافتراضية: <code className="px-1 py-0.5 bg-background rounded">3</code>
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <span className="text-primary">💬</span>
              رسالة الترحيب
            </h3>
            <p className="text-sm text-muted-foreground mb-3">
              الرسالة التي سيتم إرسالها تلقائياً عند إنشاء تذكرة جديدة.
            </p>
            <div className="bg-muted/50 rounded-lg p-4">
              <code className="text-sm">
                <span className="text-muted-foreground">الإعداد:</span>{" "}
                <span className="text-primary">welcomeMessage</span>
              </code>
              <div className="mt-3 p-3 bg-background rounded text-xs">
                <p className="text-muted-foreground">مثال:</p>
                <p className="mt-1">مرحباً بك في نظام الدعم! سيتم الرد عليك في أقرب وقت ممكن.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-card border border-border rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">إعدادات متقدمة</h2>
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <span className="text-2xl">⭐</span>
            </div>
            <div className="flex-1">
              <h3 className="font-semibold mb-1">تفعيل التقييمات</h3>
              <p className="text-sm text-muted-foreground mb-2">السماح للأعضاء بتقييم خدمة الدعم بعد إغلاق التذكرة.</p>
              <code className="text-xs bg-muted px-2 py-1 rounded">ratingsEnabled: true</code>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
              <span className="text-2xl">📄</span>
            </div>
            <div className="flex-1">
              <h3 className="font-semibold mb-1">تفعيل النصوص</h3>
              <p className="text-sm text-muted-foreground mb-2">حفظ نصوص المحادثات عند إغلاق التذاكر.</p>
              <code className="text-xs bg-muted px-2 py-1 rounded">transcriptsEnabled: true</code>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <span className="text-2xl">💾</span>
            </div>
            <div className="flex-1">
              <h3 className="font-semibold mb-1">الحفظ التلقائي للنصوص</h3>
              <p className="text-sm text-muted-foreground mb-2">حفظ نصوص التذاكر تلقائياً في قاعدة البيانات.</p>
              <code className="text-xs bg-muted px-2 py-1 rounded">autoSaveTranscripts: true</code>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
              <span className="text-2xl">📧</span>
            </div>
            <div className="flex-1">
              <h3 className="font-semibold mb-1">إرسال رسالة خاصة عند الإغلاق</h3>
              <p className="text-sm text-muted-foreground mb-2">إرسال رسالة خاصة للعضو عند إغلاق تذكرته.</p>
              <code className="text-xs bg-muted px-2 py-1 rounded">dmUserOnClose: true</code>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <span className="text-2xl">📬</span>
            </div>
            <div className="flex-1">
              <h3 className="font-semibold mb-1">إرسال رسالة خاصة عند الفتح</h3>
              <p className="text-sm text-muted-foreground mb-2">إرسال رسالة خاصة للعضو عند إنشاء تذكرة جديدة.</p>
              <code className="text-xs bg-muted px-2 py-1 rounded">dmUserOnOpen: true</code>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">تحديث الإعدادات</h2>
        <p className="text-muted-foreground mb-4">
          يمكنك تحديث الإعدادات من خلال لوحة التحكم على الموقع أو من خلال قاعدة البيانات مباشرة:
        </p>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2 text-sm">من خلال لوحة التحكم:</h3>
            <ol className="text-sm text-muted-foreground space-y-1 mr-6">
              <li>1. قم بتسجيل الدخول إلى لوحة التحكم</li>
              <li>2. انتقل إلى صفحة الإعدادات</li>
              <li>3. قم بتعديل الإعدادات المطلوبة</li>
              <li>4. احفظ التغييرات</li>
            </ol>
          </div>
          <div>
            <h3 className="font-semibold mb-2 text-sm">من خلال قاعدة البيانات:</h3>
            <div className="bg-background/50 backdrop-blur-sm rounded-lg p-4 font-mono text-xs border border-border">
              <code className="text-primary">
                db.settings.updateOne({"{}"}, {"{"} $set: {"{"} maxTicketsPerUser: 5 {"}"} {"}"})
              </code>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-6">
        <h3 className="font-semibold mb-2 flex items-center gap-2 text-yellow-600 dark:text-yellow-500">
          <span>⚠️</span>
          تحذير
        </h3>
        <p className="text-sm text-muted-foreground">
          بعض الإعدادات تتطلب إعادة تشغيل البوت لتطبيق التغييرات. تأكد من حفظ جميع التذاكر المفتوحة قبل إعادة التشغيل.
        </p>
      </div>
    </div>
  )
}
