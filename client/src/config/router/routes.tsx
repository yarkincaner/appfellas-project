import Home from '@/pages/Home/Home'
import BookedFlights from '@/pages/BookedFlights/BookedFlights'
import { RouteObject } from 'react-router-dom'

export const ROUTES: RouteObject[] = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/booked-flights',
    element: <BookedFlights />
  }
]
