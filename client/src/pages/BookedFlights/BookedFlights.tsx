import Dropdown from '@/components/Dropdown'
import Icons from '@/components/Icons'
import { FC } from 'react'
import FlightList from './FlightList'
import Header from './Header'

type Props = {}

const BookedFlights: FC<Props> = ({}) => {
  return (
    <>
      <Header />
      <div className='flex flex-col gap-4 p-6'>
        <div className='grid grid-cols-2 justify-between'>
          <span className='flex items-center gap-1 justify-self-start'>
            <p>Sort by:</p>
            <Dropdown buttonLabel='Recommended' variant='ghost' />
          </span>
          <span className='flex items-center gap-1 justify-self-end'>
            <Icons.info className='size-4 text-primary' />
            <p>Avg Fare: $225</p>
          </span>
        </div>
        <FlightList />
      </div>
    </>
  )
}

export default BookedFlights
