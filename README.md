# require-middleman-partial

Require a dir of files and write the results back to the fs as 
[Middleman](https://middlemanapp.com/) [partial](https://middlemanapp.com/basics/partials/) files

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
./node_modules/bin/require-middleman-partial.js ./fixtures/includes .md.js ./out
```

## Library Usage

```js
const requireMiddlemanPartial = require('../');
requireMiddlemanPartial.generateFiles('./fixtures/includes', '.md.js', './out');
```