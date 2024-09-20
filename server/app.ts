import compression from 'compression'
import cors from 'cors'
import express from 'express'
import httpStatus from 'http-status'
import { ApiError, errorConverter, errorHandler } from './modules/errors'
import routes from './routes/v1'

const app = express()

// enable cors
app.use(cors())
app.options('*', cors())

// parse json request body
app.use(express.json())

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }))

// gzip compression
app.use(compression())

// jwt authentication if needed
// app.use(passport.initialize());
// passport.use('jwt', jwtStrategy);

app.use('/v1', routes)

// send back a 404 error for any unknown api request
app.use((_req, _res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, 'Not found'))
})

// convert error to ApiError, if needed
app.use(errorConverter)

// handle error
app.use(errorHandler)

export default app
