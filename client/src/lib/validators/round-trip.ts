import { z } from 'zod'

const today = new Date()
today.setHours(0, 0, 0, 0) // Set to the start of today

export const RoundTripValidator = z
  .object({
    from: z.string(),
    to: z.string(),
    departureDate: z
      .string()
      .date()
      .refine(data => {
        return new Date(data) >= today
      }),
    returnDate: z.string().date()
  })
  .refine(
    data => {
      if (data.returnDate) {
        const departureDate = new Date(data.departureDate)
        const returnDate = new Date(data.returnDate)
        return returnDate >= departureDate
      }
    },
    {
      message: 'Return date must be the same or later than departure date',
      path: ['returnDate']
    }
  )

export type RoundTripRequest = z.infer<typeof RoundTripValidator>
