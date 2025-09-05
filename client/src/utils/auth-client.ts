import envConfig from '@/config/env-config'
import { createAuthClient } from 'better-auth/vue'
export const authClient = createAuthClient({
  /** The base URL of the server (optional if you're using the same domain) */
  baseURL: envConfig.SERVER_URL,
})
