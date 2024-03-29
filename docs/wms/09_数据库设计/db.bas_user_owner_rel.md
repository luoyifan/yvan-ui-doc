---
title: bas_user_owner_rel
desc: 用户货主关系表
category: 基础数据
type: db
tags:
  - wms/db/基础数据
---

# title
>[!dbtable] bas_user_owner_rel
> 用户货主关系表

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| user_id | int8 |  | 用户ID | √ | √ |  |
| owner_id | int8 |  | 货主ID | √ | √ |  |
| wh_id | int8 |  | 仓库ID | √ | √ |  |
| is_enable | varchar | 255 | 是否启用 |  | √ |  |
| create_by | varchar | 255 | 创建者 |  |  |  |
| create_at | timestamptz |  | 建立时间 |  |  |  |
| update_by | varchar | 255 | 修改者 |  |  |  |
| update_at | timestamptz |  | 更新时间 |  |  |  |

