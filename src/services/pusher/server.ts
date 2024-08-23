import { getEnv } from '@/env'
import PusherServer from 'pusher'

const env = getEnv()

export const pusherServer = new PusherServer({
  appId: env.PUSHER_APP_ID,
  cluster: 'eu',
  key: env.PUSHER_CLIENT_KEY,
  secret: env.PUSHER_SERVER_KEY,
  useTLS: true,
})
