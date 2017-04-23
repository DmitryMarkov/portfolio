/* global $ */
'use strict'

module.exports = () => {
  $.gulp.task('watch', () => {
    $.gulp.watch('./source/js/**/*.js', $.gulp.series('js:lint', 'js:process'))
    $.gulp.watch('./source/style/**/*.scss', $.gulp.series('sass'))
    $.gulp.watch('./source/template/**/*.pug', $.gulp.series('pug'))
    $.gulp.watch('./source/images/**/*.*', $.gulp.series('copy:image'))
    $.gulp.watch('./source/fonts/**/*.*', $.gulp.series('copy:fonts'))
  })
}
