---
title: sys_dictionary_items
desc: 系统字典项
category: 基础数据
type: db
tags:
  - wms
  - db
  - 基础数据
---

# title
>[!dbtable] sys_dictionary_items
> 系统字典项

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| dict_code | varchar | 255 | 字典编号 | √ | √ |  |
| dict_text | varchar | 255 | 字典项文本 |  | √ |  |
| dict_value | varchar | 255 | 字典值 | √ | √ |  |
| dict_sort | int4 |  | 字典排序 |  |  |  |
| is_enable | varchar | 50 | 是否启用 |  | √ |  |
| dict_parent | varchar | 255 | 上级 |  |  |  |
| udf1 | varchar | 255 | 自定义扩展属性1 |  |  |  |
| udf2 | varchar | 255 | 自定义扩展属性2 |  |  |  |
| udf3 | varchar | 255 | 自定义扩展属性3 |  |  |  |
| create_at | timestamptz |  | 创建时间 |  |  |  |
| create_by | varchar | 64 | 创建人 |  |  |  |
| update_at | timestamptz |  | 更新时间 |  |  |  |
| update_by | varchar | 64 | 更新人 |  |  |  |
| var_name | varchar | 255 | 变量名 |  |  |  |
#wms/db/基础数据
