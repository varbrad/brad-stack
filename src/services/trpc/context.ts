import { createDrizzleClient } from '../drizzle'

export const createTrpcContext = async () => {
  const db = createDrizzleClient()

  return { startedAt: new Date(), db }
}

export type TrpcContext = Awaited<ReturnType<typeof createTrpcContext>>
