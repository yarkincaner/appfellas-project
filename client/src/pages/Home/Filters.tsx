import RadioGroup from '@/components/RadioGroup'
import ScrollShadowWrapper from '@/components/ScrollShadowWrapper'
import Select from '@/components/Select'
import { FC, useEffect, useRef, useState } from 'react'

const OPTIONS = [
  {
    value: 'lowest',
    label: 'Lowest price'
  },
  {
    value: 'lowest',
    label: 'Lowest price'
  },
  {
    value: 'lowest',
    label: 'Lowest price'
  },
  {
    value: 'lowest',
    label: 'Lowest price'
  },
  {
    value: 'lowest',
    label: 'Lowest price'
  },
  {
    value: 'lowest',
    label: 'Lowest price'
  },
  {
    value: 'lowest',
    label: 'Lowest price'
  },
  {
    value: 'lowest',
    label: 'Lowest price'
  },
  {
    value: 'lowest',
    label: 'Lowest price'
  },
  {
    value: 'highest',
    label: 'Highest price'
  }
]

type Props = {}

const Filters: FC<Props> = ({}) => {
  const [selectedItem, setSelectedItem] = useState<string>('')
  const [isScrolled, setIsScrolled] = useState(false)
  const [isBottom, setIsBottom] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  const handleScroll = () => {
    const scrollElement = scrollRef.current
    if (scrollElement) {
      const { scrollTop, scrollHeight, clientHeight } = scrollElement

      // Check if the user has scrolled
      setIsScrolled(scrollTop > 0)

      // Check if the user is at the bottom
      setIsBottom(scrollTop + clientHeight >= scrollHeight)
    }
  }

  useEffect(() => {
    const scrollElement = scrollRef.current
    if (scrollElement) {
      scrollElement.addEventListener('scroll', handleScroll)

      // Initial check on mount
      handleScroll()

      return () => {
        scrollElement.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])

  return (
    <ScrollShadowWrapper className='no-scrollbar gap-4 px-4'>
      <label className='flex flex-col gap-2'>
        <p className='font-bold'>Sort by:</p>
        <Select options={OPTIONS} />
      </label>
      <label className='flex flex-col gap-1'>
        <p className='font-bold'>Arrival Time</p>
        <RadioGroup
          defaultChecked='lowest'
          name='arrivalTime'
          onChange={itemValue => setSelectedItem(itemValue)}
          options={OPTIONS}
        />
      </label>
      <label className='flex flex-col gap-1'>
        <p className='font-bold'>Stops</p>
        <RadioGroup
          defaultChecked='lowest'
          name='arrivalTime'
          onChange={itemValue => setSelectedItem(itemValue)}
          options={OPTIONS}
        />
      </label>
      <label className='flex flex-col gap-1'>
        <p className='font-bold'>Airlines Included</p>
        <RadioGroup
          defaultChecked='lowest'
          name='arrivalTime'
          onChange={itemValue => setSelectedItem(itemValue)}
          options={OPTIONS}
        />
      </label>
    </ScrollShadowWrapper>
  )
}

export default Filters
