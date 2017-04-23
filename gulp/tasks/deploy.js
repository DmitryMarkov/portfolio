/* global $ */
'use strict'

module.exports = () => {
  $.gulp.task('deploy', () => {
    return $.gulp.src($.config.root + '/**/*')
    .pipe($.gp.ghPages())
  })
}
