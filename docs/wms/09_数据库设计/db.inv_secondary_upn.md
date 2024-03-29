---
title: inv_secondary_upn
desc: 商品批次库位容器唯一码库存
category: 基础数据
type: db
tags:
  - wms
  - db
  - 基础数据
---

# title
>[!dbtable] inv_secondary_upn
> 商品批次库位容器唯一码库存

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| wh_id | int8 |  | 仓库id | √ | √ |  |
| owner_id | int8 |  | 货主id | √ | √ |  |
| item_id | int8 |  | skuid | √ | √ |  |
| lot_id | int8 |  | 批属性id | √ | √ |  |
| loc_id | int8 |  | 库位id | √ | √ |  |
| primary_code | varchar | 128 | 一级容器编号 | √ | √ |  |
| secondary_code | varchar | 128 | 二级容器编号 | √ | √ |  |
| upn_id | int8 |  | 唯一码ID | √ | √ |  |
| quality_status | varchar | 50 | 质量状态 | √ | √ | [[dict.INV_QUALITY_STATUS]] |
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
#wms/db/基础数据
