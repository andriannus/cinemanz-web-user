module.exports = {
  chainWebpack: (config) => {
    config.module
      .rule('graphql')
      .test(/\.(graphql|gql)$/)
      .use('graphql-tag/loader')
      .loader('graphql-tag/loader')
      .end();

    config
      .plugin('html')
      .tap((args) => {
        const [arg] = args;
        arg.title = 'CinemaNz';

        return args;
      });
  },
};
