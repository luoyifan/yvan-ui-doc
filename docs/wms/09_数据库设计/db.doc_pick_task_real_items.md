---
title: doc_pick_task_real_items
desc: 拣货任务实际明细
category: 基础数据
type: db
tags:
  - wms/db/基础数据
---

# title
>[!dbtable] doc_pick_task_real_items
> 拣货任务实际明细

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| pick_real_id | int8 |  | 拣货任务实际明细ID | √ | √ |  |
| task_id | int8 |  | 任务id |  | √ |  |
| task_line_no | int4 |  | 任务行号 |  | √ |  |
| out_status | varchar | 50 | 出库状态 |  | √ |  |
| inv_level | varchar | 50 | 库存级别 |  | √ |  |
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
| inv_to_loc_id | int8 |  | 库存中转库位ID |  | √ |  |
| wave_id | int8 |  | 波次ID |  | √ |  |
| owner_id | int8 |  | 货主id |  | √ |  |
| wh_id | int8 |  | 仓库id |  | √ |  |
| is_active | varchar | 50 | 是否激活 |  | √ |  |
| create_by | varchar | 64 | 创建人 |  | √ |  |
| create_at | timestamptz |  | 创建时间 |  | √ |  |
| update_by | varchar | 64 | 更新人 |  | √ |  |
| update_at | timestamptz |  | 更新时间 |  | √ |  |

