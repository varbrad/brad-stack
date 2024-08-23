import { MetaHead } from '@/services/meta/server'
import { Head, Html, Main, NextScript } from 'next/document'
import * as React from 'react'

const Document = () => {
  return (
    <Html lang='en'>
      <Head>
        <MetaHead />
      </Head>
      <body className='w-screen min-h-screen bg-slate-950 text-slate-100'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
