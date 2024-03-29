---
title: rule_workstation
desc: 作业工位分配主表
category: 基础数据
type: db
tags:
  - wms
  - db
  - 基础数据
---

# title
>[!dbtable] rule_workstation
> 作业工位分配主表

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| rule_workstation_id | int8 |  | 工位规则ID | √ | √ |  |
| rule_workstation_code | varchar | 255 | 工位规则编码 |  |  |  |
| rule_name | varchar | 255 | 规则名称 |  |  |  |
| rule_order | int4 |  | 序号 |  |  |  |
| is_enable | varchar | 50 | 是否启用 |  |  | [[dict.IS_ENABLE]] |
| remark | varchar | 255 | 备注 |  |  |  |
| rule_condition | varchar | 40960 | 适用条件 |  |  |  |
#wms/db/基础数据
