import { changeTheme, cn } from '@/lib/utils'
import { FC, useState } from 'react'
import Icons from './Icons'
import { CSSTransition } from 'react-transition-group'

const themes = ['violet', 'ocean']

type Props = {}

const ThemeSwitcher: FC<Props> = ({}) => {
  const [activeTheme, setActiveTheme] = useState<string>('violet') // Default theme

  // Function to handle theme change
  const handleThemeChange = (theme: string) => {
    setActiveTheme(theme)
    changeTheme(theme) // Call the provided utility function
  }

  return (
    <div className='group fixed left-4 top-4 z-50 flex h-10 cursor-pointer flex-col gap-4 rounded-lg bg-card p-2 text-card-foreground hover:h-fit'>
      <Icons.palette className='min-h-6 min-w-6' />
      <div className='flex scale-0 flex-col items-center justify-center gap-4 transition-all group-hover:scale-100'>
        <button
          className={cn(
            'size-4 rounded-full bg-violet-400 outline outline-2 outline-offset-2 outline-card',
            activeTheme === 'violet'
              ? 'outline-violet-400'
              : 'hover:outline-foreground/20'
          )}
          onClick={() => handleThemeChange('violet')}
        />
        <button
          className={cn(
            'size-4 rounded-full bg-blue-500 outline outline-2 outline-offset-2 outline-card',
            activeTheme === 'ocean'
              ? 'outline-background'
              : 'hover:outline-foreground/20'
          )}
          onClick={() => handleThemeChange('ocean')}
        />
      </div>
    </div>
  )
}

export default ThemeSwitcher
