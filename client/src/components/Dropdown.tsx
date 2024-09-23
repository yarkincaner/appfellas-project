import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { FC } from 'react'
import Icons from './Icons'
import { cn } from '@/lib/utils'

type Props = {
  buttonLabel: string
  variant?: 'default' | 'ghost'
  className?: string
}

const Dropdown: FC<Props> = ({
  buttonLabel,
  variant = 'default',
  className
}) => {
  return (
    <Menu>
      <MenuButton
        className={cn(
          'inline-flex items-center gap-2 rounded-md bg-transparent px-3 py-1.5 text-sm/6 font-semibold text-primary focus:outline-none data-[hover]:bg-foreground/10 data-[open]:bg-foreground/5 data-[focus]:outline-1 data-[focus]:outline-primary',
          variant === 'ghost' &&
            'px-0 text-base font-semibold text-foreground data-[hover]:bg-transparent data-[hover]:underline',
          className
        )}
      >
        {buttonLabel}
        <Icons.chevronDown className='size-4' />
      </MenuButton>

      <MenuItems
        transition
        anchor='bottom end'
        className='w-52 origin-top-right rounded-xl border border-foreground/5 bg-card-secondary p-1 text-sm/6 text-foreground transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0'
      >
        <MenuItem>
          <button className='group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-[focus]:bg-primary/10'>
            Edit
          </button>
        </MenuItem>
        <MenuItem>
          <button className='group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-[focus]:bg-primary/10'>
            Duplicate
          </button>
        </MenuItem>
        <div className='my-1 h-px bg-white/5' />
        <MenuItem>
          <button className='group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-[focus]:bg-primary/10'>
            Archive
          </button>
        </MenuItem>
        <MenuItem>
          <button className='group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-[focus]:bg-primary/10'>
            Delete
          </button>
        </MenuItem>
      </MenuItems>
    </Menu>
  )
}

export default Dropdown
