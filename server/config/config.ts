import dotenv from 'dotenv'
import dotenvExpand from 'dotenv-expand'
import { z } from 'zod'

var myEnv = dotenv.config({
  path: '../.env'
})

dotenvExpand.expand(myEnv)

const envVarsSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']),
  PORT: z.coerce.number().default(4000),
  MONGODB_URL: z
    .string({
      message: 'MongoDB url is required!'
    })
    .min(1),
  SCHIPHOL_ID: z.string({
    message: 'Schiphol application id is required'
  }),
  SCHIPHOL_KEY: z.string({
    message: 'Schiphol application key is required'
  }),
  SCHIPHOL_URL: z.string({
    message: 'Schiphol application url is required'
  })
})

const { data, error } = envVarsSchema.safeParse(process.env)

if (error) {
  const errorMessages = error.errors.map(err => err.message).join(', ')
  throw new Error(`Config validation error: ${errorMessages}`)
}

export default {
  env: data.NODE_ENV,
  port: data.PORT,
  dbUrl: data.MONGODB_URL,
  appId: data.SCHIPHOL_ID,
  appKey: data.SCHIPHOL_KEY,
  appUrl: data.SCHIPHOL_URL
}
