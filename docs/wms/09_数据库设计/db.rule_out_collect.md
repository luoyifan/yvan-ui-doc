---
title: rule_out_collect
desc: 集货位规则主表
category: 基础数据
type: db
tags:
  - wms/db/基础数据
---

# title
>[!dbtable] rule_out_collect
> 集货位规则主表

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| rule_outcollect_id | int8 |  | 集货位规则ID | √ | √ |  |
| rule_outcollect_code | varchar | 255 | 集货位规则编码 |  | √ |  |
| rule_name | varchar | 255 | 规则名称 |  | √ |  |
| rule_order | int4 |  | 序号 |  | √ |  |
| is_enable | varchar | 50 | 是否启用 |  | √ | [[dict.IS_ENABLE]] |
| remark | varchar | 255 | 备注 |  | √ |  |
| rule_condition | varchar | 40960 | 适用条件 |  | √ |  |
| create_by | varchar | 255 | 创建人 |  |  |  |
| create_at | timestamptz |  | 创建时间 |  |  |  |
| update_by | varchar | 255 | 更新人 |  |  |  |
| update_at | timestamptz |  | 更新时间 |  |  |  |

