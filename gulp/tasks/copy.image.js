/* global $ */
'use strict'

module.exports = () => {
  $.gulp.task('copy:image', () => {
    return $.gulp.src($.config.src + '/images/**/*.*', { since: $.gulp.lastRun('copy:image') })
      .pipe($.gulp.dest($.config.root + '/assets/img'))
  })
}
