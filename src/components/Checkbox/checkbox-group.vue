<template>
  <div>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'fCheckboxGroup',
  props: {
    value: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      currentValue: this.value,
      children: []
    }
  },
  methods: {
    updateModel(){
      this.childrens = findComponentsDownward(this, 'iCheckbox');
      if (this.childrens) {
        const { value } = this;
        this.childrens.forEach(child => {
          child.model = value;

          child.currentValue = value.indexOf(child.label) >= 0;
          child.group = true;
        });
      }
    },
    change(data) {
      this.currentValue = data
      this.$emit('input', data)
      this.$emit('on-change', data)
    }
  },
  mounted() {
    this.updateModel()
  }
}
</script>