/*global -$ */
'use strict';
// generated on 2015-08-11 using generator-gulp-webapp 0.3.0
var gulp = require('gulp');
var jsonminify = require('gulp-jsonminify');
var jsonlint = require('gulp-json-lint');
var jsonedit = require('gulp-json-editor');

var jsonLintReporter = function (lint, file) {
    console.log(file.path + ': ' + lint.error);
    if(lint.error){
      process.exit(1);
    }
};

gulp.task('minify', function () {
    return gulp.src(['json/*.json'])
        .pipe(jsonedit({"build":{'time':(new Date).getTime(),'number':process.env.CI_BUILD_NUMBER,'hash':process.env.CI_COMMIT_ID}}))
        .pipe(jsonminify())
        .pipe(jsonlint())
        .pipe(jsonlint.report(jsonLintReporter))
        .pipe(gulp.dest('dist'));
});

gulp.task('build', ['minify'], function () {
  return gulp.src('dist/**/*');
});

gulp.task('default', function () {
  gulp.start('build');
});
