import mongoose from 'mongoose'
import app from './app'
import config from './config/config'
import { logger } from './modules/logger'
import { Server } from 'http'

let server: Server
mongoose.connect(config.dbUrl).then(() => {
  logger.info('Connected to MongoDB')
  server = app.listen(config.port, () => {
    logger.info(`App listening at http://localhost:${config.port}`)
  })
})

const exitHandler = () => {
  if (server) {
    server.close(() => {
      logger.info('Server closed')
      process.exit(1)
    })
  } else {
    process.exit(1)
  }
}

const unexpectedErrorHandler = (error: string) => {
  logger.error(error)
  exitHandler()
}

process.on('uncaughtException', unexpectedErrorHandler)
process.on('unhandledRejection', unexpectedErrorHandler)

process.on('SIGTERM', () => {
  logger.info('SIGTERM received')
  if (server) {
    server.close()
  }
})
