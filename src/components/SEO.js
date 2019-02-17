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
        title: title,
        image: `${url}${image}`,
        url: `${url}${'/'}`,
        description: description
      }

      return (
        <Helmet
          title="Chelsea's Tax Services"
          meta={[
            { name: 'description', content: "Chelsea's Tax Services is a full service accounting firm located in Crystal River, Florida committed to outsanding service and high quality work." },
            { name: 'keywords', content: 'Crystal River, accounting, bookkeeping, tax services' },
          ]}
        >
          <meta property="og:url" content={seo.url} />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="en" />
          <meta property="og:site_name" content={seo.title} />
          <meta property="og:title" content={seo.title} />
          <meta property="og:image" content={seo.image} />
          <meta property="og:description" content={seo.description} />
          <meta property="og:image:width" content="2000" />
          <meta property="og:image:height" content="1125" />
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