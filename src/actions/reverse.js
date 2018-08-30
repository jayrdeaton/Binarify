let { existsSync, readFile, writeFile } = require('fs'),
  { extname, parse } = require('path'),
  { promisify } = require('util'),
  cosmetic = require('cosmetic'),
  { toBuffer } = require('binary-string'),
  fileType = require('file-type');

readFile = promisify(readFile);
writeFile = promisify(writeFile);

module.exports = async (options) => {
  let { origin, destination } = options;

  if (!existsSync(origin)) throw new Error(`${origin} not found`);

  let data = await readFile(origin);

  data = toBuffer(JSON.parse(data));

  await writeFile(destination, data, 'binary');

  console.log(`${cosmetic.green('Success:')} Wrote ${origin} to ${destination}`);
};
