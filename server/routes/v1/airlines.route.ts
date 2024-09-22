import express, { Router } from 'express'
import { airlinesController } from '../../modules/airlines'

const router: Router = express.Router()

router.route('/').get(airlinesController.getAllAirlines)

router.route('/:airline').get(airlinesController.getAirline)

export default router
