module.exports = {
  siteMetadata: {
    title: "Chelsea's Tax Services",
    author: "Mary Lee",
    description: "Chelsea's Tax Services is a full service accounting firm located in Crystal River, Florida committed to outsanding service and high quality work.",
    url: "https://www.chelseastaxservices.com",
    image: '/images/facebook_preview.jpg',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
