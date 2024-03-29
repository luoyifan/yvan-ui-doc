---
title: dev_user
desc: 二开用户表
category: 基础数据
type: db
tags:
  - wms/db/基础数据
---

# title
>[!dbtable] dev_user
> 二开用户表

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| user_id | int8 |  | 用户id | √ | √ |  |
| login_name | varchar | 255 | 登录名 |  | √ |  |
| login_password | varchar | 255 | 密码 |  | √ |  |
| is_enable | int4 |  | 是否启用: 0:禁用，1:启用 |  | √ | [[dict.IS_ENABLE]] |
| create_by | varchar | 64 | 创建人 |  | √ |  |
| create_at | timestamptz |  | 创建时间 |  | √ |  |
| update_by | varchar | 64 | 更新人 |  | √ |  |
| update_at | timestamptz |  | 更新时间 |  | √ |  |

