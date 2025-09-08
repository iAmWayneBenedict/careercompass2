import { pgRole } from "drizzle-orm/pg-core";

export const admin = pgRole("admin", {
  createRole: true,
  createDb: true,
  inherit: true,
}).existing();

export const user = pgRole("user", {
  createRole: false,
  createDb: false,
  inherit: true,
}).existing();
