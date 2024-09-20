import express, { Router } from 'express'
import { bookedFlightController } from '../../modules/booked-flight'

const router: Router = express.Router()

router
  .route('/')
  .post(bookedFlightController.createBookedFlight)
  .get(bookedFlightController.getBookedFlights)

export default router
