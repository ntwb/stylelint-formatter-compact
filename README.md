# stylelint-formatter-compact
A [stylelint](https://stylelint.io/) _compact_ [formatter](https://stylelint.io/developer-guide/formatters/) inspired by ESLint [compact](https://eslint.org/docs/user-guide/formatters/#compact)formatter.

## Installation

```
npm install stylelint-formatter-compact --save-dev
```

## Usage

### stylelint CLI

```shell
$ stylelint file.css --custom-formatter=node_modules/stylelint-formatter-compact
```

### [grunt-stylelint](https://github.com/wikimedia/grunt-stylelint)

```js
const formatter = require('stylelint-formatter-compact');

grunt.initConfig({
  stylelint: {
    options: {
      formatter: formatter
    },
    all: ['css/**/*.css']
  }
});

grunt.loadNpmTasks('grunt-stylelint');
grunt.registerTask('default', ['stylelint']);
```

### [gulp-stylelint](https://github.com/olegskl/gulp-stylelint)

```js
const gulp = require('gulp');
const stylelint = require('gulp-stylelint');
const formatter = require('stylelint-formatter-compact');

gulp.task('lint', () =>
  gulp.src('file.css')
    .pipe(stylelint({
      reporters: [ {
        formatter: formatter,
        console: true
      } ]
    }));
);
```

## [Changelog](CHANGELOG.md)

## [License](LICENSE)
