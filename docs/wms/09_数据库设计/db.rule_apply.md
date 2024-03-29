---
title: rule_apply
desc: 规则应用
category: 基础数据
type: db
tags:
  - wms
  - db
  - 基础数据
---

# title
>[!dbtable] rule_apply
> 规则应用

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| apply_id | int8 |  | 主键 | √ | √ |  |
| match_type | int4 |  | 匹配目标类型 |  | √ | [[dict.RULE_MATCH_TYPE]] |
| match_id | int8 |  | 匹配目标ID |  | √ |  |
| rule_type | int4 |  | 规则类型 |  | √ | [[dict.RULE_MATCH_TARGET]] |
| rule_id | int8 |  | 规则ID |  | √ |  |
| is_enable | int4 |  | 是否启用 |  | √ | [[dict.IS_ENABLE]] |
| create_at | timestamptz |  | 创建时间 |  |  |  |
| create_by | varchar | 64 | 创建人 |  | √ |  |
| update_at | timestamptz |  | 更新时间 |  |  |  |
| update_by | varchar | 64 | 更新人 |  | √ |  |
#wms/db/基础数据
