import RadioGroup from '@/components/RadioGroup'
import Select from '@/components/Select'
import { FC, useState } from 'react'

const OPTIONS = [
  {
    value: 'lowest',
    label: 'Lowest price'
  },
  {
    value: 'highest',
    label: 'Highest price'
  }
]

type Props = {}

const Filters: FC<Props> = ({}) => {
  const [selectedItem, setSelectedItem] = useState<string>('')

  return (
    <div className='flex flex-col gap-4 px-4'>
      <label className='flex flex-col gap-2 font-bold'>
        Sort by:
        <Select options={OPTIONS} />
      </label>
      <label className='flex flex-col gap-1'>
        <p className='font-bold'>Arrival Time</p>
        <RadioGroup
          defaultChecked='lowest'
          name='arrivalTime'
          onChange={itemValue => setSelectedItem(itemValue)}
          options={OPTIONS}
        />
      </label>
    </div>
  )
}

export default Filters
