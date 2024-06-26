---
title: 数据列表 yvlist
---

# 数据列表 yvlist 组件

## 事件
| 事件名称               | 说明        | 参数和示例 |
|:-------------------|-----------|-------|
| click              | 点击        |       |
| onDataLoadComplete | 数据载入完成后回调 |       |
| onReady            | 列表渲染完后    |       |
| onCellClick        | 单元格点击     |       |
| onRowClick         | 行点击       |       |

## 方法
| 方法名称               | 说明         | 参数和示例 |
|:-------------------|------------|-------|
| removeSelectedRow  | 删除选中的行     |       |
| setData            | 设置数据       |       |
| getDataRows        | 获取数据       |       |
| setSelectionRow    | 设置选中行      |       |
| setEditRow         | 设置当前编辑行的数据 |       |
| reload             | 重新载入列表数据   |       |
| getSelectedRows    | 获取所有选中行    |       |
| setRowDataByRowid  | 根据行ID设置行数据 |       |
| removeRowByRowid   | 根据行ID删除行数据 |       |

## 属性
| 属性名称             | 说明        | 示例  |
|:-----------------|-----------|-----|
| reference        | reference |     |
| hidden           | 隐藏        |     |
| emptyText        | 空文本       |     |
| title            | 标题        |     |
| autoLoad         | 自动读取数据    |     |
| hideToolbar      | 隐藏工具栏     |     |
| showTitle        | 显示标题      |     |
| isCustomTitle    | 自定义标题     |     |
| customTitle      | 标题内容      |     |
| hideQuickFilter  | 隐藏快速筛选    |     |
| hideReloadButton | 隐藏刷新按钮    |     |
| hidePagination   | 隐藏分页      |     |