module.exports = {
  siteMetadata: {
    title: `Maumee Summer Fair`,
    description: `The Annual Maumee Summer Fair Is Held Each August On Beautifully Tree-lined Streets In The Historic Uptown District Of Maumee, Ohio`,
    dates: {
      start: {
        date: "08/09/2019",
        time: "5pm - 12am",
      },
      end: {
        date: "08/10/2019",
        time: "5pm - 12am",
      },
    },
    nav: [
      {
        label: "Fair Guide",
        url: "fair-guide",
      },
      {
        label: "Art / Crafts",
        url: "art-crafts",
      },
      {
        label: "Food",
        url: "food",
      },
      {
        label: "Music",
        url: "music",
      },
      {
        label: "Activities",
        url: "activities",
      },
      {
        label: "Information / Registration",
        url: "information-registration",
      },
    ],
    social: {
      facebook: "https://www.facebook.com/maumeesummerfair/",
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `json`,
        path: `${__dirname}/src/json/`,
      },
    },
  ],
}
