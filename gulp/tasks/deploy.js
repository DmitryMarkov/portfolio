/* global $ */
'use strict'

module.exports = () => {
  $.gulp.task('deploy', () => {
    return $.gulp.src('./build/**/*')
    .pipe($.gp.ghPages())
  })
}
