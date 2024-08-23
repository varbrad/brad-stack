import Pusher from 'pusher-js'

type CreatePusherClientOptions = {
  clientKey: string
}

export const createPusherClient = (options: CreatePusherClientOptions) =>
  new Pusher(options.clientKey, { cluster: 'eu' })

export type PusherClient = ReturnType<typeof createPusherClient>
