---
title: task_report
desc: 任务执行报表
category: 基础数据
type: db
tags:
  - wms/db/基础数据
---

# title
>[!dbtable] task_report
> 任务执行报表

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| id | int8 |  | 主键id | √ | √ |  |
| namespace | varchar | 63 | 命名空间 |  | √ |  |
| report_time | varchar | 31 | 报表时间 |  | √ |  |
| job_count | int8 |  | job 运行总次数 |  | √ |  |
| job_err_count | int8 |  | job 运行错误次数 |  | √ |  |
| trigger_count | int8 |  | 触发总次数 |  | √ |  |
| misfire_count | int8 |  | 错过触发次数 |  | √ |  |

