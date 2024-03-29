---
title: sys_login_log
desc: 登录日志
category: 基础数据
type: db
tags:
  - wms
  - db
  - 基础数据
---

# title
>[!dbtable] sys_login_log
> 登录日志

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| id | int8 |  | 数据id | √ | √ |  |
| user_id | int8 |  | 用户id |  | √ |  |
| login_time | timestamptz |  | 登录时间 |  | √ |  |
| login_ip | varchar | 90 | 登录ip |  | √ |  |
| login_channel | varchar | 8 | 登录渠道 |  | √ |  |
| login_type | varchar | 8 | 登录方式: 1:用户名密码 |  | √ | [[dict.LOGIN_TYPE]] |
| login_state | varchar | 8 | 登录状态: 0:登录失败，1:登录成功 |  | √ | [[dict.LOGIN_STATE]] |
| request_data | varchar | 4000 | 登录请求数据 |  | √ |  |
| jwt_token_id | int8 |  | jwt: token id |  |  |  |
| create_at | timestamptz |  | 创建时间 |  | √ |  |
#wms/db/基础数据
