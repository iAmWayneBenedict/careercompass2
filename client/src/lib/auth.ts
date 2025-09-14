import envConfig from "@/config/env-config";
import { createAuthClient } from "better-auth/react";

const API_URL = envConfig.SERVER_URL + "/api/auth";

export const authClient = createAuthClient({
  baseURL: API_URL, // The base URL of your auth server
});
