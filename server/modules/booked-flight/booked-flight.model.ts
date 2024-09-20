import mongoose from 'mongoose'
import { toJSON } from '../toJSON' // Assuming this plugin converts mongoose to JSON
import {
  IBookedFlightDoc,
  IBookedFlightModel
} from './booked-flight.interfaces'
import { paginate } from '../paginate'

const bookedFlightSchema = new mongoose.Schema<
  IBookedFlightDoc,
  IBookedFlightModel
>(
  {
    lastUpdatedAt: {
      type: String,
      trim: true
    },
    actualLandingTime: {
      type: String,
      trim: true
    },
    actualOffBlockTime: {
      type: String,
      trim: true
    },
    aircraftRegistration: {
      type: String,
      trim: true
    },
    aircraftType: {
      iataMain: { type: String, trim: true },
      iataSub: { type: String, trim: true }
    },
    baggageClaim: {
      belts: { type: [String] }
    },
    estimatedLandingTime: {
      type: String,
      trim: true
    },
    expectedTimeBoarding: {
      type: String,
      trim: true
    },
    expectedTimeGateClosing: {
      type: String,
      trim: true
    },
    expectedTimeGateOpen: {
      type: String,
      trim: true
    },
    expectedTimeOnBelt: {
      type: String,
      trim: true
    },
    expectedSecurityFilter: {
      type: String,
      trim: true
    },
    flightDirection: {
      type: String,
      enum: ['A', 'D'],
      required: true
    },
    flightName: {
      type: String,
      trim: true
    },
    flightNumber: {
      type: Number
    },
    gate: {
      type: String,
      trim: true
    },
    pier: {
      type: String,
      trim: true
    },
    isOperationalFlight: {
      type: Boolean
    },
    mainFlight: {
      type: String,
      trim: true
    },
    prefixIATA: {
      type: String,
      trim: true
    },
    prefixICAO: {
      type: String,
      trim: true
    },
    airlineCode: {
      type: Number
    },
    publicEstimatedOffBlockTime: {
      type: String,
      trim: true
    },
    publicFlightState: {
      flightStates: { type: [String] }
    },
    route: {
      destinations: { type: [String] },
      eu: { type: String, enum: ['S', 'E', 'N'] },
      visa: { type: Boolean }
    },
    scheduleDateTime: {
      type: String,
      trim: true
    },
    scheduleDate: {
      type: String,
      trim: true
    },
    scheduleTime: {
      type: String,
      trim: true
    },
    serviceType: {
      type: String,
      trim: true
    },
    terminal: {
      type: Number
    },
    schemaVersion: {
      type: String,
      trim: true
    }
  },
  {
    timestamps: true
  }
)

// Add the toJSON and paginate plugins
bookedFlightSchema.plugin(toJSON)
bookedFlightSchema.plugin(paginate)

const BookedFlight = mongoose.model<IBookedFlightDoc, IBookedFlightModel>(
  'BookedFlight',
  bookedFlightSchema
)

export default BookedFlight
