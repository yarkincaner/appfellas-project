import { Button } from '@/components/Button'
import Dropdown from '@/components/Dropdown'
import Rating from '@/components/Rating'
import { FC } from 'react'

type Props = {}

const Header: FC<Props> = ({}) => {
  return (
    <div className='inset-x-0 top-0 grid grid-cols-2 justify-between rounded-t-2xl bg-card-secondary p-6 shadow'>
      <div className='flex gap-4 justify-self-start'>
        <Button variant={'outline'}>Times</Button>
        <Button variant={'outline'}>Stops</Button>
        <Button variant={'outline'}>Airlines</Button>
        <Button variant={'outline'}>Airports</Button>
        <Button variant={'outline'}>Amenities</Button>
        <Dropdown buttonLabel='Edit Search' />
      </div>
      <div className='flex justify-self-end'>
        <Rating />
      </div>
    </div>
  )
}

export default Header
