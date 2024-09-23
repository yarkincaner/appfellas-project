import Icons from '@/components/Icons'
import RadioGroup from '@/components/RadioGroup'
import { useGetAirlines } from '@/lib/queries'
import { Option } from '@/types/options'
import { FC, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

type Props = {}

const Airlines: FC<Props> = ({}) => {
  const [_, setSearchParams] = useSearchParams()
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
    <label className='flex flex-col gap-4'>
      <p className='font-bold'>Airlines Included</p>
      <RadioGroup
        defaultChecked={mappedAirlines[0].value}
        name='airlinesIncluded'
        onChange={itemValue => {
          setSelectedItem(itemValue)
          setSearchParams(params => {
            params.set('airline', itemValue)
            return params
          })
        }}
        options={mappedAirlines}
      />
    </label>
  )
}

export default Airlines
