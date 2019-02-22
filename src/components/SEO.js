import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

const SEO = ({ title, description, url, image }) => (
  <StaticQuery
    query={query}
    render={({
      site: {
        siteMetadata: {
          title,
          url,
          image,
          description,
        }
      }
    }) => {
      const seo = {
        title,
        image: `${url}${image}`,
        url: `${url}${'/'}`,
        description
      }

      return (
        <Helmet
          title="Chelsea's Tax Services"
          meta={[
            { name: 'keywords', content: 'Crystal River, accounting, bookkeeping, tax services' },
          ]}
        >
          <meta name="google-site-verification" content="mmosNSeCZJsBxpFKQw5oV4NsHS30OTYKPxMYx07UIos" />
          <meta name="description" content={seo.description} />
          <meta name="viewport" content="width=device-width, initial-scale=1"></meta>

          <meta property="og:url" content={seo.url} />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="en" />
          <meta property="og:site_name" content={seo.title} />
          <meta property="og:title" content={seo.title} />
          <meta property="og:image" content={seo.image} />
          <meta property="og:description" content={seo.description} />
          <meta property="og:image:width" content="2000" />
          <meta property="og:image:height" content="1125" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:description" content={seo.description} />
          <meta name="twitter:image" content={seo.image} />
          <meta name="twitter:site" content={seo.url} />
          <meta name="twitter:title" content={seo.title} />
        </Helmet>
      )
    }}
  />
)

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  image: PropTypes.string,
}

SEO.defaultProps = {
  title: null,
  description: null,
  url: null,
  image: null,
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        title
        description
        url
        image
      }
    }
  }
`;

export default SEO