---
title: task_scheduler_log
desc: 调度器事件日志
category: 基础数据
type: db
tags:
  - wms/db/基础数据
---

# title
>[!dbtable] task_scheduler_log
> 调度器事件日志

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| id | int8 |  | 编号 | √ | √ |  |
| namespace | varchar | 63 | 命名空间 |  | √ |  |
| instance_name | varchar | 127 | 调度器实例名称 |  | √ |  |
| event_name | varchar | 63 | 事件名称 |  | √ |  |
| log_data | text |  | 事件日志数据 |  |  |  |
| create_at | timestamp |  | 创建时间 |  | √ |  |

