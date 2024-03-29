---
title: task_job
desc: 定时任务
category: 基础数据
type: db
tags:
  - wms
  - db
  - 基础数据
---

# title
>[!dbtable] task_job
> 定时任务

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| id | int8 |  | 主键id | √ | √ |  |
| namespace | varchar | 63 | 命名空间 |  | √ |  |
| name | varchar | 127 | 任务名称 |  | √ |  |
| type | int2 |  | 任务类型，1：http调用，2：java调用，3：js脚本，4：shell脚本 |  | √ |  |
| max_reentry | int2 |  | 最大重入执行数量(对于单个节点当前任务未执行完成就触发了下一次执行导致任务重入执行)，小于等于0：表示禁止重入执行 |  | √ |  |
| allow_concurrent | int2 |  | 是否允许多节点并发执行，使用悲观锁实现，不建议禁止，0：禁止，1：允许 |  | √ |  |
| max_retry_count | int4 |  | 执行失败时的最大重试次数 |  | √ |  |
| route_strategy | int2 |  | 路由策略，0：不启用，1：指定节点优先，2：固定节点白名单，3：固定节点黑名单 |  | √ |  |
| first_scheduler | varchar | 2047 | 路由策略，1-指定节点优先，调度器名称集合 |  |  |  |
| whitelist_scheduler | varchar | 2047 | 路由策略，2-固定节点白名单，调度器名称集合 |  |  |  |
| blacklist_scheduler | varchar | 2047 | 路由策略，3-固定节点黑名单，调度器名称集合 |  |  |  |
| load_balance | int2 |  | 负载均衡策略，1：抢占，2：随机，3：轮询，4：一致性HASH |  | √ |  |
| is_update_data | int2 |  | 是否更新任务数据，0：不更新，1：更新 |  | √ |  |
| job_data | text |  | 任务数据(json格式) |  |  |  |
| run_count | int8 |  | 运行次数 |  | √ |  |
| disable | int2 |  | 是否禁用：0-启用，1-禁用 |  | √ |  |
| description | varchar | 511 | 描述 |  |  |  |
| create_at | timestamp |  | 创建时间 |  | √ |  |
| update_at | timestamp |  | 更新时间 |  |  |  |
#wms/db/基础数据
