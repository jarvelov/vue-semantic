<template>
<i :class="iconClasses"></i>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: ''
    }
  },
  computed: {
    iconClasses() {
      return this.$options._propKeys.reduce((o, key) => {
        if (this[key]) {
          o[this[key]] = true;
        }
        return o;
      }, {
        icon: true
      });
    }
  }
}
</script>
