/* global $ */
'use strict'

module.exports = () => {
  $.gulp.task('js:foundation', () => {
    return $.gulp.src($.path.jsFoundation)
      .pipe($.gp.concat('vendor.js'))
      .pipe($.gulp.dest($.config.root + '/'))
  })
}
