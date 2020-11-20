module.exports = {
  siteMetadata: {
    title: "Comunicação - André Zagatti",
    author: {
      name: 'André Luis Zagatti Adorna',
      summary: 'frontend software engineer.',
    },
    description: 'Um pouco sobre comunicação.',
    siteUrl: 'https://expansionweek.azagatti.dev/',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /src\/images\/.*\.svg/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`roboto\:,400,500,700`],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    `gatsby-transformer-json`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Expansion Week Challenge`,
        short_name: `comunicacao`,
        start_url: `/`,
        background_color: `#3d434d`,
        theme_color: `#3d434d`,
        display: `minimal-ui`,
        icon: `src/images/azagatti-logo.png`,
      },
    },
  ],
}
