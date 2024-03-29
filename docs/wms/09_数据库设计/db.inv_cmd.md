---
title: inv_cmd
desc: 库存记账指令
category: 基础数据
type: db
tags:
  - wms
  - db
  - 基础数据
---

# title
>[!dbtable] inv_cmd
> 库存记账指令

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| cmd_id | int8 |  | 指令ID | √ | √ |  |
| cmd_line_no | int4 |  | 指令行号 | √ | √ |  |
| order_id | int8 |  | 单据ID |  | √ |  |
| order_code | varchar | 255 | 业务单号 |  | √ |  |
| order_line_no | int4 |  | 单据行号 |  | √ |  |
| order_type | varchar | 50 | 单据类型 |  | √ |  |
| order_biz_type | varchar | 50 | 单据业务类型 |  | √ |  |
| cmd_state | varchar | 50 | 任务状态 |  | √ |  |
| inv_level | varchar | 50 | 库存级别 |  | √ |  |
| inv_type | varchar | 50 | 记账类型 |  | √ |  |
| inv_reason | varchar | 50 | 执行原因 |  | √ |  |
| item_id | int8 |  | 商品号 |  | √ |  |
| lot_id | int8 |  | 批次号 |  | √ |  |
| loc_id | int8 |  | 货位ID |  | √ |  |
| primary_code | varchar | 128 | 一级容器 |  | √ |  |
| secondary_code | varchar | 128 | 二级容器 |  | √ |  |
| upn_id | int8 |  | 唯一码ID |  | √ |  |
| quality_status | varchar | 50 | 质量状态 |  | √ |  |
| qty | numeric |  | 数量 |  | √ |  |
| wh_id | int8 |  | 仓库ID |  | √ |  |
| owner_id | int8 |  | 货主ID |  | √ |  |
| create_at | timestamptz |  | 创建时间 |  |  |  |
| create_by | varchar | 64 | 创建人 |  |  |  |
| update_at | timestamptz |  | 更新时间 |  |  |  |
| update_by | varchar | 64 | 更新人 |  |  |  |
#wms/db/基础数据
