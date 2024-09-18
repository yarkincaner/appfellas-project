import Card from '@/components/Card'
import MyCombobox from '@/components/Combobox'
import DatePicker from '@/components/DatePicker'
import Icons from '@/components/Icons'
import { FC } from 'react'

type Props = {}

const BookYourFlight: FC<Props> = ({}) => {
  return (
    <Card className='space-y-4'>
      <div className='grid grid-cols-2 items-center justify-between'>
        <span className='flex items-center space-x-1 justify-self-start'>
          <Icons.logo className='size-5 rotate-45 fill-card-foreground' />
          <p className='font-semibold'>BOOK YOUR FLIGHT</p>
        </span>
        <span className='justify-self-end'>asdf</span>
      </div>
      <div className='grid grid-cols-2 space-x-4'>
        <div className='flex space-x-2'>
          <MyCombobox
            className='rounded-r-none'
            icon={<Icons.planeTakeoff className='size-4 stroke-primary' />}
          />
          <MyCombobox
            className='rounded-l-none'
            icon={<Icons.planeLanding className='size-4 stroke-primary' />}
          />
        </div>
        <div className='flex space-x-2'>
          <DatePicker className='rounded-r-none' />
          <DatePicker className='rounded-l-none' />
        </div>
      </div>
    </Card>
  )
}

export default BookYourFlight
