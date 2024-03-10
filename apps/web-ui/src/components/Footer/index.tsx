import React from 'react'
import './style.scss'
import IconButton from '@components/common/IconButton/IconButton'

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

const footerIconButtons = [
  {
    name: 'facebook',
    iconPath: '/assets/icons/facebook-icon.png',
    redirectURL: 'https://facebook.com',
  },
  {
    name: 'twitter',
    iconPath: 'assets/icons/twitter-icon.png',
    redirectURL: 'https://twitter.com',
  },
  {
    name: 'instagram',
    iconPath: 'assets/icons/instagram-icon.png',
    redirectURL: 'https://instagram.com',
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
          {footerIconButtons.map((button, index) => (
              <IconButton
                key={`${button.name}-${index}`}
                imgSRC={button.iconPath}
                altText={button.name}
                handleClick={() => window.open(button.redirectURL, '_blank')}
              />
            ))}
      </div>
      <div className="_footer-section-3">
        ©2024 Keyboard Blitz. All rights reserved.
      </div>
    </div>
  )
}

export default Footer