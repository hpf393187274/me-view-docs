
# Paging 分页

## 基础用法
`v-model` 绑定之值 `label` 设置标签 `placeholder` 提示语句

<me-paging :total="total"/>
<script>
export default {
  data() {
    return {
      total: 500
    }
  }
}
</script>



## 全部用法
`v-model` 绑定之值 `label` 设置标签 `placeholder` 提示语句

<template>
  <me-paging :total="total" border />
</template>
<script>
export default {
  data() {
    return {
      total: 1000
    }
  }
}
</script>

