import { getEnv } from '@/env'
import { test } from '@/services/drizzle/schema'
import { exampleTask } from '@/services/trigger/example'
import type { inferRouterInputs, inferRouterOutputs } from '@trpc/server'
import { desc } from 'drizzle-orm'
import { procedure, router } from '../methods'

export const indexRouter = router({
  listTest: procedure.query(({ ctx }) =>
    ctx.db.query.test.findMany({ limit: 10, orderBy: desc(test.createdAt) }),
  ),

  triggerTask: procedure.mutation(() => exampleTask.trigger()),
})

export type TrpcRouter = typeof indexRouter
export type TrpcInputs = inferRouterInputs<TrpcRouter>
export type TrpcOutputs = inferRouterOutputs<TrpcRouter>
