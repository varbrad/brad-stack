import { useMeta } from '@/services/meta/client'
import * as React from 'react'
import { type PusherClient, createPusherClient } from './client'

type Props = {
  children: React.ReactNode
}

export const PusherContext = React.createContext<PusherClient | null>(null)

let _client: PusherClient | null = null
let _clientKey: string | null = null

const PusherProvider = ({ children }: Props) => {
  const pusherClientKey = useMeta().env.pusherClientKey

  const client = React.useMemo(() => {
    if (_client) {
      if (_clientKey !== pusherClientKey) {
        _client.disconnect()
      } else {
        return _client
      }
    }

    _client = createPusherClient({ clientKey: pusherClientKey })
    _clientKey = pusherClientKey

    return _client
  }, [pusherClientKey])

  return (
    <PusherContext.Provider value={client}>{children}</PusherContext.Provider>
  )
}

export default PusherProvider
