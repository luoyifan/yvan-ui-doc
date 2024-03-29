---
title: doc_inventory
desc: 库存盘点
category: 基础数据
type: db
tags:
  - wms
  - db
  - 基础数据
---

# title
>[!dbtable] doc_inventory
> 库存盘点

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| inventory_id | int8 |  | 盘点ID | √ | √ |  |
| inventory_code | varchar | 128 | 盘点单编号 |  | √ |  |
| inventory_status | varchar | 50 | 盘点状态 |  | √ |  |
| inventory_type | varchar | 50 | 盘点类型 |  | √ |  |
| staff_id | int8 |  | 盘点员ID |  | √ |  |
| owner_id | int8 |  | 货主ID |  | √ |  |
| wh_id | int8 |  | 仓库ID |  | √ |  |
| create_by | varchar | 64 | 创建者 |  | √ |  |
| create_at | timestamptz |  | 建立时间 |  |  |  |
| update_by | varchar | 64 | 修改者 |  | √ |  |
| update_at | timestamptz |  | 更新时间 |  |  |  |
| inventory_mode | varchar | 50 | 盘点方式 |  | √ |  |
#wms/db/基础数据
