import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./configs/schema.js",
  dbCredentials:{
    url:'postgresql://examdb_owner:O8NwovWQMeA1@ep-patient-silence-a5qyrk1f.us-east-2.aws.neon.tech/examdb?sslmode=require'
  }
});
