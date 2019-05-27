<template>
  <div>
    <div class="title">
      所选分类
      <i class="el-icon-arrow-right"></i>
      <selected-a :selected="filterSelected" @handleRemoveSelected="changeSelected"></selected-a>
    </div>
    <ul class="list">
      <li v-for="(list, index) of modifiedLists" :key="index">
        <label class="list-item-title">{{list.title}}</label>
        <span 
          v-for="(child, idx) in list.data"
          :class="[idx === list.activeIndex ? 'activeSelected' : null]"
          @click="handleChoose(list, child, idx)"
          :key="idx">{{child}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'FilterChoose',
  data: function() {
    return {
      lists: [
        {
          title: "资源类型：",
          data: ["不限", "数据", "应用", "计算", "分析", "制图", "文档", "其他"]
        },
        {
          title: "所属行业：",
          data: ["不限", "测绘", "水利", "地质", "国土", "交通", "更多"]
        },
        {
          title: "覆盖范围：",
          data: ["不限", "杭州", "温州", "宁波", "更多"]
        },
        {
          title: "生产时间：",
          data: ["不限", "1990-2000", "2000-2010", "2010-2015", "2015以后"]
        },
        {
          title: "发布时间：",
          data: ["不限", "2010年以前", "2010年-2015年", "2015年以后"]
        },
        {
          title: "数据类型：",
          data: ["不限", "矢量地图", "影像地图"]
        },
        {
          title: "数据大小：",
          data: ["不限", "100M-1G", "100G-1T", "1T以上"]
        }
      ],
      selectedData: new Map(),
      filterSelected: []
    }
  },
  computed: {
    modifiedLists() {
      return this.lists.map(item => {
        item.activeIndex = 0
        return item
      })
    }
  },
  methods: {
    handleChoose(list, child, idx) {
      list.activeIndex = idx
      // 如果选中的是当前行的「不限」字段，那么删除这一行的数据
      if (idx === 0) {
        let target = Array.of(list.title, child)
        this.selectedData.delete(list.title) // TODO: 这里有问题
      } else {
        this.selectedData.set(list.title, child)
      }
      // map 转 数组
      this.filterSelected  = [...this.selectedData.entries()]
    },
    changeSelected(val) {
      // this.filterSelected = this.filterSelected.filter(item => item !== val)
      let key = this.filterSelected.indexOf(val)
      key !== -1 && this.filterSelected.splice(key, 1)
      // 数组 转 map
      this.selectedData = new Map(this.filterSelected)
    },
  },
  components: {
    'selected-a': {
      render: function(h) {
        return (
          <span class="selectedType">
          {
            this.selected.map(item => (
              <a> {item[0]} {item[1]} <i class="el-icon-close" onClick={() => this.removeSelected(item)}></i></a>
            ))
          }
          </span>
        )
      },
      props: {
        selected: {
          type: Array,
          required: true
        }
      },
      methods: {
        removeSelected(val) {
          this.$emit('handleRemoveSelected', val)
        }
      }
    }
  },
}
</script>

<style lang="scss">
ul, li {
  list-style: none;
}
.list {
  li {
    padding: 5px 0;
    color: #777;
  }
  .list-item-title {
    color: #333;
    padding-right: 20px;
  }
  span {
    padding-right: 15px;
    cursor: pointer;
  }
  .activeSelected {
    color: #da33ef;
  }
}
.selectedType {
  a {
    margin-right: 15px;
    border: 1px dashed #da33ef;
    color: #2aa;
    i {
      cursor: pointer;
    }
  }
}
</style>
