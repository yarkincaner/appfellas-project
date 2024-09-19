import Select from '@/components/Select'
import { FC } from 'react'

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
  return (
    <div className='px-4'>
      <label className='flex flex-col gap-2 font-bold'>
        Sort by:
        <Select options={OPTIONS} />
      </label>
    </div>
  )
}

export default Filters
