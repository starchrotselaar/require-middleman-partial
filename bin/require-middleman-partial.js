#!/usr/bin/env node
'use strict';
var requireMiddlemanPartial = require('../');

const scanDirPath = process.argv[2];
const extension = process.argv[3];
const outDirPath = process.argv[4];

// todo improve parsing routine

requireMiddlemanPartial.generateFiles(scanDirPath, extension, outDirPath);