let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/assets/js/app.js', 'public/js')
   .sass('resources/assets/sass/app.scss', 'public/css')
    .copyDirectory('resources/assets/docs/css', 'public/css')
    .copyDirectory('resources/assets/docs/js', 'public/js')
    .copyDirectory('resources/assets/docs/fonts', 'public/fonts')
    .copyDirectory('resources/assets/docs/img', 'public/img');
