import { Button } from '@/components/Button'
import Dropdown from '@/components/Dropdown'
import Rating from '@/components/Rating'
import { FC } from 'react'

type Props = {}

const Header: FC<Props> = ({}) => {
  return (
    <div className='inset-x-0 top-0 grid grid-cols-1 grid-rows-2 justify-between gap-2 rounded-t-2xl bg-card-secondary p-6 shadow lg:grid-cols-2 lg:gap-0'>
      <div className='flex gap-4 justify-self-center lg:justify-self-start'>
        <Button variant={'outline'}>Times</Button>
        <Button variant={'outline'}>Stops</Button>
        <Button variant={'outline'}>Airlines</Button>
        <Button variant={'outline'}>Airports</Button>
        <Button variant={'outline'}>Amenities</Button>
        <Dropdown buttonLabel='Edit Search' />
      </div>
      <div className='flex justify-self-center lg:justify-self-end'>
        <Rating />
      </div>
    </div>
  )
}

export default Header
