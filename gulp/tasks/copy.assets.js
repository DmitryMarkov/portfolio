/* global $ */
'use strict'

module.exports = () => {
  $.gulp.task('copy:assets', () => {
    return $.gulp.src($.config.src + '/assets/**/*.*', { since: $.gulp.lastRun('copy:assets') })
      .pipe($.gulp.dest($.config.root + '/assets'))
  })
}
