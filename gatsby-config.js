require(`dotenv`).config({
  path: `.env`,
})

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  siteMetadata: {
    // Used for the title template on pages other than the index site
    siteTitle: `Pontus Sundén`,
    // Default title of the page
    siteTitleAlt: `Pontus Sundén - psu.se`,
    // Can be used for e.g. JSONLD
    siteHeadline: `Pontus Sundén`,
    // Will be used to generate absolute URLs for og:image etc.
    siteUrl: `https://psu.se`,
    // Used for SEO
    siteDescription: `Personal blog and resumé for Pontus Sundén. A Communications professional with a passion for web development.`,
    // Will be set on the <html /> tag
    siteLanguage: `en`,
    // Used for og:image and must be placed inside the `static` folder
    siteImage: `/banner.jpg`,
    // Twitter Handle
    author: `@pontus`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      // Documentation here: https://www.gatsbyjs.com/plugins/@lekoarts/gatsby-theme-minimal-blog/
      options: {
        basePath: `/`,
        blogPath: `/blog`,
        postsPath: `content/posts`,
        mdx: true,
        formatString: `YYYY-MM-DD`,
        feed: true,
        feedTitle: `Pontus Sundén - Blog`,
        showLineNumbers: true,
        showCopyButton: false,
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `About`,
            slug: `/about`,
          },
        ],
        externalLinks: [
          {
            name: `Dv`,
            url: `https://dev.to/pontus`,
          },
          {
            name: `Tw`,
            url: `https://twitter.com/pontus`,
          },
          {
            name: `Li`,
            url: `https://www.linkedin.com/in/pontussunden`,
          },
          {
            name: `Ig`,
            url: `https://www.instagram.com/pontussunden`,
          },
        ],
      },
    },
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: process.env.GOOGLE_ANALYTICS_ID,
    //   },
    // },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Pontus Sundén - psu.se`,
        short_name: `psu.se`,
        description: ``,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
}
