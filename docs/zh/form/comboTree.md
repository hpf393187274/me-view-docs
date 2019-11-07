
# ComboTree 组合树

<script>
export default {
  data() {
    return {
      value1:'',
      value2:'',
      data: [
        {
          id: '1', label: '陕西省', children: [
            {
              id: '1-1', label: '西安市', children: [
                { id: '1-1-1', label: '雁塔区' },
                { id: '1-1-2', label: '长安区' }
              ]
            }
          ]
        },
        {
          id: '2', label: '四川省', children: [
            { id: '2-1', label: '成都市' },
            { id: '2-2', label: '汶川市' }
          ]
        }
      ]
    }
  }
}
</script>

## 基础用法
`label` 设置标签 `clearable` 可清除的

<me-combo-tree :data="data" v-model="value1"/>
<me-combo-tree :data="data" v-model="value2" :expanded-level="1" />
## Input Attributes
| 名称        | 描述                |  类型   | 默认值 | 可选值                 |
| ----------- | ------------------- | :-----: | :----: | ---------------------- |
| type        | 文本内心            | String  |  text  | text, password, number |
| label       | 标签描述            | String  |   -    | -                      |
| clearable   | 可清除的            | Boolean | false  | true, false            |
| placeholder | 原生属性 - 提示表述 | String  |   -    | -                      |
| icon-prefix | 图标库 - 前置图标   | String  |   -    | -                      |
| icon-suffix | 图标库 - 后置图标   | String  |   -    | -                      |

## Input Events
| 名称         | 描述                           |    参数    |
| ------------ | ------------------------------ | :--------: |
| change       | 内容改变事件                   | 当前文本值 |
| click-prefix | icon-prefix 有值：前置图标事件 | 当前文本值 |
| click-suffix | icon-suffix 有值：后置图标事件 | 当前文本值 |


## Input Slot
| 名称   | 描述     |
| ------ | -------- |
| prefix | 前置图标 |
| suffix | 前置图标 |