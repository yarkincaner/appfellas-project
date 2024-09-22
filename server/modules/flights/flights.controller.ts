import { Request, Response } from 'express'
import catchAsync from '../utils/catch-async'
import axios from 'axios'
import config from '../../config/config'

export const getAllFlights = catchAsync(async (req: Request, res: Response) => {
  const queryParams = new URLSearchParams(req.query as any).toString()
  const query = `${config.appUrl}/flights?${queryParams}`

  const flights = await axios.get(query, {
    headers: {
      Accept: 'application/json',
      app_id: config.appId,
      app_key: config.appKey,
      ResourceVersion: 'v4'
    }
  })

  res.json(flights.data)
})

export const getFlight = catchAsync(async (req: Request, res: Response) => {
  const id = req.params['id']

  if (typeof id === 'string') {
    const query = `${config.appUrl}/flights/${id}`

    const flight = await axios.get(query, {
      headers: {
        Accept: 'application/json',
        app_id: config.appId,
        app_key: config.appKey,
        ResourceVersion: 'v4'
      }
    })

    res.send(flight.data)
  }
})
