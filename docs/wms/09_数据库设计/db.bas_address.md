---
title: bas_address
desc: 地址库
category: 基础数据
type: db
tags:
  - wms/db/基础数据
---

# title
>[!dbtable] bas_address
> 地址库

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| addr_id | int8 |  | 地址ID | √ | √ |  |
| parent_id | int8 |  | 父级ID |  | √ |  |
| div_code | varchar | 50 | 区划编码 |  | √ |  |
| div_name | varchar | 100 | 区划名称 |  | √ |  |
| div_type | varchar | 50 | 区划类型 |  | √ |  |
| is_enable | varchar | 50 | 是否启用 |  | √ |  |
| create_by | varchar | 64 | 创建者 |  |  |  |
| create_at | timestamptz |  | 创建时间 |  |  |  |
| update_by | varchar | 64 | 修改者 |  |  |  |
| update_at | timestamptz |  | 修改时间 |  |  |  |

