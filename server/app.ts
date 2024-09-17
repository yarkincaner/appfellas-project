import express from 'express'
import cors from 'cors'
import routes from './routes/v1'

const app = express()

// enable cors
app.use(cors())
app.options('*', cors())

// parse json request body
app.use(express.json())

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }))

app.use('/v1', routes)

export default app
