/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./utils/schema.tsx",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://neondb_owner:NuBQ7ltLM9Db@ep-long-unit-a52pz583.us-east-2.aws.neon.tech/AI-Content-Generatot?sslmode=require",
  },
};
