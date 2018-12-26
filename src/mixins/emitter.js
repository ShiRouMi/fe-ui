export default {
  methods: {
    dispatch: function(componentName, eventName, params) {
      let parent = this.$parent || this.$root; // 如果当前实例没有父实例，那么实例将会是自己
      let name = parent.$options.name;
      while (parent && name !== componentName) {
        parent = parent.$parent;
        name = parent.$options.name;
      }
      parent.$emit.apply(parent, [eventName].concat(params));
    }
  }
};
