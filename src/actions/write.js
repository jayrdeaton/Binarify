let { writeFile } = require('fs'),
  { promisify } = require('util'),
  cosmetic = require('cosmetic'),
  binarify = require('./binarify');

writeFile = promisify(writeFile);

module.exports = async(options) => {
  let { destination } = options;
  let { origin } = options._parents.binarify;

  let string = await binarify({ origin });

  await writeFile(destination, string);

  console.log(`${cosmetic.green('Success:')} Wrote ${origin} to ${destination}`);
};
