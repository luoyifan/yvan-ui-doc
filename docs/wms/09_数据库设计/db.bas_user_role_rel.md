---
title: bas_user_role_rel
desc: 用户角色关系表
category: 基础数据
type: db
tags:
  - wms/db/基础数据
---

# title
>[!dbtable] bas_user_role_rel
> 用户角色关系表

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| user_id | int8 |  | 用户ID | √ | √ |  |
| role_id | int8 |  | 角色ID | √ | √ |  |
| wh_id | int8 |  | 仓库ID | √ | √ |  |
| create_by | varchar | 64 | 创建者 |  |  |  |
| create_at | timestamptz |  | 建立时间 |  |  |  |

