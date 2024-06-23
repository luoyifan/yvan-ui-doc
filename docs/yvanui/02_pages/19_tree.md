---
title: 树 tree
---

# 树 tree 组件

## 事件

| 事件名称 | 说明           | 参数和示例 |
|:-----|--------------|-------|
|  trigger    | 触发事件         |       |
|  setLoading    | 设置/取消加载状态    |       |
|  reload    | 载入树数据        |       |
|  setData    | 设置树数据        |       |
|  getNode    | 获取节点数据       |       |
|  getCheckedNodes    | 获取勾选后的节点     |       |
|  getCheckedKeys    | 获取勾选后的Key    |       |
|  getCurrentNode    | 获取当前选中节点的数据  |       |
|  getCurrentKey    | 获取当前选中节点的Key |       |
|  expandedAll    | 展开/关闭所有节点    |       |
|  setExpandedKeys    | 设置展开的Key    |       |


## 方法

| 方法名称               | 说明                               | 参数和示例 |
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

## 属性

| 属性名称                | 说明             | 示例 |
|:--------------------|----------------|----|
| reference           | reference      |    |
| hidden              | 隐藏             |    |
| text                | 文本             |    |
| disabled            | 禁用             |    |
| hidden              | 图标             |    |
| iconCls             | 图标             |    |
| emptyText           | 空文本            |    |
| loading             | 加载             |    |
| expandOnClickNode   | 点击时展开或收缩节点     |    |
| checkOnClickNode    | 点击时选中节点        |    |
| autoExpandParent    | 展开子节点的时自动展开父节点 |    |
| enableFilter        | 启用过滤           |    |
| enableRefresh       | 启用刷新           |    |
| enableExpandedAll   | 启用展开全部         |    |
| showCheckbox        | 图标             |    |
| checkStrictly       | 级联选择           |    |
| defaultExpandAll    | 图标             |    |
| defaultExpandedKeys | 图标             |    |
