import { Button } from '@/components/Button'
import Card from '@/components/Card'
import Icons from '@/components/Icons'
import { useBookFlight } from '@/lib/mutations'
import { formatDateTime } from '@/lib/utils'
import { FlightType } from '@/types/flight'
import { FC } from 'react'

type Props = {
  flight: FlightType
}

const Flight: FC<Props> = ({ flight }) => {
  const { mutate: bookAFlight, isPending } = useBookFlight()

  let takeOffCity: string
  const landingCity =
    flight.route.destinations[flight.route.destinations.length - 1]

  if (flight.route.destinations.length === 1) {
    takeOffCity = 'AMS'
  } else {
    takeOffCity = flight.route.destinations[0]
  }

  return (
    <>
      <Card className='relative space-y-6 rounded-bl-none'>
        <h3 className='font-bold'>
          {takeOffCity} - {landingCity}
        </h3>
        <div className='grid grid-cols-10 items-center justify-center space-x-4'>
          <div className='col-span-2 flex flex-col justify-self-start'>
            <span className='flex items-center gap-1 text-card-foreground'>
              <Icons.planeTakeoff className='size-4' />
              <p className='text-sm'>Departure</p>
            </span>
            <p className='font-bold'>
              {formatDateTime(flight.scheduleDateTime)}
            </p>
            <span className='flex items-center space-x-1'>
              <p>Airport:</p>
              <p>{takeOffCity}</p>
            </span>
          </div>
          <div className='col-span-2 h-px w-1/2 justify-self-center bg-foreground' />
          <div className='col-span-2 flex flex-col items-center justify-center justify-self-center'>
            <img
              src='/alitalia-logo.png'
              alt='alitalia logo'
              className='w-12'
            />
            <Icons.logo className='size-4 rotate-45 fill-primary' />
            <p className='text-nowrap text-sm text-foreground/50'>
              2h 25m (Nonstop)
            </p>
          </div>
          <div className='col-span-2 h-px w-1/2 justify-self-center bg-foreground' />
          <div className='col-span-2 flex flex-col justify-self-end'>
            <span className='flex items-center gap-1 text-card-foreground'>
              <Icons.planeLanding className='size-4' />
              <p className='text-sm'>Arrival</p>
            </span>
            <p className='font-bold'>
              {formatDateTime(flight.estimatedLandingTime)}
            </p>
            <span className='flex items-center space-x-1'>
              <p>Airport:</p>
              <p>{landingCity}</p>
            </span>
          </div>
        </div>
        <div className='flex justify-between'>
          <div className='flex flex-col gap-1'>
            <p className='text-lg font-bold text-primary'>Price: $200</p>
            <p className='text-sm'>Round Trip</p>
          </div>
          <div className='absolute bottom-0 right-0'>
            <Button
              className='rounded-bl-none rounded-tr-none px-10 py-9'
              onClick={e => {
                e.preventDefault()
                bookAFlight(flight)
              }}
              isLoading={isPending}
            >
              Book Flight
            </Button>
          </div>
        </div>
        <div className='absolute -bottom-12 left-0'>
          <Button
            variant={'secondary'}
            className='w-fit rounded-t-none py-6 underline'
          >
            Check the details
          </Button>
        </div>
      </Card>
    </>
  )
}

export default Flight
