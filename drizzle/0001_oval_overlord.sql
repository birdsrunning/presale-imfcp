CREATE TABLE "dummy" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "dummy_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"dummy_name" varchar(100) NOT NULL,
	"email" varchar(50) NOT NULL,
	CONSTRAINT "dummy_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE UNIQUE INDEX "email_unique_idx" ON "dummy" USING btree ("email");