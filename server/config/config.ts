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
  MONGODB_USER_NAME: z
    .string({
      message: 'MongoDB admin username is required!'
    })
    .min(1),
  MONGODB_USER_PASSWORD: z
    .string({
      message: 'MongoDB admin user password is required!'
    })
    .min(1),
  MONGODB_URL: z
    .string({
      message: 'MongoDB url is required!'
    })
    .min(1)
})

const { data, error } = envVarsSchema.safeParse(process.env)

if (error) {
  const errorMessages = error.errors.map(err => err.message).join(', ')
  throw new Error(`Config validation error: ${errorMessages}`)
}

export default {
  env: data.NODE_ENV,
  port: data.PORT,
  dbUrl: data.MONGODB_URL
}
