import Select from '@/components/Select'
import { FC } from 'react'

const OPTIONS = [
  {
    value: 'lowest',
    label: 'Lowest Price'
  },
  {
    value: 'highest',
    label: 'Highest Price'
  }
]

type Props = {}

const SortBy: FC<Props> = ({}) => {
  return (
    <label className='flex flex-col gap-4'>
      <p className='font-bold'>Sort by:</p>
      <Select options={OPTIONS} />
    </label>
  )
}

export default SortBy
