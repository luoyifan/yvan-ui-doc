---
title: doc_put_items_upn
desc: 上架单明细细唯一码表
category: 基础数据
type: db
tags:
  - wms
  - db
  - 基础数据
---

# title
>[!dbtable] doc_put_items_upn
> 上架单明细细唯一码表

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| put_id | int8 |  | 上架单ID | √ | √ |  |
| put_line_no | int4 |  | 上架单行号 | √ | √ |  |
| primary_code | varchar | 255 | 一级容器条码 |  | √ |  |
| secondary_code | varchar | 255 | 二级容器条码 |  | √ |  |
| upn_id | int8 |  | 唯一码ID | √ | √ |  |
| qty | numeric |  | 数量 |  | √ |  |
| cancel_qty | numeric |  | 取消数量 |  | √ |  |
| receipt_qty | numeric |  | 收货数量 |  | √ |  |
| put_qty | numeric |  | 上架数量 |  | √ |  |
| create_by | varchar | 64 | 创建者 |  | √ |  |
| create_at | timestamptz |  | 建立时间 |  |  |  |
| update_by | varchar | 64 | 修改者 |  | √ |  |
| update_at | timestamptz |  | 更新时间 |  |  |  |
#wms/db/基础数据
