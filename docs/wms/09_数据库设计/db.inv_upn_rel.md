---
title: inv_upn_rel
desc: UPN关联关系表
category: 基础数据
type: db
tags:
  - wms/db/基础数据
---

# title
>[!dbtable] inv_upn_rel
> UPN关联关系表

# 字段
| 字段名 | 类型 | 大小 | 注释 | 主键 | 非空 | 关联 |
| --- | --- | --- | --- | --- | --- | --- |
| upn_id | int8 |  | upn关联ID | √ | √ |  |
| primary_code | varchar | 255 | 一级容器 |  | √ |  |
| secondary_code | varchar | 255 | 二级容器 |  | √ |  |
| upn1 | varchar | 255 | 唯一码1 |  | √ |  |
| create_at | timestamptz |  | 创建时间 |  | √ |  |
| create_by | varchar | 64 | 创建人 |  | √ |  |
| update_at | timestamptz |  | 更新时间 |  | √ |  |
| update_by | varchar | 64 | 更新人 |  | √ |  |

