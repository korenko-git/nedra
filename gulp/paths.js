const srcDir = "src";
const buildDir = "dest";
const languages = ["ru", "en", "uk"];

const path = {
  build: {
    html: buildDir + "/",
    js: buildDir + "/assets/js/",
    css: buildDir + "/assets/css/",
    img: buildDir + "/assets/img",
    fonts: buildDir + "/assets/fonts/",
    favicon: buildDir + "/",
  },
  src: {
    html: srcDir + "/*.njk",
    js: [
      "node_modules/bootstrap/js/dist/util.js",
      "node_modules/bootstrap/js/dist/scrollspy.js",
      "node_modules/bootstrap/js/dist/collapse.js",
      "node_modules/bootstrap/js/dist/dropdown.js",
      srcDir + "/js/share.js",
      srcDir + "/js/main.js",
    ],
    style: srcDir + "/style/main.scss",
    img: srcDir + "/img/**/*.{jpg,png,svg}",
    fonts: srcDir + "/fonts/**/*.*",
    favicon: srcDir + "/favicon.png",
    locales: srcDir + "/locales/*.json",
  },
  watch: {
    html: srcDir + "/**/*.njk",
    js: srcDir + "/js/**/*.js",
    css: srcDir + "/style/**/*.scss",
    img: srcDir + "/img/**/*.*",
    fonts: srcDir + "/fonts/**/*.*",
    favicon: srcDir + "/favicon.png",
    locales: srcDir + "/locales/*.json",
  },
};

const faviconsHTML = "favicons.html";
const faviconsHTMLPath = buildDir + "/" + faviconsHTML;

export { srcDir, buildDir, path, languages, faviconsHTML, faviconsHTMLPath };
