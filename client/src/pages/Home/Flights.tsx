import ScrollShadowWrapper from '@/components/ScrollShadowWrapper'
import { FC } from 'react'
import Flight from './Flight'
import { useGetFlights } from '@/lib/queries'
import Icons from '@/components/Icons'
import { useSearchParams } from 'react-router-dom'
import { FlightFilters, SortOptions } from '@/types/flight'

type Props = {}

const Flights: FC<Props> = ({}) => {
  const [searchParams] = useSearchParams()
  // Convert searchParams to an object that matches FlightFilters
  const filters: FlightFilters = {
    scheduleDate: searchParams.get('scheduleDate') || null,
    airline: searchParams.get('airline') || null,
    route: searchParams.get('route')
      ? searchParams.get('route')?.split(',')
      : null,
    page: searchParams.get('page')
      ? parseInt(searchParams.get('page') || '0', 10)
      : null,
    sort: (searchParams.get('sort') as SortOptions) || null,
    fromDateTime: searchParams.get('fromDateTime') || null,
    toDateTime: searchParams.get('toDateTime') || null
  }

  const { data: flights, isLoading, error } = useGetFlights(filters)

  if (isLoading)
    return (
      <Icons.loader className='size-12 animate-spin self-center text-center text-primary' />
    )

  if (error) {
    return <div>{error.message}</div>
  }

  return (
    <ScrollShadowWrapper className='no-scrollbar flex h-full flex-col gap-16 overflow-y-scroll'>
      {flights?.map(flight => <Flight key={flight.id} flight={flight} />)}
    </ScrollShadowWrapper>
  )
}

export default Flights
