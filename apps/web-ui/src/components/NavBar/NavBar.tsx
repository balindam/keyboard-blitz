import React from 'react'
import KeyboardBlitzLogo from '@assets/icons/keyboard-blitz.svg?react'
import './style.scss'
import IconButtonV2 from '@components/common/IconButton/IconButtonV2'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import BoltRoundedIcon from '@mui/icons-material/BoltRounded';

const navbarButtons = [
  {
    label: 'Typing Test',
  },
  {
    label: 'Typing practice',
  },
  {
    label: 'Typing games',
  },
  {
    label: 'Typing stats',
  }
]

type Props = {}

const NavBar = (props: Props) => {
  return (
    <div className="_navbar-container">
      <div className="_navbar-logo">
        <div className="_nl-icon">
          {/* <KeyboardBlitzLogo /> */}
          <IconButtonV2>
            <BoltRoundedIcon />
          </IconButtonV2>
        </div>
        <div className="_nl-text">
          Keyboard Blitz
        </div>
      </div>
      <div className="_navbar-btns">
        <div className="_navbar-nav-btns">
          {
            navbarButtons.map((btn, index) => {
              return (
                <div key={index} className="_navbar-btn">
                  {btn.label}
                </div>
              )
            })
          }
        </div>
        <div className="_navbar-side-btns">
          <div className="_nsb-settings">
            <IconButtonV2>
              <SettingsOutlinedIcon />
            </IconButtonV2>
          </div>
          <div className="_nsb-profile">
            <IconButtonV2>
              <AccountCircleRoundedIcon />
            </IconButtonV2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar