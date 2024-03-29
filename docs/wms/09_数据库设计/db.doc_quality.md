---
title: doc_quality
desc: 质检单
category: 基础数据
type: db
tags:
  - wms/db/基础数据
---

# title
>[!dbtable] doc_quality
> 质检单

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| quality_id | int8 |  | 质检单ID | √ | √ |  |
| quality_code | varchar | 128 | 质检单编号 |  | √ |  |
| dates | varchar | 128 | 日期 |  | √ |  |
| in_status | varchar | 50 | 入库状态 |  | √ |  |
| remark | varchar | 255 | 备注 |  | √ |  |
| owner_id | int8 |  | 货主ID |  | √ |  |
| wh_id | int8 |  | 仓库ID |  | √ |  |
| create_by | varchar | 64 | 创建者 |  |  |  |
| create_at | timestamptz |  | 建立时间 |  |  |  |
| update_by | varchar | 64 | 修改者 |  |  |  |
| update_at | timestamptz |  | 更新时间 |  |  |  |

