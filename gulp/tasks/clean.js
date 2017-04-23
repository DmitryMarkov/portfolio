/* global $ */
'use strict'

module.exports = () => {
  $.gulp.task('clean', (cb) => {
    return $.del($.config.root, cb)
  })
}
