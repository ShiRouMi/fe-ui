<template>
  <div id="app">
    <checkbox v-model="cck" @on-change="cckEvent">hello</checkbox>
    <!-- <input type="checkbox" value="abc" :checked="isChecked" @click="iptClick" /> -->
    <!-- <ell-checkbox v-model="elVal" @change="elEvent">备选</ell-checkbox> -->
  </div>
</template>

<script>
import checkbox from '@/components/Checkbox/checkbox.vue'
import ellCheckbox from '../node_modules/element-ui/packages/checkbox/src/checkbox.vue'
export default {
  components: {
    checkbox,
    ellCheckbox
  },
  data() {
    return {
      cck: true,
      isChecked: false,
      elVal: true,
      arr: [],
      data: [
        {
          title: 'parent 1',
          expand: true,
          children: [
            {
              title: 'parent 1-1',
              expand: true,
              children: [
                {
                  title: 'leaf 1-1-1'
                },
                {
                  title: 'leaf 1-1-2'
                }
              ]
            },
            {
              title: 'parent 1-2',
              children: [
                {
                  title: 'leaf 1-2-1'
                },
                {
                  title: 'leaf 1-2-1'
                }
              ]
            }
          ]
        }
      ]
    };
  },
  methods: {
    cckEvent(val) {
      console.log(this.cck)
    },
    iptClick(e) {
      event.target.value = false
      this.isChecked = true
    },
    elEvent() {
      this.elVal = false
    }
  }
}
</script>
