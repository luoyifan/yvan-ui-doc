---
title: sys_data_version
desc: 数据版本
category: 基础数据
type: db
tags:
  - wms
  - db
  - 基础数据
---

# title
>[!dbtable] sys_data_version
> 数据版本

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| data_name | varchar | 255 | 数据名称 | √ | √ |  |
| data_version | int8 |  | 数据版本号(时间戳) |  | √ |  |
#wms/db/基础数据
