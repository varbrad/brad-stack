import * as React from 'react'
import { PusherContext } from './PusherProvider'

export const usePusherEvent = <T = unknown>(
  channel: string,
  event: string,
  callback: (data: T) => void | Promise<void>,
) => {
  const client = React.useContext(PusherContext)
  const callbackRef = React.useRef(callback)
  React.useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  React.useEffect(() => {
    if (!client) return

    const fn = (data: T) => callbackRef.current(data)

    client.subscribe(channel).bind(event, fn)

    return () => {
      client.channel(channel).unbind(event, fn)
    }
  }, [client, channel, event])
}
