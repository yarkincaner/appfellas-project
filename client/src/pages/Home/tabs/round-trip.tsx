import { Button } from '@/components/Button'
import DatePicker from '@/components/DatePicker'
import Icons from '@/components/Icons'
import Input from '@/components/Input'
import {
  RoundTripRequest,
  RoundTripValidator
} from '@/lib/validators/round-trip'
import { zodResolver } from '@hookform/resolvers/zod'
import { FC } from 'react'
import { FormProvider, useForm } from 'react-hook-form'

type Props = {}

const RoundTrip: FC<Props> = ({}) => {
  const methods = useForm<RoundTripRequest>({
    resolver: zodResolver(RoundTripValidator),
    defaultValues: {
      from: '',
      to: '',
      departureDate: new Date().toISOString()
    }
  })

  const {
    handleSubmit,
    setValue,
    formState: { errors }
  } = methods

  // Form submit handler
  const onSubmit = (data: RoundTripRequest) => {
    console.log('Form Submitted:', data)
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='grid grid-cols-1 grid-rows-2 gap-4 lg:grid-cols-2 lg:grid-rows-1'>
          <div className='flex flex-col items-center gap-2 sm:flex-row'>
            <div className='flex w-full flex-col'>
              <Input
                className='sm:rounded-r-none'
                placeholder='from ...'
                icon={
                  <Icons.planeTakeoff className='left-0 ml-4 size-4 stroke-primary' />
                }
                name='from'
              />
              {errors.from && (
                <span className='text-red-500'>{errors.from?.message}</span>
              )}
            </div>
            <div className='flex w-full flex-col'>
              <Input
                className='sm:rounded-l-none'
                placeholder='to ...'
                icon={
                  <Icons.planeLanding className='left-0 ml-4 size-4 stroke-primary' />
                }
                name='to'
              />

              {errors.to && (
                <span className='text-red-500'>{errors.to?.message}</span>
              )}
            </div>
          </div>
          <div className='flex flex-col gap-2 sm:flex-row'>
            <div className='flex w-full flex-col'>
              <DatePicker
                onChange={val => setValue('departureDate', val)} // Set departure date
                className='py-2 sm:rounded-r-none sm:py-0'
              />

              {errors.departureDate && (
                <span className='text-red-500'>
                  {errors.departureDate?.message}
                </span>
              )}
            </div>
            <div className='flex w-full flex-col'>
              <DatePicker
                onChange={val => setValue('returnDate', val)} // Set departure date
                className='py-2 sm:rounded-l-none sm:py-0'
              />

              {errors.returnDate && (
                <span className='text-red-500'>
                  {errors.returnDate?.message}
                </span>
              )}
            </div>
          </div>
        </div>
        <Button className='mt-6 w-full sm:w-fit'>Show flights</Button>
      </form>
    </FormProvider>
  )
}

export default RoundTrip
