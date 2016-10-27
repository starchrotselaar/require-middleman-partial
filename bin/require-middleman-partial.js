#!/usr/bin/env node
'use strict';
var requireMiddlemanPartial = require('../');

const scanDirPath = process.argv[2];
const scanExtension = process.argv[3];
const targetDirPath = process.argv[4];
const targetExtension = process.argv[5];

// todo improve parsing routine

requireMiddlemanPartial.generateFiles(scanDirPath, scanExtension, targetDirPath, targetExtension);