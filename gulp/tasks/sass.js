/* global $ */
'use strict'

module.exports = () => {
  $.gulp.task('sass', () => {
    return $.gulp.src($.config.src + '/styles/main.sass')
      .pipe($.gp.sassGlob())
      .pipe($.gp.sourcemaps.init())
      .pipe($.gp.sass()).on('error', $.gp.notify.onError({ title: 'Style' }))
      .pipe($.gp.autoprefixer({ browsers: $.config.autoprefixerConfig }))
      .pipe($.gp.sourcemaps.write())
      .pipe($.gulp.dest($.config.root + '/'))
      .pipe($.browserSync.stream())
  })
}
