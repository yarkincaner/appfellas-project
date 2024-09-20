import { IOptions, QueryResult } from '../paginate/paginate'
import { IBookedFlight, IBookedFlightDoc } from './booked-flight.interfaces'
import BookedFlight from './booked-flight.model'

export const createBookedFlight = async (
  bookedFlightBody: IBookedFlight
): Promise<IBookedFlightDoc> => {
  return BookedFlight.create(bookedFlightBody)
}

/**
 * Query for booked flights
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @returns {Promise<QueryResult>}
 */
export const queryBookedFlights = async (
  filter: Record<string, any>,
  options: IOptions
): Promise<QueryResult> => {
  const bookedFlights = await BookedFlight.paginate(filter, options)
  return bookedFlights
}
