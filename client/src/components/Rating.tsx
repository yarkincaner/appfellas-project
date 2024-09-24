import { FC } from 'react'
import Icons from './Icons'
import { cn } from '@/lib/utils'

const Star = ({ filled }: { filled: boolean }) => {
  return (
    <Icons.star
      className={cn(
        'size-4 fill-foreground/10 stroke-transparent',
        filled && 'fill-foreground'
      )}
    />
  )
}

const StarColumn = ({ filledCount }: { filledCount: number }) => {
  const totalStars = 6
  const stars = []

  for (let i = 1; i <= totalStars; i++) {
    stars.push(<Star key={i} filled={i <= filledCount} />)
  }

  return (
    <div className={'flex flex-col items-center justify-center gap-1 px-4'}>
      <div className='flex justify-center'>{stars.slice(0, 3)}</div>
      <div className='flex justify-center'>{stars.slice(3, 6)}</div>
    </div>
  )
}

type Props = {}

const Rating: FC<Props> = ({}) => {
  const starData = [2, 3, 4, 5, 6]

  return (
    <div className='grid grid-cols-5 items-center justify-center divide-x-2 divide-card'>
      {starData.map((filledCount, index) => (
        <StarColumn key={index} filledCount={filledCount} />
      ))}
    </div>
  )
}

export default Rating
