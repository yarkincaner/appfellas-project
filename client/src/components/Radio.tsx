import { cn } from '@/lib/utils'
import cx from 'clsx'

export interface RadioProps {
  disabled?: boolean
  defaultChecked?: boolean
  id: string
  label: string
  name?: string
  onChange?: (event: React.FormEvent<HTMLInputElement>) => void
  value?: string
}

const Radio = ({
  defaultChecked,
  disabled,
  id,
  label,
  name,
  onChange,
  value
}: RadioProps) => (
  <div className='flex items-center gap-2'>
    <div className='mt-1 grid place-items-center'>
      <input
        type='radio'
        id={id}
        name={name}
        defaultChecked={defaultChecked}
        disabled={disabled}
        className='peer col-start-1 row-start-1 size-3 shrink-0 appearance-none rounded-full border-2 border-primary checked:bg-primary focus:outline-none focus:ring-0 disabled:border-foreground/50 disabled:bg-transparent'
        onChange={onChange}
        value={value}
      />
      <div
        className={cx(
          'pointer-events-none',
          'col-start-1 row-start-1',
          'size-2 rounded-full peer-checked:bg-primary',
          'peer-checked:peer-disabled:bg-foreground/50'
        )}
      />
    </div>
    <label
      htmlFor={id}
      className={cn('text-start hover:cursor-pointer', {
        'text-foreground/50': disabled
      })}
    >
      {label}
    </label>
  </div>
)

export default Radio
