<template>
  <button type="button" class="fe-button"
    :disabled="disabled"
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
    <fe-icon v-if="icon" :name="icon"></fe-icon>
    <span>
      <slot></slot>
    </span>
  </button>
</template>

<script>
import FeIcon from '../Icon'
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
    loading: Boolean,
    disabled: Boolean,
    icon: String,
    autofocus: Boolean,
    nativeType: String
  },
  components: {
    FeIcon
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

  &.is-circle {
    border-radius: 50%;
    padding: 12px;
  }

  &.is-disabled {
    color: #c0c4cc;
    cursor: not-allowed;
    background-image: none;
    background-color: #fff;
    border-color: #ebeef5;
    &:hover {
      color: #c0c4cc;
      cursor: not-allowed;
      background-image: none;
      background-color: #fff;
      border-color: #ebeef5;
    }
  }

  &:hover {
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }

  &--primary {
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;
    &:hover {
      background: #66b1ff;
      border-color: #66b1ff;
      color: #fff;
    }
    &.is-disabled, &.is-disabled:hover {
      color: #fff;
      background-color: #a0cfff;
      border-color: #a0cfff;
    }
  }

  &--success {
    color: #fff;
    background-color: #67c23a;
    border-color: #67c23a;
    &:hover {
      background: #85ce61;
      border-color: #85ce61;
      color: #fff;
    }
  }
}
</style>
