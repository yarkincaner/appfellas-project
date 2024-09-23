import ScrollShadowWrapper from '@/components/ScrollShadowWrapper'
import { FC } from 'react'
import Flight from './Flight'
import { useGetFlights } from '@/lib/queries'
import Icons from '@/components/Icons'

type Props = {}

const Flights: FC<Props> = ({}) => {
  const { data: flights, isLoading, error } = useGetFlights()

  if (isLoading)
    return (
      <Icons.loader className='size-12 self-center text-center text-primary' />
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
