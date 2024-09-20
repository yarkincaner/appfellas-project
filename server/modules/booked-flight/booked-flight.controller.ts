import { Request, Response } from 'express'
import catchAsync from '../utils/catch-async'
import * as bookedFlightService from './booked-flight.service'
import httpStatus from 'http-status'
import pick from '../utils/pick'
import { IOptions } from '../paginate/paginate'

export const createBookedFlight = catchAsync(
  async (req: Request, res: Response) => {
    const bookedFlight = await bookedFlightService.createBookedFlight(req.body)
    res.status(httpStatus.CREATED).send(bookedFlight)
  }
)

export const getBookedFlights = catchAsync(
  async (req: Request, res: Response) => {
    const filter = pick(req.query, ['prefixIATA', 'route'])
    const options: IOptions = pick(req.query, ['sortBy', 'limit', 'page'])
    const result = await bookedFlightService.queryBookedFlights(filter, options)
    res.send(result)
  }
)
