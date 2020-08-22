
import {parallel, series, watch} from 'gulp';

import {path} from './gulp/paths.js';
import {browserSyncObject, browserSync} from './gulp/browserSync';
import {
  clean,
  layouts,
  styles,
  scripts,
  fonts,
  images,
  favicon,
  removeFaviconHTML} from './gulp/tasks';

function watchFiles() {
  watch(path.watch.html, {usePolling: true}, layouts).on('change', browserSyncObject.reload);
  watch(path.watch.css, {usePolling: true}, styles);
  watch(path.watch.js, {usePolling: true}, scripts);
  watch(path.watch.img, {usePolling: true}, images);
  watch(path.watch.fonts, {usePolling: true}, fonts);
}

const buildParallel = parallel(
  styles,
  scripts,
  fonts,
  images,
  favicon
);

const build = series(
  buildParallel,
  layouts,
  removeFaviconHTML,
);

const dev = series(
  buildParallel,
  layouts,
);

exports.clean = clean;
exports.build = build;
exports.default = series(dev, parallel(watchFiles, browserSync));
