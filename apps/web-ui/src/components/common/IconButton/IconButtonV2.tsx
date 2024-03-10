import React from 'react'
import './style.scss'

type Props = {
    children: React.ReactNode,
    className?: string,
}

const IconButtonV2 = ({children, className}: Props) => {
  return (
    <div className={`_icon-btn-container ${className}`}>
        {children}
    </div>
  )
}

export default IconButtonV2