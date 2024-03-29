---
title: doc_ship_task
desc: 发运任务
category: 基础数据
type: db
tags:
  - wms
  - db
  - 基础数据
---

# title
>[!dbtable] doc_ship_task
> 发运任务

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| task_id | int8 |  | 发运任务ID | √ | √ |  |
| task_code | varchar | 128 | 任务号 |  | √ |  |
| out_steps_type | varchar | 50 | 出库步骤类型 |  | √ |  |
| package_sn | varchar | 128 | 包裹流水号 |  | √ |  |
| out_status | varchar | 50 | 出库状态 |  | √ |  |
| obtain_staff_id | int8 |  | 索取职员ID |  | √ |  |
| obtain_time | timestamptz |  | 索取时间 |  |  |  |
| confirm_staff_id | int8 |  | 确认职员ID |  | √ |  |
| confirm_time | timestamptz |  | 确认时间 |  |  |  |
| so_id | int8 |  | 订单ID |  | √ |  |
| wave_id | int8 |  | 波次ID |  | √ |  |
| wh_id | int8 |  | 仓库ID |  | √ |  |
| owner_id | int8 |  | 货主id |  | √ |  |
| is_active | varchar | 50 | 是否激活 |  | √ |  |
| create_by | varchar | 64 | 创建人 |  |  |  |
| create_at | timestamptz |  | 创建时间 |  |  |  |
| update_by | varchar | 64 | 更新人 |  |  |  |
| update_at | timestamptz |  | 更新时间 |  |  |  |
#wms/db/基础数据
