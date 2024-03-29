---
title: doc_ship_task_items
desc: 发运任务明细
category: 基础数据
type: db
tags:
  - wms
  - db
  - 基础数据
---

# title
>[!dbtable] doc_ship_task_items
> 发运任务明细

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| task_id | int8 |  | 任务id | √ | √ |  |
| task_line_no | int4 |  | 任务行号 | √ | √ |  |
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
| qty | numeric |  | 数量 |  | √ |  |
| ship_qty | numeric |  | 发运数量 |  | √ |  |
| short_qty | numeric |  | 短缺数量 |  | √ |  |
| cancel_qty | numeric |  | 取消数量 |  | √ |  |
| obtain_staff_id | int8 |  | 索取人ID |  | √ |  |
| obtain_time | timestamptz |  | 索取时间 |  |  |  |
| confirm_staff_id | int8 |  | 确认人ID |  | √ |  |
| confirm_time | timestamptz |  | 确认时间 |  |  |  |
| collect_loc_id | int8 |  | 集货位ID |  | √ |  |
| is_active | varchar | 50 | 是否激活 |  | √ |  |
| pick_real_id | int8 |  | 实际拣货ID |  | √ |  |
| review_real_id | int8 |  | 实际复核ID |  | √ |  |
| so_id | int8 |  | 订单ID |  | √ |  |
| so_line_no | int4 |  | 订单行 |  | √ |  |
| wave_id | int8 |  | 波次ID |  | √ |  |
| owner_id | int8 |  | 货主id |  | √ |  |
| wh_id | int8 |  | 仓库id |  | √ |  |
| create_by | varchar | 64 | 创建人 |  |  |  |
| create_at | timestamptz |  | 创建时间 |  |  |  |
| update_by | varchar | 64 | 更新人 |  |  |  |
| update_at | timestamptz |  | 更新时间 |  |  |  |
#wms/db/基础数据
