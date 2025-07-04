import { type Config } from "drizzle-kit";

const { POSTGRES_URL } = process.env;

if (!POSTGRES_URL) {
  throw new Error("POSTGRES_URL is not set in environment variables");
}

export default {
  schema: "./src/server/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: POSTGRES_URL,
  },
  tablesFilter: ["t3gallery_*"],
} satisfies Config;