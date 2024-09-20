import mongoose from 'mongoose'
import app from './app'
import config from './config/config'
import { logger } from './modules/logger'

let server: any
mongoose.connect(config.dbUrl).then(() => {
  logger.info('Connected to MongoDB')
  server = app.listen(config.port, () => {
    logger.info(`App listening at http://localhost:${config.port}`)
  })
})
