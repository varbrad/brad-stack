import { usePusherEvent } from '@/services/pusher/hooks'
import { trpc } from '@/services/trpc'
import * as React from 'react'

const Index = () => {
  const hello = trpc.listTest.useQuery()
  const triggerTask = trpc.triggerTask.useMutation()

  const [event, setEvent] = React.useState('testEvent')

  usePusherEvent('test', event, payload => {
    console.log('hello!', { payload })
  })

  return (
    <main className='p-4 flex flex-col gap-4'>
      {hello.data?.map(t => (
        <p key={t.id} className='flex flex-row items-center gap-4'>
          <span>Value = {t.value}</span>
          <span className='ml-auto' />
          <span className='text-xs text-slate-600'>({t.id})</span>
          <span className='text-xs text-slate-500'>{t.createdAt}</span>
        </p>
      ))}
      <hr />
      <button
        type='button'
        onClick={() => setEvent(event === 'testEvent' ? 'ignore' : 'testEvent')}
      >
        {event}
      </button>
      <hr />
      <button type='button' onClick={() => triggerTask.mutate()}>
        Trigger task
      </button>
    </main>
  )
}

export default Index
