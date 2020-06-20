// eslint-disable-next-line import/no-extraneous-dependencies
const purgecss = require('@fullhuman/postcss-purgecss');

const IN_PRODUCTION = process.env.NODE_ENV === 'production';

module.exports = {
  plugins: [
    IN_PRODUCTION && purgecss({
      content: ['./public/**/*.html', './src/**/*.vue'],
      defaultExtractor(content) {
        const contentWithoutStyleBlocks = content.replace(/<style[^]+?<\/style>/gi, '');
        return contentWithoutStyleBlocks.match(/[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g) || [];
      },
      whitelist: [],
      whitelistPatterns: [/-(leave|enter|appear)(|-(to|from|active))$/, /^(?!(|.*?:)cursor-move).+-move$/, /^router-link(|-exact)-active$/, /data-v-.*/],
    }),
  ],
};
