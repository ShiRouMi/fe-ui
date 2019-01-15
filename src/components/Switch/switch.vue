<template>
  <div role="switch" 
    class="fe-switch"
    :class="{
      'is-checked': isChecked,
      'is-disabled': isDisabled
    }"
    @click="statusChange">
    <input 
      type="checkbox"
      :disabled="disabled" 
      class="fe-switch__input">
    <span class="fe-switch__label fe-switch__label--left">
      <span aria-hidden="true">{{inactiveText}}</span>
    </span>
    <span 
      class="fe-switch__core"
      :style="{
        width: width + 'px',
        backgroundColor: rightColor
        }"></span>
    <span class="fe-switch__label fe-switch__label--right">
      <span aria-hidden="true">{{activeText}}</span>
    </span>
  </div>
</template>

<script>
export default {
  name: 'fe-switch',
  data: function(){
    return {
      isChecked: this.value
    }
  },
  props: {
    disabled: Boolean,
    value: '',  // 这行代码！！！
    width: {
      default: 40,
      type: Number
    },

    activeIconClass: String,
    inactiveIconClass: String,
    activeValue: [Boolean, String, Number],
    inactiveValue: [Boolean, String, Number],

    activeText: String,
    inactiveText: String,
    activeColor: {
      default: '#409EFF',
      type: String
    },
    inactiveColor: {
      default: '#C0CCDA',
      type: String
    },
    name: String
  },
  computed: {
    rightColor() {
      if(this.isChecked)
        return this.activeColor
      else 
        return this.inactiveColor
    },
    isDisabled() {
      return this.disabled
    }
  },
  methods: {
    statusChange() {
      if(!this.disabled) {
        this.isChecked = !this.isChecked
        this.$emit('change', this.isChecked)
      }
    }
  }
}
</script>

<style>
.fe-switch{
  display: inline-flex;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  height: 20px;
  vertical-align: middle;
}
.fe-switch.is-disabled {
  opacity: .6
}
.fe-switch.is-disabled .fe-switch__core, .fe-switch.is-disabled .el-switch__label {
  cursor: not-allowed
}
.fe-switch__input {
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;
  margin: 0;
}
.fe-switch__core {
  margin: 0;
  display: inline-block;
  position: relative;
  width: 40px;
  height: 20px;
  border: 1px solid #dcdfe6;
  outline: none;
  border-radius: 10px;
  box-sizing: border-box;
  background: #dcdfe6;
  cursor: pointer;
  transition: border-color .3s,background-color .3s;
  vertical-align: middle;
}
.fe-switch__core:after {
  content: "";
  position: absolute;
  top: 1px;
  left: 1px;
  border-radius: 100%;
  transition: all .3s;
  width: 16px;
  height: 16px;
  background-color: #fff;
}
.fe-switch.is-checked .fe-switch__core:after {
  left: 100%;
  margin-left: -17px;
}
.fe-switch__label--left {
  margin-right: 10px;
}
.fe-switch__label--right {
  margin-left: 10px;
}
.fe-switch__label {
  transition: .2s;
  height: 20px;
  display: inline-block;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  vertical-align: middle;
  color: #303133;
}
</style>
