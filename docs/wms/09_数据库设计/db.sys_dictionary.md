---
title: sys_dictionary
desc: 系统字典
category: 基础数据
type: db
tags:
  - wms
  - db
  - 基础数据
---

# title
>[!dbtable] sys_dictionary
> 系统字典

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| dict_code | varchar | 255 | 字典编号 | √ | √ |  |
| dict_desc | varchar | 255 | 字典描述 |  |  |  |
| dict_type | varchar | 50 | 字典类别 |  |  |  |
| dict_sort | int4 |  | 字典项排序 |  |  |  |
| is_dynamic | varchar | 50 | 1=SQL: 2=URL: 其他是items |  |  | [[dict.IS_ENABLE]] |
| dynamic_url | varchar | 255 | URL地址 |  |  |  |
| dynamic_sql | varchar | 255 | SQL内容 |  |  |  |
| create_at | timestamptz |  | 创建时间 |  |  |  |
| create_by | varchar | 64 | 创建人 |  |  |  |
| update_at | timestamptz |  | 更新时间 |  |  |  |
| update_by | varchar | 64 | 更新人 |  |  |  |
#wms/db/基础数据
