---
title: rule_cou_lot_item
desc: 盘点属性规则明细
category: 基础数据
type: db
tags:
  - wms/db/基础数据
---

# title
>[!dbtable] rule_cou_lot_item
> 盘点属性规则明细

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| rule_item_id | int8 |  | 规则明细ID | √ | √ |  |
| rule_cou_lot_id | int8 |  | 项目规则ID |  | √ |  |
| rule_item_code | varchar | 255 | 规则编码 |  | √ |  |
| rule_name | varchar | 255 | 规则名称 |  | √ |  |
| is_enable | varchar | 50 | 是否启用 |  | √ |  |
| remark | varchar | 255 | 备注 |  |  |  |
| rule_order | int4 |  | 排序 |  | √ |  |
| create_by | varchar | 255 | 创建人 |  |  |  |
| create_at | timestamptz |  | 创建时间 |  |  |  |
| update_by | varchar | 255 | 更新人 |  |  |  |
| update_at | timestamptz |  | 更新时间 |  |  |  |
| detail | varchar | 40960 | 规则详情 |  |  |  |

