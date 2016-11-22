<template>
    <div :class="checkboxClasses">
        <input type="checkbox" v-model="model" @click="notify">
        <label>{{ ( model && labelChecked ? labelChecked : label) }}</label>
    </div>
</template>

<script>
    export default {
        props: {
            checked: {
              type: Boolean,
              default: false
            },
            label: {
              type: String,
              default: ''
            },
            labelChecked: {
              type: String,
              default: ''
            },
            disabled: {
              type: Boolean,
              default: false
            },
            type: {
              type: String,
              default: 'checkbox'
            }
        },

        computed: {
            checkboxClasses() {
                let keys = this.$options.$propsKeys;

                keys.map(key => {
                  console.log(key, this[key]);
                });

                return {
                    ui: true,
                    checkbox: this.type === 'checkbox',
                    slider: this.type === 'slider',
                    toggle: this.type === 'toggle',
                    disabled: !this.disabled
                }
            },
            model () {
              return this.checked;
            }
        },

        methods : {
            notify(event) {
                this.$nextTick(() => {
                    this.$dispatch('checkbox-clicked', !this.model, event);
                })
            }
        }
    }
</script>
