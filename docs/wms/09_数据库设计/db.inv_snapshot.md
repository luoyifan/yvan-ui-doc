---
title: inv_snapshot
desc: 库存快照
category: 基础数据
type: db
tags:
  - wms
  - db
  - 基础数据
---

# title
>[!dbtable] inv_snapshot
> 库存快照

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| snapshot_id | int8 |  | 快照ID | √ | √ |  |
| order_type | varchar | 50 | 单据类型 |  | √ |  |
| order_code | varchar | 128 | 单据编号 |  | √ |  |
| cmd_id | int8 |  | 指令ID |  | √ |  |
| inv_type | varchar | 50 | 记账类型 |  | √ |  |
| inv_reason | varchar | 50 | 记账原因 |  | √ |  |
| item_id | int8 |  | 商品ID |  | √ |  |
| lot_id | int8 |  | 批次ID |  | √ |  |
| loc_id | int8 |  | 库位ID |  | √ |  |
| qty_change | numeric |  | 改变数量 |  | √ |  |
| qty_item | numeric |  | 商品数量 |  | √ |  |
| qty_lot | numeric |  | 批次数量 |  | √ |  |
| qty | numeric |  | 数量 |  | √ |  |
| qty_in | numeric |  | 计划入库数量 |  | √ |  |
| qty_pre_allocated | numeric |  | 预分配数量 |  | √ |  |
| qty_allocated | numeric |  | 分配数量 |  | √ |  |
| qty_rep_in | numeric |  | 计划补入数量 |  | √ |  |
| qty_rep_out | numeric |  | 计划补出数量 |  | √ |  |
| qty_move_in | numeric |  | 计划移入数量 |  | √ |  |
| qty_move_out | numeric |  | 计划移出数量 |  | √ |  |
| qty_on_hold | numeric |  | 冻结数量 |  | √ |  |
| qty_profit | numeric |  | 计划益数量 |  | √ |  |
| qty_loss | numeric |  | 计划损数量 |  | √ |  |
| qty_lock | numeric |  | 锁定数量 |  | √ |  |
| quality_status | varchar | 50 | 质量状态 |  | √ |  |
| wh_id | int8 |  | 仓库ID |  | √ |  |
| owner_id | int8 |  | 货主ID |  | √ |  |
| create_by | varchar | 64 | 创建人 |  | √ |  |
| create_at | timestamptz |  | 创建时间 |  | √ |  |
| update_by | varchar | 64 | 更新人 |  | √ |  |
| update_at | timestamptz |  | 更新时间 |  | √ |  |
#wms/db/基础数据
