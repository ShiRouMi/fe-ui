<template>
  <div>
    <button type="button" class="fe-button"
      @click="onClick"
      :class="[
        size ? `fe-button--${ size }` : '',
        type ? `fe-button--${ type }` : '',
        {
          'is-disabled': disabled,
          'is-round': round,
          'is-plain': plain,
          'is-circle': circle
        }
      ]"
    >
      <slot></slot>
    </button>  
  </div>  
</template>

<script>
export default {
  name: 'FeButton',
  props: {
    size: String,
    type: {
      type: String,
      default: 'default'
    },
    plain: Boolean,
    round: Boolean,
    circle: Boolean,
    disabled: Boolean,
    icon: {
      type: String
    }
  },
  methods: {
    onClick: function (evt) {
      this.$emit('click', evt)
    }
  }
}
</script>

<style lang="scss">
@import '../Style/color.scss';
.fe-button {
  cursor: pointer;
  font-size: 14px;
  line-height: 22px;
  height: 32px;
  padding: 0 12px;
  color: $main;
  border-radius: 4px;
  background: #fff;
  border: 1px solid;
  border-color: $border;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  position: relative;
}
</style>
