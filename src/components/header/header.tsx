import clsx from 'clsx'
import { useState } from 'react'
import { Logo, Menu } from '@/components/ui'

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <header className="py-[15px] mb-[27px] border-b border-grey-light">
      <div className="container-custom">
        <div className="mx-auto flex items-center justify-between ">
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
            'fixed top-0 w-[60vw] p-4 m-0 h-full bg-grey shadow-xl transition-all duration-700 ease-in-out',
            isMenuOpen ? 'left-0 visible' : 'left-[-100%] invisible'
          )}
        >
          <Menu menuDirection={'vertical'} />
        </div>
      </div>
    </header>
  )
}
