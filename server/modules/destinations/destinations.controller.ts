import { Request, Response } from 'express'
import catchAsync from '../utils/catch-async'
import config from '../../config/config'
import axios from 'axios'

export const getAllDestinations = catchAsync(
  async (req: Request, res: Response) => {
    const queryParams = new URLSearchParams(req.query as any).toString()
    const query = `${config.appUrl}/destinations?${queryParams}`

    const destinations = await axios.get(query, {
      headers: {
        Accept: 'application/json',
        app_id: config.appId,
        app_key: config.appKey,
        ResourceVersion: 'v4'
      }
    })

    res.json(destinations.data)
  }
)

export const getDestination = catchAsync(
  async (req: Request, res: Response) => {
    const iata = req.params['iata']

    if (typeof iata === 'string') {
      const query = `${config.appUrl}/destinations/${iata}`

      const destination = await axios.get(query, {
        headers: {
          Accept: 'application/json',
          app_id: config.appId,
          app_key: config.appKey,
          ResourceVersion: 'v4'
        }
      })

      res.send(destination.data)
    }
  }
)
