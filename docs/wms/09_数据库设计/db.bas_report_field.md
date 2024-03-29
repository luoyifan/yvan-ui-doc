---
title: bas_report_field
desc: 
category: 基础数据
type: db
tags:
  - wms/db/基础数据
---

# title
>[!dbtable] bas_report_field
> 

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| field_id | numeric |  | ID | √ | √ |  |
| english_name | varchar | 50 | 字段名称 |  | √ |  |
| chinese_name | varchar | 50 | 显示中文名称 |  | √ |  |
| field_type | numeric |  | 字段类型: 1.string 2.numeric 3.date |  | √ | [[dict.FIELD_TYPE]] |
| xiansh_width | numeric |  | 显示宽度 |  | √ |  |
| xiansh_method | varchar | 50 | 显示方式 |  | √ |  |
| create_at | timestamptz |  | 创建时间 |  | √ |  |
| create_by | varchar | 64 | 创建人 |  | √ |  |
| update_at | timestamptz |  | 更新时间 |  | √ |  |
| update_by | varchar | 64 | 更新人 |  | √ |  |

