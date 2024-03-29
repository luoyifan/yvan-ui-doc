---
title: doc_inventory_items
desc: 库存盘点明细
category: 基础数据
type: db
tags:
  - wms
  - db
  - 基础数据
---

# title
>[!dbtable] doc_inventory_items
> 库存盘点明细

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| inventory_id | int8 |  | 盘点ID | √ | √ |  |
| inventory_line_no | int4 |  | 盘点单行号 | √ | √ |  |
| inventory_status | varchar | 50 | 盘点状态 |  | √ |  |
| item_id | int8 |  | skuid |  | √ |  |
| lot_id | int8 |  | 批属性id |  | √ |  |
| loc_id | int8 |  | 库位id |  | √ |  |
| quality_status | varchar | 50 | 质量状态 |  | √ |  |
| primary_code | varchar | 128 | 一级容器编号 |  | √ |  |
| secondary_code | varchar | 128 | 二级容器编号 |  | √ |  |
| upn_id | int8 |  | 唯一码ID |  | √ |  |
| qty | numeric |  | 库存数量 |  | √ |  |
| real_qty | numeric |  | 实际库存数量 |  | √ |  |
| owner_id | int8 |  | 货主id |  | √ |  |
| wh_id | int8 |  | 仓库id |  | √ |  |
| create_by | varchar | 64 | 创建者 |  | √ |  |
| create_at | timestamptz |  | 建立时间 |  |  |  |
| update_by | varchar | 64 | 修改者 |  | √ |  |
| update_at | timestamptz |  | 更新时间 |  |  |  |
#wms/db/基础数据
