---
title: doc_review_task_real_items
desc: 复核任务实际明细
category: 基础数据
type: db
tags:
  - wms
  - db
  - 基础数据
---

# title
>[!dbtable] doc_review_task_real_items
> 复核任务实际明细

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| review_real_id | int8 |  | 复核任务实际明细ID | √ | √ |  |
| task_id | int8 |  | 任务id |  | √ |  |
| task_line_no | int4 |  | 任务行号 |  | √ |  |
| out_status | varchar | 50 | 出库状态 |  | √ |  |
| package_sn | varchar | 128 | 包裹流水号 |  | √ |  |
| pack_id | int8 |  | 包装ID |  | √ |  |
| pack_level | varchar | 50 | 包装级别 |  | √ |  |
| item_id | int8 |  | 商品ID |  | √ |  |
| lot_id | int8 |  | 批属性id |  | √ |  |
| loc_id | int8 |  | 库位id |  | √ |  |
| primary_code | varchar | 128 | 一级容器 |  | √ |  |
| secondary_code | varchar | 128 | 二级容器 |  | √ |  |
| upn_id | int8 |  | 唯一码ID |  | √ |  |
| quality_status | varchar | 50 | 质量状态 |  | √ |  |
| qty | numeric |  | 库存数量 |  | √ |  |
| pick_real_id | int8 |  | 实际拣货ID |  | √ |  |
| collect_loc_id | int8 |  | 集货位ID |  | √ |  |
| so_id | int8 |  | 订单ID |  | √ |  |
| so_line_no | int4 |  | 订单行 |  | √ |  |
| wave_id | int8 |  | 波次ID |  | √ |  |
| owner_id | int8 |  | 货主id |  | √ |  |
| wh_id | int8 |  | 仓库id |  | √ |  |
| is_active | varchar | 50 | 是否激活 |  | √ |  |
| create_by | varchar | 64 | 创建人 |  |  |  |
| create_at | timestamptz |  | 创建时间 |  |  |  |
| update_by | varchar | 64 | 更新人 |  |  |  |
| update_at | timestamptz |  | 更新时间 |  |  |  |
#wms/db/基础数据
