const gulp = require("gulp");
const browserify = require("browserify");
const source = require("vinyl-source-stream");
const buffer = require("vinyl-buffer");
const uglify = require("gulp-uglify");
const htmlmin = require("gulp-htmlmin");
const postcss = require("gulp-postcss");
const cssnano = require("cssnano");
const del = require("del");

// To prevent rewriting the source and build folder locations
const paths = {
  source: "./src",
  build: "./dist"
};


function javascriptBuild() {
    return (
        browserify({
            entries: [`${paths.source}/scripts/font-awesome.js`]
        })
            .bundle()
            .pipe(source("bundle.js"))
            // Turn it into a buffer!
            .pipe(buffer())
            // And uglify
            .pipe(uglify())
            .pipe(gulp.dest(`${paths.build}/scripts`))
    );
}

// Write our html task in a seperate function
function htmlBuild() {
  return gulp
      .src(`${paths.source}/*.html`)
      .pipe(htmlmin())
      .pipe(gulp.dest(paths.build));
}

function cssBuild() {
  return gulp
      .src(`${paths.source}/css/*.css`)
      .pipe(postcss([cssnano()]))
      .pipe(gulp.dest(`${paths.build}/css`));
}

function copyImages(){
  return gulp.src(`${paths.source}/img/*`)
    .pipe(gulp.dest(`${paths.build}/img`));
};

function cleanup() {
  // Simply execute del with the build folder path
  return del([paths.build]);
}

// We have to run the cleanup task first, after which we can run the build tasks 
exports.default = exports.build = gulp.series(cleanup, gulp.parallel(javascriptBuild, htmlBuild, cssBuild, copyImages));
