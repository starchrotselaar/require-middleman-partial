const fs = require('fs');
const _ = require('lodash');

module.exports = {generateFiles};

function generateFiles(scanDirPath, scanExtension, targetDirPath, targetExtension) {

    const file = require('file');
    file.mkdirsSync(targetDirPath);
    file.walkSync(scanDirPath, (currentDirPath, dirs, files)=> {
        _.forEach(files, (f)=> {
            console.log('scanning ' + f);
            if (_.endsWith(f, scanExtension)) {
                const scanDirFullPath = file.path.abspath(scanDirPath);
                const currentDirFullPath = file.path.abspath(currentDirPath);
                const relativePath = file.path.relativePath(scanDirFullPath, currentDirFullPath);
                const slateIncludesRelativeDir = targetDirPath + '/' + relativePath;
                file.mkdirsSync(slateIncludesRelativeDir);
                const slateIncludesRelativeTarget = slateIncludesRelativeDir + '/_' + _.replace(f, scanExtension, targetExtension) + '.erb';
                fs.writeFile(slateIncludesRelativeTarget, require(currentDirFullPath + '/' + f));
                console.log('written partial ' + f + ' to ' + slateIncludesRelativeTarget);
            }
        })
    });
}