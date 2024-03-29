---
title: task_job_trigger_log
desc: 任务触发器日志
category: 基础数据
type: db
tags:
  - wms/db/基础数据
---

# title
>[!dbtable] task_job_trigger_log
> 任务触发器日志

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| id | int8 |  | 主键id | √ | √ |  |
| namespace | varchar | 63 | 命名空间 |  | √ |  |
| instance_name | varchar | 127 | 调度器实例名称 |  | √ |  |
| job_trigger_id | int8 |  | 任务触发器ID |  |  |  |
| job_id | int8 |  | 任务ID |  | √ |  |
| trigger_name | varchar | 127 | 触发器名称 |  | √ |  |
| fire_time | timestamp |  | 触发时间 |  | √ |  |
| is_manual | int2 |  | 是否是手动触发，0：系统自动触发，1：用户手动触发 |  | √ |  |
| trigger_time | int4 |  | 触发耗时(单位：毫秒) |  | √ |  |
| last_fire_time | timestamp |  | 上一次触发时间 |  |  |  |
| next_fire_time | timestamp |  | 下一次触发时间 |  |  |  |
| fire_count | int8 |  | 触发次数 |  | √ |  |
| mis_fired | int2 |  | 是否错过了触发，0：否，1：是 |  | √ |  |
| trigger_msg | varchar | 511 | 触发器消息 |  |  |  |
| create_at | timestamp |  | 创建时间 |  | √ |  |

