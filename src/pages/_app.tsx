import { trpc } from '@/services/trpc'
import type { AppProps } from 'next/app'
import { Nunito } from 'next/font/google'

import { MetaProvider } from '@/services/meta/client'
import PusherProvider from '@/services/pusher/PusherProvider'
import React from 'react'

import '@/styles/globals.css'

const font = Nunito({ subsets: ['latin'] })

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <MetaProvider>
      <PusherProvider>
        <div className={font.className}>
          <Component {...pageProps} />
        </div>
      </PusherProvider>
    </MetaProvider>
  )
}

export default trpc.withTRPC(App)
