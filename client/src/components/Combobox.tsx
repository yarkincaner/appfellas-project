import { cn } from '@/lib/utils'
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions
} from '@headlessui/react'
import { FC, ReactNode, useState } from 'react'
import Icons from './Icons'
import { Option } from '@/types/options'

type Props = {
  className?: string
  icon?: ReactNode
  options?: Option[]
}

const MyCombobox: FC<Props> = ({ className, icon, options = [] }) => {
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState(options[0].value)

  const filteredOptions =
    query === ''
      ? options
      : options.filter(option => {
          return option.label.toLowerCase().includes(query.toLowerCase())
        })

  return (
    <Combobox
      value={selected}
      onChange={value => setSelected(value!)}
      onClose={() => setQuery('')}
    >
      <div className='relative w-full'>
        <ComboboxInput
          className={cn(
            'w-full rounded-3xl border border-foreground/20 bg-card/25 py-1.5 pl-8 text-sm/6 text-foreground focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-foreground/25',
            className
          )}
          displayValue={(person: any) => person?.name}
          onChange={event => setQuery(event.target.value)}
        />
        {/* Icon positioned at the left */}
        <ComboboxButton className='group absolute inset-y-0 left-0 flex items-center px-2.5'>
          {icon}
        </ComboboxButton>
      </div>

      <ComboboxOptions
        anchor='bottom'
        transition
        className={cn(
          'w-[var(--input-width)] rounded-xl bg-white p-1 shadow [--anchor-gap:var(--spacing-1)] [--anchor-max-height:15rem] empty:invisible',
          'transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0'
        )}
      >
        {filteredOptions.map(option => (
          <ComboboxOption
            key={option.value}
            value={option.value}
            className='group flex cursor-default select-none items-center gap-2 rounded-xl px-3 py-1.5 data-[focus]:bg-secondary data-[focus]:text-primary'
          >
            <Icons.check className='invisible size-4 fill-white group-data-[selected]:visible' />
            <div className='text-sm/6'>{option.label}</div>
          </ComboboxOption>
        ))}
      </ComboboxOptions>
    </Combobox>
  )
}

export default MyCombobox
