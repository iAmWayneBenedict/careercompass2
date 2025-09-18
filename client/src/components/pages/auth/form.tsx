import { motion } from "motion/react";
import { addToast, Button, Checkbox, Link as HeroUILink } from "@heroui/react";
import Google from "@/components/icons/google";
import LinkedIn from "@/components/icons/linkedin";
import AppLogo from "@/components/icons/logo";
import { Link } from "@tanstack/react-router";
import { authClient } from "@/lib/auth";
import envConfig from "@/config/env-config";

export default function AuthForm() {
  const onSocialPress = async (social: string) => {
    if (social === "linkedin") {
      console.log(123);
      addToast({
        title: "LinkedIn Sign In",
        description: "Please sign in with LinkedIn",
      });

      return;
    }

    await authClient.signIn.social(
      {
        provider: social,
        callbackURL: envConfig.CLIENT_URL + "/auth",
      },
      {
        onSuccess: (_) => {
          setTimeout(() => {
            addToast({
              title: "Success",
              description: "You have successfully signed in",
              color: "success",
            });
          }, 1000);
        },
      }
    );
  };
  return (
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

          <h1 className="mb-1 text-3xl font-bold text-foreground">Sign into</h1>
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
  );
}
