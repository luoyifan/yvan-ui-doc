---
title: 插槽 slot
---

# 插槽 slot 组件
slot 插槽组件是一种用户界面控件，是一个空闲占位符，能以 vue 原生写法，自定义组件的内容。

与 filedslot 的区别是，slot 组件是整块元素（与 tree / grid 同级），而 fieldslot 只能拖进 form 表单中使用。

#### 示例显示
![[29_slot/img.png]]


### 编写示例
在界面中拖入 slot 组件，并命名为 test1
在 xxx.design.js 同等路径下，新建 xxx.vue 文件，内容如下
```
<template>
  <YvVjsonLayout :vjson="vjson" :vcxt="vcxt" :aria-modal="resourceUrl">
    <template #slot1>
      <div @click="test1">提示内容</div>
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

| 事件名称   | 说明      | 参数和示例                                |
|:-------|---------|--------------------------------------|
| click  | 获取焦点时触发   |     |

## 方法
方法一般使用于各类事件中，调用即可生效

| 方法名称 | 说明      | 参数和示例                   |
|:-----|---------|-------------------------|
| focus  | 组件聚焦 | this.refs.slot1.focus() |

## 属性

| 属性名称               | 说明                 | 示例                           |
|:-------------------|--------------------|------------------------------|
| reference          | 设置组件的refs          | refs:datefield1              |
| hidden             | 隐藏或显示组件，默认为false   | hidden:false                 |
| name               | 字段槽名称              | name:slot1                   |
| paddingTop         | 距上的内边距，默认为0        | paddingTop:5                 |
| paddingRight       | 距右的内边距，默认为0        | paddingRight:5               |
| paddingBottom      | 距下的内边距，默认为0        | paddingBottom:5              |
| paddingLeft        | 距左的内边距，默认为0        | paddingLeft:5                |
| cssBackgroundColor | 设置整个组件的背景色，默认为none | cssBackgroundColor:"#722ed1" |