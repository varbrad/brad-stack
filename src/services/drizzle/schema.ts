import * as dz from 'drizzle-orm/sqlite-core'
import * as utils from './schema-utils'

export const test = dz.sqliteTable('test', {
  id: utils.id,

  value: dz.integer('value').notNull(),

  ...utils.timestamps,
})
