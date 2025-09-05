import { axiosInstance } from '@/config'
import type { MutationProps } from '@/types/mutation'
import type { ForgotPasswordType, LoginType, RegisterType } from '@/types/schema/auth-schema'
import { useMutation } from '@tanstack/vue-query'
import type { AxiosError, AxiosResponse } from 'axios'
import { useToast } from 'primevue'
import queryKeys from '../query-keys'

// START - Register Mutation
export const useRegisterMutation = <T>(props?: MutationProps<T> | undefined) => {
  const toast = useToast()

  return useMutation({
    mutationKey: [queryKeys.auths.register],
    mutationFn: async (data: RegisterType) =>
      await axiosInstance({
        url: '/auth/register',
        method: 'POST',
        data,
      }),
    retry: false,

    // response events
    onSuccess: (data: AxiosResponse) => {
      toast.add({
        severity: 'success',
        summary: 'Success',
        detail: data?.data?.message,
        life: 3000,
      })

      if (props?.onSuccess) props?.onSuccess(data)
    },

    onError: (err: AxiosError) => {
      if (props?.onError) props?.onError(err?.response?.data as T)
    },
  })
}
// END - Register Mutation

// START - Login Mutation
export const useLoginMutation = <T>(props?: MutationProps<T> | undefined) => {
  const toast = useToast()

  return useMutation({
    mutationKey: [queryKeys.auths.login],
    mutationFn: async (data: LoginType) =>
      await axiosInstance({
        url: '/auth/login',
        method: 'POST',
        data,
      }),
    retry: false,

    // response events
    onSuccess: (data: AxiosResponse) => {
      toast.add({
        severity: 'success',
        summary: 'Success',
        detail: data?.data?.message,
        life: 3000,
      })

      if (props?.onSuccess) props?.onSuccess(data)
    },

    onError: (err: AxiosError) => {
      if (props?.onError) props?.onError(err?.response?.data as T)
    },
  })
}
// END - Login Mutation

// START - Forgot Password Mutation
export const useForgotPasswordMutation = <T>(props?: MutationProps<T> | undefined) => {
  const toast = useToast()

  return useMutation({
    mutationKey: [queryKeys.auths.forgotPassword],
    mutationFn: async (data: ForgotPasswordType) =>
      await axiosInstance({
        url: '/auth/forgot-password',
        method: 'POST',
        data,
      }),
    retry: false,

    // response events
    onSuccess: (data: AxiosResponse) => {
      toast.add({
        severity: 'success',
        summary: 'Success',
        detail: data?.data?.message,
        life: 3000,
      })

      if (props?.onSuccess) props?.onSuccess(data)
    },

    onError: (err: AxiosError) => {
      if (props?.onError) props?.onError(err?.response?.data as T)
    },
  })
}
// END - Forgot Password Mutation
