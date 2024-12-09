import { MenuItem } from '@/components/ui/menu/menuItem'
import clsx from 'clsx'
type MenuType = {
  menuDirection: 'vertical' | 'horizontal'
}

export const Menu = ({ menuDirection }: MenuType) => {
  const menuItems = [
    { name: 'Main', isActive: true },
    { name: 'About', isActive: false },
    { name: 'Get in touch', isActive: false },
  ]
  return (
    <ul
      className={clsx(
        ' gap-6 font-semibold font-mont',
        menuDirection === 'vertical' ? 'flex-col' : 'flex'
      )}
    >
      {menuItems.map((item, index) => (
        <MenuItem key={index} isActive={item.isActive}>
          {item.name}
        </MenuItem>
      ))}
    </ul>
  )
}
