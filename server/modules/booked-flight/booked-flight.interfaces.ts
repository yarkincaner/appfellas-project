import { Document, Model } from 'mongoose'
import { QueryResult } from '../paginate/paginate' // Assuming you have pagination like in the user model

export interface IAircraftType {
  iataMain: string
  iataSub: string
}

export interface IBaggageClaim {
  belts: string[]
}

export interface IRoute {
  destinations: string[]
  eu: 'S' | 'E' | 'N'
  visa: boolean
}

export interface IPublicFlightState {
  flightStates: string[]
}

export interface IBookedFlight {
  lastUpdatedAt?: string
  actualLandingTime?: string
  actualOffBlockTime?: string
  aircraftRegistration?: string
  aircraftType?: IAircraftType
  baggageClaim?: IBaggageClaim
  estimatedLandingTime?: string
  expectedTimeBoarding?: string
  expectedTimeGateClosing?: string
  expectedTimeGateOpen?: string
  expectedTimeOnBelt?: string
  expectedSecurityFilter?: string
  flightDirection: 'A' | 'D'
  flightName?: string
  flightNumber?: number
  gate?: string
  pier?: string
  isOperationalFlight?: boolean
  mainFlight?: string
  prefixIATA?: string
  prefixICAO?: string
  airlineCode?: number
  publicEstimatedOffBlockTime?: string
  publicFlightState?: IPublicFlightState
  route?: IRoute
  scheduleDateTime?: string
  scheduleDate?: string
  scheduleTime?: string
  serviceType?: string
  terminal?: number
  schemaVersion?: string
}

export interface IBookedFlightDoc extends Omit<IBookedFlight, 'id'>, Document {}

export interface IBookedFlightModel extends Model<IBookedFlightDoc> {
  paginate(
    filter: Record<string, any>,
    options: Record<string, any>
  ): Promise<QueryResult>
}
