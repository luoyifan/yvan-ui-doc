---
title: doc_po_items
desc: 采购单汇总表
category: 基础数据
type: db
tags:
  - wms
  - db
  - 基础数据
---

# title
>[!dbtable] doc_po_items
> 采购单汇总表

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| po_id | int8 |  | 采购订单ID | √ | √ |  |
| po_line_no | int4 |  | 行号 | √ | √ |  |
| item_id | int8 |  | 商品ID |  | √ |  |
| lot_id | int8 |  | 批次ID |  | √ |  |
| batch_no | varchar | 255 | 批号 |  | √ |  |
| production_date | varchar | 128 | 生产日期 |  | √ |  |
| valid_until | varchar | 128 | 有效期至 |  | √ |  |
| amount | numeric |  | 金额 |  | √ |  |
| print_production_date | varchar | 128 | 打印生产日期 |  | √ |  |
| print_valid_until | varchar | 128 | 打印有效期至 |  | √ |  |
| pack_id | int8 |  | 包装ID |  | √ |  |
| qty | numeric |  | 数量 |  | √ |  |
| asn_qty | numeric |  | ASN数量 |  | √ |  |
| primary_code | varchar | 128 | 一级容器条码 |  | √ |  |
| secondary_code | varchar | 128 | 二级容器条码 |  | √ |  |
| upn_id | int8 |  | 唯一码ID |  | √ |  |
| quality_status | varchar | 50 | 质量状态 |  | √ |  |
| in_status | varchar | 50 | 入库状态 |  | √ |  |
| price | numeric |  | 单价 |  | √ |  |
| approval_no | varchar | 255 | 批准文号 |  | √ |  |
| reasons | varchar | 50 | 退货原因 |  | √ |  |
| color | varchar | 255 | 颜色 |  | √ |  |
| manufacturer | varchar | 255 | 生产厂家 |  | √ |  |
| producing_area | varchar | 255 | 产地 |  | √ |  |
| create_by | varchar | 64 | 创建者 |  |  |  |
| create_at | timestamptz |  | 建立时间 |  |  |  |
| update_by | varchar | 64 | 修改者 |  |  |  |
| update_at | timestamptz |  | 修改时间 |  |  |  |
#wms/db/基础数据
