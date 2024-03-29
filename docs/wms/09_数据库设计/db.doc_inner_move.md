---
title: doc_inner_move
desc: 库内库存转移单
category: 基础数据
type: db
tags:
  - wms/db/基础数据
---

# title
>[!dbtable] doc_inner_move
> 库内库存转移单

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| inner_move_id | int8 |  | 库内库存转移单ID | √ | √ |  |
| inner_move_line_no | int4 |  | 库内库存转移单号 | √ | √ |  |
| inner_move_status | varchar | 50 | 订单状态 |  | √ |  |
| doc_id | int8 |  | 业务订单id | √ | √ |  |
| doc_line_no | int4 |  | 业务订单行号 | √ | √ |  |
| doc_order_type | varchar | 50 | 业务订单类型 |  | √ |  |
| doc_order_biz_type | varchar | 50 | 业务订单业务类型 |  | √ |  |
| wh_id | int8 |  | 仓库ID |  | √ |  |
| owner_id | int8 |  | 货主ID |  | √ |  |
| create_by | varchar | 255 | 创建者 |  | √ |  |
| create_at | timestamptz |  | 建立时间 |  | √ |  |
| update_by | varchar | 64 | 修改者 |  | √ |  |
| update_at | timestamptz |  | 更新时间 |  | √ |  |

