---
title: rule_abc_items
desc: abc规则明细
category: 基础数据
type: db
tags:
  - wms/db/基础数据
---

# title
>[!dbtable] rule_abc_items
> abc规则明细

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| abc_rule_id | int8 |  | abc规则ID | √ | √ |  |
| abc_item_id | int8 |  | abc规则明细ID | √ | √ |  |
| item_abc | int4 |  | 商品abc属性 |  |  |  |
| reorder | int4 |  | 固定排名 |  |  |  |
| percentage | numeric |  | 百分比 |  |  |  |
| create_by | varchar | 64 | 创建人 |  |  |  |
| create_at | timestamptz |  | 创建时间 |  |  |  |
| update_by | varchar | 64 | 更新人 |  |  |  |
| update_at | timestamptz |  | 更新时间 |  |  |  |

