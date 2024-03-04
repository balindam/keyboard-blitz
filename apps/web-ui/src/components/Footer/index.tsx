import React from 'react'
import './style.scss'

type Props = {}

const footerActionButtons = [
  {
    label: 'About',
    redirectURL: '',
  },
  {
    label: 'Contact',
    redirectURL: '',
  },
  {
    label: 'Privacy Policy',
    redirectURL: '',
  }
]

const Footer = (props: Props) => {
  return (
    <div className="_footer-container">
      <div className="_footer-section-1">
        {footerActionButtons.map((button, index) => (
          <div className="_footer-action-button" key={`${button.label}-${index}`}>
            {button.label}
            </div>
        ))}
      </div>
      <div className="_footer-section-2">

      </div>
      <div className="_footer-section-3">
        ©2024 Keyboard Blitz. All rights reserved.
      </div>
    </div>
  )
}

export default Footer