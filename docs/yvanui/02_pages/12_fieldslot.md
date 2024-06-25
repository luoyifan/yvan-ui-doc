---
title: 字段插槽 fieldslot
---

# 字段插槽 fieldslot 组件
字段插槽 fieldslot 组件，是一个空闲占位符，能以 vue 原生写法，自定义组件的内容。

与 slot 的区别是，slot 组件是整块元素（与 tree / grid 同级），而 fieldslot 只能拖进 form 表单中使用。

### 示例显示
![[12_fieldslot/img.png]]

### 编写示例
在界面中拖入 fieldslot 组件，并命名为 sv1
在 xxx.design.js 同等路径下，新建 xxx.vue 文件，内容如下
```
<template>
  <YvVjsonLayout :vjson="vjson" :vcxt="vcxt" :aria-modal="resourceUrl">
    <template #sv1>
      <el-button>输入框</el-button>
      <div>提示内容</div>
    </template>
  </YvVjsonLayout>
</template>
<script>
import xxx from './xxx.design'

export default {
  mixins: [xxx],
  methods: {
    test1() {
      system.msg('test1')
    }
  }
}
< /script>
```


## 事件

| 事件名称  | 说明      | 参数和示例 |
|:------|---------|-------|
| focus | 获取焦点时触发 |       |
| blur  | 失去焦点触发  |       |
| click | 点击时触发   |       |

## 方法
方法一般使用于各类事件中，调用即可生效

| 方法名称  | 说明   | 参数和示例                        |
|:------|------|------------------------------|
| focus | 组件聚焦 | this.refs.fieldslot1.focus() |

## 属性

| 属性名称      | 说明                          | 示例  |
|:----------|-----------------------------|-----|
| reference | 设置组件的refs                   |     |
| name      | 字段槽名称                       |     |
| hidden    | 隐藏或显示组件，默认为false            |     |
| weight    | 权重的宽度，6中选择，1、2、3、4、5、6，默认为1 |     |