import { Logo } from '@/components/ui/logo/logo'
import { Menu } from '@/components/ui/menu/menu'
import clsx from 'clsx'
import { useState } from 'react'

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <header className="py-[15px]">
      <div className="mx-auto flex items-center justify-between px-4 max-w-80 xs:px-[39px] xs:max-w-[792px] xl:px-[85px] xl:max-w-[1280px]">
        <div>
          <Logo />
        </div>
        <nav className="xsmax:hidden">
          <Menu menuDirection={'horizontal'} />
        </nav>

        <button
          className="flex h-8 w-8 flex-col items-center justify-center gap-1.5 xs:hidden"
          onClick={toggleMenu}
        >
          <span
            className={clsx(
              'block w-6 h-[2px] bg-black transition-transform duration-300 ease-in-out',
              isMenuOpen && 'rotate-45 translate-y-[8px]'
            )}
          />
          <span
            className={clsx(
              'block w-6 h-[2px] bg-black transition-opacity duration-300 ease-in-out',
              isMenuOpen && 'opacity-0'
            )}
          />
          <span
            className={clsx(
              'block w-6 h-[2px] bg-black transition-transform duration-300 ease-in-out',
              isMenuOpen && '-rotate-45 -translate-y-[8px]'
            )}
          />
        </button>
      </div>
      <div
        className={clsx(
          'fixed top-0 w-[60vw] p-4 m-0 h-full bg-grey-light shadow-xl transition-all duration-700 ease-in-out',
          isMenuOpen ? 'left-0 opacity-100 visible' : 'left-[-100%] opacity-0 invisible delay-100'
        )}
      >
        <Menu menuDirection={'vertical'} />
      </div>
    </header>
  )
}
