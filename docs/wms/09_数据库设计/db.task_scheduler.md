---
title: task_scheduler
desc: 调度器
category: 基础数据
type: db
tags:
  - wms/db/基础数据
---

# title
>[!dbtable] task_scheduler
> 调度器

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| id | int8 |  | 主键id | √ | √ |  |
| namespace | varchar | 63 | 命名空间(同一个namespace的不同调度器属于同一个集群) |  | √ |  |
| instance_name | varchar | 127 | 调度器实例名称 |  | √ |  |
| last_heartbeat_time | timestamp |  | 最后心跳时间 |  | √ |  |
| heartbeat_interval | int8 |  | 心跳频率(单位：毫秒) |  | √ |  |
| config | text |  | 调度器配置，线程池大小、负载权重、最大并发任务数... |  | √ |  |
| runtime_info | text |  | 调度器运行时信息 |  |  |  |
| description | varchar | 511 | 描述 |  |  |  |
| create_at | timestamp |  | 创建时间 |  | √ |  |
| update_at | timestamp |  | 更新时间 |  |  |  |

