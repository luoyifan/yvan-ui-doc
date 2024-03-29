---
title: dev_express_domain
desc: 表达式业务域定义
category: 基础数据
type: db
tags:
  - wms
  - db
  - 基础数据
---

# title
>[!dbtable] dev_express_domain
> 表达式业务域定义

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| form_name | varchar | 255 | 表达式环境名 | √ | √ |  |
| domain_table | varchar | 255 | 业务领域表 | √ | √ |  |
| is_enable | int4 |  | 是否启用 |  | √ | [[dict.IS_ENABLE]] |
| create_by | varchar | 64 | 创建人 |  |  |  |
| update_by | varchar | 64 | 更新人 |  |  |  |
| create_at | timestamptz |  | 创建时间 |  |  |  |
| update_at | timestamptz |  | 更新时间 |  |  |  |
#wms/db/基础数据
