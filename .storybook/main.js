const path = require('path');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  webpackFinal: async (config, { configType }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@components': path.resolve(__dirname, "../src/components"),
      '@constants': path.resolve(__dirname, "../src/constants"),
      '@interfaces': path.resolve(__dirname, "../src/interfaces"),
      '@Portal': path.resolve(__dirname, "../src/Portal"),
      '@services': path.resolve(__dirname, "../src/services"),
      '@styles': path.resolve(__dirname, "../src/styles/theme"),
      '@utils': path.resolve(__dirname, "../src/utils")
    };

    return config;
  },
  "framework": "@storybook/react"
}