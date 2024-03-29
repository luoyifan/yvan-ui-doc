---
title: task_job_console_log
desc: 任务控制台日志
category: 基础数据
type: db
tags:
  - wms
  - db
  - 基础数据
---

# title
>[!dbtable] task_job_console_log
> 任务控制台日志

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| id | int8 |  | 主键id | √ | √ |  |
| namespace | varchar | 63 | 命名空间 |  | √ |  |
| instance_name | varchar | 127 | 调度器实例名称 |  | √ |  |
| job_id | int8 |  | 任务ID |  | √ |  |
| job_log_id | int8 |  | 任务执行日志ID |  | √ |  |
| line_num | int4 |  | 日志行号 |  | √ |  |
| log | text |  | 日志内容 |  |  |  |
| create_at | timestamp |  | 创建时间 |  | √ |  |
#wms/db/基础数据
