---
title: dev_express_form
desc: 表达式构建
category: 基础数据
type: db
tags:
  - wms/db/基础数据
---

# title
>[!dbtable] dev_express_form
> 表达式构建

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| create_by | varchar | 64 | 创建人 |  |  |  |
| update_by | varchar | 64 | 更新人 |  |  |  |
| create_at | timestamptz |  | 创建时间 |  |  |  |
| update_at | timestamptz |  | 更新时间 |  |  |  |
| form_name | varchar | 255 | 表达式名 | √ | √ |  |
| form_type | int4 |  | 类型 |  |  |  |

