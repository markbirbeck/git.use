'use strict';

let decorate = (gulp) => {

  /**
   * Ensure the core parallel() function is available to plugins,
   * even if some plugin overrides it:
   */

  gulp._parallel = gulp.parallel;

  /**
   * Add a use() method that calls the plugin's registration
   * function:
   */

  gulp.use = function(register) {
    register(this);
  };
};

module.exports = decorate;