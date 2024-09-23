import { cn } from '@/lib/utils'
import { FC, ReactNode, useEffect, useRef, useState } from 'react'

type Props = {
  children: ReactNode
  className?: string
}

const ScrollShadowWrapper: FC<Props> = ({ children, className }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isBottom, setIsBottom] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  const handleScroll = () => {
    const scrollElement = scrollRef.current
    if (scrollElement) {
      const { scrollTop, scrollHeight, clientHeight } = scrollElement

      // Check if the user has scrolled
      setIsScrolled(scrollTop > 0)

      // Check if the user is at the bottom
      setIsBottom(scrollTop + clientHeight >= scrollHeight)
    }
  }

  useEffect(() => {
    const scrollElement = scrollRef.current
    if (scrollElement) {
      scrollElement.addEventListener('scroll', handleScroll)

      // Initial check on mount
      handleScroll()

      return () => {
        scrollElement.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])

  return (
    <div className='relative h-full'>
      {/* Fading Overlay - Top */}
      {isScrolled && (
        <div className='pointer-events-none absolute left-0 right-0 top-0 h-10 bg-gradient-to-b from-card' />
      )}

      {/* Fading Overlay - Bottom */}
      {!isBottom && (
        <div className='pointer-events-none absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-card' />
      )}
      <div
        ref={scrollRef}
        className={cn(
          'flex h-full flex-col overflow-y-auto rounded-2xl',
          className
        )}
      >
        {children}
      </div>
    </div>
  )
}

export default ScrollShadowWrapper
