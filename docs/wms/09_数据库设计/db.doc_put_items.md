---
title: doc_put_items
desc: 上架单明细表
category: 基础数据
type: db
tags:
  - wms/db/基础数据
---

# title
>[!dbtable] doc_put_items
> 上架单明细表

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| put_id | int8 |  | 上架单ID | √ | √ |  |
| put_line_no | int4 |  | 上架单行号 | √ | √ |  |
| in_status | varchar | 50 | 入库状态 |  | √ |  |
| item_id | int8 |  | 商品ID |  | √ |  |
| pack_id | int8 |  | 包装ID |  | √ |  |
| lot_id | int8 |  | 库存批次ID |  | √ |  |
| quality_status | varchar | 50 | 质量状态 |  | √ |  |
| primary_code | varchar | 128 | 一级容器条码 |  | √ |  |
| secondary_code | varchar | 128 | 二级容器条码 |  | √ |  |
| upn_id | int8 |  | 唯一码ID |  | √ |  |
| qty | numeric |  | 数量 |  | √ |  |
| put_qty | numeric |  | 上架数量 |  | √ |  |
| plan_loc_id | int8 |  | 计划库位ID |  | √ |  |
| loc_id | int8 |  | 库位ID |  | √ |  |
| inv_to_loc_id | int8 |  | 库存转移库位ID |  | √ |  |
| put_staff_id | int8 |  | 上架员ID |  | √ |  |
| rep_alloc_id | int8 |  | 补货分配ID |  | √ |  |
| receipt_id | int8 |  | 收货单ID |  | √ |  |
| receipt_line_no | int4 |  | 收货单行号 |  | √ |  |
| asn_id | int8 |  | 预期到货通知单ID |  | √ |  |
| asn_line_no | int4 |  | 入库通知单行号 |  | √ |  |
| create_by | varchar | 64 | 创建者 |  |  |  |
| create_at | timestamptz |  | 建立时间 |  | √ |  |
| update_by | varchar | 64 | 修改者 |  |  |  |
| update_at | timestamptz |  | 更新时间 |  | √ |  |

