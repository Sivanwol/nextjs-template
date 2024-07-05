import "dotenv/config";
import { Config, defineConfig } from "drizzle-kit";
export default defineConfig({
  dialect: "postgresql",
  schema: "./src/lib/schema.ts",
  out: "./drizzle",
  dbCredentials: {
    url: process.env.POSTGRES_URL!,
  },
}) satisfies Config;
