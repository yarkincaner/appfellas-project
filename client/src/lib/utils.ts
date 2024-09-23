import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDateTime(dateString: string): string {
  if (!dateString) return dateString

  const date = new Date(dateString)

  // Get hours and minutes
  let hours: number | string = date.getUTCHours()
  const minutes: number | string = date.getUTCMinutes()

  // Determine AM or PM
  const ampm = hours >= 12 ? 'PM' : 'AM'

  // Convert to 12-hour format
  hours = hours % 12
  hours = hours ? hours : 12 // the hour '0' should be '12'

  // Format minutes
  const formattedMinutes = minutes < 10 ? '0' + minutes : minutes

  // Return formatted time
  return `${hours}:${formattedMinutes} ${ampm}`
}
