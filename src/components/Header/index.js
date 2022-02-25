import {Component} from 'react'
import {Link} from 'react-router-dom'

import './index.css'

class Header extends Component {
  state = {isToggleActive: false}

  whenToggleButtonClick = () => {
    this.setState(prevState => ({isToggleActive: !prevState.isToggleActive}))
  }

  showDropDownMenu = () => (
    <>
      <ul className="navBarMenu">
        <Link to="/" className="link">
          <li className="item" onClick={this.whenToggleButtonClick}>
            Home
          </li>
        </Link>
        <Link to="/about" className="link">
          <li className="item" onClick={this.whenToggleButtonClick}>
            About
          </li>
        </Link>

        <button
          type="button"
          onClick={this.whenToggleButtonClick}
          className="toggle-button"
        >
          <img
            src="https://res.cloudinary.com/saicharan/image/upload/v1645807598/Solid_tffgth.png"
            className="menuIcon"
            alt="close-icon"
          />
        </button>
      </ul>
    </>
  )

  render() {
    const {isToggleActive} = this.state
    console.log(isToggleActive)
    return (
      <>
        <div className="mobile-menu">
          <div className="mobile-header-container">
            <Link to="/" className="link">
              <h1 className="logo">
                COVID19<span className="india">INDIA</span>
              </h1>
            </Link>
            <ul className="navBar">
              <Link to="/" className="link">
                <li className="item">Home</li>
              </Link>
              <Link to="/about" className="link">
                <li className="item">About</li>
              </Link>
            </ul>

            <button
              type="button"
              className="toggle-button"
              onClick={this.whenToggleButtonClick}
            >
              <img
                src="https://res.cloudinary.com/saicharan/image/upload/v1642316272/add-to-queue_1_n68fmp.png"
                className="menuIcon"
                alt="menu"
              />
            </button>
          </div>
          <div className="menu">
            {isToggleActive ? this.showDropDownMenu() : null}
          </div>
        </div>
      </>
    )
  }
}

export default Header
