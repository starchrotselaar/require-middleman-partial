const fs = require('fs');
const _ = require('lodash');

module.exports = {generateFiles};

function generateFiles(scanDirPath, extension, outDirPath) {

    const file = require('file');
    file.mkdirsSync(outDirPath);
    file.walkSync(scanDirPath, (currentDirPath, dirs, files)=> {
        _.forEach(files, (f)=> {
            console.log('scanning ' + f);
            if (_.endsWith(f, extension)) {
                const scanDirFullPath = file.path.abspath(scanDirPath);
                const currentDirFullPath = file.path.abspath(currentDirPath);
                const relativePath = file.path.relativePath(scanDirFullPath, currentDirFullPath);
                const slateIncludesRelativeDir = outDirPath + '/' + relativePath;
                file.mkdirsSync(slateIncludesRelativeDir);
                const slateIncludesRelativeTarget = slateIncludesRelativeDir + '/_' + f + '.erb';
                fs.writeFile(slateIncludesRelativeTarget, require(currentDirFullPath + '/' + f));
                console.log('written partial ' + f + ' to ' + slateIncludesRelativeTarget);
            }
        })
    });
}