const gulp = require('gulp');
const pug = require('gulp-pug');

const paths = {
  root:'./build',
  templates:{
    pages: 'src/templates/pages/*.pug',
    src: 'src/templates/**/*.pug',
    dest: 'build/asset'
  }
}

function templates(){
  return gulp.src(paths.templates.pages)
  .pipe(pug({pretty:true}))
  .pipe(gulp.dest(paths.root))
}