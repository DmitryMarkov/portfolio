/* global $ */
'use strict'

module.exports = () => {
  $.gulp.task('pug', () => {
    return $.gulp.src('./source/template/pages/*.pug')
      .pipe($.gp.pug({ pretty: true }))
      .on('error', $.gp.notify.onError((error) => {
        return {
          title: 'Pug',
          message: error.message
        }
      }))
      .pipe($.gulp.dest($.config.root))
  })
}
