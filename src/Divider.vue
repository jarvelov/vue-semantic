<template>
<div :class="dividerClasses">
  <slot></slot>
</div>
</template>

<script>
export default {
  props: {
    fitted: {
      type: Boolean,
      default: false
    },
    header: {
      type: Boolean,
      default: false
    },
    hidden: {
      type: Boolean,
      default: false
    },
    horizontal: {
      type: Boolean,
      default: false
    },
    inverted: {
      type: Boolean,
      default: false
    },
    section: {
      type: Boolean,
      default: false
    },
    vertical: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    dividerClasses() {
      let classes = ['ui'];

      let keys = this.$options.propsKeys;
      keys.forEach(key => {
        if (this[key]) {
          classes.push(key);
        }
      });

      return classes.split(' ');
    }
  }
}
</script>
