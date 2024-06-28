import { serial, text, varchar, timestamp, pgTable } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
    id: serial("id").primaryKey(),
    externalId: varchar("external_id", { length: 100 }),
    gender: varchar("gender", { length: 10 }),
    username: varchar("name", { length: 50 }),
    password: varchar("password", { length: 100 }),
    title: varchar("title", { length: 100 }),
    fullName: varchar("full_name", { length: 100 }),
    email: varchar("email", { length: 550 }),
    phone: varchar("mobile", { length: 20 }),
    country: varchar("country", { length: 50 }),
    city: varchar("city", { length: 100 }),
    address: varchar("address", { length: 200 }),
    thumbnail: varchar("thumbnail", { length: 500 }),
    createdAt: timestamp("created_at"),
    updatedAt: timestamp("updated_at"),
});