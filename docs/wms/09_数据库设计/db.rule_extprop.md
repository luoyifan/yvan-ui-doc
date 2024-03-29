---
title: rule_extprop
desc: 扩展字段包
category: 基础数据
type: db
tags:
  - wms/db/基础数据
---

# title
>[!dbtable] rule_extprop
> 扩展字段包

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| extprop_id | int8 |  | 扩展包ID | √ | √ |  |
| extprop_name | varchar | 255 | 扩展包名称 |  | √ |  |
| remark | varchar | 255 | 备注 |  |  |  |
| is_enable | varchar | 50 | 是否启用 |  | √ | [[dict.IS_ENABLE]] |
| oms_auto_create | varchar | 50 | OMS自动创建 |  | √ | [[dict.IS_ENABLE]] |
| oms_create_cause | varchar | 255 | OMS创建原因 |  | √ |  |
| create_by | varchar | 64 | 创建者 |  |  |  |
| create_at | timestamptz |  | 建立时间 |  |  |  |
| update_by | varchar | 64 | 修改者 |  |  |  |
| update_at | timestamptz |  | 更新时间 |  |  |  |

