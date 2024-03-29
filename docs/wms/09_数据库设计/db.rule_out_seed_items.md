---
title: rule_out_seed_items
desc: 分播规则明细
category: 基础数据
type: db
tags:
  - wms
  - db
  - 基础数据
---

# title
>[!dbtable] rule_out_seed_items
> 分播规则明细

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| rule_seed_item_id | int8 |  | 分拨规则明细ID | √ | √ |  |
| rule_seed_id | int8 |  | 分拨规则ID |  | √ |  |
| rule_name | varchar | 255 | 规则名称 |  | √ |  |
| rule_order | int4 |  | 序号 |  | √ |  |
| is_enable | varchar | 50 | 是否启用 |  | √ | [[dict.IS_ENABLE]] |
| remark | varchar | 255 | 备注 |  | √ |  |
| rule_condition | varchar | 40960 | 适用条件 |  | √ |  |
| rule_param | varchar | 40960 | 算法参数 |  | √ |  |
| create_by | varchar | 255 | 创建人 |  |  |  |
| create_at | timestamptz |  | 创建时间 |  |  |  |
| update_by | varchar | 255 | 更新人 |  |  |  |
| update_at | timestamptz |  | 更新时间 |  |  |  |
#wms/db/基础数据
