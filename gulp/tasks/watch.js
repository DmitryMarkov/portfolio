/* global $ */
'use strict'

module.exports = () => {
  $.gulp.task('watch', () => {
    $.gulp.watch($.config.src + '/app/**/*.js', $.gulp.series('js:lint', 'js:process'))
    $.gulp.watch($.config.src + '/styles/**/*.sass', $.gulp.series('sass'))
    $.gulp.watch($.config.src + '/templates/**/*.pug', $.gulp.series('pug'))
    $.gulp.watch($.config.src + '/assets/**/*.*', $.gulp.series('copy:assets'))
  })
}
