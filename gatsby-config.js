const path = require('path');

module.exports = {
  siteMetadata: {
    siteUrl: "https://samiroy.com",
    title: "Samiroy",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/static/images/icon.png",
      },
    },
    {
      resolve: "gatsby-plugin-alias-imports",
      options: {
        alias: {
          '@components': path.resolve(__dirname, 'src/components'),
          '@content': path.resolve(__dirname, 'src/components/content'),
          '@hooks': path.resolve(__dirname, 'src/hooks'),
          '@widgets': path.resolve(__dirname, 'src/components/widgets'),
          '@svg': path.resolve(__dirname, 'src/static/svg'),
          '@styles': path.resolve(__dirname, 'src/static/styles/'),
        },
      },
    },
  ],
};
