---
title: task_job_trigger
desc: 任务触发器
category: 基础数据
type: db
tags:
  - wms/db/基础数据
---

# title
>[!dbtable] task_job_trigger
> 任务触发器

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| id | int8 |  | 主键id | √ | √ |  |
| namespace | varchar | 63 | 命名空间 |  | √ |  |
| job_id | int8 |  | 任务ID |  | √ |  |
| name | varchar | 127 | 触发器名称 |  | √ |  |
| start_time | timestamp |  | 触发开始时间 |  | √ |  |
| end_time | timestamp |  | 触发结束时间 |  |  |  |
| last_fire_time | timestamp |  | 上一次触发时间 |  |  |  |
| next_fire_time | timestamp |  | 下一次触发时间 |  |  |  |
| misfire_strategy | int2 |  | 错过触发策略，1：忽略，2：立即补偿触发一次 |  | √ |  |
| allow_concurrent | int2 |  | 是否允许多节点并行触发，使用悲观锁实现，不建议允许，0：禁止，1：允许 |  | √ |  |
| type | int2 |  | 触发类型，1：cron触发，2：固定间隔触发 |  | √ |  |
| cron | varchar | 511 | cron表达式 |  |  |  |
| fixed_interval | int8 |  | 固定间隔触发，间隔时间(单位：秒) |  |  |  |
| fire_count | int8 |  | 触发次数 |  | √ |  |
| disable | int2 |  | 是否禁用：0-启用，1-禁用 |  | √ |  |
| description | varchar | 511 | 描述 |  |  |  |
| create_at | timestamp |  | 创建时间 |  | √ |  |
| update_at | timestamp |  | 更新时间 |  |  |  |

