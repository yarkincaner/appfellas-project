import { Request, Response } from 'express'
import httpStatus from 'http-status'
import catchAsync from '../utils/catch-async'
import * as bookedFlightService from './booked-flight.service'

export const createBookedFlight = catchAsync(
  async (req: Request, res: Response) => {
    const bookedFlight = await bookedFlightService.create(req.body)
    res.status(httpStatus.CREATED).send(bookedFlight)
  }
)

export const getBookedFlights = catchAsync(
  async (req: Request, res: Response) => {
    const bookedFlights = await bookedFlightService.getAll()
    res.status(httpStatus.OK).send(bookedFlights)
  }
)
