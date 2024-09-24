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
  } catch (error: any) {
    if (error.code === 11000 && error.keyValue.id) {
      // Handle duplicate key error (MongoDB error code for unique constraint violation)
      throw new ApiError(
        httpStatus.CONFLICT,
        `This flight has already been booked by you`
      )
    } else if (error instanceof Error) {
      // Check if error is actually an instance of Error and has a message property
      throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, error.message)
    } else {
      // Handle unknown type of error gracefully
      throw new ApiError(
        httpStatus.INTERNAL_SERVER_ERROR,
        'An unknown error occurred'
      )
    }
  }
}

export const getAll = async () => {
  try {
    const bookedFlights = await BookedFlight.find()
    return bookedFlights
  } catch (error) {
    if (error instanceof Error) {
      // Check if error is actually an instance of Error and has a message property
      throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, error.message)
    } else {
      // Handle unknown type of error gracefully
      throw new ApiError(
        httpStatus.INTERNAL_SERVER_ERROR,
        'An unknown error occurred'
      )
    }
  }
}
