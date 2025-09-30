export default function InstallationAr() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          التثبيت والإعداد
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          دليل شامل لتثبيت وإعداد نظام إدارة التذاكر على سيرفرك. اتبع الخطوات بعناية للحصول على أفضل تجربة.
        </p>
      </div>

      <div className="bg-card border border-border rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">المتطلبات الأساسية</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <span className="text-primary">🖥️</span>
              متطلبات النظام
            </h3>
            <ul className="text-sm text-muted-foreground space-y-2 mr-6">
              <li>• Node.js الإصدار 18 أو أحدث</li>
              <li>• npm أو yarn لإدارة الحزم</li>
              <li>• حساب Discord Developer Portal</li>
              <li>• حساب MongoDB Atlas (اختياري)</li>
              <li>• خادم أو VPS للاستضافة (للإنتاج)</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <span className="text-secondary">🔑</span>
              الصلاحيات المطلوبة
            </h3>
            <ul className="text-sm text-muted-foreground space-y-2 mr-6">
              <li>• إدارة القنوات (Manage Channels)</li>
              <li>• إدارة الرتب (Manage Roles)</li>
              <li>• إرسال الرسائل (Send Messages)</li>
              <li>• إدارة الرسائل (Manage Messages)</li>
              <li>• قراءة سجل الرسائل (Read Message History)</li>
              <li>• إضافة التفاعلات (Add Reactions)</li>
              <li>• استخدام الأوامر المائلة (Use Slash Commands)</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-card border border-border rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">الخطوة 1: إنشاء تطبيق Discord</h2>
        <div className="space-y-4">
          <p className="text-muted-foreground">قم بإنشاء تطبيق Discord جديد للحصول على التوكن والمعرفات المطلوبة:</p>
          <ol className="text-sm text-muted-foreground space-y-3 mr-6">
            <li>
              <strong className="text-foreground">1.</strong> انتقل إلى{" "}
              <a
                href="https://discord.com/developers/applications"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Discord Developer Portal
              </a>
            </li>
            <li>
              <strong className="text-foreground">2.</strong> انقر على "New Application" وأدخل اسم البوت
            </li>
            <li>
              <strong className="text-foreground">3.</strong> انتقل إلى قسم "Bot" وانقر على "Add Bot"
            </li>
            <li>
              <strong className="text-foreground">4.</strong> قم بتفعيل جميع "Privileged Gateway Intents"
            </li>
            <li>
              <strong className="text-foreground">5.</strong> انسخ التوكن من قسم "Token"
            </li>
            <li>
              <strong className="text-foreground">6.</strong> انتقل إلى قسم "OAuth2" وانسخ "Client ID"
            </li>
          </ol>
        </div>
      </div>

      <div className="bg-card border border-border rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">الخطوة 2: دعوة البوت إلى السيرفر</h2>
        <div className="space-y-4">
          <p className="text-muted-foreground">استخدم رابط الدعوة التالي لإضافة البوت إلى سيرفرك:</p>
          <div className="bg-muted/50 rounded-lg p-4 font-mono text-sm">
            <code className="text-primary break-all">
              https://discord.com/api/oauth2/authorize?client_id=YOUR_CLIENT_ID&permissions=8&scope=bot%20applications.commands
            </code>
          </div>
          <p className="text-sm text-muted-foreground">
            استبدل <code className="px-2 py-1 bg-muted rounded text-primary">YOUR_CLIENT_ID</code> بمعرف التطبيق الخاص
            بك.
          </p>
        </div>
      </div>

      <div className="bg-card border border-border rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">الخطوة 3: تثبيت البوت</h2>
        <div className="space-y-4">
          <p className="text-muted-foreground">قم بتحميل ملفات البوت وتثبيت التبعيات:</p>
          <div className="bg-background/50 backdrop-blur-sm rounded-lg p-4 font-mono text-sm border border-border">
            <div className="flex items-center justify-between mb-2">
              <span className="text-muted-foreground">Terminal</span>
              <button className="text-xs text-primary hover:text-primary/80 transition-colors">نسخ</button>
            </div>
            <div className="space-y-2">
              <div>
                <span className="text-muted-foreground"># تحميل المشروع</span>
              </div>
              <div>
                <span className="text-primary">git clone</span>{" "}
                <span className="text-foreground">https://github.com/your-repo/ticket-system.git</span>
              </div>
              <div>
                <span className="text-primary">cd</span> <span className="text-foreground">ticket-system</span>
              </div>
              <div className="mt-4">
                <span className="text-muted-foreground"># تثبيت التبعيات</span>
              </div>
              <div>
                <span className="text-primary">npm install</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-card border border-border rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">الخطوة 4: إعداد متغيرات البيئة</h2>
        <div className="space-y-4">
          <p className="text-muted-foreground">
            قم بإنشاء ملف <code className="px-2 py-1 bg-muted rounded text-primary">.env</code> في المجلد الرئيسي وأضف
            المتغيرات التالية:
          </p>
          <div className="bg-background/50 backdrop-blur-sm rounded-lg p-4 font-mono text-sm border border-border">
            <div className="flex items-center justify-between mb-2">
              <span className="text-muted-foreground">.env</span>
              <button className="text-xs text-primary hover:text-primary/80 transition-colors">نسخ</button>
            </div>
            <div className="space-y-1">
              <div>
                <span className="text-muted-foreground"># Discord Bot</span>
              </div>
              <div>
                <span className="text-secondary">DISCORD_BOT_TOKEN</span>
                <span className="text-foreground">=</span>
                <span className="text-primary">your_bot_token_here</span>
              </div>
              <div>
                <span className="text-secondary">DISCORD_CLIENT_ID</span>
                <span className="text-foreground">=</span>
                <span className="text-primary">your_client_id_here</span>
              </div>
              <div>
                <span className="text-secondary">DISCORD_GUILD_ID</span>
                <span className="text-foreground">=</span>
                <span className="text-primary">your_server_id_here</span>
              </div>
              <div className="mt-2">
                <span className="text-muted-foreground"># Database (اختياري)</span>
              </div>
              <div>
                <span className="text-secondary">MONGODB_URI</span>
                <span className="text-foreground">=</span>
                <span className="text-primary">mongodb+srv://user:pass@cluster.mongodb.net/database</span>
              </div>
              <div className="mt-2">
                <span className="text-muted-foreground"># Admin</span>
              </div>
              <div>
                <span className="text-secondary">ADMIN_USERS</span>
                <span className="text-foreground">=</span>
                <span className="text-primary">your_discord_user_id_here</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-card border border-border rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">الخطوة 5: تشغيل البوت</h2>
        <div className="space-y-4">
          <p className="text-muted-foreground">قم بتشغيل البوت باستخدام الأمر التالي:</p>
          <div className="bg-background/50 backdrop-blur-sm rounded-lg p-4 font-mono text-sm border border-border">
            <div className="flex items-center justify-between mb-2">
              <span className="text-muted-foreground">Terminal</span>
              <button className="text-xs text-primary hover:text-primary/80 transition-colors">نسخ</button>
            </div>
            <div className="space-y-2">
              <div>
                <span className="text-muted-foreground"># للتطوير</span>
              </div>
              <div>
                <span className="text-primary">npm run dev</span>
              </div>
              <div className="mt-4">
                <span className="text-muted-foreground"># للإنتاج</span>
              </div>
              <div>
                <span className="text-primary">npm start</span>
              </div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            إذا كان كل شيء يعمل بشكل صحيح، سترى رسالة تأكيد في الطرفية تفيد بأن البوت متصل.
          </p>
        </div>
      </div>

      <div className="bg-card border border-border rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">الخطوة 6: نشر أوامر Slash</h2>
        <div className="space-y-4">
          <p className="text-muted-foreground">قم بنشر أوامر Slash إلى سيرفرك:</p>
          <div className="bg-background/50 backdrop-blur-sm rounded-lg p-4 font-mono text-sm border border-border">
            <div className="flex items-center justify-between mb-2">
              <span className="text-muted-foreground">Terminal</span>
              <button className="text-xs text-primary hover:text-primary/80 transition-colors">نسخ</button>
            </div>
            <div>
              <span className="text-primary">npm run deploy</span>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            سيقوم هذا الأمر بتسجيل جميع أوامر Slash في سيرفرك. قد يستغرق الأمر بضع دقائق حتى تظهر الأوامر.
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">التحقق من التثبيت</h2>
        <p className="text-muted-foreground mb-4">
          للتأكد من أن كل شيء يعمل بشكل صحيح، قم بتشغيل الأمر التالي في سيرفرك:
        </p>
        <div className="bg-background/50 backdrop-blur-sm rounded-lg p-4 font-mono text-sm border border-border">
          <code className="text-primary">/setup</code>
        </div>
        <p className="text-sm text-muted-foreground mt-4">
          إذا ظهرت رسالة تأكيد، فهذا يعني أن التثبيت تم بنجاح ويمكنك البدء في استخدام النظام.
        </p>
      </div>

      <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-6">
        <h3 className="font-semibold mb-2 flex items-center gap-2 text-blue-600 dark:text-blue-500">
          <span>💡</span>
          نصيحة
        </h3>
        <p className="text-sm text-muted-foreground">
          للحصول على أفضل أداء، يُنصح باستخدام MongoDB Atlas لقاعدة البيانات. يمكنك إنشاء حساب مجاني على{" "}
          <a
            href="https://www.mongodb.com/cloud/atlas"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            MongoDB Atlas
          </a>
          .
        </p>
      </div>
    </div>
  )
}
