const fs = require('fs');
var assert = require('assert');

const requireMiddlemanPartial = require('../');

describe('Require Middleman Partial', function () {

    requireMiddlemanPartial.generateFiles('./scan/includes', '.md.js', './out');

    it('should generate partial files for specified files', function () {
        assert.equal(fs.existsSync('./out/_index.md.js.erb'), true);
        assert.equal(fs.existsSync('./out/resources/_fox.md.js.erb'), true);
    })

});