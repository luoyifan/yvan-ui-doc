---
title: dev_convert
desc: 系统转换规则
category: 基础数据
type: db
tags:
  - wms
  - db
  - 基础数据
---

# title
>[!dbtable] dev_convert
> 系统转换规则

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| convert_id | int8 |  | 转换ID | √ | √ |  |
| convert_code | varchar | 255 | 转换编码 |  | √ |  |
| convert_title | varchar | 255 | 转换名 |  | √ |  |
| create_by | varchar | 255 | 创建人 |  |  |  |
| create_at | timestamptz |  | 创建时间 |  |  |  |
| update_by | varchar | 255 | 更新人 |  |  |  |
| update_at | timestamptz |  | 更新时间 |  |  |  |
#wms/db/基础数据
