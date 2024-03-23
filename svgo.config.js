const _ = require('lodash');

module.exports = {
  plugins: [
    {
      name: 'inlineStyles',
      onlyMatchedOnce: false,
    },
    {
      name: 'removeXMLNS',
    },
  ],
};
