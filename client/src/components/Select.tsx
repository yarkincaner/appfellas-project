import { FC, useState } from 'react'
import Icons from './Icons'

type Props = {
  options: {
    value: any
    label: string
  }[]
}

const Select: FC<Props> = ({ options }) => {
  const [selected, setSelected] = useState<any>(options[0].value)

  return (
    <div className='relative inline-block w-full'>
      <select
        className='block w-full appearance-none rounded-lg border-0 py-1.5 pl-3 pr-10 font-normal focus:outline-primary/50'
        value={selected}
        onChange={e => setSelected(e.target.value)}
      >
        {options.map(option => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
      <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3'>
        <Icons.chevronDown className='size-5 fill-primary' />
      </div>
    </div>
  )
}

export default Select
