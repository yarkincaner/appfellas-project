import { today } from '@/config/config'
import { Airline } from '@/types/airline'
import { Destination } from '@/types/destination'
import { FlightFilters, FlightType } from '@/types/flight'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export const useGetDestinations = () => {
  return useQuery({
    queryKey: ['get-destinations'],
    queryFn: async () => {
      const query = `${process.env.API_BASE_URL_DEVELOPMENT}/v1/destinations`
      const res = await axios.get(query)

      return res.data.destinations as Destination[]
    }
  })
}

export const useGetAirlines = () => {
  return useQuery({
    queryKey: ['get-airlines'],
    queryFn: async () => {
      const query = `${process.env.API_BASE_URL_DEVELOPMENT}/v1/airlines`
      const res = await axios.get(query)

      return res.data.airlines as Airline[]
    }
  })
}

const defaultFilters: FlightFilters = {
  scheduleDate: today,
  airline: null,
  route: null,
  page: null,
  sort: null,
  fromDateTime: null,
  toDateTime: null
}

export const useGetFlights = (filters: FlightFilters = defaultFilters) => {
  return useQuery({
    queryKey: ['get-flights', filters],
    queryFn: async () => {
      let query = `${process.env.API_BASE_URL_DEVELOPMENT}/v1/flights`
      const searchParams = new URLSearchParams()

      // Conditionally append filters to the searchParams
      if (filters.scheduleDate) {
        searchParams.append('scheduleDate', filters.scheduleDate)
      }
      if (filters.airline) {
        searchParams.append('airline', filters.airline)
      }
      if (filters.route) {
        searchParams.append('route', filters.route.join(',')) // assuming `route` is an array of IATA codes
      }
      if (filters.page) {
        searchParams.append('page', filters.page.toString())
      }
      if (filters.sort) {
        searchParams.append('sort', filters.sort) // adjust if sort has specific fields
      }
      if (filters.fromDateTime) {
        searchParams.append(
          'fromDateTime',
          new Date(filters.fromDateTime).toISOString().split('.')[0]
        ) // format date as 'yyyy-MM-ddTHH:mm:ss'
      }
      if (filters.toDateTime) {
        searchParams.append(
          'toDateTime',
          new Date(filters.toDateTime).toISOString().split('.')[0]
        )
      }

      searchParams.append('flightDirection', 'D')

      query = `${query}?${searchParams.toString()}`
      try {
        const response = await axios.get(query)

        return response.data?.flights ?? []
      } catch (error) {
        // Handle error (optional: you could log this or return an empty array)
        console.error('Error fetching flights:', error)
        return []
      }
    }
  })
}

export const useGetBookedFlights = () => {
  return useQuery({
    queryKey: ['get-booked-flights'],
    queryFn: async () => {
      const query = `${process.env.API_BASE_URL_DEVELOPMENT}/v1/booked-flight`

      const res = await axios.get(query)
      return res.data as FlightType[]
    }
  })
}
