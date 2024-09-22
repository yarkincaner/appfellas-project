import express, { Router } from 'express'
import flightsRoute from './flights.route'
import bookedFlightRoute from './booked-flight.route'
import destinationsRoute from './destinations.route'

const router = express.Router()

interface IRoute {
  path: string
  route: Router
}

const defaultRoutes: IRoute[] = [
  {
    path: '/flights',
    route: flightsRoute
  },
  {
    path: '/destinations',
    route: destinationsRoute
  },
  {
    path: '/booked-flight',
    route: bookedFlightRoute
  }
]

defaultRoutes.forEach(route => {
  router.use(route.path, route.route)
})

export default router
