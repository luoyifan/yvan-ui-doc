---
title: doc_inner_move_items
desc: 移库单明细
category: 基础数据
type: db
tags:
  - wms/db/基础数据
---

# title
>[!dbtable] doc_inner_move_items
> 移库单明细

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| inner_move_id | int8 |  | 库内库存转移单ID | √ | √ |  |
| inner_move_line_no | int4 |  | 库内库存转移单行号 | √ | √ |  |
| inner_move_type | varchar | 50 | 转移类型 | √ | √ |  |
| sort_number | int4 |  | 排序号 | √ | √ |  |
| item_id | int8 |  | 商品ID |  | √ |  |
| lot_id | int8 |  | 批次ID |  | √ |  |
| quality_status | varchar | 50 | 质量状态 |  | √ |  |
| loc_id | int8 |  | 库位ID |  | √ |  |
| source_loc_id | int8 |  | 原货位ID |  | √ |  |
| pallet_code | varchar | 128 | 托盘条码 |  | √ |  |
| source_pallet_code | varchar | 128 | 原托盘条码 |  | √ |  |
| box_code | varchar | 128 | 箱条码 |  | √ |  |
| source_box_code | varchar | 128 | 箱条码 |  | √ |  |
| grid_no | varchar | 128 | 格口号 |  | √ |  |
| source_grid_no | varchar | 128 | 原格口号 |  | √ |  |
| tray_code | varchar | 128 | 跟踪号 |  | √ |  |
| super_box_code | varchar | 128 | 叠箱条码 |  | √ |  |
| inner_move_staff_id | int8 |  | 操作员ID |  | √ |  |
| inner_move_status | varchar | 50 | 行状态 |  | √ |  |
| create_by | varchar | 64 | 创建者 |  | √ |  |
| create_at | timestamptz |  | 建立时间 |  | √ |  |
| update_by | varchar | 64 | 修改者 |  | √ |  |
| update_at | timestamptz |  | 更新时间 |  | √ |  |

