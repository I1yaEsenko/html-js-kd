import clsx from 'clsx'
import { useState } from 'react'
import { Menu } from '@/components/ui/menu/menu'

export const BurgerIcon = () => {
  const [isMenuOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isMenuOpen)
  }

  return (
    <div className="flex items-center justify-center">
      <button onClick={toggleMenu} className="">
        <svg className="h-8 w-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Верхняя линия */}
          <path
            className={clsx('transition-all duration-300 ease-in-out ')}
            style={{
              transform: isMenuOpen ? 'rotate(45deg) translateY(8px)' : '',
              transformOrigin: 'center',
            }}
            d="M4.79 8C4.79 7.57 4.96 7.16 5.26 6.86C5.56 6.56 5.97 6.39 6.39 6.39L25.59 6.39C26.02 6.39 26.43 6.56 26.73 6.86C27.03 7.16 27.19 7.57 27.19 8C27.19 8.42 27.03 8.83 26.73 9.13C26.43 9.43 26.02 9.59 25.59 9.59L6.39 9.59C5.97 9.59 5.56 9.43 5.26 9.13C4.96 8.83 4.79 8.42 4.79 8Z"
            fill="#27272A"
            fillOpacity="1.000000"
            fillRule="evenodd"
          />
          {/* Средняя линия */}
          <path
            className={clsx(
              'transition-all duration-300 ease-in-out',
              isMenuOpen ? 'opacity-0' : ''
            )}
            d="M4.79 16C4.79 15.57 4.96 15.16 5.26 14.86C5.56 14.56 5.97 14.39 6.39 14.39L25.59 14.39C26.02 14.39 26.43 14.56 26.73 14.86C27.03 15.16 27.19 15.57 27.19 16C27.19 16.42 27.03 16.83 26.73 17.13C26.43 17.43 26.02 17.59 25.59 17.59L6.39 17.59C5.97 17.59 5.56 17.43 5.26 17.13C4.96 16.83 4.79 16.42 4.79 16Z"
            fill="#27272A"
            fillOpacity="1.000000"
            fillRule="evenodd"
          />
          {/* Нижняя линия */}
          <path
            className={clsx(
              'transition-all duration-300 ease-in-out origin-center',
              isMenuOpen ? '-rotate-45 -translate-y-2' : ''
            )}
            style={{
              transform: isMenuOpen ? 'rotate(-45deg) translateY(-8px)' : '',
              transformOrigin: 'center',
            }}
            d="M4.79 24C4.79 23.57 4.96 23.16 5.26 22.86C5.56 22.56 5.97 22.39 6.39 22.39L25.59 22.39C26.02 22.39 26.43 22.56 26.73 22.86C27.03 23.16 27.19 23.57 27.19 24C27.19 24.42 27.03 24.83 26.73 25.13C26.43 25.43 26.02 25.59 25.59 25.59L6.39 25.59C5.97 25.59 5.56 25.43 5.26 25.13C4.96 24.83 4.79 24.42 4.79 24Z"
            fill="#27272A"
            fillOpacity="1.000000"
            fillRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={clsx(
          'transition-all duration-300 ease-in-out',
          isMenuOpen ? 'block bg-grey-light w-[83vw] h-full absolute' : 'hidden',
          'xss:hidden'
        )}
      >
        <nav className="">
          <Menu />
        </nav>
      </div>
    </div>
  )
}
