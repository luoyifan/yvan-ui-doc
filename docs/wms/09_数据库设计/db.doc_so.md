---
title: doc_so
desc: 出库订单
category: 基础数据
type: db
tags:
  - wms/db/基础数据
---

# title
>[!dbtable] doc_so
> 出库订单

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| so_id | int8 |  | 出库单id | √ | √ |  |
| so_code | varchar | 128 | 订单编号 |  | √ |  |
| out_status | varchar | 50 | 出库状态 |  | √ |  |
| dates | varchar | 20 | 日期 |  | √ |  |
| order_type | varchar | 50 | 订单类型 |  | √ |  |
| order_biz_type | varchar | 50 | 订单业务类型 |  | √ |  |
| customer_id | int8 |  | 客户ID |  | √ |  |
| wh_id | int8 |  | 仓库ID |  | √ |  |
| owner_id | int8 |  | 货主ID |  | √ |  |
| priority | int4 |  | 优先级 |  | √ |  |
| wave_id | int8 |  | 波次ID |  | √ |  |
| remark | varchar | 255 | 备注 |  | √ |  |
| parent_order_code | varchar | 128 | 上级订单编号 |  | √ |  |
| create_at | timestamptz |  | 创建时间 |  | √ |  |
| create_by | varchar | 64 | 创建人 |  | √ |  |
| update_at | timestamptz |  | 更新时间 |  | √ |  |
| update_by | varchar | 64 | 更新人 |  | √ |  |

