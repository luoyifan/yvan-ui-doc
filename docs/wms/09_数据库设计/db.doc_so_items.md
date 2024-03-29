---
title: doc_so_items
desc: 出库订单明细
category: 基础数据
type: db
tags:
  - wms
  - db
  - 基础数据
---

# title
>[!dbtable] doc_so_items
> 出库订单明细

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| so_id | int8 |  | 出库单id | √ | √ |  |
| so_line_no | int4 |  | 出库单行号 | √ | √ |  |
| out_status | varchar | 50 | 出库状态 |  | √ |  |
| item_id | int8 |  | 商品id |  | √ |  |
| lot_id | int8 |  | 批次id |  | √ |  |
| primary_code | varchar | 128 | 一级容器 | √ | √ |  |
| secondary_code | varchar | 128 | 二级容器 | √ | √ |  |
| upn_id | int8 |  | 唯一码ID | √ | √ |  |
| quality_status | varchar | 50 | 质量状态 |  | √ |  |
| qty | numeric |  | 数量 |  | √ |  |
| pre_alloc_qty | numeric |  | 预分配数量 |  | √ |  |
| alloc_qty | numeric |  | 分配数量 |  | √ |  |
| exception_qty | numeric |  | 异常数量 |  | √ |  |
| cancel_qty | numeric |  | 取消数量 |  | √ |  |
| wave_cancel_qty | numeric |  | 波次取消数量 |  | √ |  |
| remark | varchar | 255 | 备注 |  | √ |  |
| parent_order_code | varchar | 128 | 客户订单编号 |  | √ |  |
| parent_order_line | int4 |  | 客户订单行号 |  | √ |  |
| create_at | timestamptz |  | 创建时间 |  | √ |  |
| create_by | varchar | 64 | 创建人 |  | √ |  |
| update_at | timestamptz |  | 更新时间 |  | √ |  |
| update_by | varchar | 64 | 更新人 |  | √ |  |
#wms/db/基础数据
