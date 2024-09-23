import { z } from 'zod'

const today = new Date()
today.setHours(0, 0, 0, 0) // Set to the start of today

export const OneWayValidator = z.object({
  from: z.string().optional(),
  to: z.string().optional(),
  departureDate: z.string().date().optional()
})

export type OneWayRequest = z.infer<typeof OneWayValidator>
