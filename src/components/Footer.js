import React from 'react'

const Footer = (props) => (
  <footer id="footer">
    <div className="inner">
      <ul className="icons">
        <li><a href="https://www.facebook.com/chelseastaxservices/" target="_blank" className="icon alt fa-facebook"><span className="label">Facebook</span></a></li>
        <li><a href="https://www.linkedin.com/in/chelsea-rustek-137356b5/" target="_blank" className="icon alt fa-linkedin"><span className="label">LinkedIn</span></a></li>
      </ul>
      <ul className="copyright">
        <li>&copy; {new Date().getFullYear()} Chelsea's Tax Services</li>
      </ul>
    </div>
  </footer>
)

export default Footer
