---
title: dev_print_template_param
desc: 打印模板参数表
category: 基础数据
type: db
tags:
  - wms/db/基础数据
---

# title
>[!dbtable] dev_print_template_param
> 打印模板参数表

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| print_template_param_id | int8 |  | 打印模板参数ID | √ | √ |  |
| print_template_id | int8 |  | 打印模板ID |  |  |  |
| param_name | varchar | 255 | 参数名称 |  |  |  |
| param_type | varchar | 255 | 模板参数类型: SQL/JSON |  |  |  |
| param_key | varchar | 255 | 参数路径 |  |  |  |
| param_header | varchar | 40960 | 参数头 |  |  |  |
| param_value | varchar | 40960 | 模板参数 |  |  |  |
| param_detail | varchar | 40960 | 参数明细JSON格式 |  |  |  |
| result_type | varchar | 50 | 结果集类型 |  |  |  |
| create_by | varchar | 64 | 创建者 |  |  |  |
| create_at | timestamptz |  | 创建时间 |  |  |  |
| update_by | varchar | 64 | 修改者 |  |  |  |
| update_at | timestamptz |  | 修改时间 |  |  |  |

