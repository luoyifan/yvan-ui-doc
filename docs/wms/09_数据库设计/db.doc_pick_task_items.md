---
title: doc_pick_task_items
desc: 拣货任务明细
category: 基础数据
type: db
tags:
  - wms/db/基础数据
---

# title
>[!dbtable] doc_pick_task_items
> 拣货任务明细

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| task_id | int8 |  | 任务id | √ | √ |  |
| task_line_no | int4 |  | 任务行号 | √ | √ |  |
| out_status | varchar | 50 | 出库状态 |  | √ |  |
| inv_level | varchar | 50 | 库存级别 |  | √ |  |
| pack_id | int8 |  | 包装Id |  | √ |  |
| pack_level | varchar | 50 | 包装级别 |  | √ |  |
| item_id | int8 |  | 商品ID |  | √ |  |
| lot_id | int8 |  | 批属性id |  | √ |  |
| wh_area_id | int8 |  | 库区ID |  | √ |  |
| loc_id | int8 |  | 库位id |  | √ |  |
| primary_code | varchar | 128 | 一级容器 |  | √ |  |
| secondary_code | varchar | 128 | 二级容器 |  | √ |  |
| upn_id | int8 |  | 唯一码ID |  | √ |  |
| quality_status | varchar | 50 | 质量状态 |  | √ |  |
| qty | numeric |  | 数量 |  | √ |  |
| pick_qty | numeric |  | 拣货数量 |  | √ |  |
| short_qty | numeric |  | 短拣数量 |  | √ |  |
| cancel_qty | numeric |  | 取消数量 |  | √ |  |
| alloc_id | int8 |  | 分配ID |  | √ |  |
| obtain_staff_id | int8 |  | 索取人ID |  | √ |  |
| obtain_time | timestamptz |  | 索取时间 |  |  |  |
| confirm_staff_id | int8 |  | 确认人ID |  | √ |  |
| confirm_time | timestamptz |  | 确认时间 |  |  |  |
| is_active | varchar | 50 | 是否激活 |  | √ | [[dict.YESNO]] |
| wave_id | int8 |  | 波次ID |  | √ |  |
| owner_id | int8 |  | 货主id |  | √ |  |
| wh_id | int8 |  | 仓库id |  | √ |  |
| create_by | varchar | 64 | 创建人 |  |  |  |
| create_at | timestamptz |  | 创建时间 |  |  |  |
| update_by | varchar | 64 | 更新人 |  |  |  |
| update_at | timestamptz |  | 更新时间 |  |  |  |

