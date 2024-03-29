---
title: task_scheduler_cmd
desc: 调度器指令
category: 基础数据
type: db
tags:
  - wms
  - db
  - 基础数据
---

# title
>[!dbtable] task_scheduler_cmd
> 调度器指令

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| id | int8 |  | 主键id | √ | √ |  |
| namespace | varchar | 63 | 命名空间 |  | √ |  |
| instance_name | varchar | 127 | 指定的调度器实例名称，为空表示不指定 |  |  |  |
| cmd_info | varchar | 2047 | 指令信息 |  | √ |  |
| state | int2 |  | 指令执行状态，0：未执行，1：执行中，2：执行完成 |  | √ |  |
| create_at | timestamp |  | 创建时间 |  | √ |  |
| update_at | timestamp |  | 更新时间 |  |  |  |
#wms/db/基础数据
