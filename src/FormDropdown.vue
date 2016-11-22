<template>
<div :class="dropdownClasses">
  <input type="hidden" :name="name" v-model="model">
  <div class="default text">{{ placeholder }}</div>
  <i class="dropdown icon"></i>
  <div class="menu dropdown_menu">
    <div v-for="option in items" class="item" :data-value="option.id" :data-text="option.name">{{ option.name}}</div>
  </div>
</div>
</template>

<script>
import _ from 'underscore'

export default {
  props: {
    options: {
      required: true
    },
    model: {
      required: true
    },
    placeholder: {},
    name: {},
    fluid: {},
    search: {},
    inline: {},
    multiple: {},
    disabled: {},
    fullTextSearch: {
      default: false
    },
    allowAdditions: {
      default: false
    },
    valueField: {
      default: 'id',
    },
    labelField: {
      default: 'name',
    },
    settings: {
      type: Object,
      default: () => {}
    }
  },

  computed: {
    dropdownClasses() {
      return {
        ui: true,
        selection: typeof this.inline !== 'undefined' ? false : true,
        dropdown: true,
        search: typeof this.search !== 'undefined' ? true : false,
        fluid: typeof this.fluid !== 'undefined' ? true : false,
        multiple: typeof this.multiple !== 'undefined' ? true : false,
        inline: typeof this.inline !== 'undefined' ? true : false,
        disabled: typeof this.disabled !== 'undefined' ? true : false,
      }
    },

    items() {
      return this.options.map((option) => {
        return {
          id: option[this.valueField],
          name: option[this.labelField],
        }
      })
    },
  },

  methods: {
    loadDropdown() {

      const settings = _.extend({}, {
        allowAdditions: this.allowAdditions,
        fullTextSearch: this.fullTextSearch,
        onChange: (value, text, $choice) => {
          this.$dispatch('dropdown-selected', value, text, $choice)
        }
      }, this.settings)

      $(this.$el).dropdown(settings)
    }
  },

  ready() {
    this.loadDropdown()
  },

  watch: {
    model() {
      this.loadDropdown()
    },
  },

  events: {
    'clear-dropdown' () {
      $(this.$el).dropdown('clear')
    }
  },
}
</script>
