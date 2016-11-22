<template>
<div :id="elementId" :class="sidebarClasses">
  <slot></slot>
</div>
</template>

<script>
export default {
  props: {
    direction: {
      type: String,
      default: 'left'
    },
    elementId: {
      type: String,
      default: 'sidebar'
    },
    grid: {
      type: Boolean,
      default: false
    },
    pushable: {
      type: Boolean,
      default: false
    },
    transition: {
      type: String,
      default: 'push'
    },
    sidebarId: {
      type: String,
      required: true
    },
    visible: {
      type: Boolean,
      default: false
    },
    show : {
      type: Boolean,
      default: false
    }
  },
  watch: {
    show () {
      this.toggle();
    }
  },
  methods: {
    toggle (event) {
      console.log('toggle sidebar!');
      $('#' + this.elementId).sidebar('toggle');
    }
  },
  computed: {
    sidebarClasses() {
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
        sidebar: true
      });
    }
  }
}
</script>
