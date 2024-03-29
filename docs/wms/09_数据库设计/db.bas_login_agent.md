---
title: bas_login_agent
desc: 登录
category: 基础数据
type: db
tags:
  - wms/db/基础数据
---

# title
>[!dbtable] bas_login_agent
> 登录

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| login_id | int8 |  | 登录ID | √ | √ |  |
| user_id | int8 |  | 用户ID |  | √ |  |
| login_target | varchar | 50 | 登录目标 |  | √ |  |
| auth_type | varchar | 50 | 验证方式 |  | √ |  |
| login_name | varchar | 255 | 登录名 |  | √ |  |
| login_password | varchar | 255 | 登录密码 |  | √ |  |
| is_enable | varchar | 50 | 是否启用 |  | √ | [[dict.IS_ENABLE]] |
| create_by | varchar | 64 | 创建者 |  |  |  |
| create_at | timestamptz |  | 建立时间 |  |  |  |
| update_by | varchar | 64 | 修改者 |  |  |  |
| update_at | timestamptz |  | 更新时间 |  |  |  |
| telephone | varchar | 16 | 手机号码 |  |  |  |

