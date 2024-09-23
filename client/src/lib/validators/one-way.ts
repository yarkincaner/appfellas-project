import { z } from 'zod'

const today = new Date()
today.setHours(0, 0, 0, 0) // Set to the start of today

export const OneWayValidator = z.object({
  from: z.string(),
  to: z.string(),
  departureDate: z
    .string()
    .date()
    .refine(data => {
      return new Date(data) >= today
    })
})

export type OneWayRequest = z.infer<typeof OneWayValidator>
