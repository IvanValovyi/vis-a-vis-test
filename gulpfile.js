"use strict";

const gulp = require("gulp");
const { parallel, series } = require("gulp");

const connect = require("gulp-connect");
const fileinclude = require("gulp-file-include");
const pipeline = require("readable-stream").pipeline;

const htmlmin = require("gulp-htmlmin");
const sass = require("gulp-sass")(require("sass"));
const uglify = require("gulp-uglify-es").default;

const webp = require("gulp-webp");
const webpHTML = require("gulp-webp-html");
const svgSprite = require("gulp-svg-sprite");

function hostHtml() {
  connect.server({
    root: "./dist",
    livereload: true,
    port: 3000,
  });
}

function buildHtml(cb) {
  return pipeline(
    gulp.src("./src/index.html"),
    fileinclude({
      prefix: "@@",
      basepath: "@file",
    }),
    webpHTML(),
    htmlmin({ collapseWhitespace: true }),
    gulp.dest("./dist"),
    connect.reload(),
    cb
  );
}

function buildStyles(cb) {
  return pipeline(
    gulp.src("./src/scss/main.scss"),
    sass({ outputStyle: "compressed" }).on("error", sass.logError),
    gulp.dest("./dist/"),
    connect.reload(),
    cb
  );
}

function buildJS(cb) {
  return pipeline(
    gulp.src(["./src/js/*.js"]),
    uglify(),
    gulp.dest("./dist/js"),
    cb
  );
}

function buildSvgSprite(cb) {
  let config = {
    mode: {
      symbol: {
        dest: ".",
        sprite: "sprite.svg",
      },
    },
  };

  return pipeline(
    gulp.src("./src/images/icons/*.svg"),
    svgSprite(config).on("error", (error) => {
      console.log(error);
    }),
    gulp.dest("./dist"),
    cb
  );
}

function buildImage(cb) {
  return pipeline(
    gulp.src("./src/images/*.png"),
    webp(),
    gulp.dest("./dist/images/"),
    cb
  );
}

function buildFavicon(cb) {
  return pipeline(
    gulp.src("./src/images/*.ico"),
    gulp.dest("./dist/images/"),
    cb
  );
}

function watch() {
  gulp.watch(
    "./src",
    { ignoreInitial: false },
    parallel(
      buildHtml,
      buildStyles,
      buildJS,
      buildImage,
      buildFavicon,
      buildSvgSprite
    )
  );
}

exports.default = parallel(watch, hostHtml);
exports.build = series(
  buildHtml,
  buildStyles,
  buildJS,
  buildImage,
  buildFavicon,
  buildSvgSprite
);
exports.start = hostHtml;
