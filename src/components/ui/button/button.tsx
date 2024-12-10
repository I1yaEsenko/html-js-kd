import { Send } from '@/assets/icons'
import clsx from 'clsx'

type ButtonType = {
  isDisabled?: boolean
  title: string
}

export const Button = ({ isDisabled, title }: ButtonType) => {
  return (
    <button
      className={clsx(
        'flex items-center justify-center gap-2 px-[13px] py-[9px] text-white bg-lavender rounded-[50px] font-semibold cursor-pointer text-sm max-w-[139px] focus:ring-2 focus:outline-none',
        'hover:bg-lavender-hover',
        'xs:max-w-[188px] xs:px-[25px] xs:py-[13px] xs:gap-3 xs:text-base',
        {
          'disabled:bg-grey-light disabled:text-grey-dark disabled:fill-grey-dark disabled:stroke-grey-dark':
            isDisabled,
        }
      )}
      disabled={isDisabled}
    >
      {title}
      <Send />
    </button>
  )
}
