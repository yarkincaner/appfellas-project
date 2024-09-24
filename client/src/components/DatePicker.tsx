import { cn } from '@/lib/utils'
import { ChangeEvent, FC, useRef } from 'react'
import Icons from './Icons'

type Props = {
  className?: string
  name?: string
  value?: string
  onChange?: (value: string) => void
}

const DatePicker: FC<Props> = ({ className, name, value, onChange }) => {
  const datePickerRef = useRef<any>()

  const handleDatePicker = () => {
    datePickerRef.current.showPicker()
    datePickerRef.current.focus()
  }

  const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedDate = e.target.value
    if (onChange) {
      onChange(selectedDate)
    }
  }

  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split('T')[0]

  return (
    <span
      className={cn(
        'box-border flex h-full w-full cursor-pointer items-center space-x-2 rounded-3xl border-2 border-foreground/20 bg-transparent px-2',
        className
      )}
      onClick={handleDatePicker}
    >
      <Icons.calendar className='size-4 stroke-primary' />
      <input
        name={name}
        type='date'
        ref={datePickerRef}
        value={value}
        onChange={handleDateChange}
        className='h-full w-full bg-transparent focus:outline-none'
        min={today}
      />
    </span>
  )
}

export default DatePicker
