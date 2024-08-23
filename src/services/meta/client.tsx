import { getEnv } from '@/env'
import * as React from 'react'
import { generateMeta } from './server'

export type Meta = {
  version: string
  date: string

  env: {
    pusherClientKey: string
  }
}

type MetaProviderProps = {
  children: React.ReactNode
}

const MetaContext = React.createContext<Meta | null>(null)

export const MetaProvider = ({ children }: MetaProviderProps) => {
  const meta = React.useMemo<Meta>(() => {
    if (typeof window === 'undefined') return generateMeta(getEnv())

    const metaElement = document.querySelector('meta[name="app-meta"]')

    if (!metaElement || !(metaElement instanceof HTMLMetaElement))
      throw new Error('No meta tag found!')

    return JSON.parse(metaElement.content)
  }, [])

  return <MetaContext.Provider value={meta}>{children}</MetaContext.Provider>
}

export const useMeta = (): Meta => {
  const meta = React.useContext(MetaContext)
  if (!meta) throw new Error('useMeta must be used within a MetaProvider')
  return meta
}
