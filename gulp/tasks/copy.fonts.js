/* global $ */
'use strict'

module.exports = () => {
  $.gulp.task('copy:fonts', () => {
    return $.gulp.src('./source/fonts/**/*.*', { since: $.gulp.lastRun('copy:fonts') })
      .pipe($.gulp.dest($.config.root + '/assets/fonts'))
  })
}
