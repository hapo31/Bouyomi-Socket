const gulp = require('gulp');
const webpack = require("webpack");
const webpackStream = require("webpack-stream");
const watch = require("gulp-watch");

const webpackConfigServer = require('./webpack-config/webpack.server.config');
const webpackConfigClient = require('./webpack-config/webpack.client.config');

gulp.task("compile:client", ()=> {
    return webpackStream(webpackConfigClient, webpack)
        .pipe(gulp.dest("dest/client/"));
});

gulp.task("compile:server", ()=> {
    return webpackStream(webpackConfigServer, webpack)
        .pipe(gulp.dest("dest/server/"));
});

gulp.task("default", [
    "compile:server",
    "compile:client",
]);

gulp.task("watch", ["default"], ()=> {
    gulp.watch(["src/client/**/*"], ["compile:client"]);
    gulp.watch(["src/server/**/*"], ["compile:server"]);
});