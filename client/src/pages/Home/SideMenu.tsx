import Icons from '@/components/Icons'
import { LucideIcon } from 'lucide-react'
import { FC } from 'react'

type MenuType = {
  id: number
  icon: LucideIcon
  title: string
  imagePath: string
}

const MENUS = [
  {
    id: 1,
    icon: Icons.car,
    title: 'car rentals',
    imagePath: './menu-images/car-rentals.jpg'
  },
  {
    id: 2,
    icon: Icons.hotel,
    title: 'hotels',
    imagePath: './menu-images/hotels.jpg'
  },
  {
    id: 3,
    icon: Icons.travel,
    title: 'travel packages',
    imagePath: './menu-images/travel-packages.jpg'
  }
] as MenuType[]

type Props = {}

const SideMenu: FC<Props> = ({}) => {
  return (
    <div className='grid grid-cols-3 gap-2 xl:grid-cols-1 xl:grid-rows-3 xl:gap-6'>
      {MENUS.map(menu => (
        <div
          key={menu.id}
          className='group relative h-12 w-full cursor-pointer overflow-hidden rounded-xl shadow drop-shadow-lg xl:h-72'
        >
          {/* Gives shadow effect on card to make text more visible */}
          <div className='absolute z-10 h-full w-full bg-gradient-to-t from-black/50' />
          <img
            src={menu.imagePath}
            alt={menu.title}
            className='h-full w-full object-cover transition-transform group-hover:scale-105'
          />
          <div className='absolute bottom-4 left-4 z-10 flex w-full flex-row items-center justify-start text-white xl:flex-col xl:items-start xl:justify-center'>
            <menu.icon className='mr-1 hidden size-4 self-center sm:block lg:mr-2 lg:size-6 lg:self-start' />
            <span className='text-[0.6rem] font-bold uppercase tracking-widest sm:text-xs md:text-sm lg:text-base xl:text-xl'>
              {menu.title}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default SideMenu
