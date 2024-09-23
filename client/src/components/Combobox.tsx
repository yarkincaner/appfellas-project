import { cn } from '@/lib/utils'
import { Option } from '@/types/options'
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions
} from '@headlessui/react'
import { debounce } from 'lodash'
import { ChangeEvent, FC, ReactNode, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Icons from './Icons'
import { debounceInterval } from '@/config/config'

type Props = {
  className?: string
  icon?: ReactNode
  options?: Option[]
  searchParamName?: string
  isLoading?: boolean
}

const MyCombobox: FC<Props> = ({
  className,
  icon,
  options = [],
  searchParamName = 'q',
  isLoading = false
}) => {
  const [selected, setSelected] = useState<Option | null>(null)
  const [query, setQuery] = useState('')
  const [_, setSearchParams] = useSearchParams()

  const handleQueryChange = debounce((newQuery: string) => {
    if (newQuery.length === 0) {
      deleteQuery()
    } else {
      setSearchParams(params => {
        params.set(searchParamName, newQuery)
        return params
      })
    }
  }, debounceInterval)

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newQuery = event.target.value
    setQuery(newQuery)
    handleQueryChange(newQuery)
  }

  const deleteQuery = () => {
    setSearchParams(params => {
      params.delete(searchParamName)
      return params
    })
  }

  return (
    <Combobox value={selected} onChange={value => setSelected(value)}>
      <div className='relative w-full'>
        <ComboboxInput
          className={cn(
            'w-full rounded-3xl border border-foreground/20 bg-card/25 py-1.5 pl-8 text-sm/6 text-foreground focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-foreground/25',
            className
          )}
          displayValue={(option: Option | null) => option?.label || ''}
          onChange={handleInputChange}
          value={query}
        />
        {/* Icon positioned at the left */}
        <ComboboxButton className='group absolute inset-y-0 left-0 flex items-center px-2.5'>
          {icon}
        </ComboboxButton>

        {isLoading && (
          <div className='absolute inset-y-0 right-0 flex items-center pr-3 text-primary'>
            <Icons.loader className='animate-spin' />
          </div>
        )}
      </div>

      <ComboboxOptions
        anchor='bottom'
        transition
        className={cn(
          'w-[var(--input-width)] rounded-xl bg-white p-1 shadow [--anchor-gap:var(--spacing-1)] [--anchor-max-height:15rem] empty:invisible',
          'transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0'
        )}
      >
        {options &&
          options.map(option => (
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
