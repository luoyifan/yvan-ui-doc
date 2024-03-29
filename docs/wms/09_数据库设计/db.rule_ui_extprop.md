---
title: rule_ui_extprop
desc: 页面版本与扩展属性包关系
category: 基础数据
type: db
tags:
  - wms
  - db
  - 基础数据
---

# title
>[!dbtable] rule_ui_extprop
> 页面版本与扩展属性包关系

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| page_id | int8 |  | 页面ID | √ | √ |  |
| version_id | int8 |  | 版本ID | √ | √ |  |
| extprop_id | int8 |  | 扩展属性ID | √ | √ |  |
| create_by | varchar | 255 | 创建人 |  |  |  |
| create_at | timestamptz |  | 创建时间 |  |  |  |
| update_by | varchar | 255 | 更新人 |  |  |  |
| update_at | timestamptz |  | 更新时间 |  |  |  |
#wms/db/基础数据
