---
title: doc_so_items_exception
desc: 订单分配异常明细
category: 基础数据
type: db
tags:
  - wms/db/基础数据
---

# title
>[!dbtable] doc_so_items_exception
> 订单分配异常明细

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| except_id | int8 |  | 异常明细ID | √ | √ |  |
| except_status | varchar | 50 | 异常状态 |  |  |  |
| so_id | int8 |  | 订单ID |  |  |  |
| so_line_no | int4 |  | 订单明细行 |  |  |  |
| exception_qty | numeric |  | 异常数量 |  |  |  |
| exception_msg | varchar | 255 | 异常原因 |  |  |  |
| create_at | timestamptz |  | 创建时间 |  |  |  |
| create_by | varchar | 64 | 创建人 |  |  |  |
| update_at | timestamptz |  | 更新时间 |  |  |  |
| update_by | varchar | 64 | 更新人 |  |  |  |

