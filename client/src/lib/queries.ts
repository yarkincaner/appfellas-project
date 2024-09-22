import { Destination } from '@/types/destination'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export const useGetAllDestinations = () => {
  return useQuery({
    queryKey: ['get-all-destinations'],
    queryFn: async () => {
      // Directly use the environment variable in the template string
      const query = `${process.env.API_BASE_URL_DEVELOPMENT}/v1/destinations`
      console.log('Requesting URL:', query)

      const response = await axios.get(query)
      console.log('Response:', response.data.destinations)
      return response.data.destinations as Destination[]
    }
  })
}
