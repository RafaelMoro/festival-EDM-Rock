const { series, src, dest, watch } = require('gulp')
const sass = require('gulp-sass')
const imagemin = require('gulp-imagemin')
const notify = require('gulp-notify')
const webp = require('gulp-webp')

function css(done) {
    return src('./scss/app.scss')
        .pipe(sass({
            outputStyle: 'expanded' //Antes de cssnano
        }))
        .pipe(dest('./biuld/css'))
}
function minImage() {
    return src('./src/img/**/*')
        .pipe( imagemin() )
        .pipe( dest('./biuld/img') )
        .pipe( notify({ message: 'Imagen minificada' }) )
}
function versionWebp() {
    return src('src/img/**/*')
        .pipe( webp() )
        .pipe( dest('./biuld/img'))
        .pipe( notify({ message: 'Version Webp lista' }) )
}
function watchFiles() {
    watch('./scss/**/*.scss', css)
}

exports.css = css
exports.watch = watchFiles
exports.minImage = minImage
exports.webp = versionWebp
exports.default = series(css, watchFiles)