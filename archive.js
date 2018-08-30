#!/usr/bin/env node
let { existsSync, readFile, writeFile } = require('fs'),
  { promisify } = require('util'),
  cosmetic = require('cosmetic'),
  binaryString = require('binary-string'),
  fromBuffer = binaryString.fromBuffer,
  toBuffer = binaryString.toBuffer,
  example = require('./example');

let run = (origin, destination) => {
  if (!fs.existsSync(origin)) {
    console.log(cosmetic.red(`${origin} not found`));
    return;
  };
  if (fs.existsSync(destination)) {
    console.log(cosmetic.red(`${destination} already exists`));
    return;
  };
  fs.readFile(origin, (err, data) => {
    if (err) {
      console.log(err);
      return;
    };
    let string = JSON.stringify(fromBuffer(data))
    fs.writeFile(destination, string, (err) => {
      if (err) {
        console.log(err);
        return;
      };
      console.log(cosmetic.green(`Successfully wrote ${origin} to ${destination}`));
    });
  });
};
let reverse = (origin, destination) => {
  if (!fs.existsSync(origin)) {
    console.log(cosmetic.red(`${origin} not found`));
    return;
  };
  if (fs.existsSync(destination)) {
    console.log(cosmetic.red(`${destination} already exists`));
    return;
  };
  fs.readFile(origin, (err, data) => {
    if (err) {
      console.log(err);
      return;
    };
    fs.writeFile(destination, data, 'binary', (err) => {
      if (err) {
        console.log(err);
        return;
      };
      console.log(cosmetic.green(`Successfully wrote ${origin} to ${destination}`));
    });
  });
};
let write = (destination) => {
  fs.writeFile(destination, example, 'binary', (err) => {
    if (err) {
      console.log(err);
      return;
    };
    console.log(cosmetic.green(`Successfully wrote ./example.js to ${destination}`));
  })
};

if (process.argv.length < 4) {
  console.log(cosmetic.red('Not enough arguments'));
} else if (process.argv.length == 4 && process.argv[2] == 'write') {
  write(process.argv[3]);
} else if (process.argv.length == 4) {
  run(process.argv[2], process.argv[3]);
} else if (process.argv.length == 5 && process.argv[2] == 'reverse') {
  reverse(process.argv[3], process.argv[4]);
} else if (process.argv.length == 5) {
  console.log(cosmetic.red(`Unrecognized command '${process.argv[2]}'`));
} else {
  console.log(cosmetic.red('Too many arguments'));
};
