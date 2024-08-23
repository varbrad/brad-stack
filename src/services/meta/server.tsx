import pkg from '@/../package.json'
import { type Env, getEnv } from '@/env'
import type { Meta } from './client'

export const generateMeta = (env: Env): Meta => {
  return {
    version: pkg.version,
    date: new Date().toISOString(),

    env: {
      pusherClientKey: env.PUSHER_CLIENT_KEY,
    },
  }
}

export const MetaHead = () => {
  const content = JSON.stringify(generateMeta(getEnv()))
  return <meta name='app-meta' content={content} />
}
