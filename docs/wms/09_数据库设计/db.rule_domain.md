---
title: rule_domain
desc: 领域规则
category: 基础数据
type: db
tags:
  - wms
  - db
  - 基础数据
---

# title
>[!dbtable] rule_domain
> 领域规则

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| dm_table | varchar | 64 | 表格 | √ | √ |  |
| dm_key | varchar | 64 | 领域Key |  | √ |  |
| dm_name | varchar | 64 | 业务领域 |  | √ |  |
| dm_order | int4 |  | 顺序 |  | √ |  |
| create_by | varchar | 64 | 创建者 |  |  |  |
| create_at | timestamptz |  | 建立时间 |  |  |  |
| update_by | varchar | 64 | 修改者 |  |  |  |
| update_at | timestamptz |  | 更新时间 |  |  |  |
#wms/db/基础数据
