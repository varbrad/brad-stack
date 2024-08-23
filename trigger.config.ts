import { envSchema } from '@/env'
import type { TriggerConfig } from '@trigger.dev/sdk/v3'

import 'dotenv/config'

const env = envSchema.pick({ TRIGGER_PROJECT_ID: true }).parse(process.env)

export const config: TriggerConfig = {
  project: env.TRIGGER_PROJECT_ID,
  logLevel: 'log',
  retries: {
    enabledInDev: false,
    default: {
      maxAttempts: 3,
      minTimeoutInMs: 1000,
      maxTimeoutInMs: 10000,
      factor: 2,
      randomize: true,
    },
  },
  triggerDirectories: ['src/services/trigger'],
  dependenciesToBundle: ['nanoid'],
}
