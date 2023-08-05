let mix = require('laravel-mix');

let tailwindcss = require('tailwindcss');

mix.options({
  processCssUrls: false,
});

mix.js('src/index.js', 'dist/')
  .sass('src/scss/style.sass', 'dist/')
  .options({
    postCss: [ tailwindcss('./tailwind.config.js')]
  })
  //.version()
  .sourceMaps(true, 'source-map');

mix.copy('src/images', 'dist/images');
mix.copy('src/fonts', 'dist/fonts');
mix.copy('src/favicons', 'dist/favicons');
