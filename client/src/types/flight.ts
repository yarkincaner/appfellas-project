export type Flight = {
  lastUpdatedAt: string // ISO date string
  actualLandingTime: string // ISO date string
  aircraftType: {
    iataMain: string
    iataSub: string
  }
  baggageClaim: {
    belts: string[]
  }
  estimatedLandingTime: string // ISO date string
  expectedTimeOnBelt: string // ISO date string
  flightDirection: 'A' | 'D' // A = Arrival, D = Departure
  flightName: string
  flightNumber: number
  id: string
  isOperationalFlight: boolean
  mainFlight: string
  prefixIATA: string // IATA code of airline
  prefixICAO: string // ICAO code of airline
  airlineCode: number
  publicFlightState: {
    flightStates: string[] // e.g., ["ARR", "EXP"]
  }
  route: {
    destinations: string[] // Array of IATA codes for destinations
    eu: 'S' | 'N' // S = Within EU, N = Outside EU
    visa: boolean
  }
  scheduleDateTime: string // ISO date string
  scheduleDate: string // ISO date string (yyyy-mm-dd)
  scheduleTime: string // Time (hh:mm:ss)
  serviceType: string // Service type code (e.g., "J")
  terminal: number
  schemaVersion: string
}
