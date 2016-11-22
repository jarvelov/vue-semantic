<template>
<div class="ui styled fluid accordion">
  <span v-for="item in items">
    <div class="title">
      <i class="dropdown icon"></i>
      {{ item.title }}
    </div>
    <div class="content">{{ item.content }}</div>
  </span>
</div>
</template>

<script>
import CommonProps from '../utils/CommonPropsMixin'

export default {
  props: {
    type: {
      type: String,
      default: 'menu'
    },
    openLast: {
      default: false
    }
  },
  mixins: [
    CommonProps
  ],
  computed: {
    menuClasses () {
      let menuTypes =
      this.$options.propsKeys.reduce((o, key) => {
        if (this[key]) {
          if (this[key] in CommonProps['menu'][key]) {
            o[key] = this[key];
          }
        }
        return o;
      });
    }
  }
}
</script>
