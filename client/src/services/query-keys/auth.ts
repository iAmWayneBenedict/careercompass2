import { createQueryKeys } from '@lukemorales/query-key-factory'
export const authKeys = createQueryKeys('auths', {
  login: null,
  register: null,
  forgotPassword: null,
})
