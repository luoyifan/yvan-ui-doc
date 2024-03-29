---
title: rule_lot_items
desc: 批属性规则明细
category: 基础数据
type: db
tags:
  - wms/db/基础数据
---

# title
>[!dbtable] rule_lot_items
> 批属性规则明细

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| lot_rule_id | int8 |  | 批属性规则ID | √ | √ |  |
| lot_field | varchar | 128 | 物理字段 | √ | √ |  |
| lot_att_flag | varchar | 50 | 输入控制 |  |  | [[dict.IS_ENABLE]] |
| is_not_null | varchar | 50 | 是否必填 |  |  | [[dict.IS_ENABLE]] |
| oms_ref | varchar | 255 | OMS对应关系 |  |  |  |
| is_att_key | varchar | 50 | 是否关键属性 |  |  | [[dict.IS_ENABLE]] |
| is_val | varchar | 50 | 是否验证 |  |  | [[dict.IS_ENABLE]] |
| is_show | varchar | 50 | 是否显示 |  |  | [[dict.IS_ENABLE]] |
| is_enable | varchar | 50 | 是否启用 |  |  | [[dict.IS_ENABLE]] |
| create_by | varchar | 64 | 创建者 |  |  |  |
| create_at | timestamptz |  | 建立时间 |  | √ |  |
| update_by | varchar | 64 | 修改者 |  |  |  |
| update_at | timestamptz |  | 更新时间 |  | √ |  |
| lot_sort | int4 |  | 排序 |  |  |  |
| ui_setting | varchar | 40960 | 表单编辑模式 |  |  |  |

