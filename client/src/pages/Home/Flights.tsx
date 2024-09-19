import { FC } from 'react'
import Flight from './Flight'

type Props = {}

const Flights: FC<Props> = ({}) => {
  return (
    <div className='flex flex-col gap-16'>
      <Flight />
      <Flight />
    </div>
  )
}

export default Flights
