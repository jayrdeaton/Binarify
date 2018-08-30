let { command, option } = require('termkit'),
  cosmetic = require('cosmetic'),
  { binarify, copy, reverse, write } = require('../actions');

let program = command('binarify')
  .version(process.env.npm_package_version)
  .description('Convert files to a binary string and back')
  .action(async (options) => console.log(`Welcome to ${cosmetic.magenta('Binarify')}`))
  .commands([
    command('copy', '<origin>')
    .description('Copy binary string to clipboard')
    .action(async (options) => await copy(options)),
    command('write', '<origin> <destination>')
    .description('Write binary string to file')
    .action(async (options) => await write(options)),
    command('reverse', '<origin> <destination>')
    .description('Write binary string to file')
    .action(async (options) => await reverse(options))
  ]);

module.exports = program;
