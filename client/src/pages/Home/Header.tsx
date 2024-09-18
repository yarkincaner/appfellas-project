import Icons from '@/components/Icons'

const Header = () => {
  return (
    <div className='grid min-w-full grid-cols-2 items-center'>
      {/* Title */}
      <span className='flex items-center space-x-2 text-sm font-bold uppercase sm:text-base lg:text-lg'>
        <div className='rounded-full bg-primary p-[0.25rem]'>
          <Icons.logo className='z-50 h-6 w-[1.55rem] rotate-45 fill-card text-primary' />
        </div>
        <p>plane scape</p>
      </span>

      <div className='flex items-center justify-end space-x-8'>
        <div className='grid grid-cols-2 justify-between font-semibold'>
          <span className='flex items-center space-x-1 text-sm sm:text-base'>
            <Icons.tag className='size-5 fill-primary stroke-card' />
            <p>Deals</p>
          </span>
          <span className='flex items-center space-x-1 text-sm sm:text-base'>
            <Icons.earth className='size-6 fill-primary stroke-white' />
            <p>Discovery</p>
          </span>
        </div>

        <span className='flex items-center space-x-2'>
          <img
            src='https://api.dicebear.com/9.x/dylan/svg'
            alt='avatar'
            className='size-8 rounded-full'
          />
          <p className='text-sm sm:text-base'>Joane Smith</p>
        </span>
      </div>
    </div>
  )
}

export default Header
