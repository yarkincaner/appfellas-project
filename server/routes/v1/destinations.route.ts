import express, { Router } from 'express'
import { destinationsController } from '../../modules/destinations'

const router: Router = express.Router()

router.route('/').get(destinationsController.getAllDestinations)

router.route('/:iata').get(destinationsController.getDestination)

export default router
