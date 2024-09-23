import Icons from '@/components/Icons'
import RadioGroup from '@/components/RadioGroup'
import { useGetAirlines } from '@/lib/queries'
import { Option } from '@/types/options'
import { FC, useState } from 'react'

type Props = {}

const Airlines: FC<Props> = ({}) => {
  const { data: airlines, isLoading, error } = useGetAirlines()
  const [selectedItem, setSelectedItem] = useState<string>()

  if (isLoading)
    return <Icons.loader className='size-4 animate-spin text-primary' />
  if (error) return <div>{error.message}</div>

  const mappedAirlines: Option[] = airlines!.map(airline => {
    return {
      value: airline.iata!,
      label: airline.publicName!
    }
  })

  return (
    <label className='flex flex-col gap-1'>
      <p className='font-bold'>Airlines Included</p>
      <RadioGroup
        defaultChecked={mappedAirlines[0].value}
        name='airlinesIncluded'
        onChange={itemValue => setSelectedItem(itemValue)}
        options={mappedAirlines}
      />
    </label>
  )
}

export default Airlines
