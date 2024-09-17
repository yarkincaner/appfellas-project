import express, { Router } from 'express'
import bookRoute from './book.route'

const router = express.Router()

interface IRoute {
  path: string
  route: Router
}

const defaultRoutes: IRoute[] = [
  {
    path: '/books',
    route: bookRoute
  }
]

defaultRoutes.forEach(route => {
  router.use(route.path, route.route)
})

export default router
