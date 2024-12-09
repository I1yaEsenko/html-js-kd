import clsx from 'clsx'
import React from 'react'

type MenuItemType = {
  children: React.ReactNode
  isActive: boolean
}

export const MenuItem = ({ children, isActive }: MenuItemType) => {
  return (
    <li
      className={clsx('cursor-pointer hover:text-lavender', {
        'text-lavender': isActive,
        'text-grey-dark': !isActive,
      })}
    >
      <a>{children}</a>
    </li>
  )
}
