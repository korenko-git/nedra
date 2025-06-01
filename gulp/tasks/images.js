
import {src, dest} from 'gulp';
import newer from 'gulp-newer';
import imagemin from 'gulp-imagemin';
import sharpResponsive from 'gulp-sharp-responsive';
import pngquant from 'imagemin-pngquant';

import {path} from '../paths';

function images() {
  return src(path.src.img)
    .pipe(newer(path.build.img))
    .pipe(imagemin([
      imagemin.mozjpeg({quality: 75, progressive: true}),
      imagemin.gifsicle({interlaced: true}),
      pngquant(),
      imagemin.svgo({plugins: [{removeViewBox: false}]}),
    ]))
    .pipe(dest(path.build.img))
    .pipe(sharpResponsive({
      formats: [
        { width: 369, rename: { suffix: '.thumb' } },
      ]
    }))
    .pipe(dest(path.build.img));
}

export default images;
