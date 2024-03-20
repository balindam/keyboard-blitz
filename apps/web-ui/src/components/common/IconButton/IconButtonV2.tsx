import React from 'react'
import './style.scss'

type Props = {
    children: React.ReactNode,
    className?: string,
    onClick?: () => void
}

const IconButtonV2 = ({children, className, onClick}: Props) => {
  return (
    <div className={`_icon-btn-container ${className}`} onClick={onClick}>
        {children}
    </div>
  )
}

export default IconButtonV2