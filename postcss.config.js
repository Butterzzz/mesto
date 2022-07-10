const autoprefixer = require('autoprefixer'); // научит PostCSS добавлять вендорные префиксы
const cssnano = require('cssnano'); // минификация css-кода

module.exports = {
  plugins: [
    autoprefixer,
    cssnano({ preset: 'default' }) // стандартные настройки минификации
  ]
};
