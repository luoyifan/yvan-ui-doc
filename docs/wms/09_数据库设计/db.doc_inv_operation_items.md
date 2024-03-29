---
title: doc_inv_operation_items
desc: 库内处理单明细
category: 基础数据
type: db
tags:
  - wms
  - db
  - 基础数据
---

# title
>[!dbtable] doc_inv_operation_items
> 库内处理单明细

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| inv_id | int8 |  | 库存操作单ID | √ | √ |  |
| inv_line_no | int4 |  | 处理单行号 | √ | √ |  |
| item_id | int8 |  | skuid |  | √ |  |
| lot_id | int8 |  | 批属性id |  | √ |  |
| loc_id | int8 |  | 库位id |  | √ |  |
| primary_code | varchar | 128 | 一级容器编号 |  | √ |  |
| secondary_code | varchar | 128 | 二级容器编号 |  | √ |  |
| upn_id | int8 |  | 唯一码ID |  | √ |  |
| quality_status | varchar | 50 | 质量状态 |  | √ |  |
| qty | numeric |  | 库存数量 |  | √ |  |
| remark | varchar | 255 | 备注 |  | √ |  |
| owner_id | int8 |  | 货主id |  | √ |  |
| wh_id | int8 |  | 仓库id |  | √ |  |
| create_by | varchar | 64 | 创建者 |  | √ |  |
| create_at | timestamptz |  | 建立时间 |  |  |  |
| update_by | varchar | 64 | 修改者 |  | √ |  |
| update_at | timestamptz |  | 更新时间 |  |  |  |
#wms/db/基础数据
