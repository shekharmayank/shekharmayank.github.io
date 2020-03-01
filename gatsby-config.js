require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    siteTitleAlt: `Mayank Shekhar`,
    siteTitle: `Mayank`,
    siteHeadline: `Thoughts`,
    siteUrl: `https://shekharmayank.github.io`,
    siteDescription: `Thoughts and Reflections.`,
    siteLanguage: `en`,
    siteImage: `/banner.jpg`,
    author: `Mayank`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      options: {
        navigation: [
          {
            title: `Posts`,
            slug: `/blog`,
          },
          {
            title: `About`,
            slug: `/about`,
          },
        ],
        externalLinks: [
          {
            name: `Github`,
            url: `https://github.com/shekharmayank`,
          },
          {
            name: `LinkedIn`,
            url: `https://www.linkedin.com/in/may03`,
          },
          {
            name: `CV`,
            url: `http://bit.ly/3clqhTS`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.UA-82633250-2,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mayank Shekhar`,
        short_name: `Mayank`,
        description: `Web Presence`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/mayank.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/mayank.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    // `gatsby-plugin-webpack-bundle-analyser-v2`,
  ],
}
