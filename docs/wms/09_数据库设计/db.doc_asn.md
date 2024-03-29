---
title: doc_asn
desc: 到货通知单
category: 基础数据
type: db
tags:
  - wms/db/基础数据
---

# title
>[!dbtable] doc_asn
> 到货通知单

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| asn_id | int8 |  | 通知单ID | √ | √ |  |
| asn_code | varchar | 128 | 通知单编号 |  | √ |  |
| dates | varchar | 128 | 日期 |  | √ |  |
| order_type | varchar | 50 | 订单类型 |  | √ |  |
| order_biz_type | varchar | 50 | 订单业务类型 |  | √ |  |
| data_source | varchar | 50 | 数据来源 |  | √ |  |
| in_status | varchar | 50 | 订单状态 |  | √ |  |
| wh_id | int8 |  | 仓库ID |  | √ |  |
| owner_id | int8 |  | 货主ID |  | √ |  |
| supplier_id | int8 |  | 供应商ID |  | √ |  |
| remark | varchar | 255 | 备注 |  | √ |  |
| parent_order_code | varchar | 128 | 上级单号 |  | √ |  |
| create_by | varchar | 64 | 创建者 |  |  |  |
| create_at | timestamptz |  | 建立时间 |  |  |  |
| update_by | varchar | 64 | 修改者 |  |  |  |
| update_at | timestamptz |  | 更新时间 |  |  |  |

