import { sql } from 'drizzle-orm'
import * as dz from 'drizzle-orm/sqlite-core'

export const now = sql<number>`(strftime('%s', 'now'))`

export const id = dz.text('id').primaryKey()

export const createdAt = dz
  .integer('created_at', { mode: 'timestamp' })
  .notNull()
  .default(now)

export const updatedAt = dz
  .integer('updated_at', { mode: 'timestamp' })
  .notNull()
  .default(now)
  .$onUpdate(() => new Date())

export const timestamps = { createdAt, updatedAt }
