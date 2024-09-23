import { Button } from '@/components/Button'
import DatePicker from '@/components/DatePicker'
import Icons from '@/components/Icons'
import Input from '@/components/Input'
import { OneWayRequest, OneWayValidator } from '@/lib/validators/one-way'
import { zodResolver } from '@hookform/resolvers/zod'
import { FC } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useSearchParams } from 'react-router-dom'

type Props = {}

const OneWay: FC<Props> = ({}) => {
  const [_, setSearchParams] = useSearchParams()

  const methods = useForm<OneWayRequest>({
    resolver: zodResolver(OneWayValidator),
    defaultValues: {
      from: '',
      route: '',
      scheduleDate: new Date().toISOString()
    }
  })

  const {
    handleSubmit,
    setValue,
    formState: { errors }
  } = methods

  const onSubmit = async (data: OneWayRequest) => {
    console.log('Form Submitted:', data)
    setSearchParams(params => {
      params.set('scheduleDate', data.scheduleDate!)
      params.set('route', data.route!)
      return params
    })
  }

  return (
    // Wrap the form with FormProvider
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='grid grid-cols-1 grid-rows-2 gap-4 lg:grid-cols-2 lg:grid-rows-1'>
          <div className='flex flex-col items-center gap-2 sm:flex-row'>
            <div className='flex w-full flex-col'>
              {/* Input components must be children of FormProvider */}
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
                  <Icons.planeTakeoff className='left-0 ml-4 size-4 stroke-primary' />
                }
                name='route'
              />
              {errors.route && (
                <span className='text-red-500'>{errors.route?.message}</span>
              )}
            </div>
          </div>
          <div className='flex flex-col gap-2 sm:flex-row'>
            <div className='flex w-full flex-col'>
              <DatePicker
                onChange={val => setValue('scheduleDate', val)}
                className='py-2 sm:py-0'
              />
              {errors.scheduleDate && (
                <span className='text-red-500'>
                  {errors.scheduleDate?.message}
                </span>
              )}
            </div>
          </div>
        </div>
        <Button className='mt-6 w-full sm:w-fit' type='submit'>
          Show flights
        </Button>
      </form>
    </FormProvider>
  )
}

export default OneWay
