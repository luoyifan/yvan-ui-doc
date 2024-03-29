---
title: doc_wave_items
desc: 波次订单明细
category: 基础数据
type: db
tags:
  - wms/db/基础数据
---

# title
>[!dbtable] doc_wave_items
> 波次订单明细

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| wave_id | int8 |  | 波次ID | √ | √ |  |
| wave_line_no | int4 |  | 波次行号 | √ | √ |  |
| so_id | int8 |  | 出库订单ID |  | √ |  |
| out_status | varchar | 50 | 取消状态 |  | √ |  |
| wh_id | int8 |  | 仓库id |  | √ |  |
| create_by | varchar | 64 | 创建者 |  | √ |  |
| create_at | timestamptz |  | 建立时间 |  | √ |  |
| update_by | varchar | 64 | 修改者 |  | √ |  |
| update_at | timestamptz |  | 更新时间 |  | √ |  |

