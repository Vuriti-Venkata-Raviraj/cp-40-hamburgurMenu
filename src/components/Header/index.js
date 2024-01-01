// Write your code here
import {withRouter, Link} from 'react-router-dom'
import {Component} from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import Popup from 'reactjs-popup'

import './index.css'

class Header extends Component {
  state = {menuMode: true}

  changeMenu = () => {
    this.setState(prev => ({menuMode: !prev.menuMode}))
  }

  render() {
    return (
      <div className="header-container">
        <nav className="nav-bar">
          <Link to="/">
            <img
              src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
              alt="website logo"
              className="logo"
            />
          </Link>
          <Popup
            modal
            trigger={
              <button
                type="button"
                aria-label="Some label"
                data-testid="hamburgerIconButton"
                className="hamburger-btn"
              >
                <GiHamburgerMenu size="30" />
              </button>
            }
            className="model-content"
          >
            {close => (
              <div className="popup-content">
                <button
                  type="button"
                  aria-label="Some label"
                  data-testid="closeButton"
                  className="close-btn"
                  onClick={() => close()}
                >
                  <IoMdClose size="30" />
                </button>
                <ul className="nav-container">
                  <li>
                    <Link to="/" className="links" onClick={close}>
                      <AiFillHome size="36" />
                      <p className="nav-link-text">Home</p>
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" className="links" onClick={close}>
                      <BsInfoCircleFill size="32" />
                      <p className="nav-link-text">About</p>
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </Popup>
        </nav>
      </div>
    )
  }
}

export default withRouter(Header)
