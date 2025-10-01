import { DocsLayout } from "@/components/docs-layout"
import { enNavigation } from "@/lib/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { 
  Shield,
  Lock,
  Key,
  Eye,
  Info,
  CheckCircle
} from "lucide-react"

export default function SecurityGuide() {
  return (
    <DocsLayout navigation={enNavigation} lang="en">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Shield className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold">Security Guide</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Comprehensive guide to securing the ticket system
          </p>
        </div>

        {/* Data Encryption */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lock className="h-5 w-5" />
              Data Encryption
            </CardTitle>
            <CardDescription>
              Protecting sensitive data at rest and in transit
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium">Storage Encryption</h4>
              <div className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">MongoDB Atlas Encryption</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Automatic encryption of all data in MongoDB Atlas</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">File System Encryption</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Encryption of backup files and local storage</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Transit Encryption</h4>
              <div className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">HTTPS/TLS 1.3</span>
                  </div>
                  <p className="text-xs text-muted-foreground">All communications encrypted using HTTPS</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Database Connections</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Encrypted connections to database</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Authentication */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Key className="h-5 w-5" />
              Authentication
            </CardTitle>
            <CardDescription>
              Secure authentication and session management
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium">Discord OAuth</h4>
              <div className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">OAuth 2.0 Flow</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Secure authentication through Discord</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">State Parameter</span>
                  </div>
                  <p className="text-xs text-muted-foreground">CSRF protection in OAuth flow</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Session Security</h4>
              <div className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">JWT Tokens</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Secure session management with JWT</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Secure Cookie Settings</span>
                  </div>
                  <p className="text-xs text-muted-foreground">HttpOnly, Secure, and SameSite cookies</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Access Control */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Eye className="h-5 w-5" />
              Access Control
            </CardTitle>
            <CardDescription>
              Role-based access control and permissions
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium">Role System</h4>
              <div className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Hierarchical Roles</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Admin, Moderator, Support, User roles</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Granular Permissions</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Fine-grained access control</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Permission Checks</h4>
              <div className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Route Protection</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Secure API and page routes</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Resource Access</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Control access to tickets and data</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Best Practices */}
        <Alert>
          <Info className="h-4 w-4" />
          <AlertDescription>
            <strong>Best Practices:</strong> Keep dependencies updated. 
            Use secure configurations. 
            Implement proper logging. 
            Regular security audits. 
            Monitor for suspicious activity.
          </AlertDescription>
        </Alert>
      </div>
    </DocsLayout>
  )
}
