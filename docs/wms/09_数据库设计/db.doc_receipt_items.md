---
title: doc_receipt_items
desc: 收货单明细表
category: 基础数据
type: db
tags:
  - wms/db/基础数据
---

# title
>[!dbtable] doc_receipt_items
> 收货单明细表

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| receipt_id | int8 |  | 收货单ID | √ | √ |  |
| receipt_line_no | int4 |  | 收货单行号 | √ | √ |  |
| in_status | varchar | 50 | 入库状态 |  | √ |  |
| item_id | int8 |  | 商品ID |  | √ |  |
| pack_id | int8 |  | 包装ID |  | √ |  |
| lot_id | int8 |  | 批次ID |  | √ |  |
| quality_status | varchar | 50 | 质量状态 |  | √ |  |
| qty | numeric |  | 收货数量 |  | √ |  |
| put_qty | numeric |  | 上架数量 |  | √ |  |
| plan_loc_id | int8 |  | 计划货位 |  | √ |  |
| loc_id | int8 |  | 实际库位ID |  | √ |  |
| put_intent | varchar | 50 | 入库意向 |  | √ | [[dict.PUT_INTENT]] |
| primary_code | varchar | 128 | 一级容器编号 |  | √ |  |
| secondary_code | varchar | 128 | 二级容器编号 |  | √ |  |
| upn_id | int8 |  | 唯一码ID |  | √ |  |
| container_id | int8 |  | 容器ID |  | √ |  |
| price | numeric |  | 单价 |  | √ |  |
| staff_id | int8 |  | 收货员ID |  | √ |  |
| remark | varchar | 255 | 备注 |  | √ |  |
| old_receipt_line_no | int4 |  | 原收货行号 |  | √ |  |
| asn_id | int8 |  | 预期到货通知单ID |  | √ |  |
| asn_line_no | int4 |  | 入库通知单行号 |  | √ |  |
| create_by | varchar | 64 | 创建者 |  |  |  |
| create_at | timestamptz |  | 建立时间 |  | √ |  |
| update_by | varchar | 64 | 修改者 |  |  |  |
| update_at | timestamptz |  | 更新时间 |  | √ |  |

