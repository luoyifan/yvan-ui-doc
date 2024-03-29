---
title: doc_container_swap_items
desc: 容器商品换箱明细
category: 基础数据
type: db
tags:
  - wms/db/基础数据
---

# title
>[!dbtable] doc_container_swap_items
> 容器商品换箱明细

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| swap_id | int8 |  | 换箱ID | √ | √ |  |
| swap_line_no | int4 |  | 换箱行号 | √ | √ |  |
| swap_status | varchar | 50 | 换箱状态 |  | √ |  |
| item_id | int8 |  | 商品ID |  | √ |  |
| lot_id | int8 |  | 批次ID |  | √ |  |
| loc_id | int8 |  | 库位ID |  | √ |  |
| primary_code | varchar | 128 | 一级容器编号 |  | √ |  |
| secondary_code | varchar | 128 | 二级容器编号 |  | √ |  |
| upn_id | int8 |  | 唯一码ID |  | √ |  |
| quality_status | varchar | 50 | 质量状态 |  | √ |  |
| qty | numeric |  | 换箱数量 |  | √ |  |
| owner_id | int8 |  | 货主ID |  | √ |  |
| wh_id | int8 |  | 仓库ID |  | √ |  |
| create_by | varchar | 64 | 创建者 |  |  |  |
| create_at | timestamptz |  | 建立时间 |  |  |  |
| update_by | varchar | 64 | 修改者 |  |  |  |
| update_at | timestamptz |  | 更新时间 |  |  |  |

