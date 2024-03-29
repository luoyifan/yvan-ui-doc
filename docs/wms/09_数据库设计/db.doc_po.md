---
title: doc_po
desc: 采购订单表
category: 基础数据
type: db
tags:
  - wms
  - db
  - 基础数据
---

# title
>[!dbtable] doc_po
> 采购订单表

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| po_id | int8 |  | 采购订单ID | √ | √ |  |
| po_code | varchar | 255 | 采购订单号 |  |  |  |
| order_biz_type | varchar | 50 | 采购订单类型 |  |  |  |
| data_source | varchar | 50 | 数据来源 |  |  |  |
| invoice_time | timestamptz |  | 开票时间 |  |  |  |
| operator | int8 |  | 操作员 |  |  |  |
| in_status | varchar | 50 | 采购订单状态 |  |  |  |
| remark | varchar | 40960 | 备注 |  |  |  |
| progress | varchar | 50 | 进度 |  |  |  |
| approver | int8 |  | 审核员 |  |  |  |
| approve_time | timestamptz |  | 审核时间 |  |  |  |
| approve_status | varchar | 50 | 审核状态 |  |  |  |
| reasons | varchar | 40960 | 审核原因 |  |  |  |
| buyer | int8 |  | 采购员 |  |  |  |
| contact_name | varchar | 255 | 联系人 |  |  |  |
| contact_phone | varchar | 255 | 联系电话 |  |  |  |
| cust_no | varchar | 255 | 客户单号 |  |  |  |
| inbound_no | varchar | 255 | 入库单号 |  |  |  |
| outbound_no | varchar | 255 | 发货单号 |  |  |  |
| work_mode | varchar | 50 | 作业方式 |  |  |  |
| wh_id | int8 |  | 仓库ID |  |  |  |
| owner_id | int8 |  | 货主ID |  |  |  |
| supplier_id | int8 |  | 供应商ID |  |  |  |
| latest_receiving_time | timestamptz |  | 最晚收货时间 |  |  |  |
| appendix | varchar | 40960 | 附加信息 |  |  |  |
| delivery_time | timestamptz |  | 交货时间 |  |  |  |
| is_enable | varchar | 50 | 是否启用 |  |  | [[dict.IS_ENABLE]] |
| create_by | varchar | 64 | 创建者 |  |  |  |
| create_at | timestamptz |  | 建立时间 |  |  |  |
| update_by | varchar | 64 | 修改者 |  |  |  |
| update_at | timestamptz |  | 修改时间 |  |  |  |
#wms/db/基础数据
