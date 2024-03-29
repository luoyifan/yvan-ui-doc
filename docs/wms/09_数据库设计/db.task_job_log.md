---
title: task_job_log
desc: 任务执行日志
category: 基础数据
type: db
tags:
  - wms
  - db
  - 基础数据
---

# title
>[!dbtable] task_job_log
> 任务执行日志

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| id | int8 |  | 主键id | √ | √ |  |
| namespace | varchar | 63 | 命名空间 |  | √ |  |
| instance_name | varchar | 127 | 调度器实例名称 |  | √ |  |
| job_trigger_log_id | int8 |  | 对应的触发器日志ID |  | √ |  |
| job_trigger_id | int8 |  | 任务触发器ID |  |  |  |
| job_id | int8 |  | 任务ID |  | √ |  |
| fire_time | timestamp |  | 触发时间 |  | √ |  |
| start_time | timestamp |  | 开始执行时间 |  | √ |  |
| end_time | timestamp |  | 执行结束时间 |  |  |  |
| run_time | int4 |  | 执行耗时(单位：毫秒) |  |  |  |
| status | int2 |  | 任务执行结果，0：成功，1：失败，2：取消 |  |  |  |
| retry_count | int4 |  | 重试次数 |  | √ |  |
| exception_info | varchar | 2047 | 异常信息 |  |  |  |
| run_count | int8 |  | 执行次数 |  | √ |  |
| before_job_data | text |  | 执行前的任务数据 |  |  |  |
| after_job_data | text |  | 执行后的任务数据 |  |  |  |
#wms/db/基础数据
