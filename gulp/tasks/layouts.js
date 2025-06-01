import {src, dest} from 'gulp';
import plumber from 'gulp-plumber';
import fileInclude from 'gulp-file-include';
import inject from 'gulp-inject';
import rename from 'gulp-rename';
import {readFileSync} from 'fs';
import {path, languages, faviconsHTMLPath} from '../paths';

function layouts() {
  const tasks = languages.map(lang => {
    const localeData = JSON.parse(readFileSync(`src/locales/${lang}.json`, 'utf8'));
    
    return src(path.src.html)
      .pipe(plumber())
      .pipe(fileInclude({
        prefix: '@@',
        basepath: '@file',
        context: {
          lang: lang,
          t: localeData
        }
      }))
      .pipe(inject(src([faviconsHTMLPath]), {
        starttag: '<!-- inject:head:{{ext}} -->',
        transform: function(filePath, file) {
          return file.contents.toString('utf8');
        },
      }))
      .pipe(rename(function(path) {
        if (lang !== 'ru') {
          path.basename = path.basename + '-' + lang;
        }
      }))
      .pipe(dest(path.build.html));
  });
  
  return Promise.all(tasks);
}

export default layouts;
