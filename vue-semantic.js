const Accordion = require('./src/Accordion.vue');
const Checkbox = require('./src/Checkbox.vue');
const Column = require('./src/Column.vue');
const Divider = require('./src/Divider.vue');
const Dropdown = require('./src/Dropdown.vue');
const FormDropdown = require('./src/FormDropdown.vue');
const Icon = require('./src/elements/Icon.vue');
const Label = require('./src/Label.vue');
const Loading = require('./src/Loading.vue');
const Message = require('./src/Message.vue');
const Menu = require('./src/Menu.vue');
const Modal = require('./src/Modal.vue');
const Popup = require('./src/Popup.vue');
const Radiobutton = require('./src/Radiobutton.vue');
const Rail = require('./src/elements/Rail.vue');
const Reveal = require('./src/Reveal.vue');
const Search = require('./src/Search.vue');
const Sidebar = require('./src/Sidebar.vue');
const Statistic = require('./src/Statistic.vue');

module.exports = {
  install: function (Vue, options) {
    Vue.component('semantic-accordion', Accordion);
    Vue.component('semantic-checkbox', Checkbox);
    Vue.component('semantic-column', Column);
    Vue.component('semantic-divider', Divider);
    Vue.component('semantic-dropdown', Dropdown);
    Vue.component('semantic-form-dropdown', FormDropdown);
    Vue.component('semantic-icon', Icon);
    Vue.component('semantic-label', Label);
    Vue.component('semantic-loader', Loading);
    Vue.component('semantic-message', Message);
    Vue.component('semantic-menu', Menu);
    Vue.component('semantic-modal', Modal);
    Vue.component('semantic-popup', Popup);
    Vue.component('semantic-radio', Radiobutton);
    Vue.component('semantic-rail', Rail);
    Vue.component('semantic-reveal', Reveal);
    Vue.component('semantic-search', Search);
    Vue.component('semantic-sidebar', Sidebar);
    Vue.component('semantic-statistic', Statistic);

    if (!$.fn.transition) return;

    var emphasis = [
            'flash',
            'shake',
            'pulse',
            'tada',
            'bounce',
            'jiggle',
        ]

    var appearance = [
            'slide up',
            'slide down',
            'vertical flip',
            'horizontal flip',
            'fade',
            'fade up',
            'fade down',
            'scale',
            'drop',
            'browse',
        ]

    emphasis.forEach(function (animation) {
      var definition = {
        enter: function (el, done) {
          $(el)
            .transition('reset')
            .transition(animation + ' in', 700, done)

          return function () {
            $(el)
              .transition('stop')
          }
        },

        leave: function (el, done) {
          $(el)
            .transition('reset')
            .transition(animation + ' out', 700, done)

          return function () {
            $(el)
              .transition('stop')
          }
        }
      }

      // Vue.transition(animation, definition)
    })

    appearance.forEach(function (animation) {
      var definition = {
        enter: function (el, done) {
          $(el)
            .transition('reset')
            .transition(animation + ' in', 700, done)

          return function () {
            $(el)
              .transition('stop')
          }
        },

        leave: function (el, done) {
          $(el)
            .transition('reset')
            .transition(animation + ' out', 700, done)

          return function () {
            $(el)
              .transition('stop')
          }
        }
      }
      var id = animation.split(' ')
        .join('-')

      // Vue.transition(id, definition)
    })
  },
}
