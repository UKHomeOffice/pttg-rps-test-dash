const gulp = require('gulp');
const nodemon = require('gulp-nodemon');

gulp.task('watch', ['startwatch']);

gulp.task('startwatch', () => {
    nodemon({
        script: "app.js",
        ext: "js",
        env: { "NODE_ENV": "development" },
        cwd: __dirname,
        ignore: ["node_modules/**"],
        watch: ["app.js", "*.js"]
  });
});