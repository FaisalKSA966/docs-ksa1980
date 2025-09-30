import { CodeBlock } from "@/components/code-block"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Zap, Shield, Database, Globe, Code } from "lucide-react"

export default function IntroductionPageAr() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <Badge className="bg-primary/10 text-primary border-primary/20">البداية</Badge>
        <h1 className="text-4xl font-bold tracking-tight">المقدمة</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          مرحباً بك في التوثيق الشامل لنظام إدارة التذاكر على Discord. سيساعدك هذا الدليل على فهم وإعداد وإدارة نظام
          التذاكر الخاص بك.
        </p>
      </div>

      <div className="border-r-4 border-primary pr-6 py-4 bg-primary/5 rounded-l-lg">
        <p className="text-lg font-medium mb-2">ما هو نظام التذاكر؟</p>
        <p className="text-muted-foreground leading-relaxed">
          حل شامل لإدارة تذاكر الدعم على Discord مع لوحة تحكم ويب حديثة. يجمع النظام بين بوت Discord قوي وواجهة ويب
          Next.js، مع توفير مزامنة فورية ومميزات متقدمة للفرق من جميع الأحجام.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-3xl font-bold">المميزات الرئيسية</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Card className="p-6 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Zap className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-lg font-semibold">مزامنة فورية</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              تحديثات فورية بين بوت Discord ولوحة التحكم مع مزامنة تلقائية للبيانات.
            </p>
          </Card>

          <Card className="p-6 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
              <Shield className="w-5 h-5 text-secondary" />
            </div>
            <h3 className="text-lg font-semibold">أمان متقدم</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              مصادقة Discord OAuth، التحكم في الوصول حسب الأدوار، وتسجيل شامل للأحداث.
            </p>
          </Card>

          <Card className="p-6 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Database className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-lg font-semibold">قاعدة بيانات قوية</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              MongoDB Atlas مع نظام احتياطي JSON تلقائي للموثوقية واستمرارية البيانات.
            </p>
          </Card>

          <Card className="p-6 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
              <Globe className="w-5 h-5 text-secondary" />
            </div>
            <h3 className="text-lg font-semibold">لوحة تحكم حديثة</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              مبنية بـ Next.js 14 و TypeScript و Tailwind CSS لتجربة متجاوبة.
            </p>
          </Card>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-3xl font-bold">البنية المعمارية</h2>
        <p className="text-muted-foreground leading-relaxed">يتكون النظام من ثلاثة مكونات رئيسية تعمل معاً بسلاسة:</p>

        <div className="space-y-4">
          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Code className="w-6 h-6 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">بوت Discord</h3>
                <p className="text-muted-foreground leading-relaxed">
                  مبني بـ Node.js و Discord.js v14، يتعامل البوت مع جميع تفاعلات Discord بما في ذلك أوامر Slash، تفاعلات
                  الأزرار، وإدارة التذاكر. يتميز بإنشاء تلقائي للتذاكر، إدارة أدوار الدعم، وتسجيل شامل.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <Badge variant="secondary">Node.js 18+</Badge>
                  <Badge variant="secondary">Discord.js v14</Badge>
                  <Badge variant="secondary">أوامر Slash</Badge>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                <Globe className="w-6 h-6 text-secondary" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">لوحة التحكم</h3>
                <p className="text-muted-foreground leading-relaxed">
                  تطبيق Next.js 14 حديث مع TypeScript يوفر واجهة شاملة لإدارة التذاكر، عرض الإحصائيات، وتكوين النظام.
                  يتميز بمصادقة Discord OAuth وتحديثات فورية.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <Badge variant="secondary">Next.js 14</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">Tailwind CSS</Badge>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Database className="w-6 h-6 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">نظام قاعدة البيانات</h3>
                <p className="text-muted-foreground leading-relaxed">
                  MongoDB Atlas كقاعدة بيانات أساسية مع نظام احتياطي JSON تلقائي للموثوقية. يتضمن النظام نماذج شاملة
                  للتذاكر والمستخدمين والإعدادات مع مزامنة فورية.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <Badge variant="secondary">MongoDB Atlas</Badge>
                  <Badge variant="secondary">نظام احتياطي JSON</Badge>
                  <Badge variant="secondary">مزامنة فورية</Badge>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-3xl font-bold">لمن هذا التوثيق؟</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <span className="font-medium">المستخدمون</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mr-7">
              تعلم كيفية إنشاء التذاكر، التفاعل مع فريق الدعم، وتقديم الملاحظات.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <span className="font-medium">المشرفون</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mr-7">
              فهم كيفية استلام التذاكر، الرد على المستخدمين، وإدارة سير عمل الدعم.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <span className="font-medium">الإداريون</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mr-7">
              تكوين النظام، إدارة الصلاحيات، ومراقبة مقاييس الأداء.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <span className="font-medium">المطورون</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mr-7">
              التكامل مع API، تخصيص المميزات، وتوسيع الوظائف.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-3xl font-bold">مثال سريع</h2>
        <p className="text-muted-foreground leading-relaxed">إليك مثال بسيط لكيفية إنشاء تذكرة باستخدام بوت Discord:</p>

        <CodeBlock
          language="typescript"
          title="إنشاء تذكرة"
          code={`// استخدام أمر slash
/ticket subject: "أحتاج مساعدة في الحساب"

// استخدام زر التفاعل
// انقر على زر الفئة المناسبة في لوحة التذاكر
// - 🔧 دعم تقني
// - ❓ استفسار عام
// - 📝 شكوى
// - 💡 طلب ميزة
// - 📋 أخرى`}
        />
      </div>

      <Card className="p-6 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
        <h3 className="text-xl font-semibold mb-3">هل أنت مستعد للبدء؟</h3>
        <p className="text-muted-foreground leading-relaxed mb-4">
          تابع إلى دليل البدء السريع لإعداد نظام التذاكر في دقائق، أو استكشف التوثيق التفصيلي للحصول على معلومات شاملة
          حول جميع المميزات.
        </p>
        <div className="flex gap-3">
          <a href="/ar/quick-start" className="text-primary hover:underline font-medium">
            ← دليل البدء السريع
          </a>
          <a href="/ar/installation" className="text-secondary hover:underline font-medium">
            ← دليل التثبيت
          </a>
        </div>
      </Card>
    </div>
  )
}
