import BookYourFlight from './BookYourFlight'
import Header from './Header'
import SideMenu from './SideMenu'

export default function Home() {
  return (
    <>
      <Header />
      <div className='mt-6 grid grid-cols-1 xl:grid-cols-10 xl:space-x-8'>
        <div className='order-last col-span-8 mt-4 xl:order-first xl:mt-0'>
          <BookYourFlight />
        </div>
        <div className='col-span-2'>
          <SideMenu />
        </div>
      </div>
    </>
  )
}
