---
title: doc_inv_diff
desc: 库存差异记录
category: 基础数据
type: db
tags:
  - wms/db/基础数据
---

# title
>[!dbtable] doc_inv_diff
> 库存差异记录

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| diff_id | int8 |  | 差异ID | √ | √ |  |
| order_type | varchar | 50 | 订单类型 |  | √ |  |
| order_biz_type | varchar | 50 | 订单业务类型 |  | √ |  |
| doc_id | int8 |  | 订单ID |  | √ |  |
| doc_code | varchar | 128 | 订单编号 |  | √ |  |
| doc_line_no | int4 |  | 订单行号 |  | √ |  |
| item_id | int8 |  | skuid |  | √ |  |
| lot_id | int8 |  | 批属性id |  | √ |  |
| loc_id | int8 |  | 库位id |  | √ |  |
| primary_code | varchar | 128 | 一级容器编号 |  | √ |  |
| secondary_code | varchar | 128 | 二级容器编号 |  | √ |  |
| upn_id | int8 |  | 唯一码ID |  | √ |  |
| quality_status | varchar | 50 | 质量状态 |  | √ |  |
| inv_qty | numeric |  | 库存数量 |  | √ |  |
| qty | numeric |  | 差异数量 |  | √ |  |
| owner_id | int8 |  | 货主id |  | √ |  |
| wh_id | int8 |  | 仓库id |  | √ |  |
| create_by | varchar | 64 | 创建者 |  | √ |  |
| create_at | timestamptz |  | 建立时间 |  |  |  |
| update_by | varchar | 64 | 修改者 |  | √ |  |
| update_at | timestamptz |  | 更新时间 |  |  |  |
| audit_status | varchar | 50 | 审批状态 |  | √ |  |
| audit_reason | varchar | 255 | 审批原因 |  |  |  |

