---
title: doc_receipt
desc: 收货单汇总表
category: 基础数据
type: db
tags:
  - wms/db/基础数据
---

# title
>[!dbtable] doc_receipt
> 收货单汇总表

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| receipt_id | int8 |  | 收货单id | √ | √ |  |
| receipt_code | varchar | 128 | 收货单号 |  | √ |  |
| dates | varchar | 128 | 日期 |  | √ |  |
| in_status | varchar | 50 | 入库状态 |  | √ |  |
| order_type | varchar | 50 | 订单类型 |  | √ |  |
| order_biz_type | varchar | 50 | 业务订单类型 |  | √ |  |
| supplier_id | int8 |  | 供应商id |  | √ |  |
| remark | varchar | 255 | 备注 |  | √ |  |
| wh_id | int8 |  | 仓库id |  | √ |  |
| owner_id | int8 |  | 货主id |  | √ |  |
| create_by | varchar | 64 | 创建者 |  |  |  |
| create_at | timestamptz |  | 建立时间 |  | √ |  |
| update_by | varchar | 64 | 修改者 |  |  |  |
| update_at | timestamptz |  | 更新时间 |  | √ |  |

