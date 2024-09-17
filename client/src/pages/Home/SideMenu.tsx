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
    id: 1,
    icon: Icons.car,
    title: 'travel packages',
    imagePath: './menu-images/travel-packages.jpg'
  }
] as MenuType[]

type Props = {}

const SideMenu: FC<Props> = ({}) => {
  return (
    <div className='mt-2 grid grid-rows-3 space-y-4'>
      {MENUS.map(menu => (
        <div
          key={menu.id}
          className='group relative h-64 w-full overflow-hidden rounded-xl shadow drop-shadow-lg'
        >
          <img
            src={menu.imagePath}
            alt='Car Rentals'
            className='h-full w-full object-cover transition-transform group-hover:scale-105'
          />
          <div className='absolute bottom-4 left-4 z-10 flex flex-col items-center text-white'>
            <menu.icon className='mr-2 size-6 self-start' />
            <span className='text-xl font-bold uppercase tracking-widest'>
              {menu.title}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default SideMenu
