import React from 'react'

const Contact = (props) => (
  <section id="contact">
    <header className="major">
      <h3>Contact Us</h3>
    </header>

    <div className="contact-methods">
      <div className="contact-method">
        <div className="method-type">
          <i className="fa fa-envelope" />
          <h3>Email</h3>
        </div>
        <a href="#">info@chelseastaxes.com</a>
      </div>

      <div className="contact-method">
        <div className="method-type">
          <i className="fa fa-phone" />
          <h3>Phone</h3>
        </div>
        <span>352 - 794 - 1160</span>
      </div>

      <div className="contact-method">
        <div className="method-type">
          <i className="fa fa-home" />
          <h3>Place of Business</h3>
        </div>
        <span>Crytal River, FL</span>
      </div>
    </div>

  </section>
)

export default Contact