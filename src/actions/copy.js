let cosmetic = require('cosmetic');
  binarify = require('./binarify'),
  { copyString } = require('../helpers');

module.exports = async (options) => {
  let string = await binarify(options);

  await copyString(string);

  console.log(`${cosmetic.green('Success:')} Copied string to clipboard`);
};
