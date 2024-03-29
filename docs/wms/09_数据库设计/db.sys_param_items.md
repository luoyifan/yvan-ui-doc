---
title: sys_param_items
desc: 系统参数详情表
category: 基础数据
type: db
tags:
  - wms
  - db
  - 基础数据
---

# title
>[!dbtable] sys_param_items
> 系统参数详情表

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| param_item_id | int8 |  | 详情ID | √ | √ |  |
| param_item_seq | int4 |  | 序号 |  |  |  |
| param_code | varchar | 255 | 系统参数编码 |  |  |  |
| param_item_name | varchar | 255 | 系统参数详情名 |  |  |  |
| param_condition | varchar | 40960 | 参数条件 |  |  |  |
| param_value | varchar | 255 | 参数值 |  |  |  |
| create_by | varchar | 64 | 创建人 |  |  |  |
| create_at | timestamptz |  | 创建时间 |  |  |  |
| update_by | varchar | 64 | 更新人 |  |  |  |
| update_at | timestamptz |  | 更新时间 |  |  |  |
#wms/db/基础数据
