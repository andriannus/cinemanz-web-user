const GRAPHQL_URL = {
  dev: 'http://localhost:7777/graphql',
  prod: 'https://cinemanz-graphql.herokuapp.com/graphql',
};

module.exports = {
  client: {
    service: {
      name: 'my-app',
      // URL to the GraphQL API
      url: process.env.NODE_ENV === 'production' ? GRAPHQL_URL.prod : GRAPHQL_URL.dev,
    },
    // Files processed by the extension
    includes: ['src/**/*.vue', 'src/**/*.js'],
  },
};
