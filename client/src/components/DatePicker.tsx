import { cn } from '@/lib/utils'
import { FC, useRef } from 'react'
import Icons from './Icons'

type Props = {
  className?: string
}

const DatePicker: FC<Props> = ({ className }) => {
  const datePickerRef = useRef<any>()
  const handleDatePicker = () => {
    datePickerRef.current.showPicker()
    datePickerRef.current.focus()
  }
  return (
    <span
      className={cn(
        'box-border flex w-full items-center space-x-2 rounded-3xl border border-foreground/20 bg-card/25 px-2',
        className
      )}
      onClick={handleDatePicker}
    >
      <Icons.calendar className='size-4 stroke-primary' />
      <input
        type='date'
        ref={datePickerRef}
        className='h-full w-full bg-transparent focus:outline-none'
      />
    </span>
  )
}

export default DatePicker
