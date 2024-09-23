import ScrollShadowWrapper from '@/components/ScrollShadowWrapper'
import { FC, useState } from 'react'
import Airlines from './airlines'
import ArrivalTime from './arrival-time'
import SortBy from './sort-by'
import Stops from './stops'

type Props = {}

const Filters: FC<Props> = ({}) => {
  const [selectedItem, setSelectedItem] = useState<string>('')

  return (
    <ScrollShadowWrapper className='no-scrollbar gap-4 px-4'>
      <SortBy />
      <ArrivalTime />
      <Stops />
      <Airlines />
    </ScrollShadowWrapper>
  )
}

export default Filters
