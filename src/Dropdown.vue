// TODO: Add a hash generation so user doesn't have to specify id

<style scoped>
.ui.fluid.dropdown,
.ui.search.dropdown>.menu {
  box-sizing: border-box;
}
</style>

<template>
<div :id="elementId" class="ui fluid search selection dropdown">
  <input type="hidden" :name="name" v-model="selection">
  <i class="dropdown icon"></i>
  <div class="default text">{{text}}</div>
  <div class="menu dropdown_menu">
    <slot></slot>
  </div>
</div>
</template>

<script>
export default {
  props: {
    elementId: {
      default: 'dropdown',
    },
    name: {
      default: 'dropdown'
    },
    selection: {
      default: ''
    },
    text: {
      default: 'Select an option'
    },
    fullTextSearch: {
      default: true
    }
  },
  ready () {
    $('#' + this.elementId).dropdown({
      transition: this.transition,
      fullTextSearch: this.fullTextSearch,
      onChange: (value, text, $choice) => {
        if (this.selection) {
          this.selection = value;
        }
        this.$dispatch('dropdown-changed', value);
      }
    });
  }
}
</script>
