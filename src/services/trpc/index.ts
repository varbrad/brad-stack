import { httpBatchLink } from '@trpc/client'
import { createTRPCNext } from '@trpc/next'
import type { TrpcRouter } from './router'

export const trpc = createTRPCNext<TrpcRouter>({
  abortOnUnmount: true,
  overrides: {
    useMutation: {
      async onSuccess(opts) {
        await opts.originalFn()
        await opts.queryClient.invalidateQueries()
      },
    },
  },
  config() {
    return {
      links: [
        httpBatchLink({
          url: '/api/trpc',
        }),
      ],
    }
  },
  ssr: false,
})
