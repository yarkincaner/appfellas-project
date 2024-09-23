import RadioGroup from '@/components/RadioGroup'
import { FC, useState } from 'react'

const OPTIONS = [
  {
    value: 'AM',
    label: '5:00 AM - 11:59 AM'
  },
  {
    value: 'PM',
    label: '12:00 PM - 5:59 PM'
  }
]

type Props = {}

const ArrivalTime: FC<Props> = ({}) => {
  const [selectedItem, setSelectedItem] = useState<string>()

  return (
    <label className='flex flex-col gap-4'>
      <p className='font-bold'>Arrival Time</p>
      <RadioGroup
        defaultChecked='AM'
        name='arrivalTime'
        onChange={itemValue => setSelectedItem(itemValue)}
        options={OPTIONS}
      />
    </label>
  )
}

export default ArrivalTime
