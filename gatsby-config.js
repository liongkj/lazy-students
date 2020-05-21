module.exports = {
  siteMetadata: {
    siteTitle: `Lazy Student`,
    defaultTitle: `Lazy But Smart`,
    siteTitleShort: `Lazy`,
    siteDescription: `Tips and tricks to write better paper, lazy`,
    siteUrl: `https://lazy-student.netlify.app`,
    siteAuthor: `@liongkj`,
    siteImage: `/banner.png`,
    siteLanguage: `en`,
    themeColor: `#7159c1`,
    basePath: `/`,
    footer: `By KJ`,
  },
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        configPath: `src/config`,
        docsPath: `src/docs`,
        githubUrl: `https://github.com/rocketseat/gatsby-themes`,
        baseDir: `examples/gatsby-theme-docs`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rocketseat Gatsby Themes`,
        short_name: `RS Gatsby Themes`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `standalone`,
        icon: `static/favicon.png`,
      },
    },
    {
      resolve: `gatsby-source-prismic-graphql`,
      options: {
        repositoryName: "lazy-student", // (REQUIRED, replace with your own)
        accessToken: "93820f24b061bc931ec1a8d302158bcc", // (optional API access token)
        path: "/preview", // (optional preview path. Default: /preview)
        previews: true, // (optional, activated Previews. Default: false)
        pages: [
          {
            // (optional, builds pages dynamically)
            type: "Article", // TypeName from prismic
            match: "/article/:uid", // Pages will be generated under this pattern
            path: "/article", // Placeholder page for unpublished documents
            component: require.resolve("./src/templates/article.js"),
          },
        ],
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // trackingId: ``,
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://lazy-student.netlify.app`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
