const Menu = require('../src/Menu.vue');

module.exports = {
  install: function (Vue, options) {
    Vue.component('semantic-menu', Menu);
  }
}
