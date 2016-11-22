const Sidebar = require('../src/Sidebar.vue');

module.exports = {
  install: function (Vue, options) {
    Vue.component('semantic-sidebar', Sidebar);
  }
}
