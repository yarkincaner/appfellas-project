import express, { Router } from 'express'
import { bookController } from '../../modules/book'

const router: Router = express.Router()

router.route('/').get(bookController.getBooks)

export default router
