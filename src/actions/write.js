let { writeFile } = require('fs'),
  { promisify } = require('util'),
  cosmetic = require('cosmetic'),
  binarify = require('./binarify');

writeFile = promisify(writeFile);

module.exports = async(options) => {
  let { origin, destination } = options;

  let string = await binarify({ origin });

  await writeFile(destination, string);

  console.log(`${cosmetic.green('Success:')} Wrote ${origin} to ${destination}`);
};
