---
title: doc_alloc_so_items_rel
desc: 分配与订单明细关系表
category: 基础数据
type: db
tags:
  - wms/db/基础数据
---

# title
>[!dbtable] doc_alloc_so_items_rel
> 分配与订单明细关系表

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| rel_id | int8 |  | 关系ID | √ | √ |  |
| pre_alloc_id | int8 |  | 预分配ID |  | √ |  |
| alloc_id | int8 |  | 分配ID |  | √ |  |
| so_id | int8 |  | 订单ID |  | √ |  |
| so_line_no | int4 |  | 订单明细行 |  | √ |  |
| qty | numeric |  | 数量 |  | √ |  |
| short_qty | numeric |  | 短拣数量 |  | √ |  |
| cancel_qty | numeric |  | 取消数量 |  | √ |  |
| create_by | varchar | 64 | 创建者 |  | √ |  |
| create_at | timestamptz |  | 建立时间 |  | √ |  |
| update_by | varchar | 64 | 修改者 |  | √ |  |
| update_at | timestamptz |  | 更新时间 |  | √ |  |

