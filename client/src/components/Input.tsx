import { cn } from '@/lib/utils'
import { FC, HTMLInputTypeAttribute, ReactNode, useState } from 'react'
import { useFormContext } from 'react-hook-form'

type Props = {
  className?: string
  placeholder?: string
  icon?: ReactNode
  name: string
  type?: HTMLInputTypeAttribute
}

const Input: FC<Props> = ({
  className,
  placeholder = '',
  icon,
  name,
  type = 'text'
}) => {
  const { register } = useFormContext() // Use form context to get register

  return (
    <div className='flex w-full items-center'>
      <div className='absolute'>{icon}</div>
      <input
        type={type}
        {...register(name)} // Register input with form
        className={cn(
          'w-full rounded-3xl border border-foreground/20 bg-card/25 py-1.5 pl-10 text-sm/6 text-foreground focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-foreground/25',
          className
        )}
        placeholder={placeholder}
      />
    </div>
  )
}

export default Input
