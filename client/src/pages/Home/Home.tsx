import BookYourFlight from './BookYourFlight'
import Filters from './filters/Filters'
import Flights from './Flights'
import Header from './Header'
import SideMenu from './SideMenu'

export default function Home() {
  return (
    <div className='p-6'>
      <Header />
      <div className='mt-6 grid grid-cols-1 xl:grid-cols-9 xl:space-x-8'>
        <div className='order-last col-span-7 mt-4 space-y-6 xl:order-first xl:mt-0'>
          <BookYourFlight />
          {/* Make Flights and Filters equal in height */}
          <div className='flex h-[600px] gap-2'>
            {/* Set a fixed height or let it grow based on content */}
            <div className='flex flex-1 basis-3/4 flex-col'>
              <Flights />
            </div>
            <div className='flex flex-1 basis-1/4 flex-col'>
              <Filters />
            </div>
          </div>
        </div>
        <div className='col-span-2'>
          <SideMenu />
        </div>
      </div>
    </div>
  )
}
