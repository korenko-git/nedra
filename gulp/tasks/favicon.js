import {src, dest} from 'gulp';
import favicons from 'gulp-favicons';
import del from 'del';

import {path, faviconsHTML, faviconsHTMLPath} from '../paths.js';
import faviconConfig from '../../faviconConfig.json';

function favicon() {
  const basePath = process.env.BASE_PATH ? `/${process.env.BASE_PATH}/` : '/';

  return src(path.src.favicon)
    .pipe(
      favicons({
        path: basePath,
        html: faviconsHTML,
        ...faviconConfig,
      })
    )
    .pipe(dest(path.build.favicon));
}

function removeFaviconHTML() {
  return del(faviconsHTMLPath);
}

export {
  favicon,
  removeFaviconHTML,
};
