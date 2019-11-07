# Dialog 对话框

## 已实现


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