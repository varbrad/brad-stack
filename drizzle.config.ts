import { envSchema } from '@/env'
import { defineConfig } from 'drizzle-kit'

import 'dotenv/config'

const env = envSchema
  .pick({ TURSO_DB_URI: true, TURSO_DB_TOKEN: true })
  .parse(process.env)

export default defineConfig({
  verbose: true,
  strict: true,
  schema: './src/services/drizzle/schema.ts',
  dialect: 'sqlite',
  driver: 'turso',
  dbCredentials: {
    url: env.TURSO_DB_URI,
    authToken: env.TURSO_DB_TOKEN,
  },
})
