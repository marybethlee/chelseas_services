import React from 'react'

import inline_green_logo from '../assets/images/inline_green_logo.png'

class Header extends React.Component {
  render() {
    return (
      <header
        id="header"
        style={this.props.stickyStyles}
        className={this.props.isVisible ? "visible" : "invisible"}
      >
        <div className="inner">
          <img src={inline_green_logo} alt="Chelsea's Tax Services" />
        </div>
      </header>
    )
  }
}

export default Header
