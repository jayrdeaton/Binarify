let { existsSync, readFile } = require('fs'),
  { promisify } = require('util'),
  cosmetic = require('cosmetic');

readFile = promisify(readFile);

module.exports = async(options) => {
  let { origin } = options;

  if (!existsSync(origin)) throw new Error(`${origin} not found`);

  let data = await readFile(origin, 'binary');

  let string = JSON.stringify(data);

  return string;
};
