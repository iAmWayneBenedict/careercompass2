import { withLayout } from "@/layouts/layout-manager";
import AuthForm from "@/components/pages/auth/form";
import DecorativeBackground from "@/components/pages/auth/decorative-background";

const AuthPage = withLayout(function () {
  return (
    <div className="flex w-screen min-h-screen">
      {/* Left Side - Auth Form */}
      <AuthForm />

      {/* Right Side - Decorative Background */}
      <DecorativeBackground />
    </div>
  );
}, "auth");
export default AuthPage;
