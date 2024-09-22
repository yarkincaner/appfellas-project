import express, { Router } from 'express'
import { flightsController } from '../../modules/flights'

const router: Router = express.Router()

router.route('/').get(flightsController.getAllFlights)

router.route('/:id').get(flightsController.getFlight)

export default router
