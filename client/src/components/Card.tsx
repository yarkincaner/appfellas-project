import { cn } from '@/lib/utils'
import { FC, ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
}

const Card: FC<Props> = ({ children, className }) => {
  return (
    <div
      className={cn(
        'rounded-2xl bg-card-secondary p-4 text-card-foreground lg:p-6',
        className
      )}
    >
      {children}
    </div>
  )
}

export default Card
