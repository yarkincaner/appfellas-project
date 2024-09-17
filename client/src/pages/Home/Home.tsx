import Header from './Header'
import SideMenu from './SideMenu'

export default function Home() {
  return (
    <>
      <Header />
      <div className='mt-3 grid grid-cols-12 items-center'>
        <div className='col-span-10'>asdf</div>
        <div className='col-span-2'>
          <SideMenu />
        </div>
      </div>
    </>
  )
}
