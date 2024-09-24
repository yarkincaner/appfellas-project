import { FlightType } from '@/types/flight'
import { useMutation } from '@tanstack/react-query'
import axios, { AxiosError } from 'axios'
import { toast } from 'sonner'

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
      console.log(error)
      if (error instanceof AxiosError) {
        toast.error('Something went wrong!', {
          description: error.response?.data.message
        })
      }
    },
    onSuccess: data => {
      // Show toast notification and navigate to booked-flights
      console.log('Booked flight:', data)
    }
  })
}
