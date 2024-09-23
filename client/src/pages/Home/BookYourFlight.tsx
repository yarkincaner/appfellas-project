import { Button } from '@/components/Button'
import Card from '@/components/Card'
import Icons from '@/components/Icons'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import { FC, Fragment } from 'react'
import OneWay from './tabs/one-way'
import RoundTrip from './tabs/round-trip'

type Props = {}

const BookYourFlight: FC<Props> = ({}) => {
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
          <span>
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
            <RoundTrip />
          </TabPanel>
          <TabPanel>
            <OneWay />
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </Card>
  )
}

export default BookYourFlight
