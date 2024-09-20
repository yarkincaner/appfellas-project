import BookedFlight from './booked-flight.model'
import ApiError from '../errors/ApiError'
import httpStatus from 'http-status'

export const create = async (flightData: any) => {
  try {
    // Create a new flight instance using the flightData passed from the controller
    const bookedFlight = new BookedFlight(flightData)

    // Save the new flight booking to the database
    await bookedFlight.save()

    return bookedFlight._id // Return the saved document
  } catch (error) {
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, error.message)
  }
}

export const getAll = async () => {
  try {
    const bookedFlights = await BookedFlight.find()
    return bookedFlights
  } catch (error) {
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, error.message)
  }
}
