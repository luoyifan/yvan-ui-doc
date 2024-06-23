---
title: 下拉树 treefield
---

# 下拉树 treefield 组件

## 事件

| 事件名称               | 说明                               | 参数和示例 |
|:-------------------|----------------------------------|-------|
| click              | 点击时触发                            |       |
| onDataLoadComplete | 数据源刷新后触发                         |       |
| onDataLoadBefore   | 数据源刷新前触发                         |       |
| nodeClick          | 当节点被点击的时候触发                      |       |
| check              | 点击节点复选框之后触发                      |       |
| currentChange      | 当前选中节点变化时触发的事件                   |       |
| nodeExpand         | 节点被展开时触发的事件                      |       |
| nodeCollapse       | 节点被关闭时触发的事件                      |       |
| nodeDragStart      | 节点开始拖拽时触发的事件                     |       |
| nodeDragEnter      | 拖拽进入其他节点时触发的事件                   |       |
| nodeDragLeave      | 拖拽离开某个节点时触发的事件                   |       |
| nodeDragOver       | 在拖拽节点时触发的事件（类似浏览器的 mouseover 事件） |       |
| nodeDragEnd        | 拖拽结束时（可能未成功）触发的事件                |       |
| nodeDrag           | 拖拽成功完成时触发的事件                     |       |

## 方法

| 方法名称       | 说明        | 参数和示例 |
|:-----------|-----------|-------|
| trigger    | 触发事件      |       |
| reload     | 载入数据      |       |
| setLoading | 加载/取消加载状态 |       |
| setData    | 设置数据      |       |

## 属性

| 属性名称          | 说明        | 示例 |
|:--------------|-----------|----|
| reference     | 设置按钮的refs |    |
| fieldLabel    | 标签名       |    |
| text          | 文本        |    |
| placeholder   | 占位符       |    |
| disabled      | 禁用        |    |
| readonly      | 只读        |    |
| hidden        | 隐藏        |    |
| iconCls       | 图标        |    |
| size          | 尺寸        |    |
| loading       | 加载        |    |
| clearable     | 是否可清空     |    |
| multiple      | 允许多选      |    |
| filterable    | 允许过滤      |    |
| checkStrictly | 可选任意节点    |    |
| showCheckbox  | 允许勾选框     |    |