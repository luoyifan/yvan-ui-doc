---
title: doc_quality_items
desc: 质检单明细
category: 基础数据
type: db
tags:
  - wms/db/基础数据
---

# title
>[!dbtable] doc_quality_items
> 质检单明细

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| quality_id | int8 |  | 质检单ID | √ | √ |  |
| quality_line_no | int4 |  | 质检单行号 | √ | √ |  |
| in_status | varchar | 50 | 入库状态 |  | √ |  |
| item_id | int8 |  | 商品ID |  | √ |  |
| lot_id | int8 |  | 批次ID |  | √ |  |
| pack_id | int8 |  | 包装ID |  | √ |  |
| primary_code | varchar | 255 | 一级容器条码 |  | √ |  |
| secondary_code | varchar | 255 | 二级容器条码 |  | √ |  |
| upn_id | int8 |  | 唯一码ID |  | √ |  |
| qty | numeric |  | 数量 |  | √ |  |
| quality_qty | numeric |  | 质检数量 |  | √ |  |
| qualified_qty | numeric |  | 合格数量 |  | √ |  |
| unqualified_qty | numeric |  | 不合格数量 |  | √ |  |
| reject_qty | numeric |  | 拒收数量 |  | √ |  |
| quality_conclusion | varchar | 50 | 质检结论 |  | √ |  |
| super_doc_id | int8 |  | 上级单据ID |  | √ |  |
| super_doc_code | varchar | 128 | 上级单据编号 |  | √ |  |
| super_line_no | int4 |  | 上级单据行号 |  | √ |  |
| super_in_step | varchar | 50 | 上级入库阶段 |  | √ |  |
| create_by | varchar | 64 | 创建者 |  |  |  |
| create_at | timestamptz |  | 建立时间 |  |  |  |
| update_by | varchar | 64 | 修改者 |  |  |  |
| update_at | timestamptz |  | 更新时间 |  |  |  |

