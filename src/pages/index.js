import React from 'react'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'
import SEO from '../components/SEO'

import trail from '../assets/images/trail.jpg'
import mom_paddleboarding from '../assets/images/mom_paddleboarding.jpg'
import hunter_springs from '../assets/images/hunter_springs.jpg'

const Landing = (props) => (
  <Layout>
    <SEO />
    <BannerLanding />

    <div id="main">
      <section id="services-offered">
        <div className="inner">
          <header className="major">
            <h2>Services</h2>
          </header>
          <p>Chelsea's Tax Services provides a wide selection of services to individuals and businesses in an assortment of industries. Our professional services include:</p>
          <div className="list">
            <ul>
              <li>Tax Preparation</li>
              <li>Tax Planning</li>
              <li>Business Consulting</li>
              <li>Bookkeeping</li>
            </ul>
            <ul>
              <li>New Business Incorporation Services</li>
              <li>Financial Statements</li>
              <li>Payroll Services</li>
            </ul>
            <ul>
              <li>QuickBooks Services</li>
              <li>Florida Sales Tax</li>
              <li>Estate & Trust Planning</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="spotlights">
        <section className="style3">
          <div className="image">
            <img src={trail} alt="Rails to Trails in Inverness, FL" />
          </div>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Our Mission</h3>
              </header>
              <p>At Chelsea's Tax Services, we strive to provide our local businesses and community with high quality accounting and tax services. Our goal is to empower our clients to plan for and reach their goals.</p>
              <p>Putting you on a path for success is our first goal at Chelsea's Tax Services. We are committed to maintaining the highest standards of integrity and professionalism in our relationship with you, our client.</p>
            </div>
          </div>
        </section>
        <section className="style5">
          <div className="image">
            <img src={mom_paddleboarding} alt="Paddleboarding on the Crystal River" />
          </div>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Tax Preparation</h3>
              </header>
              <p>Our tax preparation services include the following entities:</p>
              <div className="list">
                <ul>
                  <li>
                    Individuals
                    <ul>
                      <li>Rentals</li>
                      <li>Sole proprietorships</li>
                    </ul>
                  </li>
                  <li>Corporations</li>
                </ul>
                <ul>
                  <li>S Corporations</li>
                  <li>Partnerships</li>
                  <li>Not-for-Profit Returns</li>
                  <li>Estates</li>
                </ul>
                <ul>
                  <li>Trusts</li>
                  <li>Kiddie Returns</li>
                  <li>Gift Returns</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="style3">
          <div className="image">
            <img src={hunter_springs} alt="Hunter Springs" />
          </div>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>About Us</h3>
              </header>
              <h4>Chelsea Rustek, E.A - Owner</h4>
              <p>Chelsea has been an enrolled agent with the IRS since 2017. EAs are granted unlimited practice rights to represent taxpayers before the IRS and are authorized to advise, represent, and prepare tax returns.</p>
              <p>Chelsea is an alumni of Saint Leo University and Sante Fe College. Additionally, Chelsea graduated from Lecanto High School, Class of 2011. She has held roles in public accounting firms in Crystal River and Ocala.</p>
            </div>
          </div>
        </section>
      </section>
    </div>

  </Layout >
)

export default Landing