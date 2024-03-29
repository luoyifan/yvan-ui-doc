---
title: sys_jwt_token
desc: 登录JWT Token缓存表
category: 基础数据
type: db
tags:
  - wms
  - db
  - 基础数据
---

# title
>[!dbtable] sys_jwt_token
> 登录JWT Token缓存表

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| id | int8 |  | token id | √ | √ |  |
| user_id | varchar | 64 | 用户id |  | √ |  |
| token | varchar | 4000 | token数据 |  | √ |  |
| expired_time | timestamptz |  | jwt-token过期时间(空表示永不过期) |  |  |  |
| disable | varchar | 50 | jwt-token是否禁用: 0000:未禁用；0001:已禁用 |  | √ | [[dict.IS_ENABLE]] |
| disable_reason | varchar | 32 | token禁用原因 |  |  |  |
| refresh_token | varchar | 255 | 刷新token |  |  |  |
| rt_expired_time | timestamptz |  | 刷新token过期时间 |  |  |  |
| rt_state | varchar | 50 | 刷新token状态: 0000:无效(已使用)；0001:有效(未使用) |  |  |  |
| rt_use_time | timestamptz |  | 刷新token使用时间 |  |  |  |
| rt_create_token_id | int8 |  | 刷新token创建的jwt-token: id |  |  |  |
| create_at | timestamptz |  | 创建时间 |  | √ |  |
| update_at | timestamptz |  | 更新时间 |  |  |  |
#wms/db/基础数据
