---
title: doc_inv_operation
desc: 库内处理单
category: 基础数据
type: db
tags:
  - wms
  - db
  - 基础数据
---

# title
>[!dbtable] doc_inv_operation
> 库内处理单

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| inv_id | int8 |  | 库存操作单ID | √ | √ |  |
| inv_code | varchar | 128 | 库存操作单编号 |  | √ |  |
| operation_type | varchar | 50 | 操作类型 |  | √ |  |
| wh_id | int8 |  | 仓库id |  |  |  |
| create_at | timestamptz |  | 创建时间 |  |  |  |
| create_by | varchar | 64 | 创建人 |  | √ |  |
| update_at | timestamptz |  | 更新时间 |  |  |  |
| update_by | varchar | 64 | 更新人 |  | √ |  |
#wms/db/基础数据
