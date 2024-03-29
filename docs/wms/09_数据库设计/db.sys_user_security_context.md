---
title: sys_user_security_context
desc: 用户权限信息缓存表
category: 基础数据
type: db
tags:
  - wms
  - db
  - 基础数据
---

# title
>[!dbtable] sys_user_security_context
> 用户权限信息缓存表

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| id | int8 |  | 数据id | √ | √ |  |
| wh_id | int8 |  | 仓库id |  | √ |  |
| user_id | int8 |  | 用户id |  | √ |  |
| security_context | varchar | 4000 | 用户安全信息(安全上下文) |  | √ |  |
| create_at | timestamptz |  | 创建时间 |  |  |  |
| update_at | timestamptz |  | 更新时间 |  |  |  |
#wms/db/基础数据
