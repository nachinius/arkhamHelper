'use strict';

var gulp = require('gulp');
var Dgeni = require('dgeni');

var outputFolder = 'build/docs';
var sourceFolder = 'apps/scripts';

/**
 * gulp doc-gen Generates the documentation
 */
gulp.task('doc-gen', function() {
  var dgeni = new Dgeni([require('./docs/config')]);
  return dgeni.generate().catch(function(error) {
    process.exit(1);
  });
});

gulp.task('default', ['doc-gen']);

