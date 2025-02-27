---
title: inv_primary_secondary
desc: 商品批次库位二级容器库存
category: 基础数据
type: db
tags:
  - wms/db/基础数据
---

# title
>[!dbtable] inv_primary_secondary
> 商品批次库位二级容器库存

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| wh_id | int8 |  | 仓库ID | √ | √ |  |
| owner_id | int8 |  | 货主ID | √ | √ |  |
| item_id | int8 |  | 产品ID | √ | √ |  |
| lot_id | int8 |  | 批属性ID | √ | √ |  |
| loc_id | int8 |  | 库位ID | √ | √ |  |
| primary_code | varchar | 128 | 一级容器编号 | √ | √ |  |
| secondary_code | varchar | 128 | 二级容器编号 | √ | √ |  |
| quality_status | varchar | 50 | 质量状态 | √ | √ |  |
| super_box_code | varchar | 128 | 叠箱条码 |  | √ |  |
| qty | numeric |  | 库存数量 |  | √ |  |
| qty_in | numeric |  | 计划入库数量 |  | √ |  |
| qty_pre_allocated | numeric |  | 预分配数量 |  | √ |  |
| qty_allocated | numeric |  | 分配数量 |  | √ |  |
| qty_on_hold | numeric |  | 冻结数量 |  | √ |  |
| qty_lock | numeric |  | 锁定数量 |  | √ |  |
| qty_rep_in | numeric |  | 计划补入数量 |  | √ |  |
| qty_rep_out | numeric |  | 计划补出数量 |  | √ |  |
| qty_move_in | numeric |  | 计划移入数量 |  | √ |  |
| qty_move_out | numeric |  | 计划移出数量 |  | √ |  |
| qty_profit | numeric |  | 计划溢数量 |  | √ |  |
| qty_loss | numeric |  | 计划损数量 |  | √ |  |
| create_by | varchar | 64 | 创建者 |  | √ |  |
| create_at | timestamptz |  | 建立时间 |  | √ |  |
| update_by | varchar | 64 | 修改者 |  | √ |  |
| update_at | timestamptz |  | 更新时间 |  | √ |  |

