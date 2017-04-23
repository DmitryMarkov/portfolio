/* global $ */
'use strict'

module.exports = () => {
  $.gulp.task('css:foundation', () => {
    return $.gulp.src($.path.cssFoundation)
      .pipe($.gp.concatCss('vendor.css'))
      .pipe($.gp.csso())
      .pipe($.gulp.dest($.config.root + '/'))
  })
}
