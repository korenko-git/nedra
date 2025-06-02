import {src, dest} from 'gulp';
import plumber from 'gulp-plumber';
import nunjucksRender from 'gulp-nunjucks-render';
import inject from 'gulp-inject';
import rename from 'gulp-rename';
import {readFileSync} from 'fs';
import {path, languages, faviconsHTMLPath} from '../paths';

function layouts() {
  const tasks = languages.map(lang => {
    const localeData = JSON.parse(readFileSync(`src/locales/${lang}.json`, 'utf8'));
    const configData = JSON.parse(readFileSync(`src/config/config.json`, 'utf8'));

    return src(path.src.html)
      .pipe(plumber())
      .pipe(nunjucksRender({
        path: ['src/template'], 
        data: { 
          lang: lang,
          t: localeData,
          config: configData
        }
      }))
      .pipe(inject(src([faviconsHTMLPath]), {
        starttag: '<!-- inject:head:{{ext}} -->',
        transform: function(filePath, file) {
          return file.contents.toString('utf8');
        },
      }))
      .pipe(rename(function(path) {
        if (lang !== 'en') {
          path.basename = path.basename + '-' + lang;
        }
      }))
      .pipe(dest(path.build.html));
  });
  
  return Promise.all(tasks);
}

export default layouts;
