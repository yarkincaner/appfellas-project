import { Schema, model } from 'mongoose'

// Sub-schema for Aircraft Type
const aircraftTypeSchema = new Schema(
  {
    iataMain: { type: String },
    iataSub: { type: String }
  },
  { _id: false }
)

// Sub-schema for Baggage Claim
const baggageClaimSchema = new Schema(
  {
    belts: [{ type: String }]
  },
  { _id: false }
)

// Sub-schema for Checkin Allocations -> Desks -> Checkin Class
const checkinClassSchema = new Schema(
  {
    code: { type: String },
    description: { type: String }
  },
  { _id: false }
)

const desksSchema = new Schema(
  {
    checkinClass: checkinClassSchema,
    position: { type: Number }
  },
  { _id: false }
)

const rowsSchema = new Schema(
  {
    position: { type: String },
    desks: { type: [desksSchema] }
  },
  { _id: false }
)

const checkinAllocationsSchema = new Schema(
  {
    startTime: { type: Date },
    endTime: { type: Date },
    rows: { type: [rowsSchema] }
  },
  { _id: false }
)

const remarksSchema = new Schema(
  {
    remarks: [{ type: String }]
  },
  { _id: false }
)

// Sub-schema for Route
const routeSchema = new Schema(
  {
    destinations: [{ type: String }],
    eu: { type: String },
    visa: { type: Boolean }
  },
  { _id: false }
)

// Sub-schema for Public Flight State
const publicFlightStateSchema = new Schema(
  {
    flightStates: [{ type: String }]
  },
  { _id: false }
)

// Main Flight Schema
const flightSchema = new Schema(
  {
    lastUpdatedAt: { type: Date },
    actualLandingTime: { type: Date },
    actualOffBlockTime: { type: Date },
    aircraftRegistration: { type: String },
    aircraftType: aircraftTypeSchema,
    baggageClaim: baggageClaimSchema,
    checkinAllocations: {
      checkinAllocations: [checkinAllocationsSchema],
      remarks: remarksSchema
    },
    codeshares: {
      codeshares: [{ type: String }]
    },
    estimatedLandingTime: { type: Date },
    expectedTimeBoarding: { type: Date },
    expectedTimeGateClosing: { type: Date },
    expectedTimeGateOpen: { type: Date },
    expectedTimeOnBelt: { type: Date },
    expectedSecurityFilter: { type: String },
    flightDirection: { type: String }, // "A" or "D"
    flightName: { type: String },
    flightNumber: { type: Number },
    gate: { type: String },
    pier: { type: String },
    id: { type: String, required: true, unique: true },
    isOperationalFlight: { type: Boolean },
    mainFlight: { type: String },
    prefixIATA: { type: String },
    prefixICAO: { type: String },
    airlineCode: { type: Number },
    publicEstimatedOffBlockTime: { type: Date },
    publicFlightState: publicFlightStateSchema,
    route: routeSchema,
    scheduleDateTime: { type: Date },
    scheduleDate: { type: String },
    scheduleTime: { type: String },
    serviceType: { type: String },
    terminal: { type: Number },
    transferPositions: {
      transferPositions: [{ type: Number }]
    },
    schemaVersion: { type: String }
  },
  { timestamps: true }
)

const BookedFlight = model('BookedFlight', flightSchema)

export default BookedFlight
