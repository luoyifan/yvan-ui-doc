---
title: rule_lot
desc: 批属性规则
category: 基础数据
type: db
tags:
  - wms/db/基础数据
---

# title
>[!dbtable] rule_lot
> 批属性规则

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| lot_rule_id | int8 |  | 批属性规则ID | √ | √ |  |
| lot_rule_code | varchar | 128 | 批属性规则编号 |  |  |  |
| lot_rule_desc | varchar | 255 | 批属性规则描述 |  |  |  |
| is_enable | varchar | 50 | 是否启用 |  |  | [[dict.IS_ENABLE]] |
| create_by | varchar | 64 | 创建者 |  |  |  |
| create_at | timestamptz |  | 建立时间 |  | √ |  |
| update_by | varchar | 64 | 修改者 |  |  |  |
| update_at | timestamptz |  | 更新时间 |  | √ |  |
| lot_rule_expr | varchar | 1024 | 适配规则表达式 |  |  |  |
| rule_sort | int4 |  | 规则排序 |  | √ |  |

