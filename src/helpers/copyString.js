let toClipboard = require('to-clipboard'),
  { promisify } = require('util');

toClipboard = promisify(toClipboard);

module.exports  =async (data) => {
  await toClipboard(data);
};
