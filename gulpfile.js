const gulp = require("gulp");
const webpack = require("webpack");
const webpackStream = require("webpack-stream");
const watch = require("gulp-watch");

const webpackConfigServer = require("./webpack-config/webpack.server.config");
const webpackConfigClient = require("./webpack-config/webpack.client.config");

gulp.task("build:client", () => {
  webpackStream(webpackConfigClient, webpack).pipe(gulp.dest("dest/client/"));
});

gulp.task("build:server", () => {
  webpackStream(webpackConfigServer, webpack).pipe(gulp.dest("dest/server/"));
});

gulp.task("build", ["build:server", "build:client"]);

gulp.task("watch", ["build"], () => {
  gulp.watch(["src/client/**/*"], ["build:client"]);
  gulp.watch(["src/server/**/*"], ["build:server"]);
});
