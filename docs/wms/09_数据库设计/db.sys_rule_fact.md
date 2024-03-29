---
title: sys_rule_fact
desc: 规则实体
category: 基础数据
type: db
tags:
  - wms
  - db
  - 基础数据
---

# title
>[!dbtable] sys_rule_fact
> 规则实体

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| fact_code | varchar | 255 | 规则实体编码 | √ | √ |  |
| fact_name | varchar | 255 | 规则实体中文 |  |  |  |
| fill_sql | varchar | 255 | SQL |  |  |  |
| fact_fields_json | varchar | 409600 | 字段集 |  |  |  |
| create_by | varchar | 64 | 创建人 |  |  |  |
| create_at | timestamptz |  | 创建时间 |  |  |  |
| update_by | varchar | 64 | 更新人 |  |  |  |
| update_at | timestamptz |  | 更新时间 |  |  |  |
#wms/db/基础数据
