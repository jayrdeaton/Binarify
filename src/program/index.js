let { command, option } = require('termkit'),
  { binarify, copy, reverse, write } = require('../actions');

let program = command('binarify', '<origin>')
  .version(process.env.npm_package_version)
  .description('Convert files to a binary string')
  .options([
    // option('t', 'token', '<token>', 'Supply auth token'),
    // option('s', 'selections', '<selections>', 'Supply selections object')
  ])
  .action(async (options) => await binarify(options))
  .commands([
    command('copy')
    .description('Copy binary string to clipboard')
    .action(async (options) => await copy(options)),
    command('write', '<destination>')
    .description('Write binary string to file')
    .action(async (options) => await write(options)),
    command('reverse', '<destination>')
    .description('Write binary string to file')
    .action(async (options) => await reverse(options))
  ]);

module.exports = program;
