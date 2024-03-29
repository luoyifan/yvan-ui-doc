---
title: rule_upn_item_item
desc: 规则物料表
category: 基础数据
type: db
tags:
  - wms/db/基础数据
---

# title
>[!dbtable] rule_upn_item_item
> 规则物料表

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| rule_upn_item_id | int8 |  | id | √ | √ |  |
| rule_item_id | int8 |  | 规则id |  | √ |  |
| remark | varchar | 255 | 备注 |  |  |  |
| create_by | varchar | 255 | 创建者 |  |  |  |
| create_at | timestamptz |  | 建立时间 |  |  |  |
| update_by | varchar | 255 | 修改者 |  |  |  |
| update_at | timestamptz |  | 更新时间 |  |  |  |
| item_id | int8 |  | 物料id |  | √ |  |

