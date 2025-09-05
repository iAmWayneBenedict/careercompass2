<script setup lang="ts">
import AuthFooterLinks from '@/components/auth/AuthFooterLinks.vue'
import AuthForm from '@/components/auth/AuthForm.vue'
import AuthLayout from '@/components/auth/AuthLayout.vue'
import InputFormField from '@/components/common/InputFormField.vue'
import GoogleIcon from '@/components/icons/GoogleIcon.vue'
import type { SocialProvider } from '@/types/auth'
import { ref } from 'vue'
import PasswordFormField from '@/components/auth/PasswordFormField.vue'
import { useLoginMutation } from '@/services/mutations/use-auth-mutations'
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import { loginSchema, type LoginType } from '@/types/schema/auth-schema'
import type { ErrorResponseType } from '@/types/router'

const { handleSubmit } = useForm({
  validationSchema: toTypedSchema(loginSchema),
})

const error = ref('')

const socialProviders: SocialProvider[] = [
  {
    name: 'google',
    label: 'Sign in with Google',
    icon: GoogleIcon,
  },
]

const footerLinks = [
  {
    text: "Don't have an account?",
    label: 'Register',
    to: '/auth/register',
  },
]

const loginMutation = useLoginMutation({
  onError: (err: ErrorResponseType<LoginType>) => {
    error.value = err.message
  },
})

const onSubmit = handleSubmit((data) => {
  // TODO: Implement login logic
  loginMutation.mutateAsync(data)
})

const handleSocialLogin = (provider: string) => {
  // TODO: Implement social login
  console.log('Social login:', provider)
}
</script>

<template>
  <AuthLayout>
    <AuthForm
      title="Welcome Back"
      subtitle="Log in with your Google account"
      submit-label="Login"
      :loading="loginMutation.isPending.value"
      :social-providers="socialProviders"
      divider-text="Or continue with"
      @submit="onSubmit"
      @social-login="handleSocialLogin"
    >
      <template #header>
        <div v-if="!!error" class="text-red-500 bg-red-100 border border-red-500 rounded-xl">
          <p class="px-4 py-2 text-xs text-center">{{ error }}</p>
        </div>
      </template>

      <template #fields>
        <InputFormField id="email" name="email" label="Email" placeholder="m@example.com" />

        <PasswordFormField id="password" name="password" label="Password" placeholder="●●●●●●●●" />
      </template>

      <template #password-actions>
        <div class="flex justify-end w-full">
          <RouterLink to="/auth/forgot-password" class="text-xs text-gray-600 hover:underline">
            Forgot Password?
          </RouterLink>
        </div>
      </template>
      <template #footer-links>
        <AuthFooterLinks :links="footerLinks" />
      </template>
    </AuthForm>
  </AuthLayout>
</template>
