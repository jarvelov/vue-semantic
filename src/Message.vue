<template>
<div :class="messageClasses">
  <i class="close icon" v-if="dismissable" @click="close"></i>
  <slot></slot>
</div>
</template>

<script>
export default {
  props: {
    size: {},
    type: {
      type: String,
    },
    show: {
      default: true
    },
    dismissable: {
      default: false
    }
  },
  computed: {
    messageClasses() {
      return this.$options.propsKeys.reduce(o, key => {
        if (this[key]) {
          o[key] = this[key];
        }
        return o;
      }, {
        ui: true,
        message: true
      });
    }
  },
  methods: {
    close () {
      this.show = false
    }
  }
}
</script>
