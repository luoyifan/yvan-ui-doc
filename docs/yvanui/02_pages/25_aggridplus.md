---
title: 数据表格增强 aggridplus
---

# 数据表格增强 aggridplus 组件

## 1. 显示效果
![[25_aggridplus/01_show.png]]

## 2. 事件
| 事件名称 | 说明      | 参数和示例                                |
|:-----|---------|--------------------------------------|
| click | 点击 |       |
| onDataLoadComplete | 数据载入完成后回调 |       |
| onReady | 表格渲染完后 |       |
| onCellClick | 单元格点击 |       |
| onCellEditingStart | 单元格开始编辑 |       |
| onCellEditingStop | 单元格结束编辑 |       |
| onCellDoubleClick | 单元格双击 |       |
| onRowClick | 行点击 |       |
| onSelectionChange | 选择内容被改变 |       |
| onRowDblClick | 行双击 |       |

## 3. 方法
| 方法名称 | 说明  | 参数和示例 |
|:-----|-----|-------|
| validate | 校验 |       |
| expandAll | 展开所有节点 |       |
| showAddDialog | 显示新增对话框 |       |
| showEditDialog | 显示编辑对话框 |       |
| appendRow | 新增行 |       |
| appendEditRow | 新增编辑行 |       |
| removeRowByRange | 删除单元格模式下选中的行 |       |
| removeSelectedRow | 删除选中的行 |       |
| stopEditing | 停止编辑 |       |
| setData | 设置数据 |       |
| getDataRows | 获取数据 |       |
| setSelectionRow | 设置选中行 |       |
| setEditRow | 设置当前编辑行的数据 |       |
| reload | 重新载入表格数据 |       |
| getSelectedRows | 获取所有选中行 |       |
| setRowDataByRowid | 根据行ID设置行数据 |       |
| removeRowByRowid | 根据行ID删除行数据 |       |

## 4. 属性
| 属性名称 | 说明      | 示例                                   |
|:-----|---------|--------------------------------------|
| reference | reference |  |
| hidden |  隐藏 |  |
| emptyText | 空文本  |  |
| title | 标题  |  |
| autoLoad | 自动读取数据  |  |
| hideToolbar | 隐藏工具栏  |  |
| showTitle | 显示标题  |  |
| isCustomTitle | 自定义标题  |  |
| customTitle | 标题内容  |  |
| hideQuickFilter | 隐藏快速筛选  |  |
| hideReloadButton | 隐藏刷新按钮  |  |
| hidePagination | 隐藏分页  |  |
| allowQuickFilter | 允许快捷查询  |  |
| allowAppendButton | 允许添加按钮  |  |
| allowDeleteButton | 允许删除按钮  |  |
| allowEditButton | 允许编辑按钮  |  |
| allowSaveButton | 允许保存按钮  |  |
| showFooter | 显示表尾  |  |
| footerRowHeight | 表尾高度  |  |
