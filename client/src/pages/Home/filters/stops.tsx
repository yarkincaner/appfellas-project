import RadioGroup from '@/components/RadioGroup'
import { FC, useState } from 'react'

const OPTIONS = [
  {
    value: 'nonstop',
    label: 'Nonstop'
  },
  {
    value: 'onestop',
    label: '1 Stop'
  },
  {
    value: 'twoPlusStops',
    label: '2+ Stops'
  }
]

type Props = {}

const Stops: FC<Props> = ({}) => {
  const [selectedItem, setSelectedItem] = useState<string>()

  return (
    <label className='flex flex-col gap-4'>
      <p className='font-bold'>Stops</p>
      <RadioGroup
        defaultChecked='nonstop'
        name='stops'
        onChange={itemValue => setSelectedItem(itemValue)}
        options={OPTIONS}
      />
    </label>
  )
}

export default Stops
