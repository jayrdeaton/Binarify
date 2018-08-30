let WorkingBar = require('working-bar'),
  cosmetic = require('cosmetic');

let workingBar = new WorkingBar();

workingBar.length = 80;
workingBar.character = cosmetic.red('------');

module.exports = workingBar;
