import { FlightType } from '@/types/flight'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'

export const useBookFlight = () => {
  return useMutation({
    mutationKey: ['create-booked-flight'],
    mutationFn: async (flight: FlightType) => {
      const query = `${process.env.API_BASE_URL_DEVELOPMENT}/v1/booked-flight`
      const res = await axios.post(query, flight)
      return res.data as number
    },
    onError: error => {
      // Show toast notification
      console.log(error.message)
    },
    onSuccess: data => {
      // Show toast notification and navigate to booked-flights
      console.log('Booked flight:', data)
    }
  })
}
