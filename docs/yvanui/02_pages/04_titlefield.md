---
title: 表单强制分段 titlefield
---

# 表单强制分段 titlefield 组件
titlefield组件用于在复杂表单中创建明确的分段，使表单内容更易于阅读和填写。它通过添加标题，将表单划分为多个逻辑部分，提升用户体验。
#### 功能描述
1. 在表单中插入一个标题，帮助用户理解当前部分表单的内容和目的。
2. 将长表单划分为多个部分，减少用户一次性填写大量信息的负担，提高表单的可用性。
3. 允许自定义标题，以匹配整体表单设计风格。
4. 支持动态更新标题或描述，适应不同的上下文或用户操作。
#### 示例显示
![[04_titlefield/img.png]]
## 事件
调用组件的事件，同上button组件

| 事件名称 | 说明      | 参数和示例                                |
|:-----|---------|--------------------------------------|
| click | 点击组件后触发 | click: '{titlefield1_click}', |

## 方法

| 方法名称 | 说明  | 参数和示例 |
|:-----|-----|-------|
| --   | --  | --    |

## 属性

| 属性名称                      | 说明                       | 示例                       |
|:--------------------------|--------------------------|--------------------------|
| reference                 | 设置组件的refs                | refs:titlefield1         |
| content                   | 标题内容，默认为空                | content:'我是标题'           |
| borderStyle               | 组件线条类型，分为线条、虚线、无、信息，默认为线条 | borderStyle:solid        |
| contentPosition           | 对齐方式，分为左、居中、右，默认为居中      | contentPosition:'center' |
| hidden                    | 隐藏或显示组件，默认为false             | hidden:false               |