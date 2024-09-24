import Card from '@/components/Card'
import Dropdown from '@/components/Dropdown'
import Icons from '@/components/Icons'
import { useGetBookedFlights } from '@/lib/queries'
import { formatDateTime } from '@/lib/utils'
import { FlightType } from '@/types/flight'
import { FC } from 'react'

const PriceCard: FC<{
  price?: number
  type?: string
  variant?: 'default' | 'empty'
}> = ({ price, type, variant = 'default' }) => {
  if (variant === 'empty') {
    return (
      <div className='flex size-full items-center justify-center rounded-lg bg-foreground/5 text-center'>
        <p className='text-foreground/20'>- - -</p>
      </div>
    )
  }

  return (
    <Card className='flex flex-col items-center justify-center text-nowrap rounded-lg shadow'>
      <p className='font-bold'>${price}</p>
      <p>{type}</p>
    </Card>
  )
}

const Flight: FC<{ flight: FlightType }> = ({ flight }) => {
  let prices = []
  for (let i = 0; i < 5; i++) {
    if (i === 2 || i === 4) {
      prices.push(<PriceCard variant='empty' />)
    } else {
      prices.push(<PriceCard price={104} type='Delta One' />)
    }
  }

  return (
    <Card className='grid grid-cols-12 justify-start gap-4 rounded-md bg-card-secondary shadow'>
      <div className='size-12 justify-self-center overflow-hidden rounded-full border border-foreground/10'>
        <Icons.flightTicket className='size-full stroke-primary p-2' />
      </div>
      <div className='col-span-6 flex flex-col'>
        <div className='flex text-lg'>
          {formatDateTime(flight.scheduleDateTime)} -{' '}
          {formatDateTime(flight.estimatedLandingTime)}
        </div>
        <div className='grid grid-cols-3 justify-between'>
          <div className='flex flex-col'>
            <p className='font-semibold'>{flight.airlineCode}</p>
            <Dropdown buttonLabel='Flight Details' className='w-fit p-0' />
          </div>
          <div className='flex flex-col'>
            <p className='font-semibold'>Nonstop</p>
            <p>1h 32m</p>
          </div>
          <div className='flex flex-col'>
            <p className='font-semibold'>
              {flight.prefixIATA} to {flight.route.destinations[0]}
            </p>
            <span>
              {flight.prefixIATA} {flight.flightNumber}
            </span>
          </div>
        </div>
      </div>
      <div className='col-span-5 grid grid-cols-5 gap-2'>{prices}</div>
    </Card>
  )
}

type Props = {}

const FlightList: FC<Props> = ({}) => {
  const { data: flights, isLoading, error } = useGetBookedFlights()

  if (isLoading)
    return <Icons.loader className='size-12 animate-spin text-primary' />
  if (error) return <>{error.message}</>

  return (
    <div className='flex flex-col gap-4'>
      {flights?.map(flight => <Flight flight={flight} />)}
    </div>
  )
}

export default FlightList
