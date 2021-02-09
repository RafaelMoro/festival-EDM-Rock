const { series, src, dest, watch } = require('gulp')
const sass = require('gulp-sass')
const imagemin = require('gulp-imagemin')
const notify = require('gulp-notify')
const webp = require('gulp-webp')
const autoprefixer = require('autoprefixer')
const postcss = require('gulp-postcss')
const cssnano = require('cssnano')
const sourcemaps = require('gulp-sourcemaps')

// function css(done) {
//     return src(['./scss/styles.scss','./scss/tablet.scss', './scss/desktop.scss'])
//         .pipe(sass({
//             outputStyle: 'expanded'
//         }))
//         .pipe(dest('./biuld/css'))
// }
function css(done) {
    return src(['./scss/styles.scss','./scss/tablet.scss', './scss/desktop.scss'])
        .pipe( sourcemaps.init() )
        .pipe( sass() )
        .pipe( postcss( [autoprefixer(), cssnano()] ))
        .pipe( sourcemaps.write('.'))
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