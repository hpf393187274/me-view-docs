# Dialog 对话框

<ClientOnly>
  <Basal />
</ClientOnly>

::: demo
This is a dangerous warning
:::

<<< @/docs/.vuepress/components/example/dialog/Basal.vue

<script>
export default {
  data(){
    return {
      dialogStatus: false
    }
  },
  methods: {
    alert() { this.$dialog.alert({ content: '请注意红灯' }) },
    confirm() { 
      this.$dialog.confirm({
         content: '你是好孩子么？',
         ok() { this.$dialog.alert({ content: '我是好孩子' })  },
         cancel() { this.$dialog.alert({ content: '我是坏孩子' })  }
      })
    }
  }
}
</script>

<template>
  <div class="me-row">
      <me-dialog title="好孩子" v-model="dialogStatus">
        我们都是好孩子
      </me-dialog>
      <me-button @click="dialogStatus = true">Dialog</me-button>
      <me-button @click="alert">Alert</me-button>
      <me-button @click="confirm">Confirm</me-button>
  </div>
</template>


### Dialog Attributes
| 名称           | 描述             |  类型   | 默认值 | 可选值      |
| -------------- | ---------------- | :-----: | :----: | ----------- |
| v-model        | 显隐状态         | Boolean | false  | true, false |
| width          | 宽度             | String  | 300px  | -           |
| height         | 高度             | String  | 300px  | -           |
| closable       | 是否可关闭       | Boolean |  true  | true, false |
| closable-modal | 点击模态层关闭   | Boolean |  true  | true, false |
| draggable      | 是否可以拖拽移动 | Boolean | false  | true, false |

### Dialog Methods Static

| 方法名  | 描述   | 参数 | 返回值 |
| ------- | ------ | ---- | ------ |
| alert   | 提示框 | -    | -      |
| confirm | 确认框 | -    | -      |

### Dialog Events
| 名称    | 描述     | 参数  |
| ------- | -------- | :---: |
| cancel  | 取消事件 |   -   |
| confirm | 确认事件 |   -   |

### Dialog Slots
| 名称    | 描述     | 参数  |
| ------- | -------- | :---: |
| default | 内容区域 |   -   |
| header  | 页眉区域 |   -   |
| footer  | 页脚区域 |   -   |