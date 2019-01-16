<template>
  <button type="button" class="fe-button"
    :disabled="buttonDisabled"
    @click="onClick"
    :class="[
      size ? `fe-button--${ size }` : '',
      type ? `fe-button--${ type }` : '',
      {
        'is-disabled': buttonDisabled,
        'is-round': round,
        'is-plain': plain,
        'is-circle': circle
      }
    ]"
  >
    <fe-icon v-if="icon" :name="converseIcon"></fe-icon>
    <fe-icon v-if="loading" name="loading"></fe-icon>
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
    nativeType: String,
    icon: String
  },
  components: {
    FeIcon
  },
  computed: {
    converseIcon() {
      return this.icon.replace('el-icon-', '')
    },
    buttonDisabled() {
      return this.disabled || this.loading
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
@import '../../assets/style/color.scss';
.fe-button {
  cursor: pointer;
  font-size: 14px;
  padding: 12px 24px;
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

  &.is-round {
    border-radius: 20px;
    padding: 12px 23px;
  }

  &.is-circle {
    border-radius: 50%;
    padding: 12px;
  }

  &--medium {
    padding: 10px 20px;
    font-size: 14px;
    border-radius: 4px;

    &.is-round {
      border-radius: 20px;
      padding: 12px 23px;
    }
  }

  &--small {
    padding: 9px 15px;
    font-size: 12px;
    border-radius: 3px;

    &.is-round {
      padding: 9px 15px;
    }
  }

  &--mini {
    padding: 7px 15px;
    font-size: 12px;
    border-radius: 3px;

    &.is-round {
      padding: 7px 15px;
    }
  }

  & [class*=fe-icon-]+span {
      margin-left: 5px;
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
