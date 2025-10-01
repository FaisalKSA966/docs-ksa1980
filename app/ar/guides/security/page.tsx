"use client"

import { DocsLayout } from "@/components/docs-layout"
import { arNavigation } from "@/lib/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { 
  Shield, 
  Lock, 
  Key, 
  Eye,
  CheckCircle,
  AlertTriangle,
  Info,
  Code,
  Database,
  Server,
  Bot,
  Globe
} from "lucide-react"

export default function SecurityGuide() {
  return (
    <DocsLayout navigation={arNavigation} lang="ar">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Shield className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold">دليل الأمان</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            دليل شامل لتأمين نظام إدارة التذاكر وحماية البيانات
          </p>
        </div>

        {/* Security Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="h-5 w-5" />
                تشفير البيانات
              </CardTitle>
              <CardDescription>
                حماية البيانات الحساسة
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">تشفير في التخزين</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">تشفير في النقل</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">مفاتيح آمنة</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Key className="h-5 w-5" />
                المصادقة
              </CardTitle>
              <CardDescription>
                التحقق من الهوية
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">OAuth 2.0</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">JWT Tokens</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">جلسات آمنة</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="h-5 w-5" />
                التحكم في الوصول
              </CardTitle>
              <CardDescription>
                إدارة الصلاحيات
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">أدوار متدرجة</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">صلاحيات محددة</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">مراجعة دورية</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                الحماية
              </CardTitle>
              <CardDescription>
                حماية من الهجمات
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Rate Limiting</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">CORS</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">CSRF Protection</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Data Encryption */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lock className="h-5 w-5" />
              تشفير البيانات
            </CardTitle>
            <CardDescription>
              حماية البيانات الحساسة في التخزين والنقل
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium">تشفير البيانات في التخزين</h4>
              <div className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">MongoDB Atlas Encryption</span>
                  </div>
                  <p className="text-xs text-muted-foreground">تشفير تلقائي لجميع البيانات في MongoDB Atlas</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">File System Encryption</span>
                  </div>
                  <p className="text-xs text-muted-foreground">تشفير ملفات النسخ الاحتياطية والملفات المحلية</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Environment Variables</span>
                  </div>
                  <p className="text-xs text-muted-foreground">تشفير متغيرات البيئة الحساسة</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">تشفير البيانات في النقل</h4>
              <div className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">HTTPS/TLS 1.3</span>
                  </div>
                  <p className="text-xs text-muted-foreground">تشفير جميع الاتصالات باستخدام HTTPS</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Database Connections</span>
                  </div>
                  <p className="text-xs text-muted-foreground">اتصالات مشفرة مع قاعدة البيانات</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">API Communications</span>
                  </div>
                  <p className="text-xs text-muted-foreground">تشفير جميع اتصالات API</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">إدارة المفاتيح</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`// إنشاء مفتاح تشفير قوي
const crypto = require('crypto');

// إنشاء مفتاح عشوائي
const secretKey = crypto.randomBytes(32).toString('hex');

// تشفير البيانات
function encryptData(data, key) {
    const cipher = crypto.createCipher('aes-256-cbc', key);
    let encrypted = cipher.update(data, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
}

// فك تشفير البيانات
function decryptData(encryptedData, key) {
    const decipher = crypto.createDecipher('aes-256-cbc', key);
    let decrypted = decipher.update(encryptedData, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Authentication Security */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Key className="h-5 w-5" />
              أمان المصادقة
            </CardTitle>
            <CardDescription>
              تأمين عملية تسجيل الدخول والتحقق من الهوية
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium">Discord OAuth 2.0</h4>
              <div className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">State Parameter</span>
                  </div>
                  <p className="text-xs text-muted-foreground">استخدام معامل State لمنع هجمات CSRF</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">PKCE (Proof Key for Code Exchange)</span>
                  </div>
                  <p className="text-xs text-muted-foreground">حماية إضافية لتدفق OAuth</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Scope Validation</span>
                  </div>
                  <p className="text-xs text-muted-foreground">التحقق من الصلاحيات المطلوبة فقط</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">JWT Token Security</h4>
              <div className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Strong Secret Key</span>
                  </div>
                  <p className="text-xs text-muted-foreground">استخدام مفتاح سري قوي لتوقيع التوكن</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Short Expiration Time</span>
                  </div>
                  <p className="text-xs text-muted-foreground">تقصير مدة صلاحية التوكن</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Refresh Token</span>
                  </div>
                  <p className="text-xs text-muted-foreground">استخدام Refresh Token لتجديد التوكن</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Session Security</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`// إعدادات الجلسة الآمنة
const sessionConfig = {
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: process.env.NODE_ENV === 'production', // HTTPS only in production
    httpOnly: true, // منع الوصول من JavaScript
    maxAge: 24 * 60 * 60 * 1000, // 24 ساعة
    sameSite: 'strict' // حماية من CSRF
  },
  store: new MongoStore({
    mongoUrl: process.env.MONGODB_URI,
    touchAfter: 24 * 3600 // تحديث الجلسة كل 24 ساعة
  })
};

// التحقق من صحة الجلسة
function validateSession(req, res, next) {
  if (req.session && req.session.userId) {
    // التحقق من انتهاء صلاحية الجلسة
    if (req.session.expires && Date.now() > req.session.expires) {
      req.session.destroy();
      return res.status(401).json({ error: 'Session expired' });
    }
    next();
  } else {
    res.status(401).json({ error: 'Unauthorized' });
  }
}`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Access Control */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Eye className="h-5 w-5" />
              التحكم في الوصول
            </CardTitle>
            <CardDescription>
              إدارة الصلاحيات والتحكم في الوصول للموارد
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium">نظام الأدوار</h4>
              <div className="space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Badge variant="destructive">Admin</Badge>
                      <span className="text-sm">صلاحيات كاملة</span>
                    </div>
                    <p className="text-xs text-muted-foreground">إدارة النظام، المستخدمين، الإعدادات</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Badge variant="default">Moderator</Badge>
                      <span className="text-sm">صلاحيات محدودة</span>
                    </div>
                    <p className="text-xs text-muted-foreground">إدارة التذاكر، المستخدمين</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">Support</Badge>
                      <span className="text-sm">صلاحيات دعم</span>
                    </div>
                    <p className="text-xs text-muted-foreground">الرد على التذاكر، عرض المعلومات</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">User</Badge>
                      <span className="text-sm">صلاحيات أساسية</span>
                    </div>
                    <p className="text-xs text-muted-foreground">إنشاء التذاكر، عرض تذاكره</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">التحقق من الصلاحيات</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`// نظام التحقق من الصلاحيات
const permissions = {
  admin: ['*'], // جميع الصلاحيات
  moderator: [
    'tickets.view',
    'tickets.manage',
    'users.view',
    'users.manage'
  ],
  support: [
    'tickets.view',
    'tickets.respond',
    'users.view'
  ],
  user: [
    'tickets.create',
    'tickets.view.own'
  ]
};

// دالة التحقق من الصلاحيات
function hasPermission(userRole, requiredPermission) {
  const userPermissions = permissions[userRole] || [];
  
  // التحقق من الصلاحيات الكاملة
  if (userPermissions.includes('*')) {
    return true;
  }
  
  // التحقق من الصلاحية المحددة
  if (userPermissions.includes(requiredPermission)) {
    return true;
  }
  
  // التحقق من الصلاحيات الجزئية
  const permissionParts = requiredPermission.split('.');
  for (let i = permissionParts.length; i > 0; i--) {
    const partialPermission = permissionParts.slice(0, i).join('.') + '.*';
    if (userPermissions.includes(partialPermission)) {
      return true;
    }
  }
  
  return false;
}

// Middleware للتحقق من الصلاحيات
function requirePermission(permission) {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ error: 'Authentication required' });
    }
    
    if (!hasPermission(req.user.role, permission)) {
      return res.status(403).json({ error: 'Insufficient permissions' });
    }
    
    next();
  };
}`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* API Security */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5" />
              أمان API
            </CardTitle>
            <CardDescription>
              حماية واجهة برمجة التطبيقات من الهجمات
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium">Rate Limiting</h4>
              <div className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">API Rate Limiting</span>
                  </div>
                  <p className="text-xs text-muted-foreground">تحديد عدد الطلبات المسموحة لكل مستخدم</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">IP-based Limiting</span>
                  </div>
                  <p className="text-xs text-muted-foreground">تحديد الطلبات حسب عنوان IP</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Endpoint-specific Limits</span>
                  </div>
                  <p className="text-xs text-muted-foreground">حدود مختلفة لكل endpoint</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Input Validation</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`// التحقق من صحة البيانات المدخلة
const Joi = require('joi');

// مخططات التحقق
const schemas = {
  createTicket: Joi.object({
    category: Joi.string().valid('technical', 'general', 'complaint', 'feature', 'other').required(),
    priority: Joi.string().valid('low', 'normal', 'high', 'urgent').default('normal'),
    message: Joi.string().min(10).max(2000).required()
  }),
  
  updateTicket: Joi.object({
    status: Joi.string().valid('open', 'claimed', 'closed').optional(),
    priority: Joi.string().valid('low', 'normal', 'high', 'urgent').optional(),
    rating: Joi.number().min(1).max(5).optional()
  })
};

// Middleware للتحقق من البيانات
function validateRequest(schema) {
  return (req, res, next) => {
    const { error, value } = schema.validate(req.body);
    
    if (error) {
      return res.status(400).json({
        error: 'Validation failed',
        details: error.details.map(detail => detail.message)
      });
    }
    
    req.body = value;
    next();
  };
}

// تنظيف البيانات المدخلة
function sanitizeInput(input) {
  if (typeof input === 'string') {
    // إزالة HTML tags
    input = input.replace(/<[^>]*>/g, '');
    
    // إزالة JavaScript
    input = input.replace(/javascript:/gi, '');
    
    // إزالة SQL injection patterns
    input = input.replace(/('|(\\')|(;)|(\\;)|(--)|(\\/\\*)|(\\*\\/))/gi, '');
  }
  
  return input;
}`}
                </pre>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">CORS Configuration</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`// إعدادات CORS آمنة
const corsOptions = {
  origin: function (origin, callback) {
    // قائمة بالدومينات المسموحة
    const allowedOrigins = [
      'https://ksa1980.lol',
      'https://www.ksa1980.lol'
    ];
    
    // السماح للطلبات بدون origin (mobile apps, Postman, etc.)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true, // السماح بإرسال cookies
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: [
    'Origin',
    'X-Requested-With',
    'Content-Type',
    'Accept',
    'Authorization',
    'Cache-Control'
  ],
  exposedHeaders: ['X-Total-Count'],
  maxAge: 86400 // 24 ساعة
};

// تطبيق CORS
app.use(cors(corsOptions));`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Database Security */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="h-5 w-5" />
              أمان قاعدة البيانات
            </CardTitle>
            <CardDescription>
              حماية قاعدة البيانات والوصول إليها
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium">MongoDB Atlas Security</h4>
              <div className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Network Access Control</span>
                  </div>
                  <p className="text-xs text-muted-foreground">تقييد الوصول لعناوين IP محددة فقط</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Database User Management</span>
                  </div>
                  <p className="text-xs text-muted-foreground">إنشاء مستخدمين بصلاحيات محددة</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Encryption at Rest</span>
                  </div>
                  <p className="text-xs text-muted-foreground">تشفير تلقائي لجميع البيانات</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Query Security</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`// حماية من NoSQL Injection
function sanitizeMongoQuery(query) {
  // إزالة العمليات الخطيرة
  const dangerousOperators = ['$where', '$regex', '$text', '$expr'];
  
  for (const operator of dangerousOperators) {
    if (query[operator]) {
      delete query[operator];
    }
  }
  
  // تنظيف قيم الاستعلام
  for (const key in query) {
    if (typeof query[key] === 'string') {
      query[key] = query[key].replace(/[\\$]/g, '');
    }
  }
  
  return query;
}

// استخدام Parameterized Queries
async function findTickets(filters) {
  const sanitizedFilters = sanitizeMongoQuery(filters);
  
  return await Ticket.find(sanitizedFilters)
    .limit(parseInt(filters.limit) || 20)
    .skip(parseInt(filters.skip) || 0)
    .sort({ createdAt: -1 });
}

// التحقق من صحة ObjectId
function isValidObjectId(id) {
  return /^[0-9a-fA-F]{24}$/.test(id);
}

// Middleware للتحقق من ObjectId
function validateObjectId(req, res, next) {
  const { id } = req.params;
  
  if (!isValidObjectId(id)) {
    return res.status(400).json({ error: 'Invalid ID format' });
  }
  
  next();
}`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Server Security */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Server className="h-5 w-5" />
              أمان الخادم
            </CardTitle>
            <CardDescription>
              حماية الخادم والبنية التحتية
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium">Firewall Configuration</h4>
              <div className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Port Restrictions</span>
                  </div>
                  <p className="text-xs text-muted-foreground">فتح المنافذ المطلوبة فقط (80, 443, 22)</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">IP Whitelisting</span>
                  </div>
                  <p className="text-xs text-muted-foreground">السماح للعناوين الموثوقة فقط</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">DDoS Protection</span>
                  </div>
                  <p className="text-xs text-muted-foreground">حماية من هجمات DDoS</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">SSL/TLS Configuration</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`# إعدادات SSL آمنة في Nginx
ssl_protocols TLSv1.2 TLSv1.3;
ssl_ciphers ECDHE-RSA-AES256-GCM-SHA512:DHE-RSA-AES256-GCM-SHA512:ECDHE-RSA-AES256-GCM-SHA384:DHE-RSA-AES256-GCM-SHA384;
ssl_prefer_server_ciphers off;
ssl_session_cache shared:SSL:10m;
ssl_session_timeout 10m;

# أمان إضافي
add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
add_header X-Frame-Options DENY always;
add_header X-Content-Type-Options nosniff always;
add_header X-XSS-Protection "1; mode=block" always;
add_header Referrer-Policy "strict-origin-when-cross-origin" always;

# منع الوصول للملفات الحساسة
location ~ /\\. {
    deny all;
    access_log off;
    log_not_found off;
}`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Security Monitoring */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bot className="h-5 w-5" />
              مراقبة الأمان
            </CardTitle>
            <CardDescription>
              مراقبة الأمان واكتشاف التهديدات
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium">Security Logging</h4>
              <div className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Authentication Logs</span>
                  </div>
                  <p className="text-xs text-muted-foreground">تسجيل محاولات تسجيل الدخول</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Access Logs</span>
                  </div>
                  <p className="text-xs text-muted-foreground">تسجيل جميع الطلبات والوصول</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Error Logs</span>
                  </div>
                  <p className="text-xs text-muted-foreground">تسجيل الأخطاء والمشاكل</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Intrusion Detection</h4>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`// نظام اكتشاف التهديدات
const suspiciousPatterns = [
  /union.*select/i,
  /script.*alert/i,
  /<script/i,
  /javascript:/i,
  /eval\\(/i,
  /exec\\(/i
];

// فحص الطلبات المشبوهة
function detectSuspiciousActivity(req, res, next) {
  const { body, query, params } = req;
  const allData = JSON.stringify({ body, query, params });
  
  for (const pattern of suspiciousPatterns) {
    if (pattern.test(allData)) {
      // تسجيل النشاط المشبوه
      console.warn('Suspicious activity detected:', {
        ip: req.ip,
        userAgent: req.get('User-Agent'),
        url: req.url,
        method: req.method,
        timestamp: new Date().toISOString()
      });
      
      // إرسال تنبيه
      sendSecurityAlert(req);
      
      return res.status(400).json({ error: 'Invalid request' });
    }
  }
  
  next();
}

// إرسال تنبيه أمني
function sendSecurityAlert(req) {
  // إرسال إشعار للمديرين
  // يمكن استخدام Discord webhook أو email
  const alert = {
    type: 'SECURITY_ALERT',
    severity: 'HIGH',
    message: 'Suspicious activity detected',
    details: {
      ip: req.ip,
      userAgent: req.get('User-Agent'),
      url: req.url,
      timestamp: new Date().toISOString()
    }
  };
  
  // إرسال التنبيه
  sendDiscordWebhook(alert);
}`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Security Checklist */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5" />
              قائمة فحص الأمان
            </CardTitle>
            <CardDescription>
              قائمة شاملة للتحقق من أمان النظام
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium">فحص الأمان الأساسي</h4>
              <div className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="h-4 w-4" />
                    <span className="text-sm">تشفير جميع البيانات الحساسة</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="h-4 w-4" />
                    <span className="text-sm">استخدام HTTPS في جميع الاتصالات</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="h-4 w-4" />
                    <span className="text-sm">تحديث جميع التبعيات بانتظام</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="h-4 w-4" />
                    <span className="text-sm">تكوين الجدار الناري بشكل صحيح</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="h-4 w-4" />
                    <span className="text-sm">استخدام كلمات مرور قوية</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">فحص الأمان المتقدم</h4>
              <div className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="h-4 w-4" />
                    <span className="text-sm">تفعيل Rate Limiting</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="h-4 w-4" />
                    <span className="text-sm">تكوين CORS بشكل صحيح</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="h-4 w-4" />
                    <span className="text-sm">التحقق من صحة البيانات المدخلة</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="h-4 w-4" />
                    <span className="text-sm">تسجيل جميع الأنشطة الأمنية</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="h-4 w-4" />
                    <span className="text-sm">إعداد نسخ احتياطية مشفرة</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Best Practices */}
        <Alert>
          <Info className="h-4 w-4" />
          <AlertDescription>
            <strong>أفضل الممارسات:</strong> راقب الأمان باستمرار. 
            حدث النظام بانتظام. استخدم مبادئ الأمان الدفاعي. 
            اختبر الأمان بشكل دوري.
          </AlertDescription>
        </Alert>
      </div>
    </DocsLayout>
  )
}
