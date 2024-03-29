---
title: doc_put_real_items
desc: 上架单实际明细
category: 基础数据
type: db
tags:
  - wms/db/基础数据
---

# title
>[!dbtable] doc_put_real_items
> 上架单实际明细

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| put_real_id | int8 |  | 实际上架明细ID | √ | √ |  |
| put_id | int8 |  | 上架单ID |  | √ |  |
| put_line_no | int4 |  | 上架单行号 |  | √ |  |
| in_status | varchar | 50 | 入库状态 |  | √ |  |
| item_id | int8 |  | 商品ID |  | √ |  |
| pack_id | int8 |  | 包装ID |  | √ |  |
| lot_id | int8 |  | 库存批次ID |  | √ |  |
| quality_status | varchar | 50 | 质量状态 |  | √ |  |
| primary_code | varchar | 128 | 一级容器条码 |  | √ |  |
| secondary_code | varchar | 128 | 二级容器条码 |  | √ |  |
| upn_id | int8 |  | 唯一码ID |  | √ |  |
| qty | numeric |  | 数量 |  | √ |  |
| loc_id | int8 |  | 库位ID |  | √ |  |
| inv_to_loc_id | int8 |  | 库存转移库位ID |  |  |  |
| put_staff_id | int8 |  | 上架员ID |  | √ |  |
| create_by | varchar | 64 | 创建者 |  | √ |  |
| create_at | timestamptz |  | 建立时间 |  |  |  |
| update_by | varchar | 64 | 修改者 |  | √ |  |
| update_at | timestamptz |  | 更新时间 |  |  |  |

