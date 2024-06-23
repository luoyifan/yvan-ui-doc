---
title: 数据表格 aggrid
---

# 数据表格 aggrid 组件

## 事件

| 事件名称               | 说明        | 参数和示例 |
|:-------------------|-----------|-------|
| click              | 点击时触发     |       |
| onDataLoadComplete | 数据载入完成后回调 |       |
| onReady            | 表格渲染完后    |       |
| onCellClick        | 单元格点击     |       |
| onCellEditingStart | 单元格开始编辑   |       |
| onCellEditingStop  | 单元格结束编辑   |       |
| onCellDoubleClick  | 单元格双击     |       |
| onRowClick         | 行点击       |       |
| onSelectionChange  | 选择内容被改变   |       |

## 方法

| 方法名称              | 说明           | 参数和示例 |
|:------------------|--------------|-------|
| validate          | 校验           |       |
| importExcel       | 导入Excel      |       |
| downloadExcel     | 导出Excel      |       |
| expandAll         | 展开所有节点       |       |
| showEditDialog    | 显示编辑对话框      |       |
| appendRow         | 新增行          |       |
| appendEditRow     | 新增编辑行        |       |
| removeRowByRange  | 删除单元格模式下选中的行 |       |
| removeSelectedRow | 删除选中的行       |       |
| stopEditing       | 停止编辑         |       |
| setData           | 设置数据         |       |
| getDataRows       | 获取数据         |       |
| setSelectionRow   | 设置选中行        |       |
| setEditRow        | 设置当前编辑行的数据   |       |
| reload            | 重新载入表格数据     |       |
| getSelectedRows   | 获取所有选中行      |       |
| setRowDataByRowid | 根据行ID设置行数据   |       |
| removeRowByRowid  | 根据行ID删除行数据   |       |

## 属性

| 属性名称      | 说明        | 示例 |
|:----------|-----------|----|
| reference | reference |    |
| hidden    | 隐藏        |    |
| emptyText | 空文本       |    |
| title     | 标题        |    |
| autoLoad  | 自动加载      |    |