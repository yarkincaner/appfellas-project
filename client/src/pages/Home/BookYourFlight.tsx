import { Button } from '@/components/Button'
import Card from '@/components/Card'
import MyCombobox from '@/components/Combobox'
import DatePicker from '@/components/DatePicker'
import Icons from '@/components/Icons'
import { useGetAllDestinations } from '@/lib/queries'
import { Option } from '@/types/options'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import { FC, Fragment } from 'react'

type Props = {}

const BookYourFlight: FC<Props> = ({}) => {
  const { data: destinations, isLoading } = useGetAllDestinations()
  let mappedDestinations: Option[]

  if (isLoading) return <div>Loading...</div>

  mappedDestinations = destinations!.map(destination => ({
    label: destination.publicName?.english || 'Unknown',
    value: destination.iata || ''
  }))

  return (
    <Card className='space-y-5'>
      <TabGroup>
        <TabList
          className={
            'flex w-full flex-col gap-[0.2rem] sm:flex-row sm:justify-between'
          }
        >
          <span className='flex items-center space-x-2'>
            <Icons.logo className='size-4 rotate-45 fill-card-foreground' />
            <p className='font-semibold'>BOOK YOUR FLIGHT</p>
          </span>
          <span className=''>
            <Tab as={Fragment}>
              {({ selected }) => (
                <Button
                  variant={selected ? 'default' : 'secondary'}
                  className='rounded-l-2xl rounded-r-none'
                >
                  Round trip
                </Button>
              )}
            </Tab>
            <Tab as={Fragment}>
              {({ selected }) => (
                <Button
                  variant={selected ? 'default' : 'secondary'}
                  className='rounded-l-none rounded-r-2xl'
                >
                  One way
                </Button>
              )}
            </Tab>
          </span>
        </TabList>
        <TabPanels className={'mt-6'}>
          <TabPanel className={'gap-2'}>
            <div className='grid grid-cols-1 grid-rows-2 gap-4 lg:grid-cols-2 lg:grid-rows-1'>
              <div className='flex flex-col items-center gap-2 sm:flex-row'>
                <MyCombobox
                  className='sm:rounded-r-none'
                  icon={
                    <Icons.planeTakeoff className='size-4 stroke-primary' />
                  }
                  options={mappedDestinations!}
                />
                <MyCombobox
                  className='sm:rounded-l-none'
                  icon={
                    <Icons.planeLanding className='size-4 stroke-primary' />
                  }
                  options={mappedDestinations!}
                />
              </div>
              <div className='flex flex-col gap-2 sm:flex-row'>
                <DatePicker className='py-2 sm:rounded-r-none sm:py-0' />
                <DatePicker className='py-2 sm:rounded-l-none sm:py-0' />
              </div>
            </div>
            <Button className='mt-6 w-full sm:w-fit'>Show flights</Button>
          </TabPanel>
          <TabPanel>
            <div className='grid grid-cols-1 grid-rows-2 gap-4 lg:grid-cols-2 lg:grid-rows-1'>
              <div className='flex flex-col items-center gap-2 sm:flex-row'>
                <MyCombobox
                  className='sm:rounded-r-none'
                  icon={
                    <Icons.planeTakeoff className='size-4 stroke-primary' />
                  }
                  options={mappedDestinations!}
                />
                <MyCombobox
                  className='sm:rounded-l-none'
                  icon={
                    <Icons.planeLanding className='size-4 stroke-primary' />
                  }
                  options={mappedDestinations!}
                />
              </div>
              <div className='flex flex-col gap-2 sm:flex-row'>
                <DatePicker className='py-2 sm:rounded-r-none sm:py-0' />
                <DatePicker className='py-2 sm:rounded-l-none sm:py-0' />
              </div>
            </div>
            <Button className='mt-6 w-full sm:w-fit'>Show flights</Button>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </Card>
  )
}

export default BookYourFlight
