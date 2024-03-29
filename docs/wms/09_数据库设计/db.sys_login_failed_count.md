---
title: sys_login_failed_count
desc: 用户连续登录失败次数
category: 基础数据
type: db
tags:
  - wms
  - db
  - 基础数据
---

# title
>[!dbtable] sys_login_failed_count
> 用户连续登录失败次数

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| id | int8 |  | 数据id | √ | √ |  |
| user_id | int8 |  | 用户id |  | √ |  |
| login_type | varchar | 8 | 登录方式: 1:用户名密码 |  | √ | [[dict.LOGIN_TYPE]] |
| failed_count | int4 |  | 登录失败次数 |  | √ |  |
| last_login_time | timestamptz |  | 最后登录失败时间 |  |  |  |
| delete_flag | varchar | 8 | 数据删除标志: 0:未删除，1:已删除 |  | √ | [[dict.IS_ENABLE]] |
| create_at | timestamptz |  | 创建时间 |  | √ |  |
| update_at | timestamptz |  | 更新时间 |  | √ |  |
#wms/db/基础数据
