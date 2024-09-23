import RadioGroup from '@/components/RadioGroup'
import ScrollShadowWrapper from '@/components/ScrollShadowWrapper'
import Select from '@/components/Select'
import { useGetDestinations } from '@/lib/queries'
import { FC, useState } from 'react'
import Airlines from './airlines'

const OPTIONS = {
  sortBy: [
    {
      value: 'lowest',
      label: 'Lowest Price'
    },
    {
      value: 'highest',
      label: 'Highest Price'
    }
  ],
  arrivalTime: [
    {
      value: 'AM',
      label: '5:00 AM - 11:59 AM'
    },
    {
      value: 'PM',
      label: '12:00 PM - 5:59 PM'
    }
  ],
  stops: [
    {
      value: 'nonstop',
      label: 'Nonstop'
    },
    {
      value: 'onestop',
      label: '1 Stop'
    },
    {
      value: 'twoPlusStops',
      label: '2+ Stops'
    }
  ],
  airlinesIncluded: [
    {
      value: 'alitalia',
      label: 'Alitalia'
    },
    {
      value: 'lufthansa',
      label: 'Lufthansa'
    },
    {
      value: 'airFrance',
      label: 'Air France'
    },
    {
      value: 'brusselsAirlines',
      label: 'Brussels Airlines'
    },
    {
      value: 'siberia',
      label: 'Siberia'
    }
  ]
}

type Props = {}

const Filters: FC<Props> = ({}) => {
  const [selectedItem, setSelectedItem] = useState<string>('')

  return (
    <ScrollShadowWrapper className='no-scrollbar gap-4 px-4'>
      <label className='flex flex-col gap-2'>
        <p className='font-bold'>Sort by:</p>
        <Select options={OPTIONS.sortBy} />
      </label>
      <label className='flex flex-col gap-1'>
        <p className='font-bold'>Arrival Time</p>
        <RadioGroup
          defaultChecked='AM'
          name='arrivalTime'
          onChange={itemValue => setSelectedItem(itemValue)}
          options={OPTIONS.arrivalTime}
        />
      </label>
      <label className='flex flex-col gap-1'>
        <p className='font-bold'>Stops</p>
        <RadioGroup
          defaultChecked='nonstop'
          name='arrivalTime'
          onChange={itemValue => setSelectedItem(itemValue)}
          options={OPTIONS.stops}
        />
      </label>
      <Airlines />
    </ScrollShadowWrapper>
  )
}

export default Filters
