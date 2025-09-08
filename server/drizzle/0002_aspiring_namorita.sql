ALTER TABLE "verifications" DROP CONSTRAINT "verifications_user_id_users_id_fk";
--> statement-breakpoint
ALTER TABLE "verifications" DROP COLUMN "user_id";