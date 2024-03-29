---
title: sys_oper_log
desc: 操作日志表
category: 基础数据
type: db
tags:
  - wms
  - db
  - 基础数据
---

# title
>[!dbtable] sys_oper_log
> 操作日志表

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| log_id | int8 |  | 主键 | √ | √ |  |
| action | varchar | 64 | 操作行为 |  |  |  |
| url | varchar | 255 | 用户请求的URL |  |  |  |
| remark | varchar | 255 | 操作备注 |  |  |  |
| ip | varchar | 64 | 操作终端的IP |  |  |  |
| log_user_id | int8 |  | 操作用户ID |  |  |  |
| log_user_name | varchar | 60 | 操作人 |  |  |  |
| log_at | timestamptz |  | 日志发生时间 |  |  |  |
| log_level | int4 |  | 日志级别(1=debug/2=info/3=warn/4=error/5=fail) |  |  |  |
#wms/db/基础数据
