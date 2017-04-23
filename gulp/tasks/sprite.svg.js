/* global $ */
'use strict'

module.exports = () => {
  $.gulp.task('sprite:svg', () => {
    return $.gulp.src($.config.src + '/sprite/*.svg')
      .pipe($.gp.svgmin({
        js2svg: {
          pretty: true
        }
      }))
      .pipe($.gp.cheerio({
        run: function ($) {
          $('[fill]').removeAttr('fill')
          $('[stroke]').removeAttr('stroke')
          $('[style]').removeAttr('style')
        },
        parserOptions: { xmlMode: true }
      }))
      .pipe($.gp.replace('&gt;', '>'))
      .pipe($.gp.svgSprite({
        mode: {
          symbol: {
            sprite: '../sprite.svg'
          }
        }
      }))
      .pipe($.gulp.dest($.config.root + '/assets/images'))
  })
}
