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

const people = [
  { id: 1, name: 'Durward Reynolds' },
  { id: 2, name: 'Kenton Towne' },
  { id: 3, name: 'Therese Wunsch' },
  { id: 4, name: 'Benedict Kessler' },
  { id: 5, name: 'Katelyn Rohan' }
]

type Props = {
  className?: string
  icon?: ReactNode
}

const MyCombobox: FC<Props> = ({ className, icon }) => {
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState(people[1])

  const filteredPeople =
    query === ''
      ? people
      : people.filter(person => {
          return person.name.toLowerCase().includes(query.toLowerCase())
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
          'w-[var(--input-width)] rounded-xl bg-white p-1 shadow [--anchor-gap:var(--spacing-1)] empty:invisible',
          'transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0'
        )}
      >
        {filteredPeople.map(person => (
          <ComboboxOption
            key={person.id}
            value={person}
            className='group flex cursor-default select-none items-center gap-2 rounded-xl px-3 py-1.5 data-[focus]:bg-secondary data-[focus]:text-primary'
          >
            <Icons.check className='invisible size-4 fill-white group-data-[selected]:visible' />
            <div className='text-sm/6'>{person.name}</div>
          </ComboboxOption>
        ))}
      </ComboboxOptions>
    </Combobox>
  )
}

export default MyCombobox
