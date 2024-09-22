import { Request, Response } from 'express'
import catchAsync from '../utils/catch-async'
import config from '../../config/config'
import axios from 'axios'

const apiUrl = config.appUrl

export const getAllAirlines = catchAsync(
  async (req: Request, res: Response) => {
    const queryParams = new URLSearchParams(req.query as any).toString()
    const query = `${apiUrl}/airlines?${queryParams}`

    const airlines = await axios.get(query, {
      headers: {
        Accept: 'application/json',
        app_id: config.appId,
        app_key: config.appKey,
        ResourceVersion: 'v4'
      }
    })

    res.json(airlines.data)
  }
)

export const getAirline = catchAsync(async (req: Request, res: Response) => {
  var airlineCode = req.params['airline']

  if (typeof airlineCode === 'string') {
    airlineCode = airlineCode.toUpperCase()
    const query = `${apiUrl}/airlines/${airlineCode}`

    const airline = await axios.get(query, {
      headers: {
        Accept: 'application/json',
        app_id: config.appId,
        app_key: config.appKey,
        ResourceVersion: 'v4'
      }
    })

    res.send(airline.data)
  }
})
