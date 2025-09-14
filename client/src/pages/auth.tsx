import { motion } from "framer-motion";
import { Button, Checkbox, Link as HeroUILink } from "@heroui/react";
import Google from "@/components/icons/google";
import LinkedIn from "@/components/icons/linkedin";
import { withLayout } from "@/layouts/layout-manager";
import AppLogo from "@/components/icons/logo";
import { Link } from "@tanstack/react-router";
import { authSideImg } from "@/assets/images";
import { authClient } from "@/lib/auth";

const AuthPage = withLayout(function () {
  const onSocialPress = async (social: string) => {
    await authClient.signIn.social({ provider: social, callbackURL: "/" });
  };
  return (
    <div className="flex w-screen min-h-screen">
      {/* Left Side - Auth Form */}
      <div className="flex items-center justify-center w-full p-4 bg-white lg:w-1/2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-md px-4"
        >
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-12">
              <AppLogo />
            </div>

            <h1 className="mb-1 text-3xl font-bold text-foreground">
              Sign into
            </h1>
            <h1 className="mb-6 text-3xl font-bold text-foreground">
              your account
            </h1>
          </div>

          <div className="w-full space-y-3">
            <Button
              fullWidth
              variant="bordered"
              size="lg"
              onPress={() => onSocialPress("google")}
              startContent={<Google />}
            >
              Sign in with Google
            </Button>

            <Button
              fullWidth
              variant="bordered"
              size="lg"
              onPress={() => onSocialPress("linkedin")}
              startContent={<LinkedIn />}
            >
              Sign in with LinkedIn
            </Button>
            <div className="mt-6">
              <Checkbox /> By continuing, you agree to our{" "}
              <HeroUILink as={Link} to="/terms" underline="always">
                Terms of Service
              </HeroUILink>{" "}
              and{" "}
              <HeroUILink as={Link} to="/privacy" underline="always">
                Privacy Policy
              </HeroUILink>
              .
            </div>
          </div>
        </motion.div>
      </div>

      {/* Right Side - Decorative Background */}
      <div className="relative hidden w-1/2 overflow-hidden lg:block">
        {/* Background with pattern */}
        <div
          className={`absolute inset-0 z-0 bg-cover bg-center bg-no-repeat`}
          style={{
            backgroundImage: `url('${authSideImg}')`,
          }}
        />

        {/* Overlay  */}
        <div className="absolute inset-0 z-10 bg-black/45 dark:bg-white/90" />

        {/* Content */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-12 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-xl text-center"
          >
            <h2 className="mb-6 text-4xl font-bold">
              Ghost jobs? Nah, we track ’em all.
            </h2>
            <p className="text-lg opacity-90">
              One place for apps, gigs, and those “we’ll get back to you”
              moments.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}, "auth");
export default AuthPage;
