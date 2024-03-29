---
title: rule_abc
desc: ABC计算规则
category: 基础数据
type: db
tags:
  - wms
  - db
  - 基础数据
---

# title
>[!dbtable] rule_abc
> ABC计算规则

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| abc_rule_id | int8 |  | abc规则ID | √ | √ |  |
| abc_rule_code | varchar | 128 | abc规则编号 |  | √ |  |
| abc_rule_name | varchar | 255 | abc规则名称 |  | √ |  |
| abc_rule_desc | varchar | 255 | abc规则描述 |  |  |  |
| is_enable | int4 |  | 是否启用 |  | √ | [[dict.IS_ENABLE]] |
| create_by | varchar | 64 | 创建人 |  |  |  |
| create_at | timestamptz |  | 创建时间 |  |  |  |
| update_by | varchar | 64 | 更新人 |  |  |  |
| update_at | timestamptz |  | 更新时间 |  |  |  |
#wms/db/基础数据
