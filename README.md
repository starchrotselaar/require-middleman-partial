# require-middleman-partial

Require a dir of files and write the results back to the fs as 
[Middleman](https://middlemanapp.com/) [partial](https://middlemanapp.com/basics/partials/) files.
  
A dir with following layout : 

```
./scan
| -- index.md.js
| -- resources
     ` -- fox.md.js
```

will result in 

```
./out
| -- _index.md.js.erb
| -- resources
     ` -- _fox.md.js.erb
```



## Installation

```shell
npm install require-middleman-partial --save-dev
```

## Command line Usage

```shell
./node_modules/bin/require-middleman-partial.js <scan dir> <scan extension> <out dir>
```

An example :

```shell
./node_modules/bin/require-middleman-partial.js ./scan/includes .md.js ./out
```

## Library Usage

```js
const requireMiddlemanPartial = require('require-middleman-partial');
requireMiddlemanPartial.generateFiles('./scan/includes', '.md.js', './out');
```