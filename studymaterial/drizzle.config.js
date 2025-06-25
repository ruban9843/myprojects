import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './drizzle',
  schema: './configs/shema.js',
  dialect: 'postgresql',
  dbCredentials: {
    url:"postgresql://neondb_owner:npg_xyUo8FuCOW3Q@ep-dawn-shape-a170tmcq-pooler.ap-southeast-1.aws.neon.tech/studymaterial?sslmode=require&channel_binding=require",
  },
});
