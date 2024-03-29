---
title: bas_wh_owner
desc: 仓库货主关系表
category: 基础数据
type: db
tags:
  - wms/db/基础数据
---

# title
>[!dbtable] bas_wh_owner
> 仓库货主关系表

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| wh_id | int8 |  | 仓库ID | √ | √ |  |
| owner_id | int8 |  | 货主ID | √ | √ |  |
| create_by | varchar | 64 | 创建者 |  |  |  |
| create_at | timestamptz |  | 建立时间 |  |  |  |
| update_by | varchar | 64 | 修改者 |  |  |  |
| update_at | timestamptz |  | 更新时间 |  |  |  |

