# Table 表格

<script>
export default {
  data() {
    return {
      columns: [
        { label:'编号', field: 'id'},
        { label:'区域', field: 'label' },
        { label:'操作', field: 'action' }
      ],
      data: [
        { id: '1', label: '陕西省', a: 'a', b: 'b', c: 'c', d: 'd', e: 'e', f: 'f', g: 'g', h: 'h' },
        { id: '2', label: '四川省', a: 'a', b: 'b', c: 'c', d: 'd', e: 'e', f: 'f', g: 'g', h: 'h' },
        { id: '3', label: '江苏省', a: 'a', b: 'b', c: 'c', d: 'd', e: 'e', f: 'f', g: 'g', h: 'h' },
        { id: '4', label: '河南省', a: 'a', b: 'b', c: 'c', d: 'd', e: 'e', f: 'f', g: 'g', h: 'h' },
        { id: '5', label: '陕西省', a: 'a', b: 'b', c: 'c', d: 'd', e: 'e', f: 'f', g: 'g', h: 'h' },
        { id: '6', label: '四川省', a: 'a', b: 'b', c: 'c', d: 'd', e: 'e', f: 'f', g: 'g', h: 'h' },
        { id: '7', label: '江苏省', a: 'a', b: 'b', c: 'c', d: 'd', e: 'e', f: 'f', g: 'g', h: 'h' },
        { id: '8', label: '河南省', a: 'a', b: 'b', c: 'c', d: 'd', e: 'e', f: 'f', g: 'g', h: 'h' },
        { id: '9', label: '陕西省', a: 'a', b: 'b', c: 'c', d: 'd', e: 'e', f: 'f', g: 'g', h: 'h' },
        { id: '10', label: '四川省', a: 'a', b: 'b', c: 'c', d: 'd', e: 'e', f: 'f', g: 'g', h: 'h' },
        { id: '11', label: '江苏省', a: 'a', b: 'b', c: 'c', d: 'd', e: 'e', f: 'f', g: 'g', h: 'h' },
        { id: '12', label: '河南省', a: 'a', b: 'b', c: 'c', d: 'd', e: 'e', f: 'f', g: 'g', h: 'h' }
      ]
    }
  }
}
</script>

## 基础用法
`data` 数据 `border` 边框

<!-- <div> -->
  <me-table style="height:300px;width:100%" :columns="columns" :data="data" border highlight>
    <template #action>
      <div class="me-row" style="width:100%">
        <me-button>新增</me-button>
        <me-button>编辑</me-button>
        <me-button>删除</me-button>
      </div>
    </template>
  </me-table>
<!-- </div> -->

## Checkbox 用法
` checked-directly` 关联选择 `checkbox` 复选框 `multiple` 多选

<div style="height:300px;width:100%">
  <me-table :data="data" border :columns="columns" checkbox center-row multiple :checked-directly="false">
    <template #action>
      <me-button>新增</me-button>
      <me-button>编辑</me-button>
      <me-button>删除</me-button>
    </template>
  </me-table>
</div>

## Toolbar 用法
`slot header` 工具栏-头部 `slot footer` 工具栏-尾部

<template>
  <me-table style="height:300px;width:100%" :data="data" :columns="columns" border checkbox center-row>
    <template #header>
      <me-button plain type="primary" icon="icon-plus-square">新增</me-button>
      <me-button plain type="primary" icon="icon-minus-square">批量删除</me-button>
    </template>
    <template #action>
      <me-button>新增</me-button>
      <me-button>编辑</me-button>
      <me-button>删除</me-button>
    </template>
  </me-table>
</template>