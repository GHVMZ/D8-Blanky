# D8-Blanky
Blank starter theme for Drupal 8 using [Foundation 6](http://foundation.zurb.com/) for grid.

### Live reload in development
The theme is using gulp.js, SASS and [livereload](http://livereload.com/) for faster development, originally created by [Watch and Learn](https://www.youtube.com/watch?v=vatnNkOKZ7o). In order for this to work you first have to disable cache and enabling Twig debug in the CMS, [tutorial](https://www.drupal.org/node/2598914).

In the theme folder, run the following commands:
```
npm install
gulp watch
```
When the gulp is watching the files, download and install [livereload](http://livereload.com/) and make sure it's running, or you can install the app for chrome as a [plugin](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei).
