import express, { Router } from 'express'
import flightsRoute from './flights.route'

const router = express.Router()

interface IRoute {
  path: string
  route: Router
}

const defaultRoutes: IRoute[] = [
  {
    path: '/flights',
    route: flightsRoute
  }
]

defaultRoutes.forEach(route => {
  router.use(route.path, route.route)
})

export default router
