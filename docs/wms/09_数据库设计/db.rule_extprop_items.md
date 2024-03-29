---
title: rule_extprop_items
desc: 字段扩展包字段详情
category: 基础数据
type: db
tags:
  - wms
  - db
  - 基础数据
---

# title
>[!dbtable] rule_extprop_items
> 字段扩展包字段详情

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| extprop_id | int8 |  | 扩展字段包ID | √ | √ |  |
| extprop_block | varchar | 255 | 字段分类 | √ | √ |  |
| extprop_field | varchar | 255 | 物理字段 | √ | √ |  |
| extprop_order | int4 |  | 展示顺序 |  | √ |  |
| is_enable | varchar | 50 | 是否启用 |  | √ | [[dict.IS_ENABLE]] |
| field_type | varchar | 255 | 物理类型 |  | √ |  |
| extprop_oms_property | varchar | 255 | OMS接口属性名 |  | √ |  |
| isshow | int4 |  | 是否展示 |  | √ |  |
| attr_name | varchar | 255 | 中文描述 |  | √ |  |
| component_code | varchar | 50 | 编辑模式 |  | √ |  |
| biz_code_category | varchar | 1024 | 字典 |  | √ |  |
| required | int4 |  | 必填 |  | √ |  |
| edit | int4 |  | 允许编辑 |  | √ |  |
| create_by | varchar | 64 | 创建者 |  |  |  |
| create_at | timestamptz |  | 建立时间 |  |  |  |
| update_by | varchar | 64 | 修改者 |  |  |  |
| update_at | timestamptz |  | 更新时间 |  |  |  |
#wms/db/基础数据
