const getExternalData = require('../../externalData.js');

module.exports = {
  // WARNING: Here be dragons and magic of all sorts.

  // 'data' and 'all' for this route are populated by /plugins/elder-plugin/markdown/index.js
  // This example is designed to show you the power of plugins.

  // If you look in your `elder.config.js` you will see that the plugin is configured as so:
  // 'elderjs-plugin-markdown': {
  //   routes: ['blog'],
  // },

  // This is telling the simple markdown plugin, which route to control.

  data: async ({ data }) => {
    data.externalData = await getExternalData();
    return data;
  },
  all: () => [{ slug: '/blog' }],
  permalink: ({ request }) => request.slug === '/blog' ? request.slug : `/blog/${request.slug}/`,
};
