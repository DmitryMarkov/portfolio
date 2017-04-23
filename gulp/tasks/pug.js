/* global $ */
'use strict'

module.exports = () => {
  $.gulp.task('pug', () => {
    return $.gulp.src($.config.src + '/templates/*.pug')
      .pipe($.gp.pug({
        pretty: true,
        locals: JSON.parse($.fs.readFileSync($.config.src + '/assets/api/user-data/user-data.json'))
      }))
      .on('error', $.gp.notify.onError((error) => {
        return {
          title: 'Pug',
          message: error.message
        }
      }))
      .pipe($.gulp.dest($.config.root))
  })
}
