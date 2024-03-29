---
title: rule_workstation_items
desc: 波次模板主表
category: 基础数据
type: db
tags:
  - wms
  - db
  - 基础数据
---

# title
>[!dbtable] rule_workstation_items
> 波次模板主表

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| rule_workstation_id | int8 |  | 工位规则ID |  | √ |  |
| rule_name | varchar | 255 | 规则名称 |  | √ |  |
| rule_order | int4 |  | 序号 |  | √ |  |
| is_enable | varchar | 50 | 是否启用 |  | √ | [[dict.IS_ENABLE]] |
| remark | varchar | 255 | 备注 |  | √ |  |
| rule_condition | varchar | 40960 | 适用条件 |  | √ |  |
| rule_workstation_item_id | int8 |  | 工位规则明细ID | √ | √ |  |
| rule_param | varchar | 40960 | 算法参数 |  | √ |  |
| dispatch_result | varchar | 40960 | 工作位运算结果 |  | √ |  |
| create_by | varchar | 255 | 创建人 |  |  |  |
| create_at | timestamptz |  | 创建时间 |  |  |  |
| update_by | varchar | 255 | 更新人 |  |  |  |
| update_at | timestamptz |  | 更新时间 |  |  |  |
#wms/db/基础数据
