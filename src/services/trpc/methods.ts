import { initTRPC } from '@trpc/server'
import type { TrpcContext } from './context'

const t = initTRPC.context<TrpcContext>().create()

export const router = t.router
export const procedure = t.procedure
