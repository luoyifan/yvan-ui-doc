---
title: bas_report_sum
desc: 报表查询汇总
category: 基础数据
type: db
tags:
  - wms/db/基础数据
---

# title
>[!dbtable] bas_report_sum
> 报表查询汇总

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| sum_id | numeric |  | 报表ID | √ | √ |  |
| report_id | numeric |  | 报表ID |  | √ |  |
| chinese_name | varchar | 255 | 中文名称 |  | √ |  |
| english_name | varchar | 255 | 英文名称 |  | √ |  |
| create_at | timestamptz |  | 创建时间 |  | √ |  |
| create_by | varchar | 64 | 创建人 |  | √ |  |
| update_at | timestamptz |  | 更新时间 |  | √ |  |
| update_by | varchar | 64 | 更新人 |  | √ |  |

