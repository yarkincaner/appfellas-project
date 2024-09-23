import { Airline } from '@/types/airline'
import { Destination } from '@/types/destination'
import { FlightType } from '@/types/flight'
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

export const useGetFlights = (filters?: {
  from?: string
  to?: string
  departureDate?: string
  returnDate?: string
}) => {
  return useQuery({
    queryKey: ['get-flights'],
    queryFn: async () => {
      let query = `${process.env.API_BASE_URL_DEVELOPMENT}/v1/flights`
      const searchParams = new URLSearchParams()

      if (filters?.from) {
        searchParams.append('from', filters.from)
      }

      if (filters?.to) {
        searchParams.append('to', filters.to)
      }

      if (filters?.departureDate) {
        searchParams.append('departureDate', filters.departureDate)
      }

      if (filters?.returnDate) {
        searchParams.append('returnDate', filters.returnDate)
      }

      query = `${query}?${searchParams.toString()}`
      const response = await axios.get(query)
      return response.data.flights as FlightType[]
    }
  })
}
