<script setup lang="ts">
import AuthFooterLinks from '@/components/auth/AuthFooterLinks.vue'
import AuthForm from '@/components/auth/AuthForm.vue'
import AuthLayout from '@/components/auth/AuthLayout.vue'
import InputFormField from '@/components/common/InputFormField.vue'
import { useForgotPasswordMutation } from '@/services/mutations/use-auth-mutations'
import type { ErrorResponseType } from '@/types/router'
import { forgotPasswordSchema, type ForgotPasswordType } from '@/types/schema/auth-schema'
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import { ref } from 'vue'

const footerLinks = [
  {
    text: '',
    label: 'Go back',
    to: '/auth/login',
  },
]

const { handleSubmit } = useForm({
  validationSchema: toTypedSchema(forgotPasswordSchema),
})

const error = ref('')

const forgotPasswordMutation = useForgotPasswordMutation({
  onSuccess: () => {},
  onError: (err: ErrorResponseType<ForgotPasswordType>) => {
    error.value = err.message
  },
})

const onSubmit = handleSubmit((data) => {
  forgotPasswordMutation.mutateAsync(data)
})
</script>

<template>
  <AuthLayout>
    <AuthForm
      title="Forgot Password"
      subtitle="Enter your email address"
      submit-label="Submit"
      :loading="forgotPasswordMutation.isPending.value"
      :show-divider="false"
      divider-text="Or continue with"
      @submit="onSubmit"
    >
      <template #header>
        <div v-if="!!error" class="text-red-500 bg-red-100 border border-red-500 rounded-xl">
          <p class="px-4 py-2 text-xs text-center">{{ error }}</p>
        </div>
      </template>
      <template #fields>
        <InputFormField id="email" name="email" label="Email" placeholder="m@example.com" />
      </template>
      <template #footer-links>
        <AuthFooterLinks :links="footerLinks" />
      </template>
    </AuthForm>
  </AuthLayout>
</template>

<style scoped></style>
