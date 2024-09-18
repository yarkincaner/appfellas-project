import BookYourFlight from './BookYourFlight'
import Flights from './Flights'
import Header from './Header'
import SideMenu from './SideMenu'

export default function Home() {
  return (
    <>
      <Header />
      <div className='mt-6 grid grid-cols-1 xl:grid-cols-9 xl:space-x-8'>
        <div className='order-last col-span-7 mt-4 space-y-6 xl:order-first xl:mt-0'>
          <BookYourFlight />
          <div className='grid grid-cols-4 gap-2'>
            <div className='col-span-3'>
              <Flights />
            </div>
            <div className='col-span-1'>filters</div>
          </div>
        </div>
        <div className='col-span-2'>
          <SideMenu />
        </div>
      </div>
    </>
  )
}
