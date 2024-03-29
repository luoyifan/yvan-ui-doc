---
title: dev_report
desc: 查询报表
category: 基础数据
type: db
tags:
  - wms
  - db
  - 基础数据
---

# title
>[!dbtable] dev_report
> 查询报表

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| report_id | numeric |  | 报表ID | √ | √ |  |
| report_name | varchar | 128 | 报表名称 |  | √ |  |
| report_enable | numeric |  | 是否启用 |  | √ | [[dict.IS_ENABLE]] |
| query_sql | text |  | 查询SQL |  |  |  |
| summary_sql | text |  | 摘要SQL |  |  |  |
| create_at | timestamptz |  | 创建时间 |  | √ |  |
| create_by | varchar | 64 | 创建人 |  | √ |  |
| update_at | timestamptz |  | 更新时间 |  |  |  |
| update_by | varchar | 64 | 更新人 |  |  |  |
| report | text |  | 报表json描述 |  |  |  |
#wms/db/基础数据
