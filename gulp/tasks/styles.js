import {src, dest} from 'gulp';
import plumber from 'gulp-plumber';
import sourcemaps from 'gulp-sourcemaps';
import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';
import gcmq from 'gulp-group-css-media-queries';
import autoprefixer from 'gulp-autoprefixer';
import cleanCSS from 'gulp-clean-css';
import rename from 'gulp-rename';

import {path} from '../paths';
import {browserSyncObject} from '../browserSync';

const sass = gulpSass(dartSass);

function styles() {
  return src(path.src.style)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'expanded',
      includePaths: './node_modules',
    }))
    .on('error', sass.logError)
    .pipe(gcmq())
    .pipe(autoprefixer({overrideBrowserslist: ['last 10 versions'], grid: true}))
    .pipe(dest(path.build.css))
    .pipe(rename({suffix: '.min'}))
    .pipe(cleanCSS())
    .pipe(sourcemaps.write('./'))
    .pipe(dest(path.build.css))
    .pipe(browserSyncObject.stream());
}

export default styles;
