import { FlightType } from '@/types/flight'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios, { AxiosError } from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

export const useBookFlight = () => {
  const queryClient = useQueryClient()
  const navigate = useNavigate()

  return useMutation({
    mutationKey: ['create-booked-flight'],
    mutationFn: async (flight: FlightType) => {
      const query = `${process.env.API_BASE_URL_DEVELOPMENT}/v1/booked-flight`
      const res = await axios.post(query, flight)
      return res.data as number
    },
    onError: error => {
      if (error instanceof AxiosError) {
        toast.error('Something went wrong!', {
          description: error.response?.data.message
        })
      }
    },
    onSuccess: async data => {
      await queryClient.invalidateQueries({
        queryKey: ['get-booked-flights']
      })
      toast.success(`Booked flight successfully!`)
      navigate('/booked-flights')
    }
  })
}
