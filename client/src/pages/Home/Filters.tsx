import RadioGroup from '@/components/RadioGroup'
import ScrollShadowWrapper from '@/components/ScrollShadowWrapper'
import Select from '@/components/Select'
import { FC, useState } from 'react'

const OPTIONS = [
  {
    value: 'lowest',
    label: 'Lowest price'
  },
  {
    value: 'lowest',
    label: 'Lowest price'
  },
  {
    value: 'lowest',
    label: 'Lowest price'
  },
  {
    value: 'lowest',
    label: 'Lowest price'
  },
  {
    value: 'lowest',
    label: 'Lowest price'
  },
  {
    value: 'lowest',
    label: 'Lowest price'
  },
  {
    value: 'lowest',
    label: 'Lowest price'
  },
  {
    value: 'lowest',
    label: 'Lowest price'
  },
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
    <ScrollShadowWrapper className='no-scrollbar gap-4 px-4'>
      <label className='flex flex-col gap-2'>
        <p className='font-bold'>Sort by:</p>
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
      <label className='flex flex-col gap-1'>
        <p className='font-bold'>Stops</p>
        <RadioGroup
          defaultChecked='lowest'
          name='arrivalTime'
          onChange={itemValue => setSelectedItem(itemValue)}
          options={OPTIONS}
        />
      </label>
      <label className='flex flex-col gap-1'>
        <p className='font-bold'>Airlines Included</p>
        <RadioGroup
          defaultChecked='lowest'
          name='arrivalTime'
          onChange={itemValue => setSelectedItem(itemValue)}
          options={OPTIONS}
        />
      </label>
    </ScrollShadowWrapper>
  )
}

export default Filters
