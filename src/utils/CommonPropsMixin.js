const self = this;
module.exports = {
  props: {
    colour: {},
    size: {},
    inverted: {},
    disabled: {},
    circular: {},
    loading: {},
  },

  methods: {
    commonClasses(classes) {
      classes.inverted = typeof this.inverted !== 'undefined'
      classes.disabled = typeof this.disabled !== 'undefined'
      classes.circular = typeof this.circular !== 'undefined'
      classes.loading = typeof this.loading !== 'undefined'

      if (this.colour in self.sizes()) {
        classes[this.colour] = true
      }

      if (typeof this.size !== 'undefined') {
        classes[this.size] = true
      }
      return classes
    },
    menuType () {
      return [
        'secondary',
        'pointing',
        'tabular',
        'text',
        'vertical',
        'pagination'
      ];
    },
    variations() {
      return [
        'attached',
        'borderless',
        'colored',
        'compact',
        'evenly',
        'fitted',
        'fixed',
        'fluid',
        'icons',
        'inverted',
        'labeled',
        'size',
        'stackable'
      ];
    },
    messages() {
      return [
        'success',
        'warning',
        'error'
      ];
    },
    sizes() {
      return [
        'mini',
        'tiny',
        'small',
        'large',
        'huge',
        'massive'
      ];
    },
    numbers() {
      return [
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
        'ten',
        'eleven',
        'twelve',
      ];
    },
    colors() {
      return [
        'black',
        'blue',
        'brown',
        'green',
        'grey',
        'grey',
        'olive',
        'orange',
        'pink',
        'pink',
        'purple',
        'red',
        'teal',
        'violet',
        'yellow'
      ];
    }
  }
}
