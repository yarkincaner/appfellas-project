import Home from '@/pages/Home/Home'
import MyFlights from '@/pages/MyFlights/MyFlights'
import { RouteObject } from 'react-router-dom'

export const ROUTES: RouteObject[] = [
	{
		path: '/',
		element: <Home />
	},
	{
		path: '/my-flights',
		element: <MyFlights />
	},
]