# gulp.use

Adds a method `use()` to Gulp 4 'core' that allows plugins to be added.

```javascript
const gulp = require('gulp');

/**
 * Use the Gulp plugin system:
 */

require('gulp.use')(gulp);

/**
 * Add some plugin which makes gulp.spawn() available:
 */

gulp.use(require('gulp.spawn'));
```
