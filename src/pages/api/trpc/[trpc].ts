import { createTrpcContext } from '@/services/trpc/context'
import { indexRouter } from '@/services/trpc/router'
import * as trpcNext from '@trpc/server/adapters/next'

export default trpcNext.createNextApiHandler({
  router: indexRouter,
  createContext: createTrpcContext,
})
