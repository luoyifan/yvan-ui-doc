---
title: doc_asn_items
desc: 到货通知单明细表
category: 基础数据
type: db
tags:
  - wms
  - db
  - 基础数据
---

# title
>[!dbtable] doc_asn_items
> 到货通知单明细表

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| asn_id | int8 |  | 通知单ID | √ | √ |  |
| asn_line_no | int4 |  | 通知单行号 | √ | √ |  |
| in_status | varchar | 50 | 入库状态 |  | √ |  |
| po_id | int8 |  | 采购订单ID |  | √ |  |
| po_line_no | int4 |  | 采购订单明细ID |  | √ |  |
| item_id | int8 |  | 物料ID |  | √ |  |
| lot_id | int8 |  | 批次ID |  | √ |  |
| pack_id | int8 |  | 包装 |  | √ |  |
| price | numeric |  | 单价 |  | √ |  |
| primary_code | varchar | 255 | 一级容器条码 |  | √ |  |
| secondary_code | varchar | 255 | 二级容器条码 |  | √ |  |
| upn_id | int8 |  | 唯一码ID |  | √ |  |
| qty | numeric |  | 数量 |  | √ |  |
| cancel_qty | numeric |  | 取消数量 |  | √ |  |
| receipt_qty | numeric |  | 收货数量 |  | √ |  |
| put_qty | numeric |  | 上架数量 |  | √ |  |
| quality_status | varchar | 50 | 质量状态 |  | √ |  |
| quality_inspection | varchar | 50 | 质量检验 |  | √ |  |
| remark | varchar | 255 | 备注 |  | √ |  |
| parent_order_code | varchar | 128 | 上级单号 |  | √ |  |
| parent_order_line_no | int4 |  | 上级单行号 |  | √ |  |
| create_by | varchar | 64 | 创建者 |  |  |  |
| create_at | timestamptz |  | 建立时间 |  |  |  |
| update_by | varchar | 64 | 修改者 |  |  |  |
| update_at | timestamptz |  | 更新时间 |  |  |  |
#wms/db/基础数据
