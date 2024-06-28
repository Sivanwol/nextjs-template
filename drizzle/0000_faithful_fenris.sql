CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"external_id" varchar(100),
	"gender" varchar(10),
	"name" varchar(50),
	"password" varchar(100),
	"full_name" varchar(100),
	"email" varchar(550),
	"mobile" varchar(20),
	"country" varchar(50),
	"city" varchar(100),
	"address" varchar(200),
	"thumbnail" varchar(500),
	"created_at" timestamp,
	"updated_at" timestamp
);
