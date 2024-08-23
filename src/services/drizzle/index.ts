import { getEnv } from '@/env'
import { createClient } from '@libsql/client'
import * as schema from './schema'
import { drizzle } from 'drizzle-orm/libsql'

export const createDrizzleClient = () => {
  const env = getEnv()
  
  const client = createClient({
    url: env.TURSO_DB_URI,
    authToken: env.TURSO_DB_TOKEN,
  })

  const db = drizzle(client, { schema })

  return db
}

/**
 * Alias for `createDrizzleClient`
 */
export const db = createDrizzleClient
