module.exports = {
  siteMetadata: {
    title: `Sam Torres`,
    description: `Portfolio website`,
    author: `sam torres`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
    menuLinks:[
      {
         name:'home',
         link:'/'
      },
      {
         name:'page2',
         link:'/page-2'
      }
    ]
},  

plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,'gatsby-plugin-netlify',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `333699`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/icons/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
