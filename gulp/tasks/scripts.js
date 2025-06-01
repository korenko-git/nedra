import { src, dest } from "gulp";
import plumber from "gulp-plumber";
import rename from "gulp-rename";
import sourcemaps from "gulp-sourcemaps";
import babel from "gulp-babel";
import uglify from "gulp-uglify";
import concat from "gulp-concat";

import { path } from "../paths";
import { browserSyncObject } from "../browserSync";

function scripts() {
  return src(path.src.js)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(
      babel({
        presets: ["@babel/preset-env"],
      })
    )
    .pipe(concat("main.js"))
    .pipe(uglify())
    .pipe(rename({ suffix: ".min" }))
    .pipe(sourcemaps.write("./"))
    .pipe(dest(path.build.js))
    .pipe(browserSyncObject.stream());
}

export default scripts;
