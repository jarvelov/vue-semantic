<template>
<div :class="menuClasses">
  <slot></slot>
</div>
</template>

<script>
export default {
  props: {
    attached: {
      type: Boolean,
      default: false
    },
    borderless: {
      type: Boolean,
      default: false
    },
    colored: {
      type: Boolean,
      default: false
    },
    compact: {
      type: Boolean,
      default: false
    },
    direction: {
      type: String,
      default: 'top'
    },
    evenly: {
      type: Boolean,
      default: false
    },
    fitted: {
      type: Boolean,
      default: false
    },
    fixed: {
      type: Boolean,
      default: false
    },
    fluid: {
      type: Boolean,
      default: false
    },
    icons: {
      type: Boolean,
      default: false
    },
    inverted: {
      type: Boolean,
      default: false
    },
    labeled: {
      type: Boolean,
      default: false
    },
    pointing: {
      type: Boolean,
      default: false
    },
    secondary: {
      type: Boolean,
      default: false
    },
    tabular: {
      type: Boolean,
      default: false
    },
    text: {
      type: Boolean,
      default: false
    },
    vertical: {
      type: Boolean,
      default: false
    },
    pagination: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: ''
    },
    stackable: {
      type: Boolean,
      default: false
    },
  },
  computed: {
    menuClasses () {
      return this.$options._propKeys.reduce((o, key) => {
        if (this[key]) {
          if (typeof this[key] === 'boolean') {
            o[key] = true;
          } else {
            o[this[key]] = true;
          }
        }
        return o;
      }, {
        ui: true,
        menu: true
      });
    }
  }
}
</script>
