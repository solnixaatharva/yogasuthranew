import "dotenv/config";
import { defineConfig } from "drizzle-kit";

if (!process.env.DIRECT_URL) throw new Error("DIRECT_URL missing");

export default defineConfig({
  schema: "./drizzle/schema.js",
  out: "./drizzle/migrations",
  dialect: "postgresql",
  dbCredentials: { url: process.env.DIRECT_URL },
});
