import { z } from 'zod'

export const envSchema = z.object({
  APP_ENV: z.enum(['development', 'production']).default('development'),

  PUSHER_APP_ID: z.string().trim(),
  PUSHER_CLIENT_KEY: z.string().trim(),
  PUSHER_SERVER_KEY: z.string().trim(),

  TRIGGER_PROJECT_ID: z.string().trim(),
  TRIGGER_SECRET_KEY: z.string().trim(),

  TURSO_DB_URI: z.string().trim(),
  TURSO_DB_TOKEN: z.string().trim(),
})

export type Env = z.infer<typeof envSchema>

export const getEnv = () => envSchema.parse(process.env)
