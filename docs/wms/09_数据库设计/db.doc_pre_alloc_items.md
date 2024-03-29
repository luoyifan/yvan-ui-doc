---
title: doc_pre_alloc_items
desc: 预分配明细表
category: 基础数据
type: db
tags:
  - wms/db/基础数据
---

# title
>[!dbtable] doc_pre_alloc_items
> 预分配明细表

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| pre_alloc_id | int8 |  | 分配ID | √ | √ |  |
| out_status | varchar | 50 | 预分配状态 |  | √ |  |
| order_type | varchar | 50 | 订单类型 |  |  |  |
| order_biz_type | varchar | 50 | 单据业务类型 |  |  |  |
| inv_level | varchar | 50 | 库存级别 |  | √ |  |
| inv_occupatiom_type | varchar | 50 | 库存预占类型 |  | √ |  |
| item_id | int8 |  | 产品ID |  | √ |  |
| lot_id | int8 |  | 批属性id |  | √ |  |
| pack_id | int8 |  | 包装ID |  | √ |  |
| pack_level | varchar | 50 | 包装级别 |  | √ |  |
| target_pack_level | varchar | 50 | 目标包装级别 |  | √ |  |
| loc_id | int8 |  | 库位id |  | √ |  |
| primary_code | varchar | 128 | 一级容器 |  | √ |  |
| secondary_code | varchar | 128 | 箱条码 |  | √ |  |
| upn_id | int8 |  | 唯一码ID |  | √ |  |
| quality_status | varchar | 50 | 质量状态 |  | √ |  |
| qty | numeric |  | 分配数量 |  | √ |  |
| cancel_qty | numeric |  | 取消数量 |  | √ |  |
| is_merge | varchar | 50 | 是否合并 |  | √ |  |
| rep_alloc_id | int8 |  | 关联补货ID |  |  |  |
| is_active | varchar | 50 | 是否激活 |  | √ |  |
| wave_id | int8 |  | 波次ID |  | √ |  |
| wh_id | int8 |  | 仓库id |  | √ |  |
| owner_id | int8 |  | 货主id |  | √ |  |
| create_by | varchar | 64 | 创建者 |  |  |  |
| create_at | timestamptz |  | 建立时间 |  |  |  |
| update_by | varchar | 64 | 修改者 |  |  |  |
| update_at | timestamptz |  | 更新时间 |  |  |  |

