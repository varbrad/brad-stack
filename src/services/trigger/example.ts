import { randomInt, randomUUID } from 'node:crypto'
import { logger, task } from '@trigger.dev/sdk/v3'
import { createDrizzleClient } from '../drizzle'
import { test } from '../drizzle/schema'
import { pusherServer } from '../pusher/server'

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export const exampleTask = task({
  id: 'example-task',
  run: async (_, opts) => {
    logger.info('Running example task', { ctx: opts.ctx })

    await logger.trace('Sleeping for 2s', () => sleep(2_000))

    const db = createDrizzleClient()

    const testRow = await logger.trace('Inserting test record', () =>
      db
        .insert(test)
        .values({ id: randomUUID(), value: randomInt(1, 100) })
        .returning()
        .get(),
    )

    logger.info('Test row inserted', testRow)

    return 'ok'
  },
  onSuccess: async () => {
    await pusherServer.trigger('test', 'testEvent', null)
  },
})
