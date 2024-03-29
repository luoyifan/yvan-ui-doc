---
title: dev_express_form_items
desc: 表达式构建
category: 基础数据
type: db
tags:
  - wms/db/基础数据
---

# title
>[!dbtable] dev_express_form_items
> 表达式构建

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| form_name | varchar | 255 | 表达式窗口 | √ | √ |  |
| field | varchar | 255 | 字段 | √ | √ |  |
| field_sort | int4 |  | 排序 |  |  |  |
| header | varchar | 255 | 字段标题 |  |  |  |
| category | varchar | 255 | 类型 | √ | √ |  |
| default_value | varchar | 255 | 默认值 |  |  |  |
| editor | varchar | 255 | 编辑器 |  |  |  |
| id_field | varchar | 255 | id字段 |  |  |  |
| dict | varchar | 255 | 字典 |  |  |  |
| create_by | varchar | 64 | 创建人 |  |  |  |
| update_by | varchar | 64 | 更新人 |  |  |  |
| create_at | timestamptz |  | 创建时间 |  |  |  |
| update_at | timestamptz |  | 更新时间 |  |  |  |

