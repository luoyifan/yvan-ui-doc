---
title: rule_view
desc: 
category: 基础数据
type: db
tags:
  - wms/db/基础数据
---

# title
>[!dbtable] rule_view
> 

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| view_id | int8 |  | ID | √ | √ |  |
| view_name | varchar | 64 | 模块名称 |  | √ |  |
| view_path | varchar | 255 | 模块路径 |  |  |  |
| create_by | varchar | 255 | 创建人 |  |  |  |
| create_at | timestamptz |  | 创建时间 |  |  |  |
| update_by | varchar | 255 | 更新人 |  |  |  |
| update_at | timestamptz |  | 更新时间 |  |  |  |
| profile_id | int8 |  | 方言ID |  | √ |  |

