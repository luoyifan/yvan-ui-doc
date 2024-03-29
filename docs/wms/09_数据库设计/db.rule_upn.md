---
title: rule_upn
desc: 条码管控表
category: 基础数据
type: db
tags:
  - wms/db/基础数据
---

# title
>[!dbtable] rule_upn
> 条码管控表

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| rule_upn_id | int8 |  | id | √ | √ |  |
| rule_upn_code | varchar | 255 | 规则编码 |  |  |  |
| rule_upn_name | varchar | 255 | 规则名称 |  |  |  |
| is_enable | varchar | 50 | 是否启用 |  |  |  |
| create_by | varchar | 255 | 创建人 |  |  |  |
| create_at | timestamptz |  | 创建时间 |  |  |  |
| update_by | varchar | 255 | 修改人 |  |  |  |
| update_at | timestamptz |  | 修改时间 |  |  |  |
| remark | varchar | 255 | 备注 |  |  |  |
| project_id | int8 |  | 项目id |  | √ |  |

