const fs = require('fs');
var assert = require('assert');

const requireMiddlemanPartial = require('../');

describe('Require Middleman Partial', function () {

    requireMiddlemanPartial.generateFiles('./scan/includes', '.md.js', './target', '.md');

    it('should generate partial files for specified files', function () {
        assert.equal(fs.existsSync('./target/_index.md.erb'), true);
        assert.equal(fs.existsSync('./target/resources/_fox.md.erb'), true);
    })

});